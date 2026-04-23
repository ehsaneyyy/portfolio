function Contact() {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Get In Touch
                </h2>
                <p className="text-lg text-white/70 mb-10">
                    Have a project in mind or just want to say hi?
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="mailto:alex@example.com"
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition inline-flex items-center justify-center gap-2"
                    >
                        <span>📧</span> alex@example.com
                    </a>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition inline-flex items-center justify-center gap-2"
                    >
                        <span>💻</span> GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition inline-flex items-center justify-center gap-2"
                    >
                        <span>💼</span> LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact