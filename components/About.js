function About() {
    try {
        return (
            <section data-name="about" id="about" className="py-20 bg-[#1a1625]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="about-title" className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-name="about-image" className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3"
                                alt="Profile"
                                className="rounded-lg shadow-2xl w-full hover-scale"
                            />
                        </div>
                        <div data-name="about-content" className="space-y-6">
                            <p className="text-lg text-gray-300">
                                Currently pursuing a Bachelor's degree in Data Science, I combine analytical thinking with creative expression through photography and digital media.
                            </p>
                            <p className="text-lg text-gray-300">
                                As a DSLR enthusiast, I capture moments that tell stories, while my expertise in photo and video editing allows me to transform raw footage into compelling narratives.
                            </p>
                            <p className="text-lg text-gray-300">
                                My journey in web development complements my technical skills, enabling me to create digital experiences that bridge art and technology.
                            </p>
                            <div className="flex gap-4">
                                <a data-name="social-github" href="#" className="text-purple-400 hover:text-purple-300">
                                    <i className="fab fa-github text-2xl"></i>
                                </a>
                                <a data-name="social-linkedin" href="#" className="text-purple-400 hover:text-purple-300">
                                    <i className="fab fa-linkedin text-2xl"></i>
                                </a>
                                <a data-name="social-instagram" href="#" className="text-purple-400 hover:text-purple-300">
                                    <i className="fab fa-instagram text-2xl"></i>
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
