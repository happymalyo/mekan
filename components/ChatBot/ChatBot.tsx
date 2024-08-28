import React, { use, useEffect, useRef, useState } from "react";
import "./style.css";
import Image from "next/image";
import { toast } from "react-toastify";
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

const ChatBot = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [chat, setChat] = useState<DocumentData | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { myBot, isBotLoading, fetchBotInfo } = useUserBot();

  // const auth = getAuth();
  // signOut(auth)
  //   .then(() => {
  //     console.log("User signed out");
  //   })
  //   .catch((e: Error) => {
  //     console.log(e);
  //   });

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
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
      fetchBotInfo();
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo, fetchBotInfo]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined;
    if (currentUser?.chatId) {
      const chatDocRef = doc(db, "chats", currentUser.chatId);

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
  }, [currentUser?.chatId]);

  function removeForm() {
    if (formRef.current) {
      formRef.current.style.display = "none"; // Hide the form
    }
  }

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Generate a simple password (for example, the email plus a fixed string)
    const generatedPassword = email + "12345";

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        generatedPassword
      );
      const user = userCredential.user;

      // Create a chatID for user
      try {
        const chatRef = collection(db, "chats");
        const newChatRef = doc(chatRef);

        // Initialize the new chat document with default values
        await setDoc(newChatRef, {
          messages: [], // Default value: an empty array of messages
        });

        await setDoc(doc(db, "users", user.uid), {
          username: name,
          email: email,
          avatar: null,
          id: user.uid,
          chatId: newChatRef.id,
          blocked: [],
        });
      } catch (err) {
        console.log(err);
      }

      // Automatically log in the user
      await signInWithEmailAndPassword(auth, email, generatedPassword);

      removeForm();
      toast.success("Merci pour votre inscription 😊");
    } catch (error) {
      setLoading(false);
      removeForm();
      toast.success(`Yooop! Welcome back ${name} 😊`);
      console.error("Error creating user: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = { query: text };
    if (text === "") return;

    try {
      await updateDoc(doc(db, "chats", currentUser?.chatId), {
        messages: arrayUnion({
          senderId: currentUser?.id,
          text,
          createdAt: new Date(),
        }),
      });
      const result = await callFlaskApi("query", data);
      await updateDoc(doc(db, "chats", currentUser?.chatId), {
        messages: arrayUnion({
          senderId: myBot?.id,
          text: result,
          createdAt: new Date(),
        }),
      });
    } catch (err) {
      console.log(err);
    } finally {
      setText("");
    }
  };

  return (
    <>
      <div className="bot-container z-40 right-0 mr-4 text-slate-500 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px] flex flex-col">
        <div className="flex flex-col space-y-1.5 pb-6">
          <h2 className="font-semibold text-lg tracking-tight">
            <u>Welcome</u> back 👋
          </h2>
          <p className="text-sm text-[#6b7280] leading-3">
            <br />
          </p>
        </div>
        <div className="chat flex-1 space-y-2 pb-5">
          {chat?.messages.map((message: any) => (
            <>
              <div className="center flex flex-row">
                {message.senderId === myBot?.id ? (
                  <div>
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
                    marginLeft: message.senderId === myBot?.id ? 0 : 80,
                  }}
                >
                  <div className="flex flex-col leading-1.5 p-5 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <p className="message text-sm font-normal text-gray-900 text-balance dark:text-white">
                      {message.text}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        {/* Form section */}
        {!currentUser ? (
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSendEmail}
            ref={formRef}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
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
                disabled={loading}
              >
                {loading ? "Loading" : "Envoyer"}
              </button>
            </div>
          </form>
        ) : (
          <></>
        )}

        <div className="flex items-center pt-0">
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
              disabled={!currentUser?.chatId}
              type="submit"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
