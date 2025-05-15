// src/components/About.jsx
import React from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaSmile,
} from "react-icons/fa";

const About = () => (
  <section
    id="about"
    className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-200 py-20"
  >
    <div className="max-w-4xl mx-auto px-4 space-y-16">
      {/* Header */}
      <h2 className="text-5xl font-bold border-b-4 border-cyan-500 inline-block">
        About Me
      </h2>

      {/* Cards Container */}
      <div className="grid md:grid-cols-2 gap-8">
        <IntroCard />
        <div className="space-y-8">
          <TimelineCard
            icon={<FaGraduationCap className="text-cyan-400" />}
            title="Education"
            entries={[
              {
                year: "2015–2019",
                label: "B.E. Electronics & Communication, DSATM",
              },
              {
                year: "Mar–Oct 2022",
                label: "PG-DAC, Advanced Computing, C‑DAC",
              },
            ]}
          />
          <TimelineCard
            icon={<FaBriefcase className="text-green-400" />}
            title="Experience"
            entries={[
              {
                year: "Nov 2022–Present",
                label:
                  "Associate Software Engineer, Laminaar Aviation Infotech",
              },
            ]}
          />
          <TimelineCard
            icon={<FaCertificate className="text-yellow-400" />}
            title="Certifications"
            entries={[
              {
                year: "2025",
                label: "Certified FrontEnd Developer(React) — HackerRank",
              },
              { year: "2024", label: "NodeJS & Express — NamasteDev.com" },
            ]}
          />
        </div>
      </div>
    </div>
  </section>
);

const IntroCard = () => (
  <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 hover:shadow-2xl transition">
    <div className="flex items-center mb-4 space-x-3">
      <FaSmile size={28} className="text-yellow-300 animate-bounce" />
      <h3 className="text-2xl font-semibold">Hi, I’m Sandeep Singh</h3>
    </div>
    <p className="mb-4 leading-relaxed">
      I’m a Software Engineer specializing in React.js with 3 years experience
      building high‑performance, scalable web applications. Currently at
      Laminaar Aviation Infotech, I focus on crafting seamless user experiences
      and clean, maintainable code.
    </p>
    <p className="leading-relaxed">
      I hold a BE in Electronics & Communication and a PG‑DAC in Advanced
      Computing. Certified in Java and problem solving, I’m passionate about
      continuous learning and exploring the latest web technologies.
    </p>
  </div>
);

const TimelineCard = ({ icon, title, entries }) => (
  <div className="relative pl-8">
    <div className="absolute left-0 top-2 text-xl">{icon}</div>
    <h4 className="text-2xl font-semibold mb-6">{title}</h4>
    <div className="border-l-2 border-gray-600 ml-1">
      {entries.map(({ year, label }, idx) => (
        <div key={idx} className="relative mb-8 pl-6">
          <div className="absolute -left-4 top-0">
            <span className="block w-3 h-3 bg-cyan-500 rounded-full"></span>
          </div>
          <time className="block font-mono text-gray-300">{year}</time>
          <p className="mt-1">{label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default About;
