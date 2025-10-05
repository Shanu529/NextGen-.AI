import React, { useContext } from "react";
import { assets } from "../assets/assets/assets";
import { useNavigate } from "react-router-dom";
import { ContextApp } from "../Context/AppContext";

import { useEffect } from "react";
import { useRef } from "react";

import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

function Header() {
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    gsap.from(".animeted-mainText", {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      // ease: "power4.out",
    });
    hasAnimated.current = true;
  }, []);

  const { user, setShowLogin } = useContext(ContextApp);
  const navigate = useNavigate();

  const clickLoginHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

   gsap.from(".box", { x: 700  });

  return (
    <div className=" animeted-mainText flex flex-col items-center text-center my-20 px-4 sm:px-0">
      <div className="inline-flex items-center gap-3 px-6 py-2 bg-[rgb(6,153,163)] text-white font-semibold rounded-full shadow-md animate-pulse">
        <p className="text-sm sm:text-base md:text-lg">AI Image Generator</p>
        <img className="w-6 sm:w-7" src={assets.star_icon} alt="star" />
      </div>

      <h1 className="mt-12 sm:mt-16 text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-800 animate-fadeInUp">
        Turn <span className="text-[rgb(21,165,179)]">text</span> into{" "}
        <span className="text-gray-800">images</span> instantly
      </h1>

      <p className="mt-6 sm:mt-8 text-gray-600 text-sm sm:text-base md:text-lg w-[280px] sm:w-[580px] lg:w-[600px] animate-fadeIn delay-200">
        Enter your ideas and watch them come alive. Fast, simple, and
        professional AI-generated images.
      </p>

      <button
        onClick={clickLoginHandler}
        className="mt-8 md:mt-10 px-6 sm:px-8 md:px-10 py-3 bg-[rgb(8,122,132)] text-white font-bold rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:bg-[rgb(17,166,180)] flex items-center gap-3 animate-bounce"
      >
        Generate Now
        <img className="w-6 sm:w-7" src={assets.star_group} alt="star group" />
      </button>

      {/* Image gallery */}
      <div
        className="flex gap-3 mt-10 justify-center flex-wrap animate-fadeInUp bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://www.transparenttextures.com/patterns/cubes.png)",
        }}
      >
        {Array(6)
          .fill("")
          .map((_, index) => (
            <img
              key={index}
              className="rounded-xl w-16 sm:w-20 lg:w-24 shadow-md transform transition-transform duration-500 hover:scale-110 hover:-translate-y-2"
              src={index % 2 === 0 ? assets.dog : assets.dog2}
              alt={`sample ${index}`}
            />
          ))}
      </div>

      {/* Footer */}
      <p className="mt-5 text-gray-600 text-lg animate-fadeIn delay-300">
        Powered by{" "}
        <span className="text-[rgb(27,163,175)] font-semibold">NextGen.AI</span>
      </p>
    </div>
  );
}

export default Header;
