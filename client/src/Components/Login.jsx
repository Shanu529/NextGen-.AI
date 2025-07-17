import React, { useContext, useState } from "react";
import { assets } from "../assets/assets/assets";
import { useEffect } from "react";
import { ContextApp } from "../Context/AppContext";

function Login() {
  const [input, setInput] = useState("");
  const [state, setState] = useState("login");

  const {showLogin , setShowLogin} = useContext(ContextApp)

  useEffect(()=>{
      
     document.body.style.overflow = "hidden";
    return(
      (()=>{
          document.body.style.overflow = "unset";
      })
    )


  },[])

  const formhandling2 =(()=>{
    // use im backend

  })

  const [getValeu , setGetValue] = useState("")
  console.log(getValeu)

  return (
    <div className="  bg-black/30 h-full align-middle pt-40 fixed  top-0 left-0 right-0 z-10 backdrop-blur-sm justify-center flex">
      <form onSubmit={formhandling2} className=" px-14 py-5 bg-white rounded-lg border-2 border-blue-500 fixed">
        <h2 className="text-center my-3">{state}</h2>
        <p className="text-center my-3">
          Welcome back! Please sign in to continue
        </p>
        <div className="flex flex-col gap-5 ">
          { state !=="login" &&
            <div className="flex rounded-full  border-gray-300 border-2  px-5 items-center gap-2">
              <img className="w-7" src={assets.profile_icon} alt="" />
              <input onChange={((e)=>setGetValue(e.target.value))}
                className=" outline-none w-full rounded-full py-3 px-5"
                type="email"
                placeholder="Enter your Fullname"
                required
              />
            </div>
          }
          <div className="flex rounded-full border-gray-300 border-2 px-5 items-center gap-2">
            <img className="w-4" src={assets.email_icon} alt="" />
            <input onChange={((e)=>setGetValue(e.target.value))}
              className="outline-none w-full  rounded-full py-3 px-5"
              type="email"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="flex rounded-full border-gray-300 border-2 px-5 items-center gap-2">
            <img className="w-3" src={assets.lock_icon} alt="" />
            <input onChange={((e)=>setGetValue(e.target.value))}
              className=" w-full  outline-none rounded-full py-3 px-5"
              type="email"
              placeholder="Enter your Password"
              required
            />
          </div>
        </div>

        <p className="text-sm cursor-pointer text-blue-700 my-3 font-medium">
          Forgot password?
        </p>
        <button className="bg-blue-600 w-full py-2 mb-2 text-white rounded-full ">
          
          {state}
        </button>
        

        {
          state === "login" ? <p className="text-center text-sm ">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer font-semibold" onClick={()=>setState("signin")}>
            
            Sign up
          </span>
        </p> :
          
          <p className="text-center text-sm my-2">
          Already have an account{" "}
          <span className="text-blue-600 font-semibold cursor-pointer" onClick={()=>setState("login")}>
            Log in
          </span>
        </p> 
        }
        
        <img onClick={(()=>setShowLogin(false))}
          className="w-4 cursor-pointer absolute top-5 right-5"
          src={assets.cross_icon}
          alt=""
        />
      </form>
    </div>
  );
}

export default Login;
