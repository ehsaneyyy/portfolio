function Skills() {
    const skillsList = [
        { name: "HTML", icon: "🟧" },
        { name: "CSS", icon: "🎨" },
        { name: "Tailwind CSS", icon: "🖌️" },
        { name: "JavaScript", icon: "📜" },
        { name: "Django", icon: "🐍" },
        { name: "React", icon: "⚛️" },
        { name: "REST API", icon: "🔗" },
        { name: "Git & GitHub", icon: "🐙" },
    ]

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-md mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    My Skills
                </h2>

                <div className="skill-marquee-viewport">
                    <div className="skill-marquee-track">
                    
                        {[...skillsList, ...skillsList].map((skill, index) => (
                            <div
                                key={index}
                                className="glass-stack-card bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 flex items-center gap-4 shadow-lg mx-auto w-48"
                            >
                                <span className="text-2xl">{skill.icon}</span>
                                <span className="text-white font-medium text-lg">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills