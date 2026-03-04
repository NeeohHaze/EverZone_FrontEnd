import React, { useState, useEffect } from "react";
import apiClient from "../services/api";

function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Track which service is currently expanded (default to the first one: 0)
  const [expandedIndex, setExpandedIndex] = useState(0);

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
        setError("Failed to load services.");
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-50">
        <div className="text-xl font-semibold animate-pulse text-[#113243]">
          Loading services...
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
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Dark Blue Header Background */}
      <div className="bg-[#113243] pt-16 pb-32">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-medium text-center text-white tracking-wide">
            Services we provide
          </h1>
        </div>
      </div>

      {/* Main White Card Overlapping Header */}
      <div className="container mx-auto px-4 max-w-5xl -mt-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 md:p-10 border border-slate-100">
          {services.length === 0 ? (
            <div className="text-center text-slate-500 py-16">
              <p className="text-xl font-medium mb-2">No services found.</p>
              <p>Your database is currently empty.</p>
            </div>
          ) : (
            <div className="flex flex-col">
              {services.map((service, index) => {
                const isActive = expandedIndex === index;
                const number = String(index + 1).padStart(2, "0");

                return (
                  <div
                    key={service.id}
                    className="border-b border-slate-200 last:border-0"
                  >
                    {/* Active/Expanded State */}
                    {isActive ? (
                      <div className="bg-[#f4f7f8] rounded-xl p-6 md:p-8 my-4 shadow-sm transition-all duration-500 ease-in-out animate-fadeIn">
                        {/* Header of active item */}
                        <div className="flex items-center gap-6 mb-6">
                          <span className="text-slate-400 font-medium text-lg w-8">
                            {number}
                          </span>
                          <h2 className="text-2xl font-semibold text-[#113243]">
                            {service.title}
                          </h2>
                        </div>

                        {/* Content of active item */}
                        <div className="flex flex-col md:flex-row gap-8">
                          {/* Image */}
                          <div className="w-full md:w-2/5 h-48 md:h-56 bg-white p-2 rounded-lg shadow-sm shrink-0">
                            {service.image ? (
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover rounded"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100 rounded">
                                No Image
                              </div>
                            )}
                          </div>

                          {/* Description Text */}
                          <div className="w-full md:w-3/5 flex items-center">
                            <p className="text-slate-600 text-base md:text-lg leading-relaxed italic">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Inactive/Collapsed State */
                      <div
                        onClick={() => setExpandedIndex(index)}
                        className="flex items-center gap-6 py-6 px-4 md:px-8 cursor-pointer hover:bg-slate-50 transition-colors group"
                      >
                        <span className="text-slate-400 font-medium text-lg w-8 group-hover:text-[#7fc41b] transition-colors">
                          {number}
                        </span>
                        <h2 className="text-xl font-medium text-slate-600 group-hover:text-[#113243] transition-colors">
                          {service.title}
                        </h2>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Services;
