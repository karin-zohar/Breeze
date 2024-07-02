import { projectService } from "../services/project.service"

export function ProjectPreview({project}) {
    return (
        <article className="project-preview">
            {project}
        </article>
    )
}