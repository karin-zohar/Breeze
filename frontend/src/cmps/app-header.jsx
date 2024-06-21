import { ThemeToggle } from './theme-toggle'
import { Logo } from "./logo"

export function AppHeader({ isMenuOpen, toggleMenu }) {
    return (
        <header className="app-header">
            <Logo />
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