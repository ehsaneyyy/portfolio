import { useState, useRef } from 'react'

function Hero() {
    const [mouse, setMouse] = useState({ x: -100, y: -100 })
    const containerRef = useRef(null)   // reference to the image area

    const radius = 90
    const feather = 20

    const handleMouseMove = (e) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect) return
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMouse({ x, y })
    }

    const handleMouseLeave = () => {
        setMouse({ x: -100, y: -100 })
    }

    // True only when the cursor is inside the central character zone
    const isOverCharacter = (() => {
        if (mouse.x < 0 || mouse.y < 0) return false
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect) return false
        const relX = mouse.x / rect.width
        const relY = mouse.y / rect.height
        return relX > 0.3 && relX < 0.7 && relY > 0.1 && relY < 0.9
    })()

    return (
        <section id="home" className="relative h-screen pt-24 overflow-hidden bg-gray-900">
            {/* Background text – fades between PETER PARKER and SPIDERMAN */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <h1
                    className={`text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] font-black text-white/5 uppercase tracking-normal whitespace-nowrap shrink-0 transition-opacity duration-700 ${isOverCharacter ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    PETER PARKER
                </h1>
                <h1
                    className={`absolute text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] font-black text-white/5 uppercase tracking-normal whitespace-nowrap shrink-0 transition-opacity duration-700 ${isOverCharacter ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    SPIDERMAN
                </h1>
            </div>

            {/* Peter Parker – hidden inside the circle */}
            <div className="absolute top-24 left-0 right-0 bottom-0 overflow-hidden pointer-events-none"
                style={{
                    maskImage: `radial-gradient(circle ${radius}px at ${mouse.x}px ${mouse.y}px, transparent ${radius - feather}px, black ${radius}px)`,
                    WebkitMaskImage: `radial-gradient(circle ${radius}px at ${mouse.x}px ${mouse.y}px, transparent ${radius - feather}px, black ${radius}px)`,
                }}
            >
                <img
                    src="/peter1.png"
                    alt="Peter Parker"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
            </div>

            {/* Spiderman – visible only inside the circle */}
            <div className="absolute top-24 left-0 right-0 bottom-0 overflow-hidden pointer-events-none"
                style={{
                    maskImage: `radial-gradient(circle ${radius}px at ${mouse.x}px ${mouse.y}px, black ${radius - feather}px, transparent ${radius}px)`,
                    WebkitMaskImage: `radial-gradient(circle ${radius}px at ${mouse.x}px ${mouse.y}px, black ${radius - feather}px, transparent ${radius}px)`,
                    transition: mouse.x === -100 ? 'none' : 'mask-image 0.05s ease-out',
                }}
            >
                <img
                    src="/spidey1.png"
                    alt="Spiderman"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
            </div>

            {/* Interaction layer – captures mouse, also the ref for containment */}
            <div
                ref={containerRef}
                className="absolute top-24 left-0 right-0 bottom-0 z-10"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            />
        </section>
    )
}

export default Hero