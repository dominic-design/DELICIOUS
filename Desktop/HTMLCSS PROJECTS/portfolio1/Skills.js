function Skills() {
    try {
        const skills = [
            { name: "Python", icon: "fab fa-python" },
            { name: "JavaScript", icon: "fab fa-js" },
            { name: "React", icon: "fab fa-react" },
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS3", icon: "fab fa-css3-alt" },
            { name: "Git", icon: "fab fa-git-alt" },
            { name: "Docker", icon: "fab fa-docker" }
        ];

        return (
            <section id="skills" data-name="skills-section" className="bg-gray-50 section-padding">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="skills-title" className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <div 
                                key={index}
                                data-name={`skill-${skill.name.toLowerCase()}`}
                                className="bg-white p-6 rounded-lg shadow-md text-center hover-scale"
                            >
                                <i className={`${skill.icon} skill-icon`}></i>
                                <h3 className="text-lg font-medium">{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Skills component error:', error);
        reportError(error);
        return null;
    }
}
