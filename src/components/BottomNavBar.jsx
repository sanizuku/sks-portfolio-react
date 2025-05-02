// src/components/BottomNavBar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaFolderOpen,
  FaComments,
} from "react-icons/fa";
import { scroller } from "react-scroll";

const links = [
  { id: 1, to: "/", icon: FaHome, label: "Home", type: "route" },
  { id: 2, to: "/about", icon: FaUser, label: "About", type: "route" },
  {
    id: 3,
    to: "/portfolio",
    icon: FaBriefcase,
    label: "Portfolio",
    type: "route",
  },
  { id: 4, to: "/skill", icon: FaFolderOpen, label: "Skill", type: "route" },
  { id: 5, to: "contact", icon: FaComments, label: "Contact", type: "scroll" },
];

const BottomNavBar = () => {
  const [activeId, setActiveId] = useState(1);

  const handleClick = (id, type, to) => {
    setActiveId(id);
    if (type === "scroll") {
      scroller.scrollTo(to, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg bg-black bg-opacity-60 backdrop-blur-lg rounded-full shadow-lg py-3 px-6 flex justify-between items-center z-50">
      {links.map(({ id, to, icon: Icon, label, type }) => (
        <div key={id} className="flex-1 flex justify-center">
          {type === "route" ? (
            <NavLink
              to={to}
              onClick={() => handleClick(id, type, to)}
              className="relative group"
            >
              <div
                className={`p-3 rounded-full transition-transform duration-200 hover:scale-110 ${
                  activeId === id ? "bg-blue-400" : "bg-transparent"
                }`}
              >
                <Icon
                  size={20}
                  className={activeId === id ? "text-white" : "text-gray-400"}
                />
              </div>
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </NavLink>
          ) : (
            <button
              onClick={() => handleClick(id, type, to)}
              className="relative group focus:outline-none"
            >
              <div
                className={`p-3 rounded-full transition-transform duration-200 hover:scale-110 ${
                  activeId === id ? "bg-blue-400" : "bg-transparent"
                }`}
              >
                <Icon
                  size={20}
                  className={activeId === id ? "text-white" : "text-gray-400"}
                />
              </div>
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </button>
          )}
        </div>
      ))}
    </nav>
  );
};

export default BottomNavBar;
