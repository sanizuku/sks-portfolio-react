import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <footer className="w-full bg-black py-12 flex flex-col items-center">
      {/* Call to Action Heading */}
      <h2 className="text-4xl font-extrabold text-white mb-6 text-center tracking-wide">
        Let's Build Something Together
      </h2>

      {/* Email Link Styled */}
      <div className="relative flex items-center justify-center mb-8 w-full max-w-lg">
        <a
          href="mailto:sandeeps16x@gmail.com"
          className="flex items-center justify-between w-full bg-gray-800 hover:bg-gray-700 p-4 rounded-xl shadow-lg transition duration-300"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center">
            <HiOutlineMail size={28} className="text-white mr-3" />
            <p className="text-lg text-white font-medium">
              sandeeps16x@gmail.com
            </p>
          </div>
        </a>
      </div>

      {/* Contact Information */}
      <div className="text-center text-white mt-10">
        <div className="text-lg">
          <p>📞 Phone: +91-9876543210</p>
        </div>
      </div>

      {/* Resume Download */}
      <div className="flex justify-center items-center mt-10">
        <a
          href="/SkResume.pdf"
          download
          className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-8 py-3 rounded-full flex items-center font-semibold hover:scale-105 hover:shadow-lg transition-transform duration-300"
        >
          Download Resume
          <BsFillPersonLinesFill size={25} className="ml-3" />
        </a>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-700 mt-12"></div>

      {/* Copyright Info */}
      <div className="text-center text-gray-500 pt-6">
        <p>&copy; 2024 Sandeep Kumar Singh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
