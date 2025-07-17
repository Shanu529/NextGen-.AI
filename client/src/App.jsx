import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import BuyPage from "./Pages/BuyPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Result from "./Pages/Result";
import Login from "./Components/Login";
import { ContextApp } from "./Context/AppContext";




function App() {
  const {showLogin , setShowLogin} = useContext(ContextApp)
  console.log(showLogin)

    
  return (
    <>
      <div className="  min-h-screen px-8 py-8 sm:px-8  sm:py-8 md:px-8 md:py-10 lg:px-28 lg:py-5">
        <Navbar />
        {
          showLogin && <Login /> 
        }
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/result" element={<Result />} />
        </Routes>
       <Footer />  
      
      </div> 
     
    </>
  );
}

export default App;
