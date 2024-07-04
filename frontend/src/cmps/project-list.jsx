import { ProjectPreview } from './project-preview.jsx'

export function ProjectList({ projects, projectActions }) {
    return (
        <ul className="project-list">
            {projects.map(project => {
                return (
                    <li key={project._id}>
                        <ProjectPreview project={project} />
                        <button className="remove-project" onClick={() => projectActions.remove(project._id)}>
                            remove
                        </button>
                        
                    </li>
                )
            })}
        </ul>
    )
}