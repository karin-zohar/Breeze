import { ProjectPreview } from './project-preview.jsx'

export function ProjectList({ projects }) {
    return (
        <ul className="project-list">
            {projects.map(project => {
                return (
                    <li>
                        <ProjectPreview project={project} />
                    </li>
                )
            })}
        </ul>
    )
}