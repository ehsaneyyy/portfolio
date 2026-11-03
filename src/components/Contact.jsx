function Contact() {
    const items = [
        {
            label: "Email",
            href: "mailto:mehsan9595@gmail.com",
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            label: "GitHub",
            href: "https://github.com/ehsaneyyy",
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
            ),
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/mohammed-ehsan-85259a371/",
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
            ),
        },
        {
            label: "CV",
            href: "/resume.pdf",
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
    ]

    return (
        <section id="contact" className="relative min-h-100 overflow-x-hidden bg-[#F7F4EF] px-4 py-16 sm:min-h-125 sm:px-6 sm:py-24">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="mb-4 text-balance text-[clamp(1.75rem,9.5vw,3rem)] font-bold tracking-tight text-black">
                    Get In <span className="text-[#B3261E]">Touch</span>
                </h2>
                <p className="mx-auto mb-8 max-w-md leading-relaxed text-black/60 sm:mb-12">
                    Have a project in mind or just want to say hi?
                </p>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
                    {items.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="group relative flex flex-col items-center gap-2"
                        >
                            <div className="relative flex h-12 w-12 transform-gpu items-center justify-center rounded-full border border-black/15 bg-white text-black shadow-[0_1px_0_rgba(20,20,20,0.06),0_12px_24px_-12px_rgba(20,20,20,0.2)] transition-all duration-200 ease-out will-change-transform hover:-translate-y-1.5 hover:border-[#B3261E]/40 hover:text-[#B3261E] hover:shadow-[0_16px_28px_-12px_rgba(179,38,30,0.35)] sm:h-16 sm:w-16">
                                {item.icon}
                            </div>
                            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs text-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap">
                                {item.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact
