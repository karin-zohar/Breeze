import { Routes, Route } from 'react-router'
import { useTheme } from './contexts/ThemeContext'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { AppMenu } from './cmps/app-menu'
import { HomePage } from './pages/home-page'


export function RootCmp() {
  const { isDarkTheme } = useTheme()

  return (
    <div className={`app-container main-layout base-layout ${isDarkTheme ? 'theme-dark' : ''}`} >
      <AppHeader />
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