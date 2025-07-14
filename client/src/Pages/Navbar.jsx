import React, { useState } from "react";
import { assets } from "../assets/assets/assets";

import {Link, useNavigate} from 'react-router-dom'

function Navbar() {
  const [userCheck, setuserCheck] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-2 md:gap-5 lg:gap-4 itean-center">
        <Link to={'/'}>
        
        <img
          className="w-4 sm:w-5 md:w-7 lg:w-10"
          src={assets.logo_icon}
          alt=""
        />

        </Link>
        <p className="font-bold text-gray-800 text-[0.5rem] lg:text-[1.5rem] items-center align-middle ">
          NextGen .AI
        </p>
      </div>

      {userCheck ? (
        //display only if user already login
        <div className="flex gap-2 md:gap-4 lg:gap-3 items-center">
          <div className=" bg-gray-600 px-4 lg:px-8 rounded-full lg:py-2 text-white cursor-pointer">
            <p>toket left : 5</p>
          </div>

          <div className="flex gap-2 md:gap-4 lg:gap-3">
            <p className=" bg-blue-600 px-4 lg:px-8 rounded-full lg:py-2 text-white cursor-pointer">hi! shunya</p>
            <div className="w-5 sm:w-7 md:w-10 lg:w-10">
              <img className="w-full" src={assets.profile_icon} alt="" />
            </div>
          </div>
        </div>
      ) : (
        // display if user logout
        <div className=" items-center">
          <div className="flex gap-2 sm:gap-4 md:5 text-[0.5rem] sm:text-[0.8rem] md:[text-1rem] lg:text-[1rem]">
            <p onClick={()=>navigate('/buy')} className="bg-blue-200 px-4 lg:px-10 lg:py-2 cursor-pointer lg:rounded-full rounded-sm">
              price
            </p>
            <button className="bg-black px-4 lg:px-10 lg:py-2 text-white cursor-pointer lg:rounded-full rounded-sm">
              login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
