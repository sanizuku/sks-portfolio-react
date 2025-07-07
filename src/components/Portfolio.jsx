// src/components/Portfolio.jsx
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Homepage from "../assets/netflixAssets/Homepage.png";
import YoutubePage from "../assets/youtubepage.png";
import FoodHome from "../assets/foodAppAssets/homepage.png";
import Login from "../assets/DevTinderrAssets/Login.png";

const projects = [
  {
    id: 1,
    title: "DevTinderr",
    image: Login,
    overview:
      "DevTinderr – a developer networking app built with React and Redux on the front end, Node.js, Express and JWT for secure authentication on the back end, MongoDB for data storage, deployed on an AWS EC2 instance, with a GoDaddy‑registered domain and DNS managed through Cloudflare.",
    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "JWT",
      "MongoDB",
      "AWS EC2",
      "GoDaddy",
      "Cloudflare",
    ],
    demo: "https://devtinderr.xyz",
    code: "https://github.com/sanizuku/devTinder-web",
  },
  {
    id: 2,
    title: "YouTube Clone",
    image: YoutubePage,
    overview:
      "A YouTube clone with React, Redux, TailwindCSS, and YouTube API integration.",
    tech: ["React", "Redux", "YouTube API", "TailwindCSS"],
    demo: "https://utubbe.netlify.app/",
    code: "https://github.com/sanizuku/namaste-youtube",
  },
  {
    id: 3,
    title: "Netflix Clone",
    image: Homepage,
    overview:
      "Netflix homepage clone built using React, Tailwind CSS, Firebase Auth, and TMDB API.",
    tech: ["React", "TailwindCSS", "Firebase Auth", "TMDB API"],
    demo: "https://Netglicht.netlify.app",
    code: "https://github.com/sanizuku/netflix_gpt",
  },
  {
    id: 4,
    title: "Food Ordering App",
    image: FoodHome,
    overview:
      "Food ordering app with React, TailwindCSS, Context API, and Swiggy API data.",
    tech: ["React", "TailwindCSS", "Context API", "Swiggy API"],
    demo: "https://burgerbuns.netlify.app/",
    code: "https://github.com/sanizuku/namaste-react",
  },
];

const Portfolio = () => (
  <section
    name="portfolio"
    className="bg-gradient-to-b from-gray-900 to-black w-full text-white min-h-screen py-12"
  >
    <div className="max-w-screen-lg mx-auto px-4">
      <h2 className="text-4xl font-bold border-b-4 border-cyan-500 inline-block mb-6">
        Portfolio
      </h2>
      <p className="mb-8">Some of my personal projects & experiments</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ id, title, image, overview, tech, demo, code }) => (
          <div
            key={id}
            className="group flex flex-col bg-gray-700 border border-transparent rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:bg-transparent hover:border-blue-400"
          >
            {/* Image with padding */}
            <div className="p-4">
              <img
                loading="lazy"
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 flex-1">{overview}</p>

              {/* Tech badges */}
              <ul className="flex flex-wrap gap-2 mb-4">
                {tech.map((item) => (
                  <li
                    key={item}
                    className="bg-gray-600 px-2 py-1 text-xs rounded"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Action buttons */}
              <div className="mt-auto flex space-x-4">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-md transition"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-md transition"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
