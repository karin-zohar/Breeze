import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"
import { demoProjects } from '../constants/demo-data.js'

const STORAGE_KEY = 'project'
const BASE_URL = 'project/'

export const projectService = {
    query,
    getById,
    save,
    remove,
    getEmptyProject,
    // getImgUrl,
    // getDefaultFilter
}

async function query() {
    // TODO: filter
    // TODO: urlParams
    try {
        let projects = await storageService.query(STORAGE_KEY)
        return projects
    } catch (error) {
        console.error('Error querying projects:', error)
    }
}

function getById(projectId) {
    try {
        return storageService.get(STORAGE_KEY, projectId)
    }
    catch (error) {
        console.error(`error getting project ${projectId}: ${error}`)
    }
}

async function remove(projectId) {
    try {
        await storageService.remove(STORAGE_KEY, projectId)
    }
    catch (error) {
        console.error(`error removing project ${projectId}:, ${error}`)
    }
}

async function save(project) {
    let savedProject
    // Edit an existing project
    if (project._id) {
        savedProject = await storageService.put(STORAGE_KEY, project)
    } else {
        // Save a new project
        savedProject = await storageService.post(STORAGE_KEY, project)
    }
    return savedProject
}

function getEmptyProject() {
    return {
        dateCreated: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
        title: 'New Project',
        description: 'Enter a description.',
        imgUrls: [],
        wordcount: 0,
        targetWordcount: 5000,
        timeSpent: null,
        linkedDoc: null
    }
}
