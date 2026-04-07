import React from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  // Simplified link class for anchor tags
  const linkClass =
    "text-sm font-medium text-slate-600 transition hover:text-[#84cc16]";

  const changeLanguage = async (language) => {
    await i18n.changeLanguage(language);
    localStorage.setItem("lng", language);
  };

  const getLanguageClass = (language) =>
    i18n.resolvedLanguage === language
      ? "text-[#84cc16]"
      : "text-slate-500 transition hover:text-slate-900";

  return (
    <header className="sticky top-0 z-50 bg-white py-4 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LEFT: Logo */}
        <div className="flex items-center justify-between gap-20">
          <a href="#home" className="flex flex-col items-center gap-2">
            <div className="flex h-15 w-15 items-center justify-center rounded-full border-0.5 border-[#84cc16]">
              <img src="/src/assets/logo.jpg" alt="Ever Zone Logo" />
            </div>
          </a>

          {/* CENTER: Navigation Links */}
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <a href="#home" className={linkClass}>
                {t("navbar.home")}
              </a>
            </li>
            <li>
              <a href="#about" className={linkClass}>
                {t("navbar.aboutUs")}
              </a>
            </li>
            <li>
              <a href="#services" className={linkClass}>
                {t("navbar.services")}
              </a>
            </li>
            <li>
              <a href="#projects" className={linkClass}>
                {t("navbar.projects")}
              </a>
            </li>
            <li>
              <a href="#contact" className={linkClass}>
                {t("navbar.contactUs")}
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT: Language Switcher */}
        <div className="flex items-center gap-4 text-sm font-bold">
          <button
            type="button"
            onClick={() => changeLanguage("en")}
            className={getLanguageClass("en")}
          >
            EN
          </button>
          <span className="text-slate-300">|</span>
          <button
            type="button"
            onClick={() => changeLanguage("my")}
            className={getLanguageClass("my")}
          >
            MM
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
