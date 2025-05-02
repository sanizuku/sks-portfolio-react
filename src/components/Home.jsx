// src/components/Home.jsx
import React from "react";
import HeroImage from "../assets/hero.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      {/* Header: Name and Role */}
      <div className="text-center mb-12 ">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white font-serif">
          Sandeep Singh
        </h1>
        <div className="flex items-center justify-center mt-2 text-xl md:text-2xl font-light text-gray-300">
          🧑🏻‍💻 Software Developer
        </div>
      </div>

      {/* Main Content: Info + Button and Image */}
      <div className=" max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Info & CTA */}
        <div className="flex-1 space-y-6">
          <p className="text-base md:text-lg text-gray-300 max-w-md">
            I architect 🔧 React apps that load in a blink, scale without
            breaking, and feel like home to users and developers alike.
          </p>
          <a
            href="/Resume_25.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            Download Resume
            <MdOutlineKeyboardArrowRight size={24} className="ml-2" />
          </a>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={HeroImage}
            alt="Sandeep Portrait"
            className="rounded-full w-40 h-40 md:w-56 md:h-56 object-cover shadow-2xl border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
