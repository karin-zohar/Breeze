import React, { useState } from 'react'
import { Routes, Route } from 'react-router'

export function RootCmp() {

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => (!prevTheme))
  }

  return (
    <div className={`app-container main-layout base-layout ${isDarkTheme ? 'theme-dark': ''}`} >
      <button onClick={toggleTheme}>Toggle theme</button>
      <main>
        <h1>
          The app is rendering correctly
        </h1>
      </main>
    </div>
  )
}