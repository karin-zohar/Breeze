import { useState, useRef } from "react"
import SlTooltip from '@shoelace-style/shoelace/dist/react/tooltip'
import { utilService } from "../services/util.service"

export function ProjectEditWidget({ currProject, setCurrProject, update, field }) {
    const [isActive, setIsActive] = useState(false)
    const fieldValue = currProject[field]
    const widgetClasses = [`widget`, `project-${field}-widget`, (isActive ? `input-active` : ``)]
    const inputRef = useRef(null)

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

    const exitEditMode = () => {
        if (inputRef.current) {
            window.removeEventListener('keydown', handleEnter)
            inputRef.current.blur()
            setIsActive(false)
        }
    }

    const enterEditMode = () => {
        if (inputRef.current) {
            setIsActive(true)
            inputRef.current.focus()
            window.addEventListener('keydown', handleEnter)
        }
    }

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            exitEditMode()
        }
    }


    return (
        <div
            className={widgetClasses.join(' ')}
            data-field={field}
            onClick={enterEditMode}

        >
            <SlTooltip className="tooltip" content={`Edit ${field}`} placement="top">
            <div className="label" title={field}>
                <span>{fieldValue}</span>
            </div>
            </SlTooltip>

            <textarea
                defaultValue={fieldValue}
                aria-label="Change project title"
                type="text"
                onFocus={handleFocus}
                onBlur={handleEditProject}
                ref={inputRef}
                >
            </textarea>
                
        </div>
    )
}