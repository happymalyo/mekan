import { create } from "zustand";

interface ChatProps {
  chatId: string | null;
  changeChat: (chatId: string) => void;
}

export const useChatStore = create<ChatProps>((set) => ({
  chatId: null,
  changeChat: (chatId) => {
    set({ chatId });
  },
}));
