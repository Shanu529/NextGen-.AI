

import React from "react";
import { stepsData } from "../assets/assets/assets";



gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useRef } from "react";



function Steps() {


  const animetedImg = useRef();
  const rightImg = useRef();
  const text = useRef();

  useGSAP(() => {
    gsap.from(animetedImg.current, {
      y: "100",
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: animetedImg.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });
  });

  useGSAP(() => {
    gsap.from( text.current, {
      y: "20",
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger:  text.current,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
    });
  });

  // useGSAP(() => {
  //   gsap.from(midImg.current, {
  //     y: -500,
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: midImg.current,
  //       start: "top 90%",
  //       end: "top 40%",
  //       scrub: true,
  //     },
  //   });
  // });



  return (
    <div className="flex flex-col items-center px-4 sm:px-0 my-20 gap-16">
      {/* Section Heading */}
      <div ref={ text} className="text-center ">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 uppercase animate-fadeIn">
          How It Works
        </h2>
        <p className="text-gray-500 mt-2 text-lg sm:text-xl animate-fadeIn delay-200">
          Transform Words Into Stunning Images
        </p>
      </div>

      {/* Steps Cards */}
      <div ref={animetedImg} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transform transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Icon */}
            <div className="flex justify-center items-center mb-4">
              <div className="bg-blue-50 p-4 rounded-full">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 sm:w-14 sm:h-14"
                />
              </div>
            </div>

            {/* Text */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;
