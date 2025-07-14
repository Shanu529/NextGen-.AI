import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import BuyPage from "./Pages/BuyPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-300  min-h-screen px-8 py-8 sm:px-8  sm:py-8 md:px-8 md:py-10 lg:px-28 lg:py-5">
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/buy" element={<BuyPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
