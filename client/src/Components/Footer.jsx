import React from "react";
import { assets } from "../assets/assets/assets";

function Footer() {
  return (
    <footer className="w-full py-4 border-t border-gray-300 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-3 text-gray-600 text-sm">
        
    
        <div className="flex items-center gap-2">
          <img src={assets.logoo} alt="logo" className="w-5 md:w-32" />
          
        </div>

       
        <div className="flex items-center gap-4">
          <p className="text-xs sm:text-sm">© {new Date().getFullYear()} NextGen.AI</p>
          <div className="flex gap-3">
            <img src={assets.facebook_icon} alt="Facebook" className="w-6" />
            <img src={assets.instagram_icon} alt="Instagram" className="w-6" />
            <img src={assets.twitter_icon} alt="Twitter" className="w-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
