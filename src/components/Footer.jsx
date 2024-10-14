import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 flex flex-col items-center ">
      {/* Call to Action Heading */}
      <h2 className="text-4xl font-bold text-white mb-6 text-center">
        Let's Build Something Together
      </h2>

      {/* Email Link Styled as Flat Search Input */}
      <div className="relative flex items-center justify-center mb-8 w-full max-w-lg">
        <a
          href="mailto:foo@gmail.com"
          className="flex items-center justify-between w-full bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition duration-300"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center">
            <HiOutlineMail size={30} className="text-white mr-4" />
            <p className="text-lg text-white">sandeeps16x@gmail.com</p>
          </div>
        </a>
      </div>

      {/* Copyright Info */}
      <div className="text-center text-gray-400">
        <p>&copy; 2024 Sandeep Kumar Singh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
