import React from "react";
import { Link } from "react-router-dom";

const links = [
  { id: 1, link: "/", label: "Home" },
  { id: 2, link: "about", label: "About" },
  { id: 3, link: "portfolio", label: "Portfolio" },
  { id: 4, link: "experience", label: "Experience" },
  { id: 5, link: "contact", label: "Contact" },
];

const NavLinkItem = () => {
  return (
    <ul className="flex md:flex-row flex-col">
      {links.map(({ id, link, label }) => (
        <li
          key={id}
          className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
        >
          <Link to={link}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinkItem;
