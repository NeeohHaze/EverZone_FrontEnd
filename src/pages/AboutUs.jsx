import React from "react";
import { useTranslation, initReactI18next } from "react-i18next";

function AboutUs() {
  const { t, i18n } = useTranslation();
  return (
    <div className="min-h-screen w-full bg-slate-50">
      {/* 1. Dark Blue Header Section */}
      {/* pb-32 adds space at the bottom for the white card to pull up into */}
      <div className="w-full bg-[#1a455a] px-6 pb-32 pt-16 text-center  lg:px-16">
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
                Ever Zone Construction and Decoration Company Limited is owned construction company in Myanmar. Established in 2018 Ever Zone Construction has over Five years of service to Myanmar Construction the company’s commitment, expertise and integrity in construction.
•Projects undertaken by Ever Zone  extend across all market sectors and range from residential and luxury building.
                </p>
              </section>

              {/* Section: Board of Directors */}
              <section>
                <h2 className="mb-6 text-2xl font-bold text-slate-700 sm:text-3xl">
                  Board of directors and key management
                </h2>
                <p className="leading-relaxed text-slate-600 text-justify">
                  The Managing Director, U Naing Wai Lin , who was graduated in Myanmar.
•has experienced in the field of administration, lecturing, project management, construction quality management for 17 years. He has 10 years-experience as Construction Management in Singapore and 7 years-experience in Myanmar.
•All Board of Directors work closely with the various General Managers and partnering companies to continually manage and expand the Ever Zone Construction and Decoration Company Limited’s business into new era as a vibrant, contemporary, forward thinking company that maintains respect for traditional values and its proud heritage. The Board of Ever Zone Ltd comprises three Executive Directors and one non-Executive Director providing a balance of general corporate and management experience together with superior construction industry and financial expertise.
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
                  Our Vision is to achieve cost leadership in the construction market and to become a
full-fledged construction contractor.

Our Mission is to develop properties and operate the business to exceed our clients' expectations with trust building.
Core Value
• Trust
•CustomerStratification
•Commitment
• Integrity
Staff Development 
•Adaptation and Flexibiity
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
