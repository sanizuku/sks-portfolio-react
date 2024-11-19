import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  const { name, images, overview, skills, functionalities, demo, srcCode } =
    location.state;

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen text-white p-6">
      <h2 className="text-4xl font-bold text-center mb-8">{name}</h2>

      {/* Buttons for switching between tabs */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-md transition duration-300 ease-in-out ${
            activeTab === "overview"
              ? "bg-gray-700 text-white shadow-lg shadow-white" // Light shadow effect
              : "bg-gray-500 text-gray-200 hover:bg-gray-600"
          }`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <a href={demo} target="_blank" rel="noreferrer">
          <button className="px-4 py-2 bg-blue-500 rounded-md transition duration-300 ease-in-out hover:bg-blue-600">
            Demo
          </button>
        </a>
        <a href={srcCode} target="_blank" rel="noreferrer">
          <button className="px-4 py-2 bg-green-500 rounded-md transition duration-300 ease-in-out hover:bg-green-600">
            Code
          </button>
        </a>
      </div>
      <h1 className="flex justify-center text-red-400 font-extrabold">
        ( Resolving CORS Issue till then please Use CORS Extension...){" "}
      </h1>
      {/* Side by Side layout */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        {/* Left: Images Section */}
        <div className="w-full md:w-1/2 ml-10">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`project-${index}`}
              className="mb-4 max-w-xs md:max-w-sm w-full h-auto rounded-md"
            />
          ))}
        </div>

        {/* Right: Project Details Section */}
        {activeTab === "overview" && (
          <div className="w-full md:w-1/2 space-y-6">
            {/* Overview */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Overview</h3>
              <p>{overview}</p>
            </div>

            {/* Skills Used */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Skills Used</h3>
              <ul className="list-disc ml-6">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Functionalities */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Functionalities</h3>
              <ul className="list-disc ml-6">
                {functionalities.map((functionality, index) => (
                  <li key={index}>{functionality}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
