import { storageService } from "./async-storage.service.js"
import {utilService } from "./util.service.js"

const STORAGE_KEY = 'project'
const BASE_URL = 'project/'

export const projectService = {
    // query,
    // getById,
    // save,
    // remove,
    // getEmptyProject,
    // getImgUrl,
    // getDefaultFilter
}

async function query() {
    // TODO: filter
    // TODO: urlParams

    const projects = await storageService.query(STORAGE_KEY)
    return projects
}