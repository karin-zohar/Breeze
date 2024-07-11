import { useState } from "react"
import { projectService } from "../services/project.service"
import { ProjectEditWidget } from "./project-edit-widget"

export function ProjectPreview({ project, projectActions }) {

    const [currProject, setCurrProject] = useState(project)
    const { title, description } = currProject
    const { remove, add, update } = projectActions
    const projectFields = ["title", "description"]


    // const handleEditProject = (widget) => {
    //     const updatedField = getUpdatedField(widget)
    //     const updatedProject = { ...currProject, ...updatedField }
    //     update(updatedProject)
    //     setCurrProject(updatedProject)
    // }

    // const getUpdatedField = (widget) => {
    //     const updatedField = {}
    //     const projectField = widget.dataset.field
    //     const newValue = widget.value
    //     updatedField[projectField] = newValue
    //     return updatedField
    // }





    return (
        <article className="project-preview">
            {/* <div className={`widget project-title-widget`} data-field="title" onClick={onWidget}>
                <h2
                    className="project-title-label"
                >
                    {title}
                </h2>

                <input
                    className="project-title-input"
                    // onInput={handleEditProject}
                    defaultValue={title}
                    aria-label="Change project title"
                    type="text"
                >
                </input>
            </div>
            <div className="widget project-description-widget" data-field="description" onClick={onWidget}>
                <p>{description}</p>

                <input
                    className="project-title-input"
                    // onInput={handleEditProject}
                    defaultValue={description}
                    aria-label="Change project title"
                    type="text"
                >
                </input>
            </div> */}
            <ul>
                {projectFields.map((projectField, idx) => {
                    return (
                        <li key={idx}>
                            <ProjectEditWidget
                                currProject={currProject}
                                setCurrProject={setCurrProject}
                                update={update}
                                field={projectField}
                            />
                        </li>
                    )
                })}

            </ul>
        </article>
    )
}

//TODO: add event listener to dblclick -> on the title and description
//TOOD: save changes to db. 