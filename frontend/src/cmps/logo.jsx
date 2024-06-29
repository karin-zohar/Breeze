import { NavLink } from "react-router-dom"

export function Logo() {
    return (
        <NavLink
            to="/"
            className="logo"
        >
            Breeze
        </NavLink>
    )
}