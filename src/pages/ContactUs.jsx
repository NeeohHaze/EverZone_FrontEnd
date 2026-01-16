import React from "react";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo)");
  };

  return (
    <div className="relative min-h-screen w-full bg-white px-6 py-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
        {/* LEFT COLUMN: Title & Form */}
        <div>
          <h1 className="mb-8 text-4xl font-bold text-slate-900">Contact Us</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: First Name & Last Name */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-gray-300 p-4 text-center font-bold text-slate-900 placeholder-slate-900 outline-none focus:ring-2 focus:ring-slate-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-gray-300 p-4 text-center font-bold text-slate-900 placeholder-slate-900 outline-none focus:ring-2 focus:ring-slate-400"
              />
            </div>

            {/* Row 2: Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-300 p-4 text-center font-bold text-slate-900 placeholder-slate-900 outline-none focus:ring-2 focus:ring-slate-400"
            />

            {/* Row 3: Phone Number */}
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full bg-gray-300 p-4 text-center font-bold text-slate-900 placeholder-slate-900 outline-none focus:ring-2 focus:ring-slate-400"
            />

            {/* Row 4: Message */}
            <textarea
              rows="6"
              placeholder="Message"
              className="flex w-full resize-none items-center justify-center bg-gray-300 p-8 text-center font-bold text-slate-900 placeholder-slate-900 outline-none focus:ring-2 focus:ring-slate-400"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black py-4 text-lg font-bold text-white transition hover:bg-slate-800"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: Info & Map */}
        <div className="flex flex-col pt-4 lg:pt-20">
          {/* Contact Details Text */}
          <div className="mb-10 space-y-6 text-lg text-slate-800">
            <p>
              <span className="font-semibold text-slate-900">
                Office Address-
              </span>{" "}
              1234
            </p>
            <p>
              <span className="font-semibold text-slate-900">
                Contact Details-
              </span>{" "}
              1234
            </p>
            <p>
              <span className="font-semibold text-slate-900">Email-</span>{" "}
              1234@gmail.com
            </p>
            <p>
              <span className="font-semibold text-slate-900">Phone-</span>{" "}
              12341234
            </p>
          </div>

          {/* Map Section */}
          <div className="flex h-80 w-full grow items-center justify-center bg-gray-300 text-slate-900">
            <span className="text-xl font-bold">Map</span>
          </div>
        </div>
      </div>

      {/* Floating Chatbot Button (Preserved) */}
      <button
        className="fixed bottom-8 right-8 z-50 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-gray-300 shadow-xl transition hover:scale-105 hover:bg-gray-400"
        aria-label="Open Chatbot"
      >
        <span className="text-xs font-bold text-slate-900">AI</span>
        <span className="text-[10px] font-bold text-slate-900">Chatbot</span>
      </button>
    </div>
  );
}

export default ContactUs;
