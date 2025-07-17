import React, { useState, useTransition } from "react";
import { assets } from "../assets/assets/assets";

function Result() {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  console.log(input);

  const formHandler = async (e) => {
    // in backend  we will use this
  };

  return (
    <div className="py-20">
      <form onSubmit={formHandler} className="flex flex-col items-center gap-5">
        <div className=" relative capitalize">
          <img className="w-80" src={image} alt="" />

          <span
            className={` bg-blue-600 h-1 w-full absolute bottom-0 left-0 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          ></span>
        </div>{" "}
        {loading && <p className="items-start">loading...</p>}
        {!isImageLoaded && (
          <div className="flex gap-2">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter Anything"
              className="py-2 border-none px-5 rounded-full"
            />
            <button
              type="submit"
              className="px-10 py-2 rounded-full bg-blue-400 transition-all duration-300 hover:bg-blue-500 text-white"
            >
              Generate
            </button>
          </div>
        )}
      </form>
      {isImageLoaded && (
        <div className="flex gap-5 justify-center py-5">
          <p className="border-black border-2 text-black px-5 py-2 rounded-full">
            Generate Another
          </p>

          <a
            href=""
            download
            className=" text-white bg-blue-400 py-2 px-5 rounded-full"
          >
            {" "}
            download
          </a>
        </div>
      )}
    </div>
  );
}

export default Result;
