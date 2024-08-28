import { doc, getDoc, DocumentData } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

interface User {
  username: string,
  email: string,
  avatar ?: null,
  id: string,
  chatId : string,
  blocked ?: string[],
}
interface userStoreProps {
  currentUser : DocumentData | User | null ;
  isLoading: boolean;
  fetchUserInfo: (uid? : string ) => void;
}

export const useUserStore = create<userStoreProps>((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) return set({ currentUser: null, isLoading: false });

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentUser: docSnap.data(), isLoading: false });
      } else {
        set({ currentUser: null, isLoading: false });
      }
    } catch (err) {
      console.log(err);
      return set({ currentUser: null, isLoading: false });
    }
  },
}));
