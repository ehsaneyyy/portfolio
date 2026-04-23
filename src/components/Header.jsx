import { useState } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className="fixed top-4 left-4 right-4 z-50 backdrop-blur-xl bg-white/20 border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-2xl py-2">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-14">

                    <div className="text-2xl font-bold text-white drop-shadow-sm">
                        Portfolio
                    </div>

                    <nav className="hidden md:flex gap-8">
                        <a href="#home" className="text-white/90 hover:text-white text-base font-medium transition">Home</a>
                        <a href="#projects" className="text-white/90 hover:text-white text-base font-medium transition">Projects</a>
                        <a href="#skills" className="text-white/90 hover:text-white text-base font-medium transition">Skills</a>
                        <a href="#contact" className="text-white/90 hover:text-white text-base font-medium transition">Contact</a>
                    </nav>

                    <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
                        ☰
                    </button>
                </div>

                {menuOpen && (
                    <nav className="md:hidden flex flex-col gap-4 pb-4 pt-2">
                        <a href="#home" onClick={toggleMenu} className="text-white/90 hover:text-white text-base font-medium">Home</a>
                        <a href="#projects" onClick={toggleMenu} className="text-white/90 hover:text-white text-base font-medium">Projects</a>
                        <a href="#skills" onClick={toggleMenu} className="text-white/90 hover:text-white text-base font-medium">Skills</a>
                        <a href="#contact" onClick={toggleMenu} className="text-white/90 hover:text-white text-base font-medium">Contact</a>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Header