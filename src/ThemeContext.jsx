/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext()



export  function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({children}){

    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleTheme = () => {

        setIsDarkTheme((prevTheme) => !prevTheme)
    }

    return (

        <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


