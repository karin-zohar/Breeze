import { ProjectPreview } from './project-preview.jsx'

export function ProjectList({ projects, projectActions }) {
    const {remove, add} = projectActions 
    return (
        <ul className="project-list">
            {projects.map(project => {
                return (
                    <li key={project._id}>
                        <ProjectPreview project={project} projectActions={projectActions} />
                        <div className="project-actions">
                            <button className="remove-project" onClick={() => remove(project._id)}>
                                remove
                            </button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}