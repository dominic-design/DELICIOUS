function About() {
    try {
        return (
            <section id="about" data-name="about-section" className="bg-white section-padding">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="about-title" className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-name="about-image" className="fade-in">
                            <img 
                                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                                alt="Profile" 
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div data-name="about-content" className="fade-in">
                            <p className="text-lg text-gray-700 mb-6">
                                As a Software Engineer with a unique background in Physics, I bring a distinctive analytical approach to solving complex problems. My interdisciplinary expertise allows me to tackle challenges from multiple perspectives, combining scientific reasoning with technical prowess.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                I specialize in developing robust software solutions and have experience with multiple programming languages and frameworks. My physics background enhances my ability to understand and implement complex systems.
                            </p>
                            <div className="flex space-x-4">
                                <a 
                                    href="https://github.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:text-indigo-800"
                                >
                                    <i className="fab fa-github text-2xl"></i>
                                </a>
                                <a 
                                    href="https://linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:text-indigo-800"
                                >
                                    <i className="fab fa-linkedin text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
