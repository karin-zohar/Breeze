import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
    name: "projects",
    initialState: { value: [1,2,3,4] },
    reducers: {
        setProjects: (state, action) => {
            // insert logic
        },
        addProject: (state, action) => {
            // insert logic
        },
        removeProject: (state, action) => {
            // insert logic
        },
        updateProject: (state, action) => {
            // insert logic
        },
    }
})

export default projectSlice.reducer