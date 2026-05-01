import ProjectCard from './ProjectCard'

function Projects() {
    const projectList = [
        {
            title: "Weather App",
            description: "Real-time weather with clean UI",
            icon: "🌤️",
            tags: ["React", "API", "Tailwind"],
            link: "https://black-and-white-toggle-button.vercel.app/"
        },
        {
            title: "Task Manager",
            description: "Drag and drop task board",
            icon: "✅",
            tags: ["React", "DnD", "LocalStorage"],
        },
        {
            title: "Portfolio Site",
            description: "This glassmorphism portfolio",
            icon: "💼",
            tags: ["React", "Vite", "Tailwind"],
        },
    ]

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-12">
                    My Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectList.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            icon={project.icon}
                            tags={project.tags}
                            link={project.link} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects