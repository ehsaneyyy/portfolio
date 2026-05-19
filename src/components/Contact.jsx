function Contact() {
    return (
        <section id="contact" className="relative min-h-125 py-20 px-4 overflow-x-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
                <img
                    src="/hand.png"
                    alt=""
                    className="w-full h-full object-cover object-center opacity-70 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="text-5xl font-bold tracking-tight text-white mb-4">
                    Get In Touch
                </h2>
                <p className="text-white/60 max-w-md mx-auto leading-relaxed mb-12">
                    Have a project in mind or just want to say hi?
                </p>

                <div className="flex justify-center gap-5 flex-wrap">
                    <a
                        href="mailto:alex@example.com"
                        className="group relative flex flex-col items-center gap-2"
                    >
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-200 ease-out hover:bg-white/20 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1 transform-gpu will-change-transform"
                            style={{ transformOrigin: "center" }}
                        >
                            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap">
                            Email
                        </span>
                    </a>

                    <a
                        href="https://github.com/ehsaneyyy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex flex-col items-center gap-2"
                    >
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-200 ease-out hover:bg-white/20 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1 transform-gpu will-change-transform"
                            style={{ transformOrigin: "center" }}
                        >
                            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                            </svg>
                        </div>
                        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap">
                            GitHub
                        </span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/mohammed-ehsan-85259a371/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex flex-col items-center gap-2"
                    >
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-200 ease-out hover:bg-white/20 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1 transform-gpu will-change-transform"
                            style={{ transformOrigin: "center" }}
                        >
                            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </div>
                        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap">
                            LinkedIn
                        </span>
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex flex-col items-center gap-2"
                    >
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-200 ease-out hover:bg-white/20 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1 transform-gpu will-change-transform"
                            style={{ transformOrigin: "center" }}
                        >
                            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap">
                            CV
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact