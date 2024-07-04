import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from './contexts/ThemeContext'
import { BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { RootCmp } from './root-cmp'
import './assets/styles/main.scss'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
  <ThemeProvider>
    <Router>
      <RootCmp />
    </Router>
  </ThemeProvider>

  </Provider>
)

serviceWorkerRegistration.register()
