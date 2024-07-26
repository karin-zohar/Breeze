import { useEffect } from 'react'
import { ProjectList } from '../cmps/project-list.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllProjects,loadProjects, addProject, removeProject, updateProject } from '../store/projects/project.reducer.js'
import { projectService } from '../services/project.service.js'

export default function ProjectIndex() {
    const projects = useSelector(selectAllProjects) // array
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(loadProjects())
    },[])
   
    const handleRemoveProject = (projectId) => {
        dispatch(removeProject(projectId))
    }
    
    const handleAddProject = (projectId) => {
        let newProject = projectService.getEmptyProject()
        dispatch(addProject(newProject)) 
    }

    const handleUpdateProject =  (updatedProject) => {
        dispatch(updateProject(updatedProject))
    }
    
    const projectActions = {
        remove: handleRemoveProject,
        add: handleAddProject,
        update: handleUpdateProject
    }
    
    //TODO: animation on remove project

    return (
        <section className="project-index">
            <button
                className="add-project"
                onClick={projectActions.add}
            >
                New Project
            </button>
            <ProjectList projects={projects} projectActions={projectActions}  />
        </section>
    )
}

// TODO: add pagination