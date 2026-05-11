import { useRef, useEffect, useState } from 'react'

function Skills() {
    const topRow = [
        "React", "JavaScript", "Tailwind CSS", "HTML", "CSS",
    ]
    const bottomRow = [
        "Python", "Django", "Django REST Framework", "REST API", "Git", "GitHub", "Postman",
    ]

    return (
        <section id="skills" className="py-20 px-4 bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-12">My Skills</h2>
                <div className="flex flex-col gap-6">
                    <Rail items={topRow} speed={0.5} />
                    <Rail items={bottomRow} speed={-0.5} />
                </div>
            </div>
        </section>
    )
}

function Rail({ items, speed }) {
    const [position, setPosition] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const [dragStart, setDragStart] = useState(0)
    const [dragOffset, setDragOffset] = useState(0)
    const containerRef = useRef(null)
    const itemWidth = useRef(0)

    const allItems = [...items, ...items, ...items, ...items, ...items, ...items]

    useEffect(() => {
        if (containerRef.current) {
            const firstItem = containerRef.current.querySelector('span')
            if (firstItem) {
                itemWidth.current = (firstItem.offsetWidth + 16) * items.length
            }
        }
    }, [items])

    useEffect(() => {
        if (isPaused || isDragging) return

        const animate = () => {
            setPosition(prev => {
                let next = prev + speed
                const limit = itemWidth.current

                if (speed > 0 && next >= limit) {
                    return next - limit
                }
                if (speed < 0 && next <= -limit) {
                    return next + limit
                }
                return next
            })
        }

        const interval = setInterval(animate, 16)
        return () => clearInterval(interval)
    }, [speed, isPaused, isDragging, items])

    const handleMouseDown = (e) => {
        setIsDragging(true)
        setDragStart(e.clientX)
        setDragOffset(position)
    }

    const handleTouchStart = (e) => {
        setIsDragging(true)
        setDragStart(e.touches[0].clientX)
        setDragOffset(position)
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return
        const diff = e.clientX - dragStart
        setPosition(dragOffset + diff)
    }

    const handleTouchMove = (e) => {
        if (!isDragging) return
        const diff = e.touches[0].clientX - dragStart
        setPosition(dragOffset + diff)
    }

    const handleEnd = () => {
        setIsDragging(false)
    }

    return (
        <div
            className="relative overflow-hidden select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
                setIsPaused(false)
                setIsDragging(false)
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEnd}
        >
            <div className="absolute left-0 top-0 h-full w-32 bg-linear-to-r from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-32 bg-linear-to-l from-gray-900 via-gray-900/80 to-transparent z-10 pointer-events-none" />

            <div
                ref={containerRef}
                className="flex gap-4 cursor-grab active:cursor-grabbing"
                style={{
                    transform: `translateX(${position}px)`,
                    transition: isDragging ? 'none' : 'transform 0.1s linear'
                }}
            >
                {allItems.map((skill, i) => (
                    <span
                        key={i}
                        className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 whitespace-nowrap text-sm font-medium transition-all duration-300 hover:border-purple-400/50 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-grab active:cursor-grabbing"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Skills