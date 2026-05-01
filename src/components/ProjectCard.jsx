function ProjectCard({ title, description, icon, tags, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition"
        >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>

            {/* This part is hidden by default, shown on hover */}
            <div className="hidden group-hover:block">
                <p className="text-white/70 mb-4">{description}</p>
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
                <span className="text-purple-300 font-medium">View Project →</span>
            </div>
        </a>
    )
}

export default ProjectCard