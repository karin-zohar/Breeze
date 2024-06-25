import { publicRoutes } from "../constants/routes"
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

export function AppNav() {
    const location = useLocation()
    const routes = publicRoutes

    return (
        <nav className="app-nav">
            {routes.map(({ path, title }, key) => (

                <NavLink
                    to={path}
                    className={(location.pathname === path) ? "active" : ""}
                    key={key}
                >
                    {title}
                </NavLink>

            ))}



        </nav>
    )
}