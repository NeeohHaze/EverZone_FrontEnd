import React from "react";

function AboutUs() {
  // Data for the 4 sections to keep the code clean
  const cards = [
    { title: "Company profile and history", content: "Text" },
    { title: "Vision, mission, and core values", content: "Text" },
    { title: "Board of Directors and key management", content: "Text" },
    { title: "Consultants and professional credentials", content: "Text" },
  ];

  return (
    <div className="relative min-h-screen w-full bg-white px-6 py-20 lg:px-16">
      {/* Grid Layout: 1 column on mobile, 2 columns on desktop */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
        {cards.map((card, index) => (
          <div key={index} className="relative mt-6">
            {/* Dark Grey Header Box 
                - absolute: takes it out of normal flow
                - -top-6: pulls it up to overlap
                - z-10: ensures it sits on top of the light box
            */}
            <div className="absolute -top-10 left-0 z-10 w-[85%] bg-gray-500 px-6 py-4 text-white shadow-sm sm:w-3/4">
              <h3 className="text-lg font-bold leading-tight">{card.title}</h3>
            </div>

            {/* Light Grey Content Box */}
            <div className="flex h-72 w-full items-center justify-center bg-gray-100 shadow-sm">
              <span className="text-xl font-bold text-black">
                {card.content}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Chatbot Button (Same as Home page) */}
      <button
        className="fixed bottom-8 right-8 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-gray-300 shadow-xl transition hover:bg-gray-400 hover:scale-105 z-50"
        aria-label="Open Chatbot"
      >
        <span className="text-xs font-bold text-slate-900">AI</span>
        <span className="text-[10px] font-bold text-slate-900">Chatbot</span>
      </button>
    </div>
  );
}

export default AboutUs;
