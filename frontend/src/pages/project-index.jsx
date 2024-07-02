import { ProjectList } from '../cmps/project-list.jsx'
import { useSelector } from 'react-redux'
import projectReducer from '../store/projects/project.reducer.js'

export default function ProjectIndex() {
    const projects = useSelector((state) => state.projects.value)

    return (
        <section className="project-index">
            <h2>project index</h2>
            <ProjectList projects={projects}/>
        </section>
    )
}

