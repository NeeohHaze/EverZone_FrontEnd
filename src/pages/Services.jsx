import React, { useState, useEffect } from "react";
import apiClient from "../services/api";
import { useTranslation } from "react-i18next";

function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="min-h-screen w-full bg-white pb-24">
      {/* Dark Blue Header Section (Matches Figma Solid Block) */}
      <div className="w-full bg-[#113243] py-14 text-center">
        <h1 className="text-3xl font-medium text-white sm:text-4xl tracking-wide">
          {t("services.title")}
        </h1>
      </div>

      {/* Services Grid Section */}
      <div className="container mx-auto px-6 lg:px-16 pt-16 max-w-7xl">
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
