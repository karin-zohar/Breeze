import { useState } from "react"
import { Logo } from "./logo"
import { AppNav } from "./app-nav"

export function AppMenu({ isMenuOpen, toggleMenu }) {
    //TODO: call toggleMenu on swipe up
    return (
        <div className={`app-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="menu-header">
                <Logo />
            </div>
            <AppNav />
        </div>
    )
}