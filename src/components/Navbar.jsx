import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3"
        aria-label="Primary"
      >
        <a href="/" className="text-xl font-extrabold tracking-tight text-slate-900">
          EverZone
        </a>

        <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
          <li>
            <Link to="/Home"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-900"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-900"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Services"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-900"
            >
              Services
            </Link>
          </li>
          <li>
            <Link to="/Projects"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-900/5 hover:text-slate-900"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="/ContactUs"
              className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;