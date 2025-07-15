import { createContext, useContext, useState } from "react";
export const ContextApp = createContext();

const AppContextProvider = (props)=>{

    const [user, setUser] = useState(false);
    

    const value = {
        user, setUser

    }


    return(
     <ContextApp.Provider value={value}>
      {props.children}
     </ContextApp.Provider>

    )
}

export default AppContextProvider;