function Skills() {
    const skillsList = [
        { name: "HTML & CSS", level: 90, icon: "🌐" },
        { name: "JavaScript", level: 85, icon: "📜" },
        { name: "React", level: 80, icon: "⚛️" },
        { name: "Tailwind CSS", level: 85, icon: "🎨" },
        { name: "Git & GitHub", level: 75, icon: "🔧" },
    ]

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    My Skills
                </h2>

                <div className="space-y-6">
                    {skillsList.map((skill, index) => (
                        <div key={index}>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl">{skill.icon}</span>
                                <span className="text-lg font-medium text-white">
                                    {skill.name}
                                </span>
                                <span className="ml-auto text-purple-300 text-sm">
                                    {skill.level}%
                                </span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills