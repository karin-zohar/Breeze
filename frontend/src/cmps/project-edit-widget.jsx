import { useState, useRef } from "react"

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

    const enterEditMode = () => {
        if (inputRef.current) {
            setIsActive(true)
            inputRef.current.focus()
            window.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    setIsActive(false)
                    inputRef.current.blur()
                }
            })
        }
    }


    return (
        <div
            className={widgetClasses.join(' ')}
            data-field={field}
            onDoubleClick={enterEditMode}
        >
            <div className="label">
                <span>{fieldValue}</span>
            </div>

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