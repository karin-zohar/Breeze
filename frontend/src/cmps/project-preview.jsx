import { useState } from "react"
import { ProjectEditWidget } from "./project-edit-widget"

export function ProjectPreview({ project, projectActions }) {

    const [currProject, setCurrProject] = useState(project)
    const { title, description, wordcount, targetWordcount } = currProject
    const { remove, add, update } = projectActions
    const projectFields = ["title", "description","targetWordcount"]

    return (
        <article className="project-preview">
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

            <div className="project-progress">
                <p className="project-text">
                    <span className="wordcount">{wordcount}</span> / <span className="target">{targetWordcount}</span> words
                </p>
            </div>
        </article>
    )
}
