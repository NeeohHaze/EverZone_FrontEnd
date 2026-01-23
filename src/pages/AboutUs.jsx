import React from "react";

function AboutUs() {
  return (
    <div className="min-h-screen w-full bg-slate-50">
      {/* 1. Dark Blue Header Section */}
      {/* pb-32 adds space at the bottom for the white card to pull up into */}
      <div className="w-full bg-[#1a455a] px-6 pb-32 pt-16  lg:px-16">
        <h1 className="text-3xl font-medium text-white sm:text-4xl">
          Get to know about us
        </h1>
      </div>

      {/* 2. Overlapping White Content Card */}
      {/* -mt-20 pulls this div up to overlap the blue header */}
      <div className="mx-auto -mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen rounded-t-[3rem] bg-white p-8 shadow-xl sm:p-12 lg:p-20">
          {/* Grid Layout: 1 Column on Mobile, 2 Columns on Desktop */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {/* LEFT COLUMN */}
            <div className="space-y-16">
              {/* Section: Company Profile */}
              <section>
                <h2 className="mb-6 text-2xl font-bold text-slate-700 sm:text-3xl">
                  Company profile and history
                </h2>
                <p className="leading-relaxed text-slate-600 text-justify">
                  Engineering is the practice of turning ideas into real-world
                  solutions by combining creativity, math, and problem-solving.
                  Engineers design systems that must work reliably under real
                  constraints, whether that means building bridges that can
                  withstand earthquakes, writing software that handles millions
                  of users, or creating machines that use less energy while
                  doing more work. What makes engineering unique is the constant
                  balance between theory and practicality—an elegant design is
                  only successful if it can be built, maintained, and improved
                  over time.
                </p>
              </section>

              {/* Section: Board of Directors */}
              <section>
                <h2 className="mb-6 text-2xl font-bold text-slate-700 sm:text-3xl">
                  Board of directors and key management
                </h2>
                <p className="leading-relaxed text-slate-600 text-justify">
                  Engineering is the practice of turning ideas into real-world
                  solutions by combining creativity, math, and problem-solving.
                  Engineers design systems that must work reliably under real
                  constraints, whether that means building bridges that can
                  withstand earthquakes, writing software that handles millions
                  of users, or creating machines that use less energy while
                  doing more work.
                </p>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-16">
              {/* Section: Vision & Mission */}
              <section>
                <h2 className="mb-6 text-2xl font-bold text-slate-700 sm:text-3xl">
                  Vision, Mission and Core Values
                </h2>
                <p className="leading-relaxed text-slate-600 text-justify">
                  Engineering is the practice of turning ideas into real-world
                  solutions by combining creativity, math, and problem-solving.
                  Engineers design systems that must work reliably under real
                  constraints, whether that means building bridges that can
                  withstand earthquakes, writing software that handles millions
                  of users. What makes engineering unique is the constant
                  balance between theory and practicality—an elegant design is
                  only successful if it can be built, maintained, and improved
                  over time. Through testing, iteration, and collaboration,
                  engineering quietly shapes everyday life.
                </p>
              </section>

              {/* Section: Consultants */}
              <section>
                <h2 className="mb-6 text-2xl font-bold text-slate-700 sm:text-3xl">
                  Consultants and professional credentials
                </h2>
                <p className="leading-relaxed text-slate-600 text-justify">
                  Engineering is the practice of turning ideas into real-world
                  solutions by combining creativity, math, and problem-solving.
                  Engineers design systems that must work reliably under real
                  constraints. Engineers design systems that must work reliably
                  under real constraints, whether that means building bridges
                  that can withstand earthquakes.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
