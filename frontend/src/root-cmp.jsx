import { Routes, Route } from 'react-router'
import { publicRoutes } from './constants/routes'
import { useState, Suspense, lazy } from 'react'
import { useTheme } from './contexts/ThemeContext'
import { AppHeader } from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { AppMenu } from './cmps/app-menu'
import { Loader } from './cmps/loader'


// Dynamic routing with lazy loading: 
const componentsMap = {
  HomePage: lazy(() => import('./pages/home-page.jsx') ),
  Goals: lazy(() => import('./pages/goals.jsx') )
}

const routeComponents = publicRoutes.map(({ path, component }, key) => {
  const Component = componentsMap[component]
  return  <Route exact path={path} element={<Component />} key={key} />
})

export function RootCmp() {
  const { isDarkTheme } = useTheme()

  const screenWidth = window.innerWidth
  const layoutBreakingPoint = 800
  // Initialize menu state based on screen width: open if screen is wide, closed if narrow (mobile view).
  const [isMenuOpen, setIsMenuOpen] = useState(screenWidth >= layoutBreakingPoint)

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
        <Suspense
          fallback={<Loader />}
        >

          <Routes>
            {/* <Route element={<HomePage />} path="/" /> */}
            {routeComponents}
          </Routes>
        </Suspense>
      </main>
      <AppFooter />
    </div>
  )
}