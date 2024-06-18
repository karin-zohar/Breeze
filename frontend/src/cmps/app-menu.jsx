import { useState } from "react"
import { AppNav } from "./app-nav"

export function AppMenu({isMenuOpen, toggleMenu}) {
    //TODO: call toggleMenu on swipe up
    return (
        <div className={`app-menu ${isMenuOpen ? 'open' : ''}`}>
            app  menu
            <AppNav />
        </div>
    )
}