import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
// import { Provider } from 'react-redux'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
// import { store } from './store/store'
import { RootCmp } from './root-cmp'
import './assets/styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider>
    <Router>
      <RootCmp />
    </Router>
  </ThemeProvider>
)

serviceWorkerRegistration.register()
