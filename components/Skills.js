function Skills() {
    try {
        const skills = [
            { category: "Data Science", items: ["Python", "R", "Machine Learning", "Statistical Analysis", "Data Visualization"] },
            { category: "Photography", items: ["DSLR Photography", "Composition", "Lighting", "Photo Editing", "Color Theory"] },
            { category: "Video & Editing", items: ["Video Production", "Adobe Premiere Pro", "Adobe Photoshop", "After Effects", "Color Grading"] },
            { category: "Web Development", items: ["HTML/CSS", "JavaScript", "React", "Responsive Design", "UI/UX Design"] }
        ];

        return (
            <section data-name="skills" id="skills" className="py-20 bg-[#1a1625]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="skills-title" className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                        Skills & Expertise
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skillSet, index) => (
                            <div data-name={`skill-category-${index}`} key={index} className="card p-6 rounded-lg hover-scale">
                                <h3 className="text-xl font-semibold mb-4 gradient-text">{skillSet.category}</h3>
                                <ul className="space-y-4">
                                    {skillSet.items.map((skill, skillIndex) => (
                                        <li data-name={`skill-item-${skillIndex}`} key={skillIndex} className="flex flex-col">
                                            <span className="text-gray-300 mb-2">{skill}</span>
                                            <div className="h-2 bg-gray-700 rounded-full">
                                                <div 
                                                    className="skill-bar h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
                                                    style={{width: `${85 - skillIndex * 5}%`}}
                                                ></div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
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
