import React, { useContext } from "react";
import { assets } from "../assets/assets/assets";


function Footer() {
  
  return (
    <div className=" flex lg:gap-10 text-center mt-10 justify-between md:justify-around align-middle">
      <div className="flex text-center justify-center ">
        <img className="w-4 md:w-6 " src={assets.logo_icon} alt="" />

        <div className="md:px-5">
          <p className="text-[0.5rem] md:text-[1rem]  text-gray-700">
            NextGen.AI
            <span className="px-5 text-[0.5rem] md:text-[1rem] ">
              All right reserved. Copyright @NextGen.AI
            </span>
          </p>
        </div>
      </div>

      <div className="flex w-4 gap-2 md:w-6 md:gap-4 ">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.instagram_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
      </div>
    </div>
  );
}

export default Footer;
