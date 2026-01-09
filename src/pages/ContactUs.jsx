import React from "react";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo)");
  };

  return (
    <div className="relative min-h-screen w-full bg-white px-6 py-12 lg:px-24">
      {/* Page Title */}
      <h1 className="mb-10 text-3xl font-bold text-slate-900">Contact Us</h1>

      {/* Contact Form Section */}
      <form onSubmit={handleSubmit} className="mb-20 max-w-4xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Full Name Input */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-gray-200 p-4 text-center font-bold text-slate-900 placeholder-slate-900 outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-200 p-4 text-center font-bold text-slate-900 placeholder-slate-900 outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>
        </div>

        {/* Message Input */}
        <div className="mt-6">
          <textarea
            rows="6"
            placeholder="Message"
            className="w-full resize-none bg-gray-200 p-8 text-left font-bold text-slate-900 placeholder-slate-900 outline-none focus:ring-2 focus:ring-slate-400"
          ></textarea>
        </div>

        {/* Send Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-black px-10 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Info & Map Section */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact Info Text */}
        <div className="space-y-8 text-lg text-slate-800">
          <div>
            <span className="font-bold">Office Address-</span>
            <p className="mt-1 text-slate-600">
              123 Engineering Lane, Yangon, Myanmar
            </p>
          </div>

          <div>
            <span className="font-bold">Contact Details-</span>
            <p className="mt-1 text-slate-600">Available Mon-Fri, 9am - 5pm</p>
          </div>

          <div>
            <span className="font-bold">Email-</span>
            <p className="mt-1 text-slate-600">info@everzone.com</p>
          </div>

          <div>
            <span className="font-bold">Phone-</span>
            <p className="mt-1 text-slate-600">+95 9 123 456 789</p>
          </div>
        </div>

        {/* Map Placeholder */}
        {/* You can replace this iframe with a real Google Map embed code later */}
        <div className="flex h-64 w-full items-center justify-center bg-gray-300 lg:h-80">
          <span className="text-xl font-bold text-slate-600">Map</span>
        </div>
      </div>

      {/* Floating Chatbot Button */}
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
