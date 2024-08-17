import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          error quibusdam beatae, deleniti eos inventore doloribus et magnam
          nulla autem quam voluptatibus rem perspiciatis minus repudiandae
          libero consequuntur earum, explicabo qui id,cepturi commodi illum
          aperiam! Quisquam deleniti soluta necessitatibus dolore aliquam
          voluptatem ipsam accusamus quae, quibusdam, debitis culpa iste.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          nobis, dolores tempora deleniti dignissimos assumenda similique,
          consequuntur error alias excepturi culpa explicabo iste repellendus
          recusandae consequatur, atque incidunt perferendis laboriosam ratione
          amet perspiciatis quod? Quidem culpa iste, commodi officiis eos omnis
          voluptates eligendi ex molestiae unde a amet quam voluptatem.
        </p>
      </div>
    </div>
  );
};

export default About;
