import React from "react";
import { useNavigate } from "react-router-dom";
import Homepage from "../assets/netflixAssets/Homepage.png";
import Movies from "../assets/netflixAssets/Movies.png";
import Search from "../assets/netflixAssets/Search.png";
import signIn from "../assets/netflixAssets/signIn.png";
import homepage from "../assets/foodAppAssets/homepage.png";
import ResPage from "../assets/foodAppAssets/ResPage.png";
import Cart from "../assets/foodAppAssets/Cart.png";

import youtubepage from "../assets/youtubepage.png";

const Portfolio = () => {
  const navigate = useNavigate();

  const portfolios = [
    {
      id: 1,
      name: "YouTube Clone",
      src: youtubepage,
      srcCode: "https://github.com/sanizuku/namaste-youtube",
      demo: "https://utubbe.netlify.app/",
      images: [youtubepage], // Add multiple images for the project
      overview: "A YouTube clone built with React.",
      skills: [
        "React",
        "Redux",
        "Youtube API integration",
        "Routing",
        "TailwindCss",
      ],
      functionalities: [
        "Search videos",
        "Play video",
        "View suggestions",
        "Comments Section N-level Nesting",
        "Live Chat using Redux",
        "Toggle Hamburger Menu",
        "Search Functionality like Flipkart",
      ],
    },
    {
      id: 2,
      name: "Netflix Clone",
      src: Homepage,
      srcCode: "https://github.com/sanizuku/netflix_gpt",
      demo: "https://lets-chill.netlify.app",
      images: [Homepage, Movies, Search, signIn],
      overview: "A Netflix homepage clone built using React.",
      skills: [
        "React",
        "Tailwind CSS",
        "Firebase Authentication",
        "Javascript",
        "TMDB API For Data",
        "React-Redux",
        "Routing",
      ],
      functionalities: [
        "User Signup",
        "User login",
        "Watch trailer",
        "List of Movies",
        "SearchMovie on search Page",
        "User SignOut",
      ],
    },
    {
      id: 3,
      name: "Food App",
      src: homepage,
      srcCode: "https://github.com/sanizuku/namaste-react",
      demo: "https://burgerbuns.netlify.app/",
      images: [homepage, ResPage, Cart],
      overview: "A Food Ordering app using React.",
      skills: [
        "React",
        "TailwindCSS",
        "ContextAPI",
        "Routing",
        "Offline/Online",
        "React-Redux",
        "SWIGGYLIVEAPI",
      ],
      functionalities: [
        "Search Foods/Restaurants",
        "Filter by Rating",
        "Add Card",
        "Swiggy Live API Data for HomePage",
      ],
    },
  ];

  const handleClick = (project) => {
    navigate(`/project-details`, { state: project });
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-4">Check out some of my personal projects here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 text-center sm:px-0">
          {portfolios.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-600 rounded-lg cursor-pointer"
              onClick={() => handleClick(project)}
            >
              <img
                src={project.src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-full m-4 duration-200 hover:scale-105">
                  {project.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
