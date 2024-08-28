import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVEHEPUR-ZNJSFayLhohLU7qzZA8Wnn_0",
  authDomain: "reactchat-19f5e.firebaseapp.com",
  projectId: "reactchat-19f5e",
  storageBucket: "reactchat-19f5e.appspot.com",
  messagingSenderId: "254792525490",
  appId: "1:254792525490:web:e20b9fcf1556390d2f4bab",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
