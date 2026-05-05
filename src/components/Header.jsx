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
                    className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg active:scale-95 transition-transform duration-200 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
                    <svg
                        className={`w-5 h-5 transition-opacity duration-300 ${menuOpen ? 'opacity-0 absolute' : 'opacity-100'}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                    <svg
                        className={`w-5 h-5 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 absolute'}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <line x1="6" y1="6" x2="18" y2="18" />
                        <line x1="6" y1="18" x2="18" y2="6" />
                    </svg>
                </button>
            </div>


            {menuOpen && (
                <nav className="md:hidden absolute left-0 right-0 top-full mt-3">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl py-3 px-4 flex flex-col space-y-1.5 shadow-2xl animate-fade-in">
                        <a href="#home" onClick={toggleMenu} className="nav-link text-base py-1.5 px-3 rounded-lg hover:bg-white/10 transition-colors">Home</a>
                        <a href="#projects" onClick={toggleMenu} className="nav-link text-base py-1.5 px-3 rounded-lg hover:bg-white/10 transition-colors">Projects</a>
                        <a href="#skills" onClick={toggleMenu} className="nav-link text-base py-1.5 px-3 rounded-lg hover:bg-white/10 transition-colors">Skills</a>
                        <a href="#contact" onClick={toggleMenu} className="nav-link text-base py-1.5 px-3 rounded-lg hover:bg-white/10 transition-colors">Contact</a>
                    </div>
                </nav>
            )}
        </header>
    )
}

export default Header