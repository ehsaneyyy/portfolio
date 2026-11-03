function Hero() {
    return (
        <section id="home" aria-labelledby="hero-title" className="relative flex min-h-svh items-center bg-[#F7F4EF] px-4 pt-28 pb-16 sm:px-6 sm:pt-32">
            <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                <div className="max-w-xl text-center lg:text-left">
                    <p
                        className="text-xs font-medium uppercase tracking-[0.2em] text-[#B3261E] sm:text-sm"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                        Junior Python Full-Stack Developer
                    </p>

                    <h1 id="hero-title" className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
                        Mohammed <span className="text-[#B3261E]">Ehsan</span>
                    </h1>

                    <p className="mt-5 text-base leading-relaxed text-black/65 sm:text-lg">
                        I build clean, responsive web applications with Django REST Framework, React, and Tailwind CSS.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center rounded-full bg-[#141414] px-6 py-3 text-sm font-medium text-[#F7F4EF] transition-colors duration-200 hover:bg-[#B3261E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B3261E]"
                        >
                            View Projects
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-black transition-colors duration-200 hover:border-[#B3261E] hover:text-[#B3261E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B3261E]"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
                    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_1px_0_rgba(20,20,20,0.08),0_20px_40px_-24px_rgba(20,20,20,0.15)]">
                        <picture>
                            <source
                                type="image/webp"
                                srcSet="/mohammed-ehsan-coding-512.webp 512w, /mohammed-ehsan-coding-1024.webp 1024w"
                                sizes="(min-width: 1024px) 448px, (min-width: 640px) 384px, 320px"
                            />
                            <img
                                src="/mohammed-ehsan-coding-1024.jpg"
                                srcSet="/mohammed-ehsan-coding-512.jpg 512w, /mohammed-ehsan-coding-1024.jpg 1024w"
                                sizes="(min-width: 1024px) 448px, (min-width: 640px) 384px, 320px"
                                alt="Mohammed Ehsan coding on a laptop"
                                width="1024"
                                height="1024"
                                loading="eager"
                                fetchPriority="high"
                                decoding="async"
                                className="aspect-square h-auto w-full object-cover"
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
