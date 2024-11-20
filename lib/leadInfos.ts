import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { User } from "@/types";
import { arrayUnion, doc, DocumentData, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

interface LeadInfoState {
  leadId: string | null;
  chatId: string | null;
  fetchLeadInfo?: () => void;
}

const getGeneratedVisitor = () => {
  // Get the current date
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");

  // Format the date as YYYYMMDD
  const formattedDate = `${year}${month}${day}`;
  // Generate a random number
  const randomNum = Math.floor(Math.random() * 1000); // Adjust the range as needed

  // Create the username and email
  let username = `visitor${formattedDate}-${randomNum}`;

  return { username };
};

export const useLeadInfos = create<LeadInfoState>((set) => ({
  leadId: null,
  chatId: null,
  fetchLeadInfo: async () => {
    // Check if IDs already exist in localStorage
    let leadId = localStorage.getItem("visitor_id");
    let chatId = localStorage.getItem("cht_id");
    const { username } = getGeneratedVisitor();
    const BOT_ID = process.env.NEXT_PUBLIC_BOT_ID;

    // If they don't exist, create new ones
    if (!leadId && !chatId) {
      leadId = uuidv4();
      chatId = uuidv4();
      localStorage.setItem("visitor_id", leadId);
      localStorage.setItem("cht_id", chatId);
      try {
        await setDoc(doc(db, "users", leadId), {
          username,
          email: "visitor@mekan.com",
          avatar: null,
          id: leadId,
          blocked: [],
        });

        await setDoc(doc(db, "chats", chatId), {
          messages: [],
        });

        await updateDoc(doc(db, "userchats", `${BOT_ID}`), {
          chats: arrayUnion({
            chatId,
              isSeen: false,
              lastMessage: "",
              receiverId: leadId,
              updatedAt: Date.now(),
          }),
          
        });
      } catch (error) {
        console.log(error);
      }
    }

    // Update the Zustand store with the IDs
    set({
      leadId,
      chatId,
    });
  },
}));
