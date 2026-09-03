import { useRef, useEffect, useState } from 'react'

function Skills() {
    const topRow = [
        { name: "React", icon: <ReactIcon /> },
        { name: "JavaScript", icon: <JavaScriptIcon /> },
        { name: "Tailwind CSS", icon: <TailwindIcon /> },
        { name: "HTML", icon: <HtmlIcon /> },
        { name: "CSS", icon: <CssIcon /> },
    ]
    const bottomRow = [
        { name: "Python", icon: <PythonIcon /> },
        { name: "Django", icon: <DjangoIcon /> },
        { name: "Django REST Framework", icon: <DjangoRestIcon /> },
        { name: "REST API", icon: <ApiIcon /> },
        { name: "Git", icon: <GitIcon /> },
        { name: "GitHub", icon: <GitHubIcon /> },
        { name: "Postman", icon: <PostmanIcon /> },
    ]

    return (
        <section id="skills" className="py-24 px-4 bg-[#EFEAE3]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12 tracking-tight">My <span className="text-[#2563EB]">Skills</span></h2>
                <div className="flex flex-col gap-6">
                    <Rail items={topRow} speed={-0.7} />
                    <Rail items={bottomRow} speed={0.7} />
                </div>
            </div>
        </section>
    )
}

function Rail({ items, speed }) {
    const trackRef = useRef(null)
    const posRef = useRef(0)
    const setWidthRef = useRef(0)
    const rafRef = useRef(null)
    const isDragging = useRef(false)
    const dragStart = useRef(0)
    const dragPos = useRef(0)
    const [paused, setPaused] = useState(false)

    const duplicated = [...items, ...items]

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        const measure = () => {
            if (!track.children.length) return
            const count = items.length
            let total = 0
            for (let i = 0; i < count; i++) {
                total += track.children[i].offsetWidth
            }
            const gap = 16
            total += (count - 1) * gap
            setWidthRef.current = total
        }

        measure()
        window.addEventListener('resize', measure)

        const animate = () => {
            if (!paused && !isDragging.current) {
                posRef.current += speed

                const w = setWidthRef.current
                if (speed < 0 && posRef.current <= -w) {
                    posRef.current = 0
                } else if (speed > 0 && posRef.current >= 0) {
                    posRef.current = -w
                }
            }

            track.style.transform = `translateX(${posRef.current}px)`
            rafRef.current = requestAnimationFrame(animate)
        }

        rafRef.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('resize', measure)
            cancelAnimationFrame(rafRef.current)
        }
    }, [speed, paused])

    useEffect(() => {
        const handleUp = () => {
            isDragging.current = false
            const w = setWidthRef.current
            if (speed < 0) {
                if (posRef.current <= -w) posRef.current = 0
                else if (posRef.current > 0) posRef.current = 0
            } else {
                if (posRef.current >= 0) posRef.current = -w
                else if (posRef.current < -w) posRef.current = -w
            }
        }

        window.addEventListener('mouseup', handleUp)
        window.addEventListener('touchend', handleUp)
        return () => {
            window.removeEventListener('mouseup', handleUp)
            window.removeEventListener('touchend', handleUp)
        }
    }, [speed])

    const handleDown = (e) => {
        isDragging.current = true
        dragStart.current = e.clientX || e.touches[0].clientX
        dragPos.current = posRef.current
    }

    const handleMove = (e) => {
        if (!isDragging.current) return
        const x = e.clientX || (e.touches && e.touches[0].clientX)
        const diff = x - dragStart.current
        posRef.current = dragPos.current + diff
    }

    return (
        <div
            className="relative overflow-hidden select-none"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => { setPaused(false); isDragging.current = false }}
            onMouseDown={handleDown}
            onMouseMove={handleMove}
            onTouchStart={handleDown}
            onTouchMove={handleMove}
        >
            <div className="absolute left-0 top-0 h-full w-32 bg-linear-to-r from-[#EFEAE3] via-[#EFEAE3]/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-32 bg-linear-to-l from-[#EFEAE3] via-[#EFEAE3]/80 to-transparent z-10 pointer-events-none" />

            <div ref={trackRef} className="flex gap-4 will-change-transform">
                {duplicated.map((skill, i) => (
                    <span
                        key={i}
                        className="px-6 py-3 rounded-full border border-black/15 bg-white text-black/80 whitespace-nowrap text-sm font-medium shadow-[0_1px_0_rgba(20,20,20,0.06),0_8px_16px_-12px_rgba(20,20,20,0.2)] transition-all duration-300 hover:border-[#B3261E]/40 hover:text-[#B3261E] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(179,38,30,0.35)] cursor-grab active:cursor-grabbing flex items-center gap-2 shrink-0"
                    >
                        <span className="w-4 h-4">{skill.icon}</span>
                        <span>{skill.name}</span>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Skills

function ReactIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="2.5" />
            <ellipse cx="12" cy="12" rx="9" ry="3" />
            <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(120 12 12)" />
        </svg>
    )
}

function JavaScriptIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M8 14v-4l2 4v-4" />
            <path d="M13 14v-4l2 4v-4" />
        </svg>
    )
}

function TailwindIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5C9.5 5 8 6.5 8 9c0 1.5.75 2.5 2 3-1.25.5-2 1.5-2 3 0 2.5 1.5 4 4 4s4-1.5 4-4c0-1.5-.75-2.5-2-3 1.25-.5 2-1.5 2-3 0-2.5-1.5-4-4-4z" />
        </svg>
    )
}

function HtmlIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3l1.5 18L12 21l7.5-3L21 3H3z" />
            <path d="M7 7h10l-.5 6L12 14l-4.5-1L7 7z" />
            <path d="M8.5 10h7" />
        </svg>
    )
}

function CssIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3l1.5 18L12 21l7.5-3L21 3H3z" />
            <path d="M8 7h8l-.5 4L12 12l-3.5-1L8 7z" />
            <path d="M8.5 13h7" />
        </svg>
    )
}

function PythonIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8 2 6 4 6 7v3h6v1H6c-2 0-4 1.5-4 4s1.5 4 4 4h2v-3h4v3h2c2.5 0 4-1.5 4-4s-1.5-4-4-4h-2V8h4V7c0-3-2-5-6-5z" />
            <circle cx="9" cy="6" r="0.8" fill="currentColor" stroke="none" />
            <circle cx="15" cy="17" r="0.8" fill="currentColor" stroke="none" />
        </svg>
    )
}

function DjangoIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M6 7v10" />
            <path d="M16 7h-2l-2 4v6" />
            <path d="M14 11h4" />
        </svg>
    )
}

function DjangoRestIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M6 7v10" />
            <path d="M10 7l3 5-3 5" />
            <path d="M16 17V7" />
        </svg>
    )
}

function ApiIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12h16" />
            <path d="M4 6h16" />
            <path d="M4 18h16" />
            <circle cx="8" cy="6" r="1" fill="currentColor" stroke="none" />
            <circle cx="8" cy="12" r="1" fill="currentColor" stroke="none" />
            <circle cx="8" cy="18" r="1" fill="currentColor" stroke="none" />
        </svg>
    )
}

function GitIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l4 4 4-4" />
            <path d="M12 8v8" />
        </svg>
    )
}

function GitHubIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
    )
}

function PostmanIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M8 10l4 4 4-4" />
        </svg>
    )
}