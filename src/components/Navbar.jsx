import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  // This function decides which classes to apply.
  // If the link is active (isActive is true), it applies the green text class.
  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-sm font-bold text-green-600 transition" // Active State (Green)
      : "text-sm font-semibold text-slate-700 transition hover:text-slate-900"; // Normal State

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4"
        aria-label="Primary"
      >
        {/* Logo - Points to Home */}
        <NavLink
          to="/Home"
          className="text-xl font-extrabold tracking-tight text-slate-900"
        >
          {/* If you have a logo image, replace the text below with <img src={logo} alt="EverZone" className="h-10" /> */}
          <span className="text-slate-400">Ever</span>
          <span className="text-blue-500">ZONE</span>
        </NavLink>

        <ul className="flex flex-wrap items-center gap-8">
          <li>
            <NavLink to="/Home" className={getLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/AboutUs" className={getLinkClass}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Services" className={getLinkClass}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/Projects" className={getLinkClass}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs" className={getLinkClass}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
