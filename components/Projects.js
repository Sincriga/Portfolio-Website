function Projects() {
    try {
        const projects = [
            {
                title: "Data Analysis Dashboard",
                description: "Interactive visualization of complex datasets using Python and D3.js",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
                tags: ["Python", "D3.js", "Data Analysis"]
            },
            {
                title: "Photography Portfolio",
                description: "Curated collection of landscape and portrait photography",
                image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3",
                tags: ["Photography", "Adobe Lightroom", "Visual Arts"]
            },
            {
                title: "Short Film Production",
                description: "Documentary-style video project about local artists",
                image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3",
                tags: ["Video Editing", "Premiere Pro", "Storytelling"]
            }
        ];

        return (
            <section data-name="projects" id="projects" className="py-20 bg-[#1a1625]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="projects-title" className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                        Featured Projects
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div data-name={`project-${index}`} key={index} className="card rounded-lg overflow-hidden hover-scale">
                                <img 
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 gradient-text">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span 
                                                data-name={`project-tag-${tagIndex}`}
                                                key={tagIndex}
                                                className="px-3 py-1 text-sm bg-purple-900 rounded-full"
                                            >
                                                {tag}
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
