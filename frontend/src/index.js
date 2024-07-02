import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { RootCmp } from './root-cmp'
import './assets/styles/main.scss'
import projectsReducer from './store/projects/project.reducer'

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = configureStore({
  reducer: {
    projects: projectsReducer
  }
})

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
