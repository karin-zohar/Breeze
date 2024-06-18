import { Routes, Route } from 'react-router'
import { useState } from 'react'
import { useTheme } from './contexts/ThemeContext'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { AppMenu } from './cmps/app-menu'
import { HomePage } from './pages/home-page'


export function RootCmp() {
  const { isDarkTheme } = useTheme()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => (!prevIsMenuOpen))
  }


  return (
    <div className={`app-container main-layout base-layout ${isDarkTheme ? 'theme-dark' : ''}`} >
      <AppHeader
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <AppMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
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