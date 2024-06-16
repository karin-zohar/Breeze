import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { AppMenu } from './cmps/app-menu'
import { HomePage } from './pages/home-page'


export function RootCmp() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)


  return (
    <div className={`app-container main-layout base-layout ${isDarkTheme ? 'theme-dark' : ''}`} >
      <AppHeader isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <AppMenu />
      <main>
        <h1>
          The app is rendering correctly
        </h1>
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </main>
      <AppFooter />
    </div>
  )
}