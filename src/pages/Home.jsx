import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div className="relative w-full">
      {/* Main Grid Layout 
        - On mobile (grid-cols-1): Stacks vertically
        - On desktop (lg:grid-cols-2): Splits 50/50 side by side
        - min-h-[calc(100vh-64px)]: Ensures it fills the screen height minus the navbar
      */}
      <div className="grid min-h-[calc(100vh-64px)] w-full grid-cols-1 lg:grid-cols-2">
        {/* LEFT COLUMN: Text Content */}
        <div className="flex flex-col justify-center bg-white px-8 py-12 sm:px-16 lg:px-24">
          {/* Main Headlines */}
          <h1 className="mb-8 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Ever Zone Hero Section <br />
            Ever Zone Hero Section
          </h1>

          {/* Slogan Box (Grey Background) */}
          <div className="mb-10 w-full max-w-lg bg-gray-100 p-8 text-slate-700">
            <p className="leading-relaxed">
              Company slogan Company slogan Company slogan <br />
              Company slogan Company slogan Company slogan <br />
              Company slogan Company slogan Company slogan <br />
              Company slogan Company slogan Company slogan
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/Projects"
              className="bg-black px-8 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              View Projects
            </Link>
            <Link
              to="/ContactUs"
              className="bg-black px-8 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Introduction */}
        {/* Currently a grey background as per your wireframe. You can add an <img> tag inside here later. */}
        <div className="flex items-center justify-center bg-[#bfbfbf] p-12 text-center text-slate-900">
          <h2 className="text-3xl font-bold">Strong visual introduction</h2>
        </div>
      </div>

      {/* Floating Chatbot Button (Bottom Right) */}
      <button
        className="fixed bottom-8 right-8 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-gray-300 shadow-xl transition hover:bg-gray-400 hover:scale-105"
        aria-label="Open Chatbot"
      >
        <span className="text-xs font-bold text-slate-900">AI</span>
        <span className="text-[10px] font-bold text-slate-900">Chatbot</span>
      </button>
    </div>
  );
}

export default Home;
