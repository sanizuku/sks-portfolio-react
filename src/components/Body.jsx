// src/components/Body.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import Contact from "./Contact";
import BottomNavBar from "./BottomNavBar";
import ScrollToTop from "./ScrollToTop";

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* main content area grows */}
      <ScrollToTop />
      <SocialLinks />
      <main className="flex-1">
        <Outlet />
      </main>

      {/* footer */}
      <Contact />
      <BottomNavBar />
    </div>
  );
};

export default Body;
