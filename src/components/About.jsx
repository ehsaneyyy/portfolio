import { useReveal } from '../useReveal'

function About() {
    const ref = useReveal()

    return (
        <section id="about" className="relative py-28 px-4 overflow-hidden">
            <div ref={ref} className="relative z-10 max-w-2xl mx-auto">
                <div className="group relative border border-black/10 bg-white rounded-2xl p-6 md:p-8 shadow-[0_1px_0_rgba(20,20,20,0.08),0_20px_40px_-24px_rgba(20,20,20,0.15)] hover:border-[#B3261E]/30 hover:shadow-[0_28px_50px_-24px_rgba(179,38,30,0.2)] transition-all duration-400 ease-out">
                    <div className="absolute inset-px rounded-2xl border border-black/5 pointer-events-none" />
                    <div className="absolute inset-0 rounded-2xl noise-texture pointer-events-none" />

                    <div className="relative flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-[#B3261E]/70" />
                        <div className="w-3 h-3 rounded-full bg-[#E2B93B]/70" />
                        <div className="w-3 h-3 rounded-full bg-[#2563EB]/70" />
                        <span className="ml-3 text-xs text-black/45 font-mono tracking-wider">
                            PS v10.0.22631 | user: ehsan
                        </span>
                    </div>

                    <div className="relative" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        <p className="text-[#B3261E] text-xl tracking-wide mb-4" style={{ fontFamily: "'VT323', monospace" }}>
                            C:\Users\Ehsan&gt; about.txt
                        </p>

                        <div className="text-black/80 text-sm leading-relaxed space-y-3">
                            <p>
                                &gt; I&rsquo;m{' '}
                                <span className="text-[#B3261E] font-bold">M.Ehsan C</span>, a{' '}
                                full-stack developer focused on building clean web applications with{' '}
                                <span className="text-[#2563EB] font-semibold">Django REST Framework</span>,{' '}
                                <span className="text-[#2563EB] font-semibold">React</span>, and Tailwind CSS.
                            </p>

                            <p>
                                &gt; I enjoy creating practical, responsive interfaces and turning ideas
                                into polished side projects.
                            </p>
                        </div>

                        <p className="text-[#B3261E] text-xl tracking-wide mt-5 mb-1" style={{ fontFamily: "'VT323', monospace" }}>
                            C:\Users\Ehsan&gt; status.txt
                        </p>
                        <p className="text-black/70 text-sm">
                            &gt; Junior full-stack intern currently enrolled in a year-long development program.
                        </p>

                        <p className="text-[#2563EB] text-sm mt-4 flex items-center">
                            <span>&gt;</span>
                            <span className="blinking-cursor ml-1 text-black">|</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
