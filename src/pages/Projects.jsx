import React, { useState, useEffect } from "react";
import apiClient from "../services/api";
import { useTranslation } from "react-i18next";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hardcoded the 3 categories to perfectly match your Figma design
  const [categories] = useState(["Residential", "Commercial", "Industrial"]);

  // Default the active tab to the first one
  const [activeCategory, setActiveCategory] = useState("Residential");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Initialize the translation function
  const { t } = useTranslation();

  // Fetch the data
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await apiClient.get("/projects");

        let dataArray = [];
        if (Array.isArray(response.data)) {
          dataArray = response.data;
        } else if (response.data && Array.isArray(response.data.data)) {
          dataArray = response.data.data;
        } else if (response.data && Array.isArray(response.data.projects)) {
          dataArray = response.data.projects;
        }

        setProjects(dataArray);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(t("projects.errorFetch"));
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [t]);

  // Filter projects based on the active category tab
  const filteredProjects = projects.filter(
    (p) => p.category_name === activeCategory
  );

  const currentProject = filteredProjects[currentIndex];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-50">
        <div className="text-xl font-semibold animate-pulse text-[#113243]">
          {t("projects.loading")}
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
    <div className="min-h-screen bg-white pt-10 md:pt-16 pb-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Header Section (Shared between Mobile and PC) */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-8 lg:mb-10 gap-6 lg:gap-8">
          <h1 className="text-2xl md:text-3xl font-medium text-slate-600">
            {t("projects.title") || "Discover our Projects"}
          </h1>

          {/* Category Pill Navigation */}
          <div className="flex bg-[#113243] rounded-full p-1.5 shadow-md overflow-x-auto max-w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 md:px-8 py-2 md:py-2.5 rounded-full text-[13px] md:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#7fc41b] text-[#113243] shadow-sm"
                    : "text-white hover:bg-[#18445a]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================
            MOBILE LAYOUT (Hidden on PC)
        ========================================= */}
        <div className="lg:hidden w-full flex flex-col mt-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center text-slate-500 py-16">
              <p className="text-xl font-medium mb-2">
                {t("projects.emptyTitle")}
              </p>
              <p>{t("projects.noCategoryProjects")}</p>
            </div>
          ) : currentProject ? (
            <>
              {/* Image with Frosted Info Overlay */}
              <div className="relative w-full h-[450px] sm:h-[500px] rounded-[2rem] overflow-hidden mb-8 shadow-md">
                {currentProject.image ? (
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                    {t("projects.noImage")}
                  </div>
                )}

                {/* Floating Info Box inside the image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-[1.5rem] p-4 flex flex-col gap-3 shadow-lg">
                  {/* User / Client */}
                  <div className="flex items-center gap-3 text-slate-600">
                    <svg
                      className="w-5 h-5 shrink-0 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="text-[13px] font-medium">
                      {currentProject.client || "Private Owner"}
                    </span>
                  </div>
                  {/* Area */}
                  <div className="flex items-center gap-3 text-slate-600">
                    <svg
                      className="w-5 h-5 shrink-0 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="text-[13px]">
                      {currentProject.area || "N/A"}
                    </span>
                  </div>
                  {/* Duration */}
                  <div className="flex items-center gap-3 text-slate-600">
                    <svg
                      className="w-5 h-5 shrink-0 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-[13px]">
                      {currentProject.duration || "N/A"}
                    </span>
                  </div>
                  {/* Location */}
                  <div className="flex items-center gap-3 text-slate-600">
                    <svg
                      className="w-5 h-5 shrink-0 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-[13px] truncate">
                      {currentProject.location || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Arrows & Subtitle */}
              <div className="flex items-center justify-between px-2 mb-6">
                <button
                  onClick={prevProject}
                  className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-[#7fc41b] hover:border-[#7fc41b] transition-all bg-white shadow-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <span className="text-slate-400 font-medium text-sm tracking-wide">
                  {currentProject.category_name}{" "}
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <button
                  onClick={nextProject}
                  className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-[#7fc41b] hover:border-[#7fc41b] transition-all bg-white shadow-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Title & Description */}
              <h2 className="text-2xl font-medium text-slate-700 text-center mb-4 leading-snug px-4">
                {currentProject.title}
              </h2>
              <p className="text-slate-500 text-[15px] leading-[1.8] text-center mb-10 px-2">
                {currentProject.description}
              </p>

              {/* Pagination Dots */}
              <div className="flex justify-center items-center gap-3">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all border
                      ${
                        currentIndex === idx
                          ? "text-[#84cc16] border-[#84cc16] font-medium"
                          : "text-slate-300 border-slate-200 hover:border-slate-300"
                      }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </>
          ) : null}
        </div>

        {/* =========================================
            PC LAYOUT (Original Blue Box Design, Hidden on Mobile)
        ========================================= */}
        <div className="hidden lg:block bg-[#113243] rounded-[3rem] pt-8 w-full shadow-[0_10px_40px_-15px_rgba(17,50,67,0.2)]">
          {filteredProjects.length === 0 ? (
            <div className="text-center text-slate-500 py-20 bg-white rounded-t-[3rem] rounded-b-[3rem] w-full h-full shadow-sm">
              <p className="text-xl font-medium mb-2">
                {t("projects.emptyTitle")}
              </p>
              <p>{t("projects.noCategoryProjects")}</p>
            </div>
          ) : currentProject ? (
            <div className="bg-white rounded-t-[3rem] rounded-b-[3rem] w-full h-full px-16 py-12 flex flex-col relative shadow-sm">
              {/* PC Arrows */}
              <button
                onClick={prevProject}
                className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center text-slate-400 hover:text-[#7fc41b] hover:border-[#7fc41b] transition-all z-20"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextProject}
                className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center text-slate-400 hover:text-[#7fc41b] hover:border-[#7fc41b] transition-all z-20"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div className="flex flex-row gap-12 w-full">
                {/* PC Left Side */}
                <div className="w-1/2 flex flex-col justify-center">
                  <span className="text-slate-400 font-medium text-sm mb-3 uppercase tracking-wider">
                    {currentProject.category_name}{" "}
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-4xl font-medium text-slate-700 mb-6 leading-tight">
                    {currentProject.title}
                  </h2>
                  <p className="text-slate-500 text-[15px] leading-relaxed mb-10">
                    {currentProject.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center text-center p-5 border border-slate-100 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow">
                      <svg
                        className="w-6 h-6 text-slate-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                      <span className="text-slate-700 font-medium text-[13px] mb-1">
                        {t("projects.area")}
                      </span>
                      <span className="text-slate-400 text-xs">
                        {currentProject.area || "N/A"}
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-center p-5 border border-slate-100 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow">
                      <svg
                        className="w-6 h-6 text-slate-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-slate-700 font-medium text-[13px] mb-1">
                        {t("projects.location")}
                      </span>
                      <span className="text-slate-400 text-xs px-2">
                        {currentProject.location || "N/A"}
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-center p-5 border border-slate-100 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow">
                      <svg
                        className="w-6 h-6 text-slate-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-slate-700 font-medium text-[13px] mb-1">
                        {t("projects.duration")}
                      </span>
                      <span className="text-slate-400 text-xs">
                        {currentProject.duration || "N/A"}
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-center p-5 border border-slate-100 rounded-[1.5rem] shadow-sm hover:shadow-md transition-shadow">
                      <svg
                        className="w-6 h-6 text-slate-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <span className="text-slate-700 font-medium text-[13px] mb-1">
                        {t("projects.type")}
                      </span>
                      <span className="text-slate-400 text-xs">
                        {currentProject.category_name || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* PC Right Side Image */}
                <div className="w-1/2 flex items-center justify-center">
                  <div className="relative w-full h-full min-h-[400px]">
                    {currentProject.image ? (
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover rounded-[2rem] shadow-sm"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100 rounded-[2rem]">
                        {t("projects.noImage")}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* PC Pagination Dots */}
              <div className="flex justify-center items-center gap-3 mt-10 w-full">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all border ${
                      currentIndex === idx
                        ? "text-[#84cc16] border-[#84cc16] font-medium"
                        : "text-slate-300 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Projects;
