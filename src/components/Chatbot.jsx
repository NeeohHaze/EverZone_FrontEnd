import React, { useState } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* 1. CLOSED STATE: Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-8 right-8 z-50 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-gray-300 shadow-xl transition hover:scale-105 hover:bg-gray-400"
        >
          <span className="text-xs font-bold text-slate-900">AI</span>
          <span className="text-[10px] font-bold text-slate-900">Chatbot</span>
        </button>
      )}

      {/* 2. OPEN STATE: Chat Window */}
      {isOpen && (
        // The modal container: fixed position, white background, shadow
        <div className="fixed bottom-8 right-8 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 sm:w-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-gray-200 px-6 py-4">
            <h2 className="text-3xl font-bold text-slate-900">AI Chatbot</h2>

            {/* Close Button (X icon) */}
            <button
              onClick={toggleChat}
              className="rounded-full p-1 transition hover:bg-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-8 w-8 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Chat Body area */}
          <div className="flex-1 overflow-y-auto bg-white p-6">
            {/* The Bot's Welcome Message */}
            <div className="flex w-full">
              <div className="max-w-[85%] rounded-lg bg-gray-200 px-4 py-3 text-lg font-bold text-slate-900">
                Hello, How can I help you today?
              </div>
            </div>
          </div>

          {/* Footer Input Area */}
          <div className="bg-gray-200 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Type"
                className="w-full rounded-none bg-white px-4 py-3 text-lg font-medium text-slate-700 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-slate-400"
              />
              <button className="bg-gray-500 px-6 text-lg font-bold text-white transition hover:bg-gray-600">
                Enter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
