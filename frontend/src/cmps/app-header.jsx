

export function AppHeader(props) {
    const { isDarkTheme, setIsDarkTheme } = props

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => (!prevTheme))
    }

    return(
        <header className="app-header">
             <button onClick={toggleTheme}>Toggle theme</button>
            app header
        </header>
    )
}