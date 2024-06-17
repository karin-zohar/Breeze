import { useTheme } from "../contexts/ThemeContext"

export function ThemeToggle() {
    const {toggleTheme} = useTheme()
    console.log(toggleTheme)

    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    )
}