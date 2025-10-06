import { createContext, use, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useActionData, useNavigate } from "react-router-dom";

export const ContextApp = createContext();
const AppContextProvider = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [credit, setCredit] = useState();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const loadCredit = async () => {
    try {
      //http://localhost:4005/api/image/generate-image
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token },
      });
      if (data.success) {
        console.log("here is tokennnnn",token);
        
         localStorage.setItem("token",token);
        // localStorage.setItem("token", data.token); // persist token
        setToken(data.token);
        setCredit(data.credits);
        setUser(data.user);
        toast.success("Logged in!");
      }
    } catch (e) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      loadCredit();
    }
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
    toast.info("Logged OUT!");
  };

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/image/generate-image",
        { prompt },
        { headers: { token } }
      );

      //http://localhost:4005/api/image/generate-image
      if (data.success) {
        loadCredit();
        return data; //change this into data.image
      } else {
        if (data.creditBalance === 0) {
          navigate("/buy");
        }
        return { success: false };
      }
    } catch (error) {
      toast.error(error.message);
      loadCredit();
      if (data.creditBalance === 0) {
        navigate("/buy");
      }
    }
  };

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    credit,
    setCredit,
    token,
    setToken,
    backendUrl,
    setUser,
   
    loadCredit,
    logout,
    generateImage,
  };

  return (
    <ContextApp.Provider value={value}>{props.children}</ContextApp.Provider>
  );
};

export default AppContextProvider;
