import React, { useState } from "react";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("Residential");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Dummy Data - You can replace this with real data later
  const allProjects = {
    Residential: [
      {
        title: "Modern Family Home",
        location: "Yangon, Myanmar",
        details: ["3 Bedrooms", "2 Bathrooms", "2400 Sq Ft"],
        scope: "Full structural design and interior finishing.",
        images: ["Image 1", "Image 2", "Image 3"], // Placeholders
      },
      {
        title: "Luxury Condo Renovation",
        location: "Mandalay, Myanmar",
        details: ["Penthouse Suite", "Smart Home System", "Custom Lighting"],
        scope: "Electrical and mechanical engineering overhaul.",
        images: ["Image A", "Image B"],
      },
    ],
    Commercial: [
      {
        title: "City Center Mall",
        location: "Downtown",
        details: ["5 Floors", "Underground Parking", "Food Court"],
        scope: "HVAC systems and structural steel framework.",
        images: ["Mall 1", "Mall 2"],
      },
    ],
    Industrial: [
      {
        title: "Logistics Warehouse",
        location: "Industrial Zone 1",
        details: ["Steel Structure", "Loading Docks", "Automated Systems"],
        scope: "Foundation planning and safety systems.",
        images: ["Factory 1", "Factory 2"],
      },
    ],
  };

  // Get projects for current category
  const projects = allProjects[activeCategory] || [];
  const currentProject = projects[currentProjectIndex];

  // Handlers
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentProjectIndex(0); // Reset to first project when switching category
    setCurrentImageIndex(0);
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    setCurrentImageIndex(0); // Reset image when switching project
  };

  const prevProject = () => {
    setCurrentProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!currentProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
  };

  const prevImage = () => {
    if (!currentProject) return;
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + currentProject.images.length) % currentProject.images.length
    );
  };

  return (
    <div className="relative min-h-screen w-full bg-white px-6 py-12 lg:px-16">
      {/* Title */}
      <h1 className="mb-10 text-3xl font-bold text-slate-900">Our Projects</h1>

      {/* Category Tabs */}
      <div className="mb-8 flex flex-wrap gap-4">
        {["Residential", "Commercial", "Industrial"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-6 py-3 text-sm font-bold text-white transition ${
              activeCategory === cat
                ? "bg-black"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {projects.length > 0 ? (
        <>
          {/* Main Content Split: Details vs Image */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Project Details */}
            <div className="bg-gray-100 p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">
                {currentProject.title}
              </h2>

              <div className="space-y-4 text-slate-700">
                <p>
                  <span className="font-bold">Location-</span>{" "}
                  {currentProject.location}
                </p>
                {currentProject.details.map((detail, idx) => (
                  <p key={idx}>
                    <span className="font-bold">Details-</span> {detail}
                  </p>
                ))}
                <p className="mt-4">
                  <span className="font-bold">Scope-</span>{" "}
                  {currentProject.scope}
                </p>
              </div>
            </div>

            {/* Right: Image Carousel */}
            <div className="relative flex h-80 items-center justify-center bg-gray-300 shadow-sm lg:h-auto">
              <span className="text-xl font-bold text-slate-600">
                {currentProject.images[currentImageIndex]}
              </span>

              {/* Image Navigation Arrows */}
              <div className="absolute bottom-4 flex gap-4">
                <button
                  onClick={prevImage}
                  className="rounded-full bg-black/20 p-2 hover:bg-black/40"
                >
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="rounded-full bg-black/20 p-2 hover:bg-black/40"
                >
                  <svg
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Project Pagination Controls */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <button onClick={prevProject} className="p-2">
              <svg
                className="h-8 w-8 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {projects.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 w-2 rounded-full ${
                    idx === currentProjectIndex ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button onClick={nextProject} className="p-2">
              <svg
                className="h-8 w-8 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <div className="py-20 text-center text-gray-500">
          No projects found in this category.
        </div>
      )}

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

export default Projects;
