import React from "react";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo)");
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* 1. Background Strip (Dark Blue) */}
      <div className="h-48 w-full bg-[#1a455a]"></div>

      {/* 2. Overlapping White Card */}
      <div className="mx-auto -mt-32 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="min-h-[600px] rounded-t-[2.5rem] bg-white px-8 py-12 shadow-2xl sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* LEFT COLUMN: Contact Info */}
            <div>
              <h1 className="text-4xl font-medium text-slate-700">
                Keep in touch with us
              </h1>
              <p className="mt-6 text-lg text-slate-500">
                If you want to request a service or ask any questions, please
                contact us using the form given
              </p>

              <div className="mt-12 space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-slate-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-600">
                    ABC Condo, Building 1, Floor 2, Room 2202
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="text-slate-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-600">everzone123@gmail.com</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="text-slate-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-600">
                    +959123456789, +959987654321
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-slate-700 outline-none focus:border-[#1a455a] focus:ring-1 focus:ring-[#1a455a]"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-slate-700 outline-none focus:border-[#1a455a] focus:ring-1 focus:ring-[#1a455a]"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-slate-700 outline-none focus:border-[#1a455a] focus:ring-1 focus:ring-[#1a455a]"
              />

              <textarea
                rows="4"
                placeholder="How can we help?"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-slate-700 outline-none focus:border-[#1a455a] focus:ring-1 focus:ring-[#1a455a]"
              ></textarea>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="group flex w-fit items-center gap-4 rounded-full bg-[#1a455a] py-2 pl-8 pr-2 text-white transition hover:bg-[#153849]"
                >
                  <span className="font-semibold">Send Message</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#84cc16] text-[#1a455a] transition duration-300 group-hover:scale-110">
                    {/* Arrow Right Icon */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>

          {/* 3. Map Section */}
          {/* 3. Map Section */}
          <div className="mt-20 h-96 w-full overflow-hidden rounded-2xl bg-gray-100 shadow-inner">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.336468759325!2d96.12658137593744!3d16.80962391920793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb33971b1227%3A0x6a0a09e07255272e!2sShwedagon%20Pagoda!5e0!3m2!1sen!2smm!4v1706000000000!5m2!1sen!2smm"
              className="h-full w-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
