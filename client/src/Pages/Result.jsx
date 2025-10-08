import React, { useState, useContext } from "react";
import { assets } from "../assets/assets/assets";
import { ContextApp } from "../Context/AppContext";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";

function Result() {
  const [image, setImage] = useState(assets.aiimg);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const navigate = useNavigate();
  const { generateImage, credit } = useContext(ContextApp);

  const formHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input.trim()) {
      const res = await generateImage(input);

      if (credit === 0) {
        navigate("/buy");
      } else {
        setIsImageLoaded(true);
        setImage(res.image);
      }
    }
    setLoading(false);
  };

  const handleDownload = () => {
    saveAs(image, "generated-image.jpg");
  };

  return (
    <div className=" text-white px-4 items-center justify-center flex">
      <form
        onSubmit={formHandler}
        className="flex flex-col items-center gap-6 w-full max-w-md"
      >
        <div className="relative w-80 h-80 rounded-xl overflow-hidden shadow-lg border">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="Generated"
          />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-[8s] ${
              loading ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {loading && <p className="text-sm text-neutral-400">Generating...</p>}

        {!isImageLoaded && (
          <div className="flex gap-2 w-full">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Describe your image..."
              className="flex-1 py-2 px-4 rounded-lg text-black border border-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium"
              disabled={loading}
            >
              {loading ? "..." : "Generate"}
            </button>
          </div>
        )}
      </form>

      {isImageLoaded && (
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => {
              setIsImageLoaded(false);
              setInput("");
            }}
            className="px-6 py-2 border border-neutral-600 rounded-lg hover:bg-neutral-800 transition-all"
          >
            Generate Another
          </button>

          <button
            onClick={handleDownload}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all"
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
}

export default Result;
