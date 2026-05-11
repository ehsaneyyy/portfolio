function Projects() {
    const projectList = [
        {
            label: "Featured Project",
            title: "Weather App",
            description: "Real-time weather with clean UI",
            tags: ["React", "API", "Tailwind"],
            link: "https://black-and-white-toggle-button.vercel.app/",
            github: "https://github.com/ehsaneyyy/Black-and-White-Toggle-Button",
            image: null,
            glow: "from-cyan-500/10 to-purple-500/10",
        },
        {
            label: "Frontend Experiment",
            title: "Task Manager",
            description: "Drag and drop task board",
            tags: ["React", "DnD", "LocalStorage"],
            github: "https://github.com/yourusername/task-manager",
            image: null,
            glow: "from-purple-500/10 to-pink-500/10",
        },
        {
            label: "Full‑Stack App",
            title: "Portfolio Site",
            description: "This glassmorphism portfolio",
            tags: ["React", "Vite", "Tailwind"],
            github: "https://github.com/ehsaneyyy/portfolio",
            image: null,
            glow: "from-purple-500/10 to-indigo-500/10",
        },
    ]

    const AbstractPlaceholder = () => (
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-cyan-500/10" />
            <div className="absolute inset-0 backdrop-blur-3xl" />
            <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <div className="absolute top-12 left-5 w-20 h-2 bg-white/10 rounded-full" />
            <div className="absolute top-16 left-5 w-32 h-2 bg-white/5 rounded-full" />
            <div className="absolute top-20 left-5 w-24 h-2 bg-white/5 rounded-full" />
            <div className="absolute bottom-6 right-6 w-28 h-16 border border-white/10 rounded-xl bg-white/3" />
            <div className="absolute bottom-6 left-6 w-20 h-6 border border-white/10 rounded-lg bg-white/2" />
        </div>
    )

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-16">
                    My Projects
                </h2>

                <div className="flex flex-col gap-20">
                    {projectList.map((project, index) => {

                        return (
                            <div key={index}>
                                <div className="group relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                    <div
                                        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none ${project.glow}`}
                                    />

                                    <div
                                        className="relative z-10 w-full md:w-1/2 py-8 flex flex-col md:items-start"
                                    >
                                        <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-3">
                                            {project.label}
                                        </p>
                                        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-white/70 mb-4 max-w-lg">{project.description}</p>
                                        <div className={`flex flex-wrap gap-2 mb-6`}>
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-sm text-white/50 border border-white/10 bg-white/3 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-purple-300 font-medium hover:text-white transition-colors inline-flex items-center gap-1 w-fit"
                                            >
                                                <span>View Code</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>

                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/preview relative z-10 w-full md:w-1/2 h-80 md:h-85 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_80px_rgba(168,85,247,0.15)] transition-all duration-500 flex items-center justify-center"
                                        >
                                            <div className="absolute -inset-4 bg-purple-500/10 blur-3xl scale-90 pointer-events-none" />
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover/preview:scale-105"
                                                />
                                            ) : (
                                                <AbstractPlaceholder />
                                            )}
                                            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                                                <div className="flex items-center gap-2 text-white/90">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    <span className="text-sm font-medium">Open Project</span>
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="relative z-10 w-full md:w-1/2 h-80 md:h-85 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_80px_rgba(168,85,247,0.15)] transition-all duration-500 flex items-center justify-center">
                                            <div className="absolute -inset-4 bg-purple-500/10 blur-3xl scale-90 pointer-events-none" />
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover rounded-2xl"
                                                />
                                            ) : (
                                                <AbstractPlaceholder />
                                            )}
                                        </div>
                                    )}
                                </div>

                                {index !== projectList.length - 1 && (
                                    <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mt-16 md:hidden" />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects