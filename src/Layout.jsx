import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      <Chatbot />
    </div>
  );
}

export default Layout;
