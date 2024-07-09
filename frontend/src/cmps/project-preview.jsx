import { useState } from "react"
import { projectService } from "../services/project.service"

export function ProjectPreview({ project, projectActions }) {

    const [currProject, setCurrProject] = useState(project)
    const { title, description } = currProject
    const { remove, add, update } = projectActions


    const handleEditProject = (event) => {
        const updatedField = {}
        const projectField = event.currentTarget.dataset.field
        const newValue = event.currentTarget.value
        updatedField[projectField] = newValue
        const updatedProject = { ...currProject, ...updatedField }
        update(updatedProject)
        setCurrProject(updatedProject)
    }

    return (
        <article className="project-preview">
            <div className="project-title-widget">
                <h2
                    className="project-title-label"
                    data-field="title"
                >
                    {title}
                </h2>

                <input
                    className="project-title-input"
                    onInput={handleEditProject}
                    defaultValue={title}
                    aria-label="Change project title"
                    type="text"
                    data-field="title"
                    spellCheck="false"
                    autoComplete="off"
                >
                </input>
            </div>
            <div className="project-description-widget">
                <p
                    data-field="description"
                >
                    {description}
                </p>
          
                <input
                    className="project-title-input"
                    onInput={handleEditProject}
                    defaultValue={description}
                    aria-label="Change project title"
                    type="text"
                    data-field="description"
                    spellCheck="false"
                    autoComplete="off"
                >
                </input>
            </div>
        </article>
    )
}

//TODO: add event listener to dblclick -> on the title and description
//TOOD: save changes to db. 