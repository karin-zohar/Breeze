import { useState } from "react"
import {utilService} from "../services/util.service"

export function ProjectEditWidget({currProject, setCurrProject, update, field}) {
    const [isActive, setIsActive] = useState(false)
    const fieldValue = currProject[field]
    const widgetClasses = [`widget`, `project-${field}-widget`, (isActive ? `input-active` : ``) ]
    
    const handleEditProject = (event) => {
        const updatedField = getUpdatedField(event)
        const updatedProject = { ...currProject, ...updatedField }
        update(updatedProject)
        setCurrProject(updatedProject)
        setIsActive(false)
    }

    const getUpdatedField = (event) => {
        const inputValue = event.currentTarget.value
        const updatedField = {}
        updatedField[field] = inputValue
        return updatedField
    }

    const handleFocus = () => {
        setIsActive(true)
    }


    return (
        <div 
        className={widgetClasses.join(' ')} 
        data-field={field}
        >
        <span>{fieldValue}</span>

        <textarea
            defaultValue={fieldValue}
            aria-label="Change project title"
            type="text"
            onFocus={handleFocus}
            onBlur={handleEditProject}
            autoFocus={true}
        >
        </textarea>
    </div>
    )
}