import { projectService } from "../services/project.service"

export function ProjectPreview({ project }) {
    const { title, description } = project
    return (
        <article className="project-preview">
            <h2>{title}</h2>
            <p>{description}</p>
        </article>
    )
}

//TODO: add event listener to dblclick -> contentEditable=true on the title and description
//TOOD: save changes to db. 