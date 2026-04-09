import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();

  // State for mobile swiping cards and the "See more" feature
  const [activeMobileCard, setActiveMobileCard] = useState(0);
  const [isBoardExpanded, setIsBoardExpanded] = useState(false); // New state for Card 2
  const mobileScrollRef = useRef(null);

  // Automatically update the active number when swiping
  const handleScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;

    const center = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const childCenter =
        child.offsetLeft - container.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(childCenter - center);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveMobileCard(closestIndex);
  };

  // Smoothly scroll to a card when tapping a numbered circle
  const scrollToCard = (index) => {
    if (!mobileScrollRef.current) return;
    const cards = mobileScrollRef.current.children;
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 pb-20 overflow-hidden">
      {/* 1. Dark Blue Header Section */}
      <div className="w-full bg-[#113243] px-6 pt-10 pb-20 lg:pt-16 lg:pb-32 flex justify-center text-center lg:px-16">
        <h1 className="text-3xl font-medium text-white sm:text-4xl tracking-wide">
          {t("aboutUs.header")}
        </h1>
      </div>

      {/* =========================================
          MOBILE LAYOUT: Swiping Cards 
          (Hidden on Large Screens)
      ========================================= */}
      <div className="relative -mt-10 w-full lg:hidden flex flex-col items-center">
        {/* Scroll Container with items-stretch to make heights equal */}
        <div
          ref={mobileScrollRef}
          onScroll={handleScroll}
          className="flex items-stretch w-full snap-x snap-mandatory overflow-x-auto gap-6 px-[7.5vw] pb-6 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* CARD 1: Company Profile */}
          <div className="snap-center shrink-0 w-[85vw] h-full bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col justify-start items-center text-center">
            <h2 className="mb-6 text-2xl font-medium text-slate-700 leading-snug">
              {t("aboutUs.profileTitle")}
            </h2>
            <div className="space-y-4 text-slate-500 text-[15px] leading-[1.8]">
              <p>{t("aboutUs.profileDesc1")}</p>
              <div className="flex justify-center w-full">
                <ul className="list-disc text-left pl-5 mt-2">
                  <li>{t("aboutUs.profileDesc2")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CARD 2: Board of Directors (With "See More" Feature) */}
          <div className="snap-center shrink-0 w-[85vw] h-full bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col justify-start items-center text-center">
            <h2 className="mb-6 text-2xl font-medium text-slate-700 leading-snug">
              {t("aboutUs.boardTitle")}
            </h2>
            <div className="flex flex-col items-center text-slate-500 text-[15px] leading-[1.8] w-full">
              {/* Text fades out or clamps when not expanded */}
              <p className={isBoardExpanded ? "mb-4" : "line-clamp-3 mb-2"}>
                {t("aboutUs.boardDesc1")}
              </p>

              {/* Only show the list if expanded */}
              {isBoardExpanded && (
                <div className="flex justify-center w-full mb-4 animate-fadeIn">
                  <ul className="list-disc text-left pl-5 space-y-2">
                    <li>{t("aboutUs.boardDesc2")}</li>
                    <li>{t("aboutUs.boardDesc3")}</li>
                  </ul>
                </div>
              )}

              {/* The "See more / See less" Toggle Button */}
              <button
                onClick={() => setIsBoardExpanded(!isBoardExpanded)}
                className="mt-auto pt-2 flex items-center gap-1.5 text-[#84cc16] font-medium text-sm hover:scale-105 transition-transform"
              >
                {isBoardExpanded ? "See less" : "See more"}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isBoardExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* CARD 3: Vision & Mission */}
          <div className="snap-center shrink-0 w-[85vw] h-full bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col justify-start items-center text-center">
            <h2 className="mb-6 text-2xl font-medium text-slate-700 leading-snug">
              {t("aboutUs.visionTitle")}
            </h2>
            <div className="space-y-4 text-slate-500 text-[15px] leading-[1.8]">
              <p>{t("aboutUs.vision")}</p>
              <p>{t("aboutUs.mission")}</p>
              <p className="font-medium text-slate-600 mt-6">
                {t("aboutUs.coreValuesTitle")}
              </p>
              <div className="flex justify-center w-full">
                <ul className="list-disc text-left pl-5 space-y-1.5 mt-2">
                  <li>{t("aboutUs.val1")}</li>
                  <li>{t("aboutUs.val2")}</li>
                  <li>{t("aboutUs.val3")}</li>
                  <li>{t("aboutUs.val4")}</li>
                  <li>{t("aboutUs.val5")}</li>
                  <li>{t("aboutUs.val6")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CARD 4: Consultants */}
          <div className="snap-center shrink-0 w-[85vw] h-full bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col justify-start items-center text-center">
            <h2 className="mb-6 text-2xl font-medium text-slate-700 leading-snug">
              {t("aboutUs.consultantsTitle")}
            </h2>
            <div className="space-y-6 text-[15px] leading-[1.8] w-full">
              <p className="text-slate-500">
                {t("aboutUs.consultantsSubtitle")}
              </p>
              <div className="flex flex-col gap-4 w-full">
                <div className="bg-slate-50 rounded-[1.5rem] p-6 border border-slate-100 flex flex-col items-center w-full">
                  <p className="font-medium text-slate-700 text-base">
                    {t("aboutUs.c1Title")}
                  </p>
                  <p className="text-slate-500 mt-1">{t("aboutUs.c1Name")}</p>
                  <p className="font-medium text-[#84cc16] mt-0.5">
                    {t("aboutUs.c1Role")}
                  </p>
                </div>
                <div className="bg-slate-50 rounded-[1.5rem] p-6 border border-slate-100 flex flex-col items-center w-full">
                  <p className="font-medium text-slate-700 text-base">
                    {t("aboutUs.c2Title")}
                  </p>
                  <p className="text-slate-500 mt-1">{t("aboutUs.c2Name")}</p>
                  <p className="font-medium text-[#84cc16] mt-0.5">
                    {t("aboutUs.c2Role")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Numbered Circles */}
        <div className="flex justify-center items-center gap-3 mt-4 mb-8 w-full">
          {[0, 1, 2, 3].map((idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all border
                ${
                  activeMobileCard === idx
                    ? "text-[#84cc16] border-[#84cc16] font-medium"
                    : "text-slate-300 border-slate-200 hover:border-slate-300"
                }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* =========================================
          PC LAYOUT: Original 2-Column Grid 
          (Hidden on Mobile)
      ========================================= */}
      <div className="hidden lg:block mx-auto -mt-20 max-w-7xl px-8 relative z-10">
        <div className="bg-white rounded-[3rem] p-16 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* LEFT COLUMN */}
            <div className="space-y-16">
              {/* Company Profile */}
              <section>
                <h2 className="mb-6 text-3xl font-bold text-slate-700">
                  {t("aboutUs.profileTitle")}
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
                  <p>{t("aboutUs.profileDesc1")}</p>
                  <ul className="list-disc pl-5">
                    <li>{t("aboutUs.profileDesc2")}</li>
                  </ul>
                </div>
              </section>

              {/* Board of Directors */}
              <section>
                <h2 className="mb-6 text-3xl font-bold text-slate-700">
                  {t("aboutUs.boardTitle")}
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
                  <p>{t("aboutUs.boardDesc1")}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>{t("aboutUs.boardDesc2")}</li>
                    <li>{t("aboutUs.boardDesc3")}</li>
                  </ul>
                </div>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-16">
              {/* Vision & Mission */}
              <section>
                <h2 className="mb-6 text-3xl font-bold text-slate-700">
                  {t("aboutUs.visionTitle")}
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>{t("aboutUs.vision")}</p>
                  <p>{t("aboutUs.mission")}</p>
                  <p className="font-medium text-slate-700 mt-6">
                    {t("aboutUs.coreValuesTitle")}
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>{t("aboutUs.val1")}</li>
                    <li>{t("aboutUs.val2")}</li>
                    <li>{t("aboutUs.val3")}</li>
                    <li>{t("aboutUs.val4")}</li>
                    <li>{t("aboutUs.val5")}</li>
                    <li>{t("aboutUs.val6")}</li>
                  </ul>
                </div>
              </section>

              {/* Consultants */}
              <section>
                <h2 className="mb-6 text-3xl font-bold text-slate-700">
                  {t("aboutUs.consultantsTitle")}
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>{t("aboutUs.consultantsSubtitle")}</p>
                  <div className="flex flex-col gap-5">
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <p className="font-semibold text-slate-700">
                        {t("aboutUs.c1Title")}
                      </p>
                      <p className="mt-1">{t("aboutUs.c1Name")}</p>
                      <p className="font-medium text-slate-700">
                        {t("aboutUs.c1Role")}
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                      <p className="font-semibold text-slate-700">
                        {t("aboutUs.c2Title")}
                      </p>
                      <p className="mt-1">{t("aboutUs.c2Name")}</p>
                      <p className="font-medium text-slate-700">
                        {t("aboutUs.c2Role")}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
