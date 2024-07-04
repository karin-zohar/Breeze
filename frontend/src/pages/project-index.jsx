import { ProjectList } from '../cmps/project-list.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllProjects } from '../store/projects/project.reducer.js'
import projectReducer from '../store/projects/project.reducer.js'
import { addProject } from '../store/projects/project.reducer.js'

export default function ProjectIndex() {
    const projects = useSelector(selectAllProjects) // array
    const dispatch = useDispatch()

    const dispatchProjectActions = {
        addProject: () => dispatch(addProject('new project'))
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
            <ProjectList projects={projects} dispatchProjectActions={dispatchProjectActions} />
        </section>
    )
}

