function About() {
    return (
        <section id="about" className="relative py-28 px-4 overflow-hidden">
        

            <div className="relative z-10 max-w-2xl mx-auto">
                <div className="group relative border border-purple-500/20  bg-transparent backdrop-blur-2xl rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(168,85,247,0.08)] hover:border-purple-400/30 hover:shadow-[0_0_50px_rgba(168,85,247,0.10)] transition-all duration-500 ease-out">
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/5 to-transparent pointer-events-none" />
                    <div className="absolute inset-px rounded-2xl border border-white/5 pointer-events-none" />
                    <div className="absolute inset-0 rounded-2xl noise-texture pointer-events-none" />

                    <div className="relative flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-400/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                        <div className="w-3 h-3 rounded-full bg-green-400/60" />
                        <span className="ml-3 text-xs text-white/40 font-mono tracking-wider">
                            PS v10.0.22631 | user: ehsan
                        </span>
                    </div>

                    <div className="relative" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        <p className="text-purple-300/90 text-xl tracking-wide mb-4" style={{ fontFamily: "'VT323', monospace" }}>
                            C:\Users\Ehsan&gt; about.txt
                        </p>

                        <div className="text-white/85 text-sm leading-relaxed space-y-3">
                            <p>
                                &gt; I&rsquo;m{' '}
                                <span className="text-purple-300 font-bold">M.Ehsan C</span>, a{' '}
                                full-stack developer focused on building clean web applications with{' '}
                                Django REST Framework, React, and Tailwind CSS.
                            </p>

                            <p>
                                &gt; I enjoy creating practical, responsive interfaces and turning ideas
                                into polished side projects.
                            </p>
                        </div>

                        <p className="text-purple-300/90 text-xl tracking-wide mt-5 mb-1" style={{ fontFamily: "'VT323', monospace" }}>
                            C:\Users\Ehsan&gt; status.txt
                        </p>
                        <p className="text-white/70 text-sm">
                            &gt; Junior full-stack intern currently enrolled in a year-long development program.
                        </p>

                        <p className="text-purple-300/90 text-sm mt-4 flex items-center">
                            <span>&gt;</span>
                            <span className="blinking-cursor ml-1">|</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About