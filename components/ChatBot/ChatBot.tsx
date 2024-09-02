import React, { use, useEffect, useRef, useState } from "react";
import "./style.css";
import Image from "next/image";
import { toast } from "react-toastify";
import { FiMinus } from "react-icons/fi";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  arrayUnion,
  collection,
  getDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  DocumentData,
  where,
  Unsubscribe,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useUserStore } from "@/lib/userStore";
import { useUserBot } from "@/lib/userBot";
import { useChatStore } from "@/lib/chatStore";
import { useLeadInfos } from "@/lib/leadInfos";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MyFormProps {
  handleSendEmail: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loadingState: boolean;
}

interface MyPresetQuestionProps {
  handlePresetQuestion: (event: React.MouseEvent<HTMLElement>) => void;
}

const ChatBot = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [chat, setChat] = useState<DocumentData | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { myBot, isBotLoading, fetchBotInfo } = useUserBot();
  const { leadId, chatId, fetchLeadInfo } = useLeadInfos();
  const [isVisitorCreated, setNewVisitor] = useState(false);
  const BOT_ID = `${process.env.NEXT_PUBLIC_BOT_ID}`;
  const [formData, setFormData] = useState({ name: "", email: "" });
  const endRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isDiplayed, setIsDisplayed] = useState(true);

  const callFlaskApi = async (endpoint: string, data: any) => {
    try {
      const response = await fetch(`http://localhost:5000/${endpoint}`, {
        method: "POST", // ou 'GET', 'PUT', etc., selon ce que votre API attend
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error calling Flask API: ", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchLeadInfo?.();
    return () => {
      console.log("clean up");
    };
  }, [fetchLeadInfo]);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [chat?.messages, isOpen]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined;
    if (chatId) {
      const chatDocRef = doc(db, "chats", chatId);

      // Subscribe to Firestore document changes
      unsubscribe = onSnapshot(chatDocRef, (res) => {
        setChat(res.data());
      });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe(); // Call the unsubscribe function
      }
    };
  }, [chatId]);

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email } = formData;
    setLoading(true);
    try {
      await updateDoc(doc(db, "users", `${leadId}`), {
        email,
        username: name,
      });

      toast.success(
        "L'email a été envoyé avec succès. Nous allons vous contacter sous peu.😊"
      );
    } catch (error: any) {
      setLoading(false);
      toast.error(
        "L'email n'a pas été envoyé correctement. Veuillez réessayer plus tard."
      );
    } finally {
      setLoading(false);
      const res = await fetch("/en/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phone,
          message: `Email a été envoyé dans le chat. Voici l'information du prospect, Email : ${email}. Nom : ${name}.`,
        }),
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const [phone, setPhone] = useState("+261344432719");
  const [message, setMessage] = useState("Kaiza kaiza");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setText("Traitement en cours....");
    const data = { query: text };
    let result = "";
    if (text === "") return;

    try {
      await updateDoc(doc(db, "chats", `${chatId}`), {
        messages: arrayUnion({
          senderId: `${leadId}`,
          text,
          createdAt: new Date(),
        }),
      });
      try {
        result = await callFlaskApi("query", data);
      } catch (err) {
        result =
          "Désolé, la connexion au bot a un problème. Veuillez réessayer plus tard ou contactez-nous.";
        console.log(err);
      }
      await updateDoc(doc(db, "chats", `${chatId}`), {
        messages: arrayUnion({
          senderId: BOT_ID,
          text:
            result === ""
              ? "Désolé, la connexion au bot a un problème. Veuillez réessayer plus tard ou contactez-nous."
              : result,
          createdAt: new Date(),
        }),
      });
      const userIDs = [BOT_ID, `${leadId}`];

      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", `${id}`);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(
            (c: any) => c.chatId === chatId
          );

          userChatsData.chats[chatIndex].lastMessage = result;
          userChatsData.chats[chatIndex].isSeen = id === BOT_ID ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (err) {
      console.log(err);
    } finally {
      setText("");
    }
  };

  const handlePresetQuestion = async (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    setText("Traitement en cours....");
    const data = { query: text };
    let result = "";

    try {
      await updateDoc(doc(db, "chats", `${chatId}`), {
        messages: arrayUnion({
          senderId: leadId,
          text: `${target?.textContent}`,
          createdAt: new Date(),
        }),
      });

      try {
        result = await callFlaskApi("query", data);
      } catch (err) {
        result =
          "Désolé, la connexion au bot a un problème. Veuillez réessayer plus tard ou contactez-nous.";
        setText("");
        console.log(err);
      }
      await updateDoc(doc(db, "chats", `${chatId}`), {
        messages: arrayUnion({
          senderId: BOT_ID,
          text:
            result === ""
              ? "Désolé, la connexion au bot a un problème. Veuillez réessayer plus tard ou contactez-nous."
              : result,
          createdAt: new Date(),
        }),
      });

      const userIDs = [BOT_ID, leadId];

      userIDs.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", `${id}`);
        const userChatsSnapshot = await getDoc(userChatsRef);

        if (userChatsSnapshot.exists()) {
          const userChatsData = userChatsSnapshot.data();

          const chatIndex = userChatsData.chats.findIndex(
            (c: any) => c.chatId === chatId
          );

          userChatsData.chats[chatIndex].lastMessage = result;
          userChatsData.chats[chatIndex].isSeen = id === BOT_ID ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();

          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          });
        }
      });
    } catch (err) {
      console.log(err);
    } finally {
      setText("");
    }
  };

  return (
    <div
      className={cn({
        "fixed bottom-14 right-5 z-20": !isOpen,
      })}
    >
      <motion.div
        layout // Layout make the div more smooth
        animate={{
          borderRadius: isOpen ? 20 : 50,
        }}
        initial={{ borderRadius: 50 }}
        className={cn(
          "w-20 h-20 bg-zinc-700 shadow-2xl cursor-pointer flex items-center justify-center",
          {
            "bot-container z-40 right-0 mr-4 text-slate-500 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px] flex flex-col":
              isOpen,
          }
        )}
        onClick={() => {
          if (!isOpen) {
            setIsOpen(!isOpen);
            setIsDisplayed(false);
          }
        }}
      >
        {isOpen && (
          <>
            <div className="flex flex-col w-full space-y-1.5 pb-4 border-b shadow-md border-none">
              <div className="pr-2  flex items-center justify-between">
                <h2 className="font-semibold text-lg tracking-tight">
                  SmartPredict Service
                </h2>
                <FiMinus
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => {
                    setIsOpen(false);
                    setIsDisplayed(true);
                  }}
                />
              </div>
            </div>
            <div className="chat flex-1 w-full space-y-2 pt-5 pb-5">
              <div className="center flex flex-row">
                <div className="space-y-2">
                  <Image
                    className="item w-10 h-10 rounded-full"
                    src={"/favicon.ico"}
                    width={20}
                    height={20}
                    alt="Jese image"
                  />
                </div>
                <motion.div
                  className="flex flex-col gap-2 w-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="flex flex-col leading-1.5 p-5 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <p className="message text-sm font-normal text-gray-900 text-balance dark:text-white">
                      Bonjour 👋, je suis un bot de Smartpredict. Je peux vous
                      répondre instatannement.
                    </p>
                  </div>
                  <PresetQuestion handlePresetQuestion={handlePresetQuestion} />
                </motion.div>
              </div>
              {chat?.messages?.map((message: any, index: number) => (
                <>
                  <div className="center flex flex-row">
                    {message.senderId === BOT_ID ? (
                      <div className="space-y-2">
                        <Image
                          className="item w-10 h-10 rounded-full"
                          src={"/favicon.ico"}
                          width={20}
                          height={20}
                          alt="Jese image"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    <div
                      className="flex flex-col gap-1 w-full max-w-[280px]"
                      style={{
                        marginLeft: message.senderId === BOT_ID ? 0 : 80,
                      }}
                    >
                      <div className="flex flex-col leading-1.5 p-5 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                        <p className="message text-sm font-normal text-gray-900 text-balance dark:text-white">
                          <div
                            dangerouslySetInnerHTML={{ __html: message.text }}
                          />
                        </p>
                      </div>
                      {chat?.messages?.length === 4 &&
                      index === chat?.messages?.length - 1 &&
                      message.senderId === BOT_ID ? (
                        <EmailForm
                          handleSendEmail={handleSendEmail}
                          handleChange={handleChange}
                          loadingState={loading}
                        />
                      ) : null}
                    </div>
                  </div>
                  <div ref={endRef} />
                </>
              ))}
            </div>
            <div className="flex items-center w-full pt-0">
              <form
                onSubmit={handleSend}
                className="flex items-center justify-center w-full space-x-2"
              >
                <input
                  className="input h-10 text-gray-700 dark:text-gray-200 text-sm p-3 focus:outline-none bg-gray-200 dark:bg-gray-700 w-full rounded-l-md"
                  type="text"
                  placeholder="Type Messages"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
                >
                  Send
                </button>
              </form>
            </div>
          </>
        )}

        {isDiplayed && (
          <Image
            className="item w-10 h-10 rounded-full"
            src={"/favicon.ico"}
            width={20}
            height={20}
            alt="Jese image"
          />
        )}
      </motion.div>
    </div>
  );
};

const EmailForm: React.FC<MyFormProps> = ({
  handleSendEmail,
  handleChange,
  loadingState,
}) => {
  return (
    <div className="gap-2">
      <div className="flex flex-col mb-5 leading-1.5 p-5 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <p className="message text-sm font-normal text-gray-900 text-balance dark:text-white">
          Laisser nous votre contact et nous allons vous contacter quand vous n
          êtes pas connecté
        </p>
      </div>
      <form
        className="bg-white shadow-md w-50 h-200 rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSendEmail}
      >
        <div className="mb-4">
          <label
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Your email"
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <p className="text-secondary-500 text-xs italic">
            Please enter your email and your name
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={loadingState}
          >
            {loadingState ? "Loading" : "Envoyer"}
          </button>
        </div>
      </form>
    </div>
  );
};

const PresetQuestion: React.FC<MyPresetQuestionProps> = ({
  handlePresetQuestion,
}) => {
  return (
    <motion.div className="cursor-pointer space-y-1">
      <h1
        className="bg-zinc-900 inline-block text-gray-100
       p-3 mr-1 rounded-md hover:tracking-wider transition-all"
        onClick={handlePresetQuestion}
      >
        En quoi consiste votre expertise en intelligence artificielle (IA) ?
      </h1>
      <h1
        className="bg-zinc-900 inline-block text-gray-100
       p-3 rounded-md hover:tracking-wider transition-all"
        onClick={handlePresetQuestion}
      >
        Combien de temps vous faut-il pour fournir un devis?
      </h1>
      <h1
        className="bg-zinc-900 inline-block text-gray-100
       p-3 rounded-md hover:tracking-wider transition-all"
        onClick={handlePresetQuestion}
      >
        Quels sont vos modes de prestations?
      </h1>
    </motion.div>
  );
};

export default ChatBot;
