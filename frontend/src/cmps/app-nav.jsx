import { publicRoutes } from "../constants/routes" 

export function AppNav() {
    const currentLocation = window.location.pathname
    const routes = publicRoutes
    
    return (
        <nav className="app-nav">
            {routes.map(({path, title}, key) => (
                <a
                    key={key}
                    href={path}
                    className={(currentLocation === path) ? "active" : ""}>
                    {title}
                </a>

            ))}

           

        </nav>
    )
}