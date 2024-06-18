import { ThemeToggle } from './theme-toggle'

export function AppHeader({ isMenuOpen, toggleMenu }) {
    return (
        <header className="app-header">
            <div className="logo">Breeze</div>
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