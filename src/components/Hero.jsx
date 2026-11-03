function Hero() {
    return (
        <section id="home" aria-labelledby="hero-title" className="hero-section relative min-h-svh overflow-hidden bg-[#F7F4EF] px-4 pt-28 pb-16 sm:px-6 sm:pt-32">
            <div className="hero-copy relative z-20 mx-auto w-full max-w-6xl text-center lg:text-left">
                <div className="hero-copy-inner max-w-xl">
                    <p
                        className="text-xs font-medium uppercase tracking-[0.2em] text-[#B3261E] sm:text-sm"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                        Junior Python Full-Stack Developer
                    </p>

                    <h1 id="hero-title" className="hero-title mt-4 text-balance text-[clamp(2rem,11.5vw,3rem)] font-bold tracking-tight text-black sm:text-6xl lg:text-7xl">
                        Mohammed <span className="text-[#B3261E]">Ehsan</span>
                    </h1>

                    <p className="mt-5 text-base leading-relaxed text-black/65 sm:text-lg">
                        I build clean, responsive web applications with Django REST Framework, React, and Tailwind CSS.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-1.5 border-b border-[#141414] pb-1 text-sm font-medium text-[#141414] transition-colors duration-200 hover:border-[#B3261E] hover:text-[#B3261E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B3261E]"
                        >
                            View Projects
                            <span aria-hidden="true">&rarr;</span>
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 border-b border-black/30 pb-1 text-sm font-medium text-black/70 transition-colors duration-200 hover:border-[#B3261E] hover:text-[#B3261E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B3261E]"
                        >
                            Download CV
                            <span aria-hidden="true">&darr;</span>
                        </a>
                    </div>
                </div>
            </div>

            <div
                className="hero-image relative mt-8 -ml-4 w-[calc(100%+2rem)] mix-blend-multiply sm:-ml-6 sm:mt-12 sm:w-[calc(100%+3rem)] lg:absolute lg:top-0 lg:right-0 lg:mt-0 lg:ml-0 lg:h-full lg:w-[58vw]"
                style={{
                    maskImage: 'linear-gradient(to bottom, black 0%, black 88%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 88%, transparent 100%)',
                }}
            >
                <picture>
                    <source
                        type="image/webp"
                        srcSet="/mohammed-ehsan-coding-512.webp 512w, /mohammed-ehsan-coding-1024.webp 1024w"
                        sizes="(min-width: 1024px) 58vw, 100vw"
                    />
                    <img
                        src="/mohammed-ehsan-coding-1024.jpg"
                        srcSet="/mohammed-ehsan-coding-512.jpg 512w, /mohammed-ehsan-coding-1024.jpg 1024w"
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        alt="Mohammed Ehsan coding on a laptop"
                        width="1024"
                        height="1024"
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        className="hero-image-img h-auto w-full object-contain object-bottom lg:h-full lg:object-cover lg:object-[center_32%]"
                    />
                </picture>
            </div>
        </section>
    )
}

export default Hero
