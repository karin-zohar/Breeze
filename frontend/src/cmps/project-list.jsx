import { ProjectPreview } from './project-preview.jsx'

export function ProjectList({ projects, dispatchProjectActions }) {

    return (
        <ul className="project-list">
            {projects.map(project => {
                return (
                    <li key={project.projectId}>
                        <ProjectPreview project={project} />
                        
                    </li>
                )
            })}
        </ul>
    )
}