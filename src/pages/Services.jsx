import React from "react";

function Services() {
  // Data for the services to keep the code clean and easy to update
  const servicesList = [
    { title: "Road & Bridge Construction", desc: "Short Description" },
    { title: "Earth Works", desc: "Short Description" },
    {
      title: "Building Construction (Residential, Commercial, Industrial)",
      desc: "Short Description",
    },
    { title: "Steel Structure Works", desc: "Short Description" },
    {
      title: "Fit-Out and Construction Project Management",
      desc: "Short Description",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-white pb-20 pt-12">
      {/* Page Heading */}
      <h1 className="mb-16 text-center text-3xl font-bold text-black sm:text-4xl">
        Services we provide
      </h1>

      {/* Flex Container 
         - flex-wrap: Allows items to drop to the next line
         - justify-center: Ensures the bottom row of 2 items is centered (just like your design)
         - gap-8: Adds space between cards
      */}
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8 px-6">
        {servicesList.map((service, index) => (
          // Card Container: fixed width (w-80 or w-96) ensures they look uniform
          <div key={index} className="flex w-full flex-col sm:w-80 md:w-96">
            {/* Top: Visual / Image Area (Dark Grey) */}
            <div className="relative flex h-64 flex-col items-center justify-center bg-[#a6a6a6] p-4 text-center">
              {/* Placeholder text for the image */}
              <span className="mb-6 font-semibold text-slate-800">Visual</span>

              {/* Title sits at the bottom of the grey box */}
              <h3 className="absolute bottom-6 left-0 w-full px-4 text-center text-lg font-bold leading-snug text-black">
                {service.title}
              </h3>
            </div>

            {/* Bottom: Description Area (Light Grey) */}
            <div className="flex h-32 items-center justify-center bg-[#f2f2f2]">
              <p className="text-slate-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Chatbot Button */}
      <button className="fixed bottom-8 right-8 z-50 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-gray-300 shadow-xl transition hover:scale-105 hover:bg-gray-400">
        <span className="text-xs font-bold text-slate-900">AI</span>
        <span className="text-[10px] font-bold text-slate-900">Chatbot</span>
      </button>
    </div>
  );
}

export default Services;
