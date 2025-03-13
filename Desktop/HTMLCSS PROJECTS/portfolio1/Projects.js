function Projects() {
    try {
        const projects = [
            {
                title: "Physics Simulation Platform",
                description: "Interactive platform for physics simulations using WebGL and Three.js",
                tech: ["React", "Three.js", "WebGL"],
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                title: "Data Analysis Tool",
                description: "Advanced data analysis tool for scientific research",
                tech: ["Python", "NumPy", "Pandas"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                title: "Research Dashboard",
                description: "Dashboard for visualizing research data and metrics",
                tech: ["JavaScript", "D3.js", "Node.js"],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
        ];

        return (
            <section id="projects" data-name="projects-section" className="bg-white section-padding">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="projects-title" className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div 
                                key={index}
                                data-name={`project-${index}`}
                                className="bg-white rounded-lg shadow-lg overflow-hidden card-hover"
                            >
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
        return null;
    }
}
