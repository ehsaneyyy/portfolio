import ProjectCard from './ProjectCard'

function Projects() {
    const projectList = [
        {
            title: "Weather App",
            description: "Real-time weather with clean UI",
            icon: "🌤️",
            tags: ["React", "API", "Tailwind"],
            link: "https://black-and-white-toggle-button.vercel.app/",
            github: "https://github.com/ehsaneyyy/Black-and-White-Toggle-Button",
        },
        {
            title: "Task Manager",
            description: "Drag and drop task board",
            icon: "✅",
            tags: ["React", "DnD", "LocalStorage"],
            github: "https://github.com/yourusername/task-manager",
        },
        {
            title: "Portfolio Site",
            description: "This glassmorphism portfolio",
            icon: "💼",
            tags: ["React", "Vite", "Tailwind"],
            github: "https://github.com/ehsaneyyy/portfolio",
        },
    ]

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {projectList.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects