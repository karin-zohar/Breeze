import { ProjectPreview } from './project-preview.jsx'

export function ProjectList({ projects }) {

    return (
        <ul className="project-list">
            <li>
                <ProjectPreview />
            </li>
            <li>
                <ProjectPreview />
            </li>
            <li>
                <ProjectPreview />
            </li>

        </ul>
    )
}