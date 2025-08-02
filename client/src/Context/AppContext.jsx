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
        setCredit(data.credits);
        setUser(data.user);
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
        return data.image;
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
    setShowLogin,
    loadCredit,
    logout,
    generateImage,
  };

  return (
    <ContextApp.Provider value={value}>{props.children}</ContextApp.Provider>
  );
};

export default AppContextProvider;
