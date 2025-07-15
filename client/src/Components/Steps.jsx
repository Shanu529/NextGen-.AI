import React from "react";
import { stepsData } from "../assets/assets/assets";

function Steps() {
  return (
    <div className=" items-center flex flex-col  gap-5 justify-center">
      <div className="flex flex-col gap-2">
        <h2 className="text-[2rem] font-medium capitalize  items-center flex justify-center ">
          how it works
        </h2>
        <p className="text-gray-500">Transform Words Into Stunning Images</p>
      </div>


      <div >
        {
            stepsData.map((items,index)=>(
                <div className="flex gap-5 border-gray-400 border-2 p-3 m-3 rounded-md hover:scale-105 transition-all duration-700">
                    <img src={items.icon} alt="" />
                    <div className="cursor-pointer">
                         <p className="text-lg font-medium">
                        { 
                            items.title
                        }
                    </p>
                    <p className="text-base text-gray-700">
                        {
                            items.description
                        }
                    </p>
                    </div>
                   
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default Steps;
