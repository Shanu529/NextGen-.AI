import React from "react";
import { assets, testimonialsData } from "../assets/assets/assets";

function Testimonials() {
  return (
    <div className=" flex flex-col justify-center align-middle text-center capitalize py-2 sm:py-3 md:py-10 lg:py-20">
      <h2 className="text-xl sm:text-2xl md:text-[2rem] font-medium">
        Customer testimoni als
      </h2>
      <p className="text-sm sm:text-base md:text-[1rem] text-gray- py-2">
        What Our Users Are Saying
      </p>

      <div className=" flex flex-col  text-center md:flex-row justify-center py- gap-10 py-10">
        {testimonialsData.map((items, index) => (
          <div
            className="flex flex-col  items-center gap-4 capitalize border-2 hover:scale-105 transition-all duration-1000 hover:shadow-xl  border-gray-400 rounded-md p-5"
            key={index}
          >
            <img
              className="w-14 text-center items-center flex   rounded-full"
              src={items.image}
              alt=""
            />
            <div>
              <p className="text-2xl">{items.name}</p>
              <p>{items.role}</p>
            </div>

            <div className="flex ">
              {Array(items.stars)
                .fill("")
                .map((items, index) => (
                  <img src={assets.rating_star} alt="" />
                ))}
            </div>
            <p className="w-60 md:w-60 text-xs sm:text-sm md:text-base lg:text-base text-gray-700">{items.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
