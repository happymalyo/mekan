import { create } from "zustand";

interface ChatProps {
  chatId: string;
  changeChat: (chatId: string) => void;
}

export const useChatStore = create<ChatProps>((set) => ({
  chatId: "",
  changeChat: (chatId) => {
    localStorage.setItem('chatId', chatId);
    set({ chatId });
  },
}));
