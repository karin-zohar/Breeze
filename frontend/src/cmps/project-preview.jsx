import { projectService } from "../services/project.service"

export function ProjectPreview({ project, projectActions }) {

    const { title, description } = project
    const { remove, add, update } = projectActions


    const handleEditProject = (event) => {
        const updatedField = {}
        const projectField = event.currentTarget.dataset.field
        // const newValue = event.currentTarget.textContent
        const newValue = "new value" //temp
        updatedField[projectField] = newValue
        const updatedProject = {...project, ...updatedField}
        update(updatedProject)
    }
    return (
        <article className="project-preview">
            <h2 data-field="title" onClick={handleEditProject}>{title}</h2>
            <p data-field="description" onClick={handleEditProject}>{description}</p>
        </article>
    )
}

//TODO: add event listener to dblclick -> contentEditable=true on the title and description
//TOOD: save changes to db. 