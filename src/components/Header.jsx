import { useState } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)

    return (
        <header className="refractive-header fixed top-5 left-6 right-6 z-50 py-2 sm:left-12 sm:right-12">
            {/* This inner div is positioned relative so the glass streaks stay inside */}
            <div className="relative max-w-6xl mx-auto flex justify-between items-center h-14 px-0">
                <div className="text-2xl font-bold text-white drop-shadow-lg">
                    Portfolio
                </div>

                <nav className="hidden md:flex space-x-8">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>

                <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
                    ☰
                </button>
            </div>

            {menuOpen && (
                <nav className="md:hidden flex flex-col space-y-4 pb-4 pt-2">
                    <a href="#home" onClick={toggleMenu} className="nav-link">Home</a>
                    <a href="#projects" onClick={toggleMenu} className="nav-link">Projects</a>
                    <a href="#skills" onClick={toggleMenu} className="nav-link">Skills</a>
                    <a href="#contact" onClick={toggleMenu} className="nav-link">Contact</a>
                </nav>
            )}
        </header>
    )
}

export default Header