import React from "react";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/logo.jpg";

function Navbar() {
  const { t, i18n } = useTranslation();

  // Helper to handle active state styling
  // Uses the new Lime Green color (#84cc16) from your design
  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-sm font-bold text-[#84cc16] transition"
      : "text-sm font-medium text-slate-600 transition hover:text-slate-900";

  const changeLanguage = async (language) => {
    await i18n.changeLanguage(language);
    localStorage.setItem("lng", language);
  };

  const getLanguageClass = (language) =>
    i18n.resolvedLanguage === language
      ? "text-[#84cc16]"
      : "text-slate-500 transition hover:text-slate-900";

  return (
    <header className="sticky top-0 z-50 bg-white py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LEFT: Logo */}
        <div className="flex  items-center justify-between gap-20">
          <NavLink to="/Home" className="flex flex-col items-center gap-2">
            <div className="flex h-15 w-15 items-center justify-center rounded-full border-0.5 border-[#84cc16]">
              <img
                src={logoImg}
                alt="Ever Zone Logo"
              />
            </div>
          </NavLink>

          {/* CENTER: Navigation Links */}
          {/* hidden on mobile (md:flex), visible on desktop */}
          <ul className="hidden items-center gap-8 md:flex">
            <li>
              <NavLink to="/Home" className={getLinkClass}>
                {t("navbar.home")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs" className={getLinkClass}>
                {t("navbar.aboutUs")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/Services" className={getLinkClass}>
                {t("navbar.services")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/Projects" className={getLinkClass}>
                {t("navbar.projects")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/ContactUs" className={getLinkClass}>
                {t("navbar.contactUs")}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* RIGHT: Language Switcher */}
        <div className="flex items-center gap-4 text-sm font-bold">
          <button
            type="button"
            onClick={() => changeLanguage("en")}
            className={getLanguageClass("en")}
            aria-pressed={i18n.resolvedLanguage === "en"}
          >
            EN
          </button>
          <span className="text-slate-300">|</span>
          <button
            type="button"
            onClick={() => changeLanguage("my")}
            className={getLanguageClass("my")}
            aria-pressed={i18n.resolvedLanguage === "my"}
          >
            MM
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
