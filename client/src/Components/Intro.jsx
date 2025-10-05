import React from "react";
import { assets } from "../assets/assets/assets";

gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

function Intro() {
  const textHeading = useRef();
  useGSAP(() => {
    gsap.from(textHeading.current, {
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: textHeading.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });
  });


  const smallHeading = useRef()
  useGSAP(() => {
    gsap.from(smallHeading.current, {
      y:"20",
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: smallHeading.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });
  });


  const smallHeading2 = useRef()
  useGSAP(() => {
    gsap.from(smallHeading2.current, {
      x:"300",
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: smallHeading2.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
    });
  });


  const leftImg= useRef()
  useGSAP(() => {
    gsap.from(leftImg.current, {
      x:"-300",
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: leftImg.current,
        start: "top 90%",
        end: "top 90%",
        scrub: true,
      },
    });
  });

 

  return (
    <section className="relative py-14 px-6 md:px-16 lg:px-24 bg-white overflow-hidden rounded-xl">
      <div className="text-center mb-20 relative z-10">
        <h1
          ref={textHeading}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Turn <span className="text-[rgb(21,165,179)]">Ideas</span> into
          Stunning <span className="text-[rgb(21,165,179)]"> Images</span>
          <span className="text-gray-900"> with AI</span>
        </h1>
        <p ref={smallHeading} className="text-gray-600 mt-3 text-base md:text-lg">
          AI-powered image generation, simple and fast
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 flex justify-center relative">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full filter blur-3xl opacity-40"></div>
          <img ref={leftImg}
            src={assets.aiimg}
            alt="AI Preview"
            className="relative  rounded-2xl shadow-2xl w-80  max-w-md transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div ref={smallHeading2} className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            AI-Powered Creativity
          </h2>
          <p className="text-gray-700 text-sm md:text-base">
            Type your idea and watch our AI transform it into a stunning image
            instantly. Perfect for concept art, product visuals, and creative
            projects.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            Effortless and fast. No experience needed. Just your imagination and
            our AI.
          </p>
          <button className="mt-4 w-max bg-[rgb(9,117,126)] hover:bg-[rgb(17,166,180)]  text-white rounded-full px-6 py-2 transition-all">
            Generate Your Image
          </button>
        </div>
      </div>
    </section>
  );
}

export default Intro;
