import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import SocialLinks from "./SocialLinks";

import Contact from "./Contact";

const Body = () => {
  return (
    <div>
      <NavBar /> {/* Navbar is fixed at the top */}
      <div className="pt-20">
        <SocialLinks />
        <Outlet /> {/* All main page content appears here with a margin-top */}
        <Contact />
      </div>
    </div>
  );
};

export default Body;
