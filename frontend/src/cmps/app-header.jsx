

export function AppHeader(props) {
    const { isDarkTheme, setIsDarkTheme } = props

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => (!prevTheme))
    }

    return(
        <header>
             <button onClick={toggleTheme}>Toggle theme</button>
            app header
        </header>
    )
}