import React, { useEffect } from "react";
import { assets, testimonialsData } from "../assets/assets/assets";

gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useRef } from "react";

function Testimonials() {
  const smallHeading3 = useRef();
  useGSAP(() => {
    gsap.from(smallHeading3.current, {
      y: "50",
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: smallHeading3.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });
  });

  // useEffect(() => {
  //   gsap.from(".testimonialsAnimeted", {
  //     y: -500,
  //     opacity: 0,
  //     duration: 1,
  //     stagger: 0.2,
  //   });
  // },[]);

  const testimonialsAnimeted = useRef();
  useGSAP(() => {
    gsap.from(testimonialsAnimeted.current, {
      y: "200",
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger:testimonialsAnimeted.current,
        start: "top 90%",
        end: "top 40%",
         stagger: 0.2,
        scrub: true,
      },
    });
  });

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-20 ">
      {/* Heading */}
      <div ref={smallHeading3} className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
          Hear From Our Users
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Real feedback from people who transformed ideas into images
        </p>
      </div>

      {/* Testimonials Grid */}

      <div ref={testimonialsAnimeted} className=" testimonialsAnimeted grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-3xl p-6 shadow-lg transform transition-transform duration-500 hover:scale-105 ${
              index % 2 === 0 ? "rotate-2" : "-rotate-2"
            }`}
          >
            <div className="flex justify-center -mt-16 mb-4">
              <img
                className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                src={item.image}
                alt={item.name}
              />
            </div>

            <p className="text-gray-700 text-sm sm:text-base mb-4 relative before:content-['“'] before:text-4xl before:text-blue-200 before:absolute before:-top-4 before:-left-2">
              {item.text}
            </p>

            <div className="text-center mt-4">
              <p className="font-semibold text-lg text-gray-900">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.role}</p>
            </div>

            <div className="flex justify-center mt-3 gap-1">
              {Array(item.stars)
                .fill("")
                .map((_, i) => (
                  <img
                    key={i}
                    src={assets.rating_star}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
