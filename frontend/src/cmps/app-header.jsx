import { ThemeToggle } from './theme-toggle'

export function AppHeader({ isMenuOpen, toggleMenu }) {
    return (
        <header className="app-header">
            <ThemeToggle />
            <button
                className={`menu-toggle ${isMenuOpen ? 'open' : 'closed'}`}
                onClick={toggleMenu}
            >
                
            </button>
            app header
        </header>
    )
}