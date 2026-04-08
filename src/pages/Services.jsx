import React, { useState, useEffect, useRef } from "react";
import apiClient from "../services/api";
import { useTranslation } from "react-i18next";

function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // State and Ref for the mobile swiping cards
  const [activeMobileCard, setActiveMobileCard] = useState(0);
  const mobileScrollRef = useRef(null);

  // Initialize translation
  const { t } = useTranslation();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.get("/services");

        let dataArray = [];
        if (response.data && Array.isArray(response.data.data)) {
          dataArray = response.data.data;
        } else if (Array.isArray(response.data)) {
          dataArray = response.data;
        }

        setServices(dataArray);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError(t("services.errorFetch"));
        setIsLoading(false);
      }
    };

    fetchServices();
  }, [t]);

  // Automatically update the active number when swiping on mobile
  const handleScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;

    // Find the center point of the scroll container
    const center = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    // Loop through cards to find which one is closest to the center
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-50">
        <div className="text-xl font-semibold animate-pulse text-[#113243]">
          {t("services.loading")}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-50">
        <div className="text-xl text-red-500 bg-red-50 p-6 rounded-lg shadow">
          {error}
        </div>
      </div>
    );
  }

  return (
    // Gray bg for mobile cards, White bg for PC grid
    <div className="min-h-screen w-full bg-slate-50 lg:bg-white pb-24 overflow-hidden">
      {/* Dark Blue Header Section (Slimmer on mobile, unchanged on PC) */}
      <div className="w-full bg-[#113243] pt-6 pb-16 lg:py-14 text-center">
        <h1 className="text-3xl font-medium text-white sm:text-4xl tracking-wide">
          {t("services.title")}
        </h1>
      </div>
      {/* =========================================
          MOBILE LAYOUT: Swiping Cards 
          (Hidden on Large Screens)
      ========================================= */}
      <div className="relative -mt-16 w-full lg:hidden flex flex-col items-center">
        {services.length === 0 ? (
          <div className="w-[85vw] bg-white rounded-[2.5rem] p-10 text-center shadow-md">
            <p className="text-xl font-medium text-slate-700 mb-2">
              {t("services.emptyTitle")}
            </p>
            <p className="text-slate-500">{t("services.emptyDesc")}</p>
          </div>
        ) : (
          <>
            {/* Scroll Container */}
            <div
              ref={mobileScrollRef}
              onScroll={handleScroll}
              className="flex items-stretch w-full snap-x snap-mandatory overflow-x-auto gap-6 px-[7.5vw] pb-6 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="snap-center shrink-0 w-[85vw] h-auto bg-white rounded-[2.5rem] p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col justify-start items-center text-center"
                >
                  {/* Image */}
                  <div className="w-full h-[200px] sm:h-[240px] mb-6 overflow-hidden rounded-2xl shadow-sm">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100">
                        {t("services.noImage")}
                      </div>
                    )}
                  </div>

                  {/* Elegant Number Divider */}
                  <div className="flex items-center w-full justify-center gap-4 mb-5">
                    <div className="h-px bg-slate-100 flex-1"></div>
                    <span className="text-slate-400 font-medium text-[15px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px bg-slate-100 flex-1"></div>
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-2xl font-medium text-slate-700 mb-4 leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-slate-500 text-[15px] leading-[1.8]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination Numbered Circles */}
            <div className="flex justify-center items-center gap-3 mt-4 mb-8 w-full">
              {services.map((_, idx) => (
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
          </>
        )}
      </div>

      {/* =========================================
          PC LAYOUT: Original 3-Column Grid 
          (Hidden on Mobile)
      ========================================= */}
      <div className="hidden lg:block container mx-auto px-6 lg:px-16 pt-16 max-w-7xl">
        {services.length === 0 ? (
          <div className="text-center text-slate-500 py-16">
            <p className="text-xl font-medium mb-2">
              {t("services.emptyTitle")}
            </p>
            <p>{t("services.emptyDesc")}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col group cursor-pointer"
              >
                {/* Image Container with Hover Zoom */}
                <div className="w-full h-[240px] mb-6 overflow-hidden rounded-2xl shadow-sm">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100">
                      {t("services.noImage")}
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <h2 className="text-xl font-medium text-slate-700 mb-4 transition-colors group-hover:text-[#7fc41b]">
                  {service.title}
                </h2>
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
