import { ProjectList } from '../cmps/project-list.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllProjects,loadProjects, addProject, removeProject } from '../store/projects/project.reducer.js'
import { projectService } from '../services/project.service.js'

export default function ProjectIndex() {
    const projects = useSelector(selectAllProjects) // array
    const dispatch = useDispatch()

    const handleRemoveProject = (projectId) => {
        dispatch(removeProject(projectId))
    }

    const projectActions = {
        remove: handleRemoveProject
    }

    return (
        <section className="project-index">
            <h2>project index</h2>
            {/* <button
                className="add-project"
                onClick={dispatchProjectActions.addProject}
            >
                Add project
            </button> */}
            <ProjectList projects={projects} projectActions={projectActions}  />
        </section>
    )
}

