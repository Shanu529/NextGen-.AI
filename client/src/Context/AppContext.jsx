
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ContextApp = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(0);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Load user credits and info
  const loadCredit = async () => {
    try {
      const tokenLocal = localStorage.getItem("token");
      if (!tokenLocal) return;

      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: { token: tokenLocal },
      });

      console.log("here is data of backend =>", data);

      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
        toast.success("User data loaded!");
      }
    } catch (error) {
      console.error("Error loading credits:", error.message);
      toast.error("Failed to load user credits");
    }
  };

  useEffect(() => {
    if (token) {
      loadCredit();
    }
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    toast.info("Logged OUT!");
    navigate("/");
  };

  const generateImage = async (prompt) => {
    try {
      const tokenLocal = localStorage.getItem("token");
      if (!tokenLocal) {
        setShowLogin(true);
        return { success: false };
      }

      const { data } = await axios.post(
        `${backendUrl}/api/image/generate-image`,
        { prompt },
        { headers: { token: tokenLocal } }
      );

      if (data.success) {
        await loadCredit(); // update credits
        return { success: true, image: data.image };
      } else {
        if (credit === 0) navigate("/buy");
        return { success: false };
      }
    } catch (error) {
      console.error("Error generating image:", error.message);
      toast.error(error.message);
      return { success: false };
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
    loadCredit,
    logout,
    generateImage,
  };

  return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};

export default AppContextProvider;
