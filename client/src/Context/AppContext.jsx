import { createContext, useContext, useState } from "react";


export const ContextApp = createContext();
const AppContextProvider = (props)=>{

    const [user, setUser] = useState(false); 
    const [showLogin, setShowLogin]  = useState(false);
    

    const value = {
        user, setUser, showLogin , setShowLogin

    }


    return(
     <ContextApp.Provider value={value}>
      {props.children}
     </ContextApp.Provider>

    )
}

export default AppContextProvider;