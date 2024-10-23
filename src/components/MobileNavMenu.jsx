import React from "react";
import NavLinkItem from "./NavLinkItem"; // Reuse the link component

const MobileNavMenu = ({ handleClick }) => {
  return (
    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
      <NavLinkItem handleClick={handleClick} />
    </ul>
  );
};

export default MobileNavMenu;
