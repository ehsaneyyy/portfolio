function ProjectCard({ title, description, icon, tags, link, github }) {
    return (
        <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-500">
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

            <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-60 group-hover:opacity-100">
                <p className="text-white/70 mb-4 pt-2">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm bg-purple-500/20 text-purple-200 rounded-full border border-purple-400/30"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex flex-col gap-2">
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-300 font-medium hover:text-white transition-colors"
                        >
                            Open Project →
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-300 font-medium hover:text-white transition-colors"
                        >
                            💻 View Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard