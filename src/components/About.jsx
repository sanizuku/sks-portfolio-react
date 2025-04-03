import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-200"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center h-full">
        <h2 className="text-5xl font-bold border-b-4 border-gray-600 mb-6">
          About
        </h2>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1">
            <Introduction />
          </div>
          <div className="flex-1">
            <Education />
            <Experience />
            {/* <Certificate /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const Introduction = () => (
  <div>
    <p className="text-xl">
      <span className="animate-pulse text-4xl">👋</span> Hi! I’m Sandeep Kumar
      Singh, a dedicated Software Engineer with 2+ years in React.js. Currently,
      I create scalable web apps at Laminaar Aviation Infotech, focusing on
      seamless user experiences.
    </p>
    <p className="text-xl">
      I hold a Bachelor’s in Engineering and a postgraduate diploma in Advanced
      Computing from C-DAC. Certified in Java and Problem Solving, I
      continuously refine my skills in front-end technologies.
    </p>
    <p className="text-xl">
      Passionate about writing clean, responsive code, I aim to develop
      high-performance applications that stand the test of time. When I’m not
      coding, I explore tech trends or work on personal projects. Let’s connect
      and create something impactful!
    </p>
  </div>
);

const Education = () => (
  <div className="mb-6">
    <h3 className="text-2xl font-bold">Education</h3>
    <Timeline
      year="2015 - 2019"
      institution="Dayananda Sagar Academy of Technology and Management"
    />
    <Timeline
      year="March' 2022 - Oct' 2022"
      institution="C-DAC, Mumbai (Advanced Computing)"
    />
  </div>
);

const Experience = () => (
  <div className="mb-6">
    <h3 className="text-2xl font-bold">Experience</h3>
    <Timeline
      year="Nov' 2022 - Present"
      institution="Laminaar Aviation Infotech"
      position="Associate Software Engineer (React)"
    />
  </div>
);
// const Certificate = ({ title, provider }) => (
//   <div className="mb-2">
//     <p className="text-lg font-semibold">{title}</p>
//     <p className="text-sm text-gray-400">{provider}</p>
//   </div>
// );
// <div className="mb-6">
//   <h3 className="text-2xl font-bold">Certificates</h3>
//   <div className="ml-4">
//     <Certificate title="Advanced React" provider="Meta" />
//     <Certificate
//       title="Building Backend Applications with NodeJS and Express"
//       provider="IBM"
//     />
//     <Certificate title="Building Restful APIs" provider="IBM" />
//   </div>
// </div>;
// );

const Timeline = ({ year, institution, position }) => (
  <div className="mb-4">
    <h4 className="text-lg font-semibold">{year}</h4>
    <p className="text-lg">{institution}</p>
    {position && <p className="text-sm text-gray-400">{position}</p>}
  </div>
);

export default About;
