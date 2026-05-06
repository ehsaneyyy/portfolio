function Hero() {
    return (
        <section id="home" className="relative pt-28 pb-16 px-4 overflow-hidden">

            {/* ----- Main content wrapper (group for hover) ----- */}
            <div className="relative z-10 max-w-3xl mx-auto text-center group">

                {/* ----- Background text layers (positioned behind the image) ----- */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    {/* Default name (visible) */}
                    <h1 className="text-[12vw] md:text-[8vw] font-black text-white/10 uppercase tracking-wider leading-none transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                        M.Ehsan C
                    </h1>
                    {/* Title (hidden, shown on hover) */}
                    <h1 className="absolute text-[12vw] md:text-[8vw] font-black text-white/10 uppercase tracking-wider leading-none transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                        Full-Stack Developer
                    </h1>
                </div>

                {/* ----- Image block with hover cross-fade ----- */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8 cursor-pointer">
                    <img
                        src="https://via.placeholder.com/400x400/1a1a2e/ffffff?text=Peter+Parker"
                        alt="Peter Parker"
                        className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                    />
                    <img
                        src="https://via.placeholder.com/400x400/1a1a2e/ffffff?text=Spiderman"
                        alt="Spiderman"
                        className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                    />
                </div>

                {/* ----- Foreground text (greeting, bio) ----- */}
                <div className="relative">
                    <p className="text-lg text-purple-300 mb-2">Hello, I'm</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        M.Ehsan C
                    </h2>
                    <p className="text-xl text-white/80 mb-6">Full-Stack Developer.</p>
                    <p className="text-base text-white/70 max-w-xl mx-auto mb-8">
                        Designing and developing clean, responsive web experiences.<br />
                        Simple code, real results – that's what I do.
                    </p>

                    <div className="flex gap-4 justify-center">
                        <a href="#projects" className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition">
                            View My Work
                        </a>
                        <a href="#contact" className="px-6 py-3 bg-purple-600 rounded-xl text-white font-medium hover:bg-purple-700 transition">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero