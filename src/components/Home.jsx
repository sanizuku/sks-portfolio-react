import React from "react";
import HeroImage from "../assets/hero.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const Home = () => {
  // "homepage": "https://sanizuku.github.io/sks-portfolio-react",
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Software Developer
          </h2>
          <p className="text-white py-4 max-w-md">
            I am a passionate ReactJS developer with a strong focus on building
            interactive and dynamic web applications. My journey in web
            development has equipped me with the skills to craft seamless user
            experiences, particularly through the implementation of complex
            forms and data-driven components using AG Grid. Proven ability to
            work independently and collaboratively in fast-paced environments
          </p>

          <div>
            <Link
              to="portfolio"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my-profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
