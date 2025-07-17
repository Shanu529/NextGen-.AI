import React, { useState } from "react";
import { assets } from "../assets/assets/assets";

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextApp } from "../Context/AppContext";

function Navbar() {
  // const [userCheck, setuserCheck] = useState(false);
  const { user, setUser } = useContext(ContextApp);
  console.log(user);

  const navigate = useNavigate();


  const { showLogin, setShowLogin } = useContext(ContextApp);

  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-2 md:gap-5 lg:gap-4 itean-center">
        <Link to={"/"}>
          <img
            className="w-4 sm:w-5 md:w-7 lg:w-10"
            src={assets.logo_icon}
            alt=""
          />
        </Link>
        <p className="font-bold text-gray-800 text-[0.5rem] lg:text-[1.5rem] items-center align-middle ">
          NextGen.AI
        </p>
      </div>

      {user ? (
        //display only if user already login
        <div className="flex gap-2 md:gap-4 lg:gap-3 items-center">
          <Link to={"/buy"}>
            <div className=" bg-gray-600 px-4 lg:px-8 rounded-full lg:py-2 text-white cursor-pointer">
              <p>toket left : 5</p>
            </div>
          </Link>

          <div className="flex gap-2 md:gap-4 lg:gap-3">
            <p className=" bg-blue-600 px-4 lg:px-8 rounded-full lg:py-2 text-white cursor-pointer">
              hi! shunya
            </p>
            <div className="w-5 sm:w-7 md:w-10 lg:w-10 relative group ">
              <img className="w-full  " src={assets.profile_icon} alt="" />

              <div className="hidden absolute top-0 right-0 py-20 group-hover:block  w-20">
                <ul>
                  <li className="bg-gray-500 text-center p-2 rounded-full text-white cursor-pointer">log in</li>
                </ul>
              </div>

              {/* 
              <div className=" bg-red-800 z-10 w-30 absolute top-0 right-0 pt-10 hidden group-hover:block">
                <p className="w-30 px-30">Log out</p>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        // display if user logout
        <div className=" items-center">
          <div className="flex gap-2 sm:gap-4 md:5 text-[0.5rem] sm:text-[0.8rem] md:[text-1rem] lg:text-[1rem]">
            <p
              onClick={() => navigate("/buy")}
              className="bg-gray-400 px-4 lg:px-10 lg:py-2 cursor-pointer lg:rounded-full rounded-sm"
            >
              price
            </p>
            <button onClick={(()=>setShowLogin(true))} className="bg-black px-4 lg:px-10 lg:py-2 text-white cursor-pointer lg:rounded-full rounded-sm">
              login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
