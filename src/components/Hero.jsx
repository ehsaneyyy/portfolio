function Hero() {
    return (
        <section className="pt-32 pb-16 px-4">
            <div className="max-w-3xl mx-auto text-center">

                <div className="text-8xl mb-6">
                    👨‍💻
                </div>

                <p className="text-lg text-purple-300 mb-2">
                    Hello, I'm
                </p>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Alex Smith
                </h1>

                <p className="text-xl text-white/80 mb-6">
                    Web Developer & Designer
                </p>

                <p className="text-base text-white/70 max-w-xl mx-auto mb-8">
                    I build clean, responsive websites using React and Tailwind CSS.
                    I love turning ideas into real, working products.
                </p>

                <div className="flex gap-4 justify-center">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 bg-purple-600 rounded-xl text-white font-medium hover:bg-purple-700 transition"
                    >
                        Contact Me
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Hero