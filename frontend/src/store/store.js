import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from './projects/project.reducer'
import { projectService } from '../services/project.service'

const store = configureStore({
    reducer: {
      projects: projectsReducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            thunk: {
              extraArgument: {projectService}
            }
          })
  })

export default store