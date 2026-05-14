import { useState, useRef, useEffect } from 'react'

function Hero() {
    const containerRef = useRef(null)
    const targetRef = useRef({ x: 0, y: 0 })
    const currentRef = useRef({ x: 0, y: 0 })
    const autoAngleRef = useRef(0)
    const rafRef = useRef(null)
    const initializedRef = useRef(false)
    const [mouseInside, setMouseInside] = useState(false)

    const [pos, setPos] = useState({ x: 0, y: 0 })

    const baseRadius = 90
    const feather = 30

    useEffect(() => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (rect) {
            const cx = rect.width / 2
            const cy = rect.height / 2 + 20
            targetRef.current = { x: cx, y: cy }
            currentRef.current = { x: cx, y: cy }
            setPos({ x: cx, y: cy })
            initializedRef.current = true
        }
    }, [])

    useEffect(() => {
        const animate = () => {
            if (!initializedRef.current) {
                rafRef.current = requestAnimationFrame(animate)
                return
            }

            const rect = containerRef.current?.getBoundingClientRect()
            if (!rect) {
                rafRef.current = requestAnimationFrame(animate)
                return
            }

            if (!mouseInside) {
                autoAngleRef.current += 0.008
                const cx = rect.width / 2
                const cy = rect.height / 2 + 20
                targetRef.current = {
                    x: cx + Math.cos(autoAngleRef.current) * 90,
                    y: cy + Math.sin(autoAngleRef.current * 1.7) * 70,
                }
            }

            currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.07
            currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.07
            setPos({ x: currentRef.current.x, y: currentRef.current.y })

            rafRef.current = requestAnimationFrame(animate)
        }
        rafRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(rafRef.current)
    }, [mouseInside])

    const handleMouseMove = (e) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect) return
        targetRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        }
    }

    const handleMouseEnter = () => setMouseInside(true)
    const handleMouseLeave = () => setMouseInside(false)

    const isOverCharacter = (() => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect || pos.x < 0 || pos.y < 0) return false
        const relX = pos.x / rect.width
        const relY = pos.y / rect.height
        return relX > 0.2 && relX < 0.8 && relY > 0.1 && relY < 0.9
    })()

    const t = Date.now() / 1000
    const offset1 = { x: Math.sin(t * 1.7) * 25, y: Math.cos(t * 2.1) * 30 }
    const offset2 = { x: Math.cos(t * 2.3) * 20, y: Math.sin(t * 1.9) * 35 }
    const r1 = baseRadius + Math.sin(t * 2.5) * 15
    const r2 = baseRadius * 1.3 + Math.cos(t * 2.8) * 20
    const f1 = feather + Math.sin(t * 3.1) * 10
    const f2 = feather + Math.cos(t * 3.4) * 12

    const peterMask = [
        `radial-gradient(ellipse ${r1}px ${r1 * 1.2}px at ${pos.x + offset1.x}px ${pos.y + offset1.y}px, transparent ${Math.max(0, r1 - f1)}px, black ${r1}px)`,
        `radial-gradient(ellipse ${r2}px ${r2 * 0.9}px at ${pos.x + offset2.x}px ${pos.y + offset2.y}px, transparent ${Math.max(0, r2 - f2)}px, black ${r2}px)`,
    ].join(', ')

    const spideyMask = [
        `radial-gradient(ellipse ${r1}px ${r1 * 1.2}px at ${pos.x + offset1.x}px ${pos.y + offset1.y}px, black ${Math.max(0, r1 - f1)}px, transparent ${r1}px)`,
        `radial-gradient(ellipse ${r2}px ${r2 * 0.9}px at ${pos.x + offset2.x}px ${pos.y + offset2.y}px, black ${Math.max(0, r2 - f2)}px, transparent ${r2}px)`,
    ].join(', ')

    return (
        <section id="home" className="relative h-screen pt-24 overflow-hidden bg-gray-900">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <h1
                    className={`text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] font-black uppercase whitespace-nowrap tracking-[-0.06em] text-slate-300 transition-opacity duration-700 ${isOverCharacter ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    PETER PARKER
                </h1>
                <h1
                    className={`absolute text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] font-black uppercase whitespace-nowrap tracking-[-0.06em] text-slate-300 transition-opacity duration-700 ${isOverCharacter ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    SPIDERMAN
                </h1>
            </div>

            <div
                className="absolute top-24 left-0 right-0 bottom-0 overflow-hidden pointer-events-none z-10"
                style={{
                    maskImage: peterMask,
                    WebkitMaskImage: peterMask,
                }}
            >
                <img
                    src="/peter1.png"
                    alt="Peter Parker"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
            </div>

            <div
                className="absolute top-24 left-0 right-0 bottom-0 overflow-hidden pointer-events-none z-30"
                style={{
                    maskImage: spideyMask,
                    WebkitMaskImage: spideyMask,
                }}
            >
                <img
                    src="/spidey1.png"
                    alt="Spiderman"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-gray-900 to-transparent pointer-events-none z-40" />

            <div
                ref={containerRef}
                className="absolute top-24 left-0 right-0 bottom-0 z-50"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </section>
    )
}

export default Hero