import React, { useContext } from "react";
import { assets, plans } from "../assets/assets/assets";
import AppContextProvider, { ContextApp } from "../Context/AppContext";

function BuyPage() {

  const { user, setUser} = useContext(ContextApp)
  return (
    <>
      <div className="text-center">
        <button className="bg-slate-400 px-10 py-2 rounded-full text-sm">
          Our Plans
        </button>
        <h1 className="px-10 py-2 text-gray-700 font-medium text-2xl">
          Choose the plan{" "}
        </h1>

        
      </div>
      <div className="flex justify-center gap-5 py-40">
          {plans.map((items, index) => (
            <div className="bg-white p-10 rounded-md hover:scale-105 transition-all duration-700">
              <img className="w-7 py-2" src={assets.logo_icon} alt="" />
              <p className="text-sm py-2">{items.id}</p>
              <p className="text-lg py-2">{items.desc}</p>
              <p className="text-lg py-2">
                <span className="text-4xl font-medium px-2">
                   ${items.price}
                </span>
                 /{items.credits} <span className="text-sm"> Creadit</span> 
              </p>
              <button className="bg-black py-2 px-14 text-white my-5 rounded-md hover:bg-blue-500 transition-all duration-700 "> 
                {
                  user? 'Purchese': 'Get Started'
                }
              </button>
            </div>
          ))}
        </div>
    </>
  );
}

export default BuyPage;
