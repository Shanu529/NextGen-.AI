import React from "react";

function Generate() {
  return (
    <div className="text-center flex flex-col">
      <div>
        <h2 className="text-lg md:text-2xl">See the magic. Try now</h2>
        <button className="py-2 md:py-3 my-2 md:my-4 px-4 rounded-full text-[0.5rem] md:text-[0.8rem] lg:text[1.2rem] md:px-10 lg:px-14 bg-black text-white hover:scale-105 transition-all duration-500 hover:bg-blue-500">
          Generate Images
        </button>
      </div>
    </div>
  );
}

export default Generate;
