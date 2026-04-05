import React, { useState, useRef, useEffect } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    
    // Add user message to chat
    setMessages(prev => [...prev, { type: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const model = import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.5-flash-lite';

      if (!apiKey) {
        throw new Error('Gemini API key is not configured');
      }

      // System prompt to limit chatbot to company-related topics
      const systemPrompt = `You are a helpful AI assistant for EverZone, a professional web and mobile development company.

IMPORTANT - You MUST follow these rules:
1. Only answer questions about EverZone's services, projects, team, web/mobile development, and related topics
2. If a question is NOT related to the company or development, politely decline and redirect to company-related topics
3. Keep responses professional, friendly, and concise (max 2-3 sentences)
4. If you don't know specific information about EverZone, say so and suggest contacting the team directly

Company Focus: Web development, mobile development, UI/UX design, project solutions`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: systemPrompt + '\n\nUser: ' + userMessage
                  }
                ]
              }
            ]
          })
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get response from Gemini API');
      }

      const data = await response.json();
      const botMessage = data?.candidates?.[0]?.content?.parts?.[0]?.text || 
        "Sorry, I couldn't generate a response. Please try again.";

      setMessages(prev => [...prev, { type: "bot", text: botMessage }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [
        ...prev,
        { 
          type: "bot", 
          text: `Error: ${error.message || "Failed to send message"}` 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 1. CLOSED STATE: Floating Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-8 right-8 z-50 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-blue-500 shadow-xl transition hover:scale-105 hover:bg-blue-600"
        >
          <span className="text-xs font-bold text-white">AI</span>
          <span className="text-[10px] font-bold text-white">Chatbot</span>
        </button>
      )}

      {/* 2. OPEN STATE: Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5 sm:w-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-blue-500 px-6 py-4">
            <h2 className="text-lg font-bold text-white">AI Chatbot</h2>

            {/* Close Button (X icon) */}
            <button
              onClick={toggleChat}
              className="rounded-full p-1 transition hover:bg-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-6 w-6 text-white"
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
          <div className="flex-1 overflow-y-auto bg-white p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                    message.type === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 px-4 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Area */}
          <form onSubmit={sendMessage} className="bg-gray-100 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 rounded-lg bg-white px-4 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-500 px-4 py-2 text-white font-medium rounded-lg transition hover:bg-blue-600 disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;
