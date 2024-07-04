import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { projectService } from '../../services/project.service'
import { demoProjects } from '../../constants/demo-data'

const projectsAdapter = createEntityAdapter({
    selectId: (project) => project.projectId,
    // Sort "all IDs" array based on the project's lastUpdated field
    sortComparer: (a, b) => b.lastUpdated.localeCompare(a.lastUpdated),
})

const initialState = projectsAdapter.getInitialState({
    loading: 'idle'
},
    demoProjects
)

// Asynchronous CRUD operations
export const loadProjects = createAsyncThunk(
    'projects/loadProjects',
    async () => {
        const response = await projectService.query()
        return response
    }
)

export const addProject = createAsyncThunk(
    'projects/addProject',
    async (savedProject) => {
        const response = await projectService.save(savedProject)
        return response
    }
)

export const removeProject = createAsyncThunk(
    'projects/removeProject',
    async (projectId) => {
        await projectService.remove(projectId)
        return projectId
    }
)


export const projectSlice = createSlice({
    name: "projects",
    initialState: initialState,
    reducers: {
        setProjects: projectsAdapter.setAll,
        addProject: projectsAdapter.addOne,
        removeProject: projectsAdapter.removeOne,
        updateProject: projectsAdapter.updateOne
    }
})

export default projectSlice.reducer

export const {
    selectAll: selectAllProjects,
    selectById: selectBookById,
} = projectsAdapter.getSelectors((state) => state.projects)