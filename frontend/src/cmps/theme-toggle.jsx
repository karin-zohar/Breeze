import { useTheme } from "../contexts/ThemeContext"

export function ThemeToggle() {
    const {toggleTheme} = useTheme()
    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    )
}