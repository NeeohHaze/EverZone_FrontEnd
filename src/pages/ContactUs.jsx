import React, { useState } from "react";
import apiClient from "../services/api";

function ContactUs() {
  // 1. State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // 2. State for form submission status
  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");

  // 3. Handle typing in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 4. Handle the actual form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Send the POST request to your backend
      const response = await apiClient.post("/contact-forms", formData);

      console.log("Success:", response.data);
      setStatus("success");

      // Clear the form after successful submission
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Optional: Reset the success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Error submitting form:", err);
      setStatus("error");
      // Use the error message from the backend if available
      setErrorMessage(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#113243] mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          {/* Success Message Alert */}
          {status === "success" && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-3">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="font-medium">
                Thank you! Your message has been sent successfully.
              </span>
            </div>
          )}

          {/* Error Message Alert */}
          {status === "error" && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-3">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="font-medium">{errorMessage}</span>
            </div>
          )}

          {/* The Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-[#113243] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#7fc41b] focus:border-transparent transition-shadow bg-slate-50"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-[#113243] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#7fc41b] focus:border-transparent transition-shadow bg-slate-50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-sm font-semibold text-[#113243] mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#7fc41b] focus:border-transparent transition-shadow bg-slate-50"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-semibold text-[#113243] mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#7fc41b] focus:border-transparent transition-shadow bg-slate-50 resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className={`w-full py-4 rounded-xl font-bold text-lg text-white transition-all shadow-md flex justify-center items-center gap-2
                ${
                  status === "submitting"
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-[#113243] hover:bg-[#18445a]"
                }`}
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
