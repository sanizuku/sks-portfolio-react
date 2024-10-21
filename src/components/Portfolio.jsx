// import React from "react";
// // import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import NetflixHomepage from "../assets/NetflixHomepage.png";
// import logoapp from "../assets/logoapp.png";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import youtubepage from "../assets/youtubepage.png";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: youtubepage,
//       srcCode: "https://github.com/sanizuku/namaste-youtube",
//       demo: "https://utubbe.netlify.app/",
//     },
//     {
//       id: 2,
//       src: NetflixHomepage,
//       srcCode: "https://github.com/sanizuku/netflix_gpt",
//       demo: "https://utubbe.netlify.app/",
//     },
//     {
//       id: 3,
//       src: logoapp,
//       srcCode: "https://github.com/sanizuku/namaste-react ",
//       demo: "https://burgerbuns.netlify.app/",
//     },
//     { id: 4, src: reactParallax },
//     { id: 5, src: reactSmooth },
//     // { id: 6, src: reactWeather },
//   ];
//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-4">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//           <p className="py-4">Check out some of my personal projects here</p>
//         </div>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 text-center sm:px-0">
//           {portfolios.map(({ id, src, srcCode, demo }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-300 hover:scale-105"
//               />

//               <div className="flex items-center justify-center">
//                 <a
//                   className="bg-zinc-800 m-6 p-4 rounded-lg"
//                   href={demo}
//                   rel="noreferrer"
//                   target="_blank"
//                 >
//                   <button className="w-full  duration-200 hover:scale-105">
//                     Demo
//                   </button>
//                 </a>
//                 <a
//                   className="bg-zinc-800 m-6 p-4 rounded-lg"
//                   href={srcCode}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <button className="w-full  duration-200 hover:scale-105 ">
//                     Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
import React from "react";
import { useNavigate } from "react-router-dom";
import NetflixHomepage from "../assets/NetflixHomepage.png";
import logoapp from "../assets/logoapp.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
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
      images: [youtubepage, youtubepage, youtubepage, youtubepage, youtubepage], // Add multiple images for the project
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
        "Comments Section",
      ],
    },
    {
      id: 2,
      name: "Netflix Clone",
      src: NetflixHomepage,
      srcCode: "https://github.com/sanizuku/netflix_gpt",
      demo: "https://utubbe.netlify.app/",
      images: [NetflixHomepage, NetflixHomepage],
      overview: "A Netflix homepage clone built using React.",
      skills: ["React", "Tailwind CSS"],
      functionalities: ["Movie listing", "User login", "Watch trailers"],
    },
    {
      id: 3,
      name: "Logo App",
      src: logoapp,
      srcCode: "https://github.com/sanizuku/namaste-react",
      demo: "https://burgerbuns.netlify.app/",
      images: [logoapp, logoapp],
      overview: "A logo creation app using React.",
      skills: ["React", "CSS"],
      functionalities: ["Create logos", "Customize logo templates"],
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
        <div className="pb-4">
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
