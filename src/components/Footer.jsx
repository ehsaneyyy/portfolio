function Footer() {
    return (
        <footer className="py-6 px-4 border-t border-white/10">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-white/60 text-sm">
                    © {new Date().getFullYear()} Alex Smith. Built with React and Tailwind.
                </p>
            </div>
        </footer>
    )
}

export default Footer