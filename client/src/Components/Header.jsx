import React from "react";
import { assets } from "../assets/assets/assets";

function Header() {
  return (
    <div className=" justify-center flex flex-col items-center text-center my-20 capitalize">
      <div className="text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.5rem] py-2 px-5 bg-slate-50 text-black border-blue-800 flex gap-3 rounded-full  capitalize ">
        <p className=" w-[200px] sm:w-[250px] md:w-[400px] lg:w-auto lg:px-5 ">
          Best text to image generator
        </p>
        <img className="w-6 mr-5" src={assets.star_icon} alt="" />
      </div>
      <h1 className=" font-normal  w-[300px] text-4xl sm:text-7xl sm:w-[590px] lg:mt-20 text-center lg:w-[600px] mt-10 ">
        Turn text to <span className="text-blue-600">image,</span> in seconds.
      </h1>

      <p className=" mt-4 sm:mt-5 md:mt-10 lg:mt-10 text-[0.7rem] sm:text-base md:text-lg lg:text-xl  w-[300px] sm:w-[590px]  text-center lg:w-[600px] ">
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds – just type, and watch the magic happen
      </p>

      <button className="flex gap-2 mt-5 md:mt-10 transition-all hover:scale-105 duration-500  hover:bg-blue-700 px-5 sm:px-7 md:px-10  bg-black text-white py-2 lg:py-4 rounded-full">
        Generate Images
        <img className="w-6" src={assets.star_group} alt="" />
      </button>

      <div className="flex gap-2 lg:gap-4 mt-10 w-[2.5rem] sm:w-[3rem] md:w-[3.5rem] lg:w-[10rem] justify-center">
        {Array(6)
          .fill("")
          .map((items, index) => (
            <img
              className="hover:scale-105 transition-all duration-500 rounded-md lg:w-20"
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt=""
              srcset=""
              key={index}
              width={70}
            />
          ))}
      </div>
      <p className="mt-5 text-lg">Generated images from <span className="text-blue-600">NextGen.AI </span> </p>
    </div>
  );
}

export default Header;
