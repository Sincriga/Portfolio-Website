function Hero() {
    try {
        return (
            <section data-name="hero" id="home" className="min-h-screen flex items-center justify-center pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-fade-in">
                        <h1 data-name="hero-title" className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">Data Science</span> Student & 
                            <span className="gradient-text"> Creative</span> Professional
                        </h1>
                        <p data-name="hero-subtitle" className="text-xl md:text-2xl text-gray-300 mb-8">
                            Exploring the intersection of data, photography, and web development
                        </p>
                        <div className="flex justify-center gap-4">
                            <a data-name="cta-projects" href="#projects" 
                               className="button-gradient px-8 py-3 rounded-full text-white font-semibold">
                                View Projects
                            </a>
                            <a data-name="cta-contact" href="#contact" 
                               className="px-8 py-3 rounded-full text-white font-semibold border-2 border-purple-600 hover:bg-purple-900 transition-colors">
                                Contact Me
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
