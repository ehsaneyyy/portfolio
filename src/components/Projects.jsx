import { useReveal } from '../useReveal'

function Projects() {
    const refs = [
        useReveal(),
        useReveal(),
        useReveal(),
    ]

    const projectList = [
        {
            label: "Featured Project",
            title: "Weather App",
            description: "Real-time weather with clean UI",
            tags: ["React", "API", "Tailwind"],
            link: "https://black-and-white-toggle-button.vercel.app/",
            github: "https://github.com/ehsaneyyy/Black-and-White-Toggle-Button",
            image: null,
            accent: "red",
        },
        {
            label: "Frontend Experiment",
            title: "Task Manager",
            description: "Drag and drop task board",
            tags: ["React", "DnD", "LocalStorage"],
            github: "https://github.com/yourusername/task-manager",
            image: null,
            accent: "blue",
        },
        {
            label: "Full‑Stack App",
            title: "Portfolio Site",
            description: "A crisp editorial portfolio",
            tags: ["React", "Vite", "Tailwind"],
            github: "https://github.com/ehsaneyyy/portfolio",
            image: null,
            accent: "red",
        },
    ]

    const accentText = (a) => (a === 'red' ? 'text-[#B3261E]' : 'text-[#2563EB]')

    const AbstractPlaceholder = ({ accent }) => (
        <div className="absolute inset-0 overflow-hidden rounded-2xl bg-[#FAF7F2]">
            <div className="absolute inset-0 bg-linear-to-br from-black/[0.04] via-transparent to-black/[0.05]" />
            <div className="absolute top-0 left-0 right-0 h-8 bg-black/5 border-b border-black/10 flex items-center px-4 gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${accent === 'red' ? 'bg-[#B3261E]/60' : 'bg-[#2563EB]/60'}`} />
                <div className="w-2.5 h-2.5 rounded-full bg-black/15" />
                <div className="w-2.5 h-2.5 rounded-full bg-black/15" />
            </div>
            <div className="absolute top-12 left-5 w-20 h-2 bg-black/10 rounded-full" />
            <div className="absolute top-16 left-5 w-32 h-2 bg-black/5 rounded-full" />
            <div className="absolute top-20 left-5 w-24 h-2 bg-black/5 rounded-full" />
            <div className="absolute bottom-6 right-6 w-28 h-16 border border-black/10 rounded-xl bg-black/[0.03]" />
            <div className="absolute bottom-6 left-6 w-20 h-6 border border-black/10 rounded-lg bg-black/[0.02]" />
        </div>
    )

    return (
        <section id="projects" className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16 tracking-tight">
                    My <span className="text-[#B3261E]">Projects</span>
                </h2>

                <div className="flex flex-col gap-24">
                    {projectList.map((project, index) => {
                        return (
                            <div key={index} ref={refs[index]}>
                                <div className="group relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                    <div
                                        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,0.05),transparent_70%)] pointer-events-none ${project.accent === 'red' ? 'text-[#B3261E]/10' : 'text-[#2563EB]/10'
                                            }`}
                                    />

                                    <div className="relative z-10 w-full md:w-1/2 py-8 flex flex-col md:items-start">
                                        <p className="text-sm uppercase tracking-[0.2em] text-black/45 mb-3">
                                            {project.label}
                                        </p>
                                        <h3 className={`text-3xl md:text-4xl font-semibold tracking-tight mb-2 ${accentText(project.accent)}`}>
                                            {project.title}
                                        </h3>
                                        <p className="text-black/65 mb-4 max-w-lg">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-sm text-black/60 border border-black/15 bg-white rounded-full"
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
                                                className="text-[#2563EB] font-medium hover:text-[#B3261E] transition-colors inline-flex items-center gap-1 w-fit"
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
                                            className="group/preview relative z-10 w-full md:w-1/2 h-80 md:h-85 rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_1px_0_rgba(20,20,20,0.08),0_20px_40px_-24px_rgba(20,20,20,0.18)] hover:shadow-[0_30px_60px_-24px_rgba(20,20,20,0.28)] transition-all duration-500 flex items-center justify-center"
                                        >
                                            <div className={`absolute -inset-4 blur-3xl scale-90 pointer-events-none ${project.accent === 'red' ? 'bg-[#B3261E]/10' : 'bg-[#2563EB]/10'
                                                }`} />
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover/preview:scale-105"
                                                />
                                            ) : (
                                                <AbstractPlaceholder accent={project.accent} />
                                            )}
                                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                                                <div className="flex items-center gap-2 bg-white border border-black/10 rounded-full px-4 py-2 shadow-lg">
                                                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    <span className="text-sm font-medium text-black">Open Project</span>
                                                </div>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="relative z-10 w-full md:w-1/2 h-80 md:h-85 rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_1px_0_rgba(20,20,20,0.08),0_20px_40px_-24px_rgba(20,20,20,0.18)] transition-all duration-500 flex items-center justify-center">
                                            <div className={`absolute -inset-4 blur-3xl scale-90 pointer-events-none ${project.accent === 'red' ? 'bg-[#B3261E]/10' : 'bg-[#2563EB]/10'
                                                }`} />
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover rounded-2xl"
                                                />
                                            ) : (
                                                <AbstractPlaceholder accent={project.accent} />
                                            )}
                                        </div>
                                    )}
                                </div>

                                {index !== projectList.length - 1 && (
                                    <div className="w-full h-px bg-linear-to-r from-transparent via-black/10 to-transparent mt-20 md:hidden" />
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
