"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FiMinus } from "react-icons/fi";

function BotSupport() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDisplay, setIsDisplay] = React.useState(true);
  return (
    <div className="fixed bottom-14 right-5 z-20">
      <motion.div
        layout // Layout make the div more smooth
        animate={{
          borderRadius: isOpen ? 10 : 50,
        }}
        initial={{ borderRadius: 50 }}
        className={cn(
          "w-20 h-20 bg-zinc-700 shadow-2xl cursor-pointer flex items-center justify-center",
          {
            "w-96 h-[34rem] cursor-default": isOpen,
          }
        )}
        onClick={() => {
          if (!isOpen) {
            setIsOpen(!isOpen);
            setIsDisplay(false);
          }
        }}
        onAnimationComplete={() => {
          if (!isOpen) {
            setIsDisplay(true);
          }
        }}
      >
        {isDisplay && <h1 className="text-5xl">🐬</h1>}
        {isOpen && (
          <div className="w-full h-full">
            <div className="p-5 border-b flex items-center justify-between">
              <h1 className="text-2xl">🐬Bot.</h1>
              <FiMinus
                className="w-8 h-8 cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </div>
            <div className="p-5 space-y-2">
              <Bot />
              <PresetQuestion />
              <User />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

const Bot = () => {
  return (
    <motion.div>
      <div className="flex items-center gap-2">
        <span className="bg-zinc-900 rounded-full">
          <h1 className="text-2xl">🐬</h1>
        </span>
        <h1>Smartpredict bot.</h1>
      </div>
      <h1>👋 Hello, I'm the Smartpredict bot. How can I help you?</h1>
    </motion.div>
  );
};
// Make a scroll Area too
/* Make initial animate opacity 0 / 1 transition delay 0.5*/
const PresetQuestion = () => {
  return (
    <motion.div
      className="cursor-pointer"
      onClick={() => {
        alert("clicked");
      }}
    >
      <h1 className="bg-zinc-900 inline-block p-3 rounded-md hover:tracking-wider transition-all">
        Tell me about You
      </h1>
    </motion.div>
  );
};

const User = () => {
  return (
    <motion.div>
      <div className="flex items-center justify-end gap-2">
        <h1 className="text-3l">You</h1>
        <span className="bg-zinc-900 rounded-full">
          <h1 className="text-2xl">🐬</h1>
        </span>
      </div>
      <h1>👋 Hello, I'm the Smartpredict bot. How can I help you?</h1>
    </motion.div>
  );
};

export default BotSupport;
