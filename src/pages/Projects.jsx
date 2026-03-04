import React, { useState, useEffect } from "react";
import apiClient from "../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // UI State for the slider and filters
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

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

        // Extract unique categories for the filter tabs
        const uniqueCategories = [
          ...new Set(dataArray.map((p) => p.category_name)),
        ].filter(Boolean);
        setCategories(uniqueCategories);

        // Set the first category as active by default
        if (uniqueCategories.length > 0) {
          setActiveCategory(uniqueCategories[0]);
        }

        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects.");
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects based on the active category tab
  const filteredProjects = projects.filter(
    (p) => p.category_name === activeCategory
  );

  // Get the specific project to display right now
  const currentProject = filteredProjects[currentIndex];

  // Reset slider to index 0 whenever the user clicks a new category tab
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  // Slider Navigation
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
          Loading projects...
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
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header and Category Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <h1 className="text-2xl md:text-3xl font-medium text-slate-600">
            Discover our Projects
          </h1>

          {/* Category Pill Navigation */}
          {categories.length > 0 && (
            <div className="flex bg-[#113243] rounded-full p-1.5 shadow-md overflow-x-auto max-w-full">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#7fc41b] text-[#113243] shadow-sm"
                      : "text-white hover:bg-[#18445a]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Empty State */}
        {projects.length === 0 ? (
          <div className="text-center text-slate-500 py-20 bg-white rounded-2xl shadow-sm border border-slate-200">
            <p className="text-xl font-medium mb-2">No projects found.</p>
            <p>Your database is currently empty.</p>
          </div>
        ) : currentProject ? (
          /* Main Project Display Card */
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 flex flex-col lg:flex-row">
            {/* Left Side: Text and Details */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6">
                  {currentProject.title}
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-12">
                  {currentProject.description}
                </p>

                {/* 4-Grid Information Box */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-12">
                  {/* Area */}
                  <div className="flex flex-col items-center text-center p-6 border border-slate-100 rounded-2xl bg-slate-50">
                    <svg
                      className="w-8 h-8 text-slate-400 mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      ></path>
                    </svg>
                    <span className="text-slate-400 text-sm font-medium mb-1">
                      Area
                    </span>
                    <span className="text-slate-700 font-semibold">
                      {currentProject.area || "N/A"}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex flex-col items-center text-center p-6 border border-slate-100 rounded-2xl bg-slate-50">
                    <svg
                      className="w-8 h-8 text-slate-400 mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <span className="text-slate-400 text-sm font-medium mb-1">
                      Location
                    </span>
                    <span className="text-slate-700 font-semibold text-sm">
                      {currentProject.location || "N/A"}
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="flex flex-col items-center text-center p-6 border border-slate-100 rounded-2xl bg-slate-50">
                    <svg
                      className="w-8 h-8 text-slate-400 mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span className="text-slate-400 text-sm font-medium mb-1">
                      Duration
                    </span>
                    <span className="text-slate-700 font-semibold text-sm">
                      {currentProject.duration || "N/A"}
                    </span>
                  </div>

                  {/* Type/Category */}
                  <div className="flex flex-col items-center text-center p-6 border border-slate-100 rounded-2xl bg-slate-50">
                    <svg
                      className="w-8 h-8 text-slate-400 mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                    <span className="text-slate-400 text-sm font-medium mb-1">
                      Type
                    </span>
                    <span className="text-slate-700 font-semibold">
                      {currentProject.category_name || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Slider Navigation Arrows */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevProject}
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-200 text-slate-400 hover:border-[#7fc41b] hover:text-[#7fc41b] transition-colors"
                >
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
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </button>
                <span className="text-slate-400 font-medium">
                  {currentIndex + 1} / {filteredProjects.length}
                </span>
                <button
                  onClick={nextProject}
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-slate-200 text-slate-400 hover:border-[#7fc41b] hover:text-[#7fc41b] transition-colors"
                >
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="w-full lg:w-1/2 h-[400px] lg:h-auto bg-slate-200">
              {currentProject.image ? (
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  No Image Available
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center text-slate-500 py-20 bg-white rounded-2xl shadow-sm border border-slate-200">
            <p className="text-xl font-medium mb-2">
              No projects in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
