function Hero() {
    try {
        return (
            <section id="home" data-name="hero-section" className="hero-gradient min-h-screen flex items-center justify-center section-padding">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="fade-in">
                        <h1 data-name="hero-title" className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow">
                            Hello, I'm Dominic Komen
                        </h1>
                        <p data-name="hero-subtitle" className="text-xl md:text-2xl text-white mb-8 text-shadow">
                            Software Engineer | Physics Background
                        </p>
                        <div data-name="hero-cta" className="space-x-4">
                            <a href="#contact" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition duration-300">
                                Get in Touch
                            </a>
                            <a href="#projects" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-indigo-600 transition duration-300">
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
