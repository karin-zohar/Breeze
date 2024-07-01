import { ThemeToggle } from './theme-toggle'
import { Logo } from "./logo"

export function AppHeader({ isMenuOpen, toggleMenu }) {
    
    const closeMenu = () => {
        if (isMenuOpen) toggleMenu()
    }

    return (
        <header className="app-header">
            <section className="logo-container" onClick={closeMenu}>
                <Logo />
            </section>
            <section className="toggles">
                <ThemeToggle />
                <button
                    className={`menu-toggle ${isMenuOpen ? 'open' : 'closed'}`}
                    onClick={toggleMenu}
                >
                </button>
            </section>
        </header>
    )
}