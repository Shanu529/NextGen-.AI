import React from "react";
import { assets } from "../assets/assets/assets";

function Intro() {
  return (
    <>
      <div className="items-center justify-center my-1 sm:my-2 md:my-3 lg:my-5 capitalize">
        <div className="flex gap-2 flex-col  text-center">
          <h2 className="text-[1.4rem]  sm:text-[0.5rem] md:text-[1rem] lg:text-[1.5rem] font-medium">
            Create AI Images
          </h2>
          <p className="text-gray-500">Turn your imagination into visuals</p>
        </div>

        <div className=" md:my-10 items-center flex flex-col md:flex-row lg:flex-row gap-10 my-20 justify-center">
          <div className="">
            <img  className="w-80 hover:scale-105 hover:opacity-100 hover:rounded-2xl transition-all duration-700 opacity-80 " src={assets.sample_img_2} alt="" />
          </div>
          <div className=" md:w-[50%] flex flex-col gap-5">
            <h2 className="font-medium text-gray-800 text-sm sm:text-base md:text-lg lg:text-4xl">Introducing the AI-Powered Text to Image Generator</h2>
            <p className="font-light text-[0.7rem} sm:text-sm md:text-base lg:text-lg">
              Easily bring your ideas to life with our free AI image generator.
              Whether you need stunning visuals or unique imagery, our tool
              transforms your text into eye-catching images with just a few
              clicks. Imagine it, describe it, and watch it come to life
              instantly
            </p>
            <p className="font-light text-sm sm:text-sm md:text-base lg:text-lg">
              Simply type in a text prompt, and our cutting-edge AI will
              generate high-quality images in seconds. From product visuals to
              character designs and portraits, even concepts that don’t yet
              exist can be visualized effortlessly. Powered by advanced AI
              technology, the creative possibilities are limitless!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
