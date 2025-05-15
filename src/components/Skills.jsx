// src/components/Skills.jsx
import React from "react";

// Frontend logos
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";

// Backend & DevOps icons (via react-icons)
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAzuredevops,
  SiJsonwebtokens,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "React.js", logo: reactLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        icon: <SiNodedotjs size={24} className="text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress size={24} className="text-gray-300" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={24} className="text-green-600" />,
      },
      {
        name: "RESTful APIs",
        icon: <SiExpress size={24} className="text-blue-400" />,
      },
      {
        name: "JWT Authentication",
        icon: <SiJsonwebtokens size={28} className="text-yellow-400" />,
      },
    ],
  },
  {
    title: "DevOps",
    items: [
      {
        name: "Azure DevOps",
        icon: <SiAzuredevops size={24} className="text-blue-600" />,
      },
      {
        name: "CI/CD Pipelines",
        icon: <SiAzuredevops size={24} className="text-blue-400" />,
      },
      {
        name: "Docker",
        icon: <SiNodedotjs size={24} className="text-blue-300" />,
      },
      {
        name: "Git & GitHub",
        icon: <SiExpress size={24} className="text-gray-400" />,
      },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="bg-gray-900 text-white py-20">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-extrabold mb-4 inline-block border-b-4 border-cyan-500">
        Skills
      </h2>
      <p className="text-gray-400 mb-12">
        Organized by domain for quick reference
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map(({ title, items }) => (
          <div
            key={title}
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <ul className="w-full space-y-3">
              {items.map(({ name, logo, icon }) => (
                <li
                  key={name}
                  className="flex items-center bg-gray-800 bg-opacity-50 p-2 rounded-lg"
                >
                  {logo && (
                    <img src={logo} alt={name} className="w-6 h-6 mr-3" />
                  )}
                  {icon && <span className="mr-3">{icon}</span>}
                  <span className="text-gray-200">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
