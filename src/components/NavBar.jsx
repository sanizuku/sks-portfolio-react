import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinkItem from "./NavLinkItem"; // Import the new component
import MobileNavMenu from "./MobileNavMenu"; // Import mobile nav menu

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="flex fixed top-0 z-50 justify-between items-center w-full h-20 px-4 text-white bg-black">
      <div>
        <h1 className="text-5xl font-signature ml-2">Sandeep Singh</h1>
      </div>

      <ul className="hidden md:flex">
        <NavLinkItem />
      </ul>

      <div
        onClick={handleClick}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && <MobileNavMenu handleClick={handleClick} />}
    </div>
  );
};

export default NavBar;
