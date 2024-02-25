import React from "react";

const About = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.1"
        className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black"
      >
        <h1 className="text-[4vw] p-20 leading-1 tracking-tight">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>

        <div className="flex gap-5 w-full p-20 border-t-[1px] border-[rgb(137,151,80)] mt-20 pt-10">
          <div className="w-1/2">
            <h1 className="text-7xl">Our appraoch</h1>
            <button className="uppercase px-10 py-6 bg-zinc-900 text-white rounded-full mt-10 flex gap-10 items-center ">
              Read More
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
          <div className="w-1/2 rounded-3xl h-[60vh] bg-[#75853d]"></div>
        </div>
      </div>
    </>
  );
};

export default About;
