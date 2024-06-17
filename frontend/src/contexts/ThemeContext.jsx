import React, {createContext, useState, useContext} from 'react'

const ThemeContext = createContext() 

export function ThemeProvider({children}) {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => (!prevTheme))
    }

    return (
        <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}