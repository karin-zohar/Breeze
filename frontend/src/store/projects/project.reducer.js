import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { projectService } from '../../services/project.service'
import { demoProjects } from '../../constants/demo-data'

const projectsAdapter = createEntityAdapter({
    selectId: (project) => project._id,
    // Sort "all IDs" array based on the project's lastUpdated field
    sortComparer: (a, b) => b.lastUpdated.localeCompare(a.lastUpdated),
})

const initialState = projectsAdapter.getInitialState({
    loading: 'idle',
    // error: null
},
    []
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

export const updateProject = createAsyncThunk(
    'projects/updateProject',
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadProjects.fulfilled, (state, action) => {
                projectsAdapter.setAll(state, action.payload)
            })
            .addCase(addProject.fulfilled, (state, action) => {
                projectsAdapter.addOne(state, action.payload)
            })
            .addCase(updateProject.fulfilled, (state, action) => {
                projectsAdapter.updateOne(state, action.payload)
            })
            .addCase(removeProject.fulfilled, (state, action) => {
                projectsAdapter.removeOne(state, action.payload)
            })
    }
})

export default projectSlice.reducer

export const {
    selectAll: selectAllProjects,
    selectById: selectProjectById,
} = projectsAdapter.getSelectors((state) => state.projects)