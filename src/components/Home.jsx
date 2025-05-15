// src/components/Home.jsx
import React from "react";
import HeroImage from "../assets/hero.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => (
  <section
    id="home"
    className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-gray-900 to-black"
  >
    {/* Name with gradient text */}
    <h1
      className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent 
                   bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
    >
      Sandeep Singh
    </h1>
    {/* Role with subtle fade-in */}
    <p className="opacity-80 text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in-down">
      🧑🏻‍💻 Software Developer
    </p>

    <div className="max-w-4xl w-full flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Intro & CTA */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto md:mx-0">
          I architect 🔧 React apps that load in a blink, scale without
          breaking, and feel like home to users and developers alike.
        </p>

        <div className="flex justify-center md:justify-start items-center gap-4">
          {/* Resume button with group hover */}
          <a
            href="/sandeep_resume.pdf"
            download
            className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 
                       text-white rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          >
            Resume
            <MdOutlineKeyboardArrowRight
              size={24}
              className="ml-2 transform transition-transform group-hover:translate-x-1"
            />
          </a>

          {/* Social icons */}
          <a
            href="https://www.linkedin.com/in/sandeep-kumar-singh-220b03233"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/sanizuku"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      {/* Hero image with soft glow */}
      <div className="flex-1 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-20 blur-xl" />
          <img
            src={HeroImage}
            alt="Sandeep Portrait"
            className="relative rounded-full w-40 h-40 md:w-56 md:h-56 object-cover shadow-2xl border-4 border-gray-800"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
