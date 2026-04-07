import React from "react";
import { useTranslation } from "react-i18next";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-full bg-slate-50">
      {/* 1. Dark Blue Header Section */}
      <div className="w-full bg-[#1a455a] px-6 pb-32 pt-16 text-center lg:px-16">
        <h1 className="text-3xl font-medium text-white sm:text-4xl">
          {t("aboutUs.header")}
        </h1>
      </div>

      {/* 2. Overlapping White Content Card */}
      <div className="mx-auto -mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen rounded-t-[3rem] bg-white p-8 shadow-xl sm:p-12 lg:p-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {/* LEFT COLUMN */}
            <div className="space-y-12">
              {/* Company Profile */}
              <section>
                <h2 className="mb-6 text-2xl font-bold text-slate-700 sm:text-3xl">
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
                <h2 className="mb-6 text-2xl font-bold text-slate-700 sm:text-3xl">
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
            <div className="space-y-12">
              {/* Vision & Mission */}
              <section>
                <h2 className="mb-6 text-2xl font-bold text-slate-700 sm:text-3xl">
                  {t("aboutUs.visionTitle")}
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>{t("aboutUs.vision")}</p>
                  <p>{t("aboutUs.mission")}</p>
                  <p>{t("aboutUs.coreValuesTitle")}</p>
                  <ul className="list-disc pl-5 space-y-1">
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
                <h2 className="mb-6 text-2xl font-bold text-slate-700 sm:text-3xl">
                  {t("aboutUs.consultantsTitle")}
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>{t("aboutUs.consultantsSubtitle")}</p>

                  <div>
                    <p className="font-semibold">{t("aboutUs.c1Title")}</p>
                    <p className="pl-4">{t("aboutUs.c1Name")}</p>
                    <p className="pl-4 font-medium">{t("aboutUs.c1Role")}</p>
                  </div>

                  <div>
                    <p className="font-semibold">{t("aboutUs.c2Title")}</p>
                    <p className="pl-4">{t("aboutUs.c2Name")}</p>
                    <p className="pl-4 font-medium">{t("aboutUs.c2Role")}</p>
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
