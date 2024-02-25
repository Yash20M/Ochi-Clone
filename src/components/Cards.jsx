import React from "react";

const Cards = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.2"
        className="w-full h-screen  flex gap-5 items-center px-32 z-50 relative"
        data-scroll-stop="top, center"
      >
        <div className="card_container h-[50vh] w-1/2 ">
          <div className="card rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center relative">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
              className="w-32"
            />
            <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full flex justify-center items-center uppercase">
              &copy;2024-2025
            </button>
          </div>
        </div>

        <div className="card_container flex gap-5 h-[50vh] w-1/2 ] ">
          <div className="card rounded-xl w-1/2 h-full bg-gray-900 relative flex justify-center items-center">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
              className="w-32"
            />
            <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full flex justify-center items-center uppercase">
              Rating 5.0 Clutch
            </button>
          </div>
          <div className="card rounded-xl w-1/2 h-full bg-gray-900 relative flex justify-center items-center">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
              className="w-32"
            />
            <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full flex justify-center items-center uppercase">
              Business Bootcamp Alumni
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
