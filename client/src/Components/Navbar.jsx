import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets/assets";
import { ContextApp } from "../Context/AppContext";

import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const hasAnimatedNavbar = useRef(false);

  const { user, setShowLogin, logout, credit } = useContext(ContextApp);
  const navigate = useNavigate();
  useEffect(() => {
    if (hasAnimatedNavbar.current) return;
    gsap.from(
      ".animeted-navbar",
      {
        y: -100,
        opacity: 0,
        duration: 0.9,
        delay: 0.3,
        // ease: "power4.out",
      },
      
    );
    hasAnimatedNavbar.current = true;
  },[]);

  return (
    <nav className=" animeted-navbar w-full z-10 px-4 py-3 md:px-8 md:py-4  top-0 bg-gray-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & branding */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={assets.logoo}
              alt="Logo"
              className="w-14 md:w-10 lg:w-32 object-contain"
            />
            {/* <span className="text-lg md:text-sm font-bold text-gray-900 tracking-tight cursor-pointer">
              NextGen<span className="text-blue-500">.AI</span>
            </span> */}
          </Link>
        </div>

        {/* Right: User controls */}
        <div className="flex items-center gap-3 md:gap-6">
          {!user ? (
            <div className="flex gap-2 md:gap-4 items-center">
              <button
                onClick={() => navigate("/buy")}
                className="bg-gray-300 border border-1 hover:bg-gray-200 text-gray-800 rounded-full px-4 py-1 md:px-7 md:py-2 text-xs md:text-sm transition-all"
              >
                Pricing
              </button>
              <button
                onClick={() => setShowLogin(true)}
                className="bg-blue-500 hover:bg-blue-600 transition-all text-white rounded-full px-4 py-1 md:px-7 md:py-2 text-xs md:text-sm shadow"
              >
                Login
              </button>
            </div>
          ) : (
            <div className="flex gap-2 md:gap-4 items-center ">
              <Link to="/buy">
                <div className=" border border-gray-300 hover:bg-gray-200 text-gray-800 rounded-full px-4 md:px-6 py-1 md:py-2 text-xs md:text-sm cursor-pointer transition shadow bg-">
                  Tokens Left: {credit}
                </div>
              </Link>
              <div className="relative group flex items-center gap-2">
                <img
                  src={assets.profile_icon}
                  alt="Profile"
                  className="w-8 md:w-10 rounded-full border border-gray-300 shadow cursor-pointer"
                />
                <span className="hidden sm:block text-sm md:text-base text-gray-900 font-medium ">
                  Hi, {user.name}
                </span>
                {/* Dropdown menu on hover */}
                <div className="absolute right-0 top-11 min-w-[110px] bg-white border border-gray-200 rounded-xl shadow-md py-3 px-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
                  <button
                    onClick={logout}
                    className="block text-center w-full font-semibold text-red-500 hover:text-red-700 px-2 py-1 rounded-md transition-all"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
