import { useState } from "react"
import { ProjectEditWidget } from "./project-edit-widget"
import SlProgressBar from '@shoelace-style/shoelace/dist/react/progress-bar'
import { utilService } from "../services/util.service"


export function ProjectPreview({ project, projectActions }) {

    const [currProject, setCurrProject] = useState(project)
    const { title, description, wordcount, targetWordcount } = currProject
    const { remove, add, update } = projectActions
    const projectFields = ["title", "description"]
    const isCompleted = (wordcount >= targetWordcount)
    const wordcountPercentage = utilService.getPercentage(wordcount, targetWordcount)

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
                <div className="progress-bar-wrapper">
                <SlProgressBar className="progress-bar" value={wordcountPercentage}>{wordcountPercentage}%</SlProgressBar>
                </div>

                <p className={`progress-text ${isCompleted ? 'completed' : ''}`}>
                    <span className="wordcount">{wordcount}</span> / <span className="target">{targetWordcount}</span> words
                </p>
            </div>
        </article>
    )
}
