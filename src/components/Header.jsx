import { useState, useEffect } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)

    const links = [
        { href: '#home', label: 'Home' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' },
    ]

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`refractive-header fixed top-4 left-4 right-4 z-50 py-2 sm:left-8 sm:right-8 lg:left-12 lg:right-12 ${scrolled ? 'shadow-[0_16px_40px_-16px_rgba(20,20,20,0.18)]' : ''}`}>
            <div className="relative max-w-6xl mx-auto flex justify-between items-center h-14 px-3 sm:px-4">
                <a
                    href="#home"
                    className="text-xl sm:text-2xl font-bold text-black tracking-tight transition-colors duration-300 hover:text-[#B3261E] hover:drop-shadow-[0_0_14px_rgba(179,38,30,0.55)]"
                    style={{ fontFamily: "'Unbounded', sans-serif" }}
                >
                    M.Ehsan<span className="text-[#B3261E]"> C</span>
                </a>

                <nav className="hidden md:flex space-x-4 lg:space-x-8">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
                    ))}
                </nav>

                <button
                    onClick={toggleMenu}
                    className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/5 shadow-sm transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B3261E] active:scale-95 md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                >
                    <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
                    <svg
                        className={`w-5 h-5 transition-opacity duration-300 ${menuOpen ? 'opacity-0 absolute' : 'opacity-100'}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#141414"
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
                        stroke="#141414"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        <line x1="6" y1="6" x2="18" y2="18" />
                        <line x1="6" y1="18" x2="18" y2="6" />
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <nav id="mobile-nav" className="absolute top-full right-0 left-0 mt-3 md:hidden">
                    <div className="refractive-header rounded-2xl py-3 px-4 flex flex-col space-y-1.5 shadow-xl animate-fade-in">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={toggleMenu}
                                className="nav-link rounded-lg px-3 py-2 text-base transition-colors hover:bg-black/5"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    )
}

export default Header
