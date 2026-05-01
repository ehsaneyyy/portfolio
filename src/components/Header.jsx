import { useState } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)

    return (
        <header className="refractive-header fixed top-4 left-4 right-4 z-50 py-2 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
            <div className="relative max-w-6xl mx-auto flex justify-between items-center h-14 px-3 sm:px-4">
                <div className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
                    Portfolio
                </div>

                <nav className="hidden md:flex space-x-4 lg:space-x-8">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>

                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white text-2xl p-1 -mr-1 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {menuOpen && (
                <nav className="md:hidden flex flex-col space-y-3 pb-4 pt-2 px-3">
                    <a href="#home" onClick={toggleMenu} className="nav-link text-lg">Home</a>
                    <a href="#projects" onClick={toggleMenu} className="nav-link text-lg">Projects</a>
                    <a href="#skills" onClick={toggleMenu} className="nav-link text-lg">Skills</a>
                    <a href="#contact" onClick={toggleMenu} className="nav-link text-lg">Contact</a>
                </nav>
            )}
        </header>
    )
}

export default Header