import React, { createContext, useState } from "react";

export const themeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [islight, setislight] = useState(true);
    const themeToggle = () => {
        setislight(!islight);
    }
    
    const contextData = {
        islight: islight,
        themeToggle: themeToggle
    }
    return (
        <themeContext.Provider value={contextData}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeContextProvider
