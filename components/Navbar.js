function Navbar() {
    try {
        return (
            <nav data-name="navbar" className="fixed w-full z-50 bg-[#1a1625] bg-opacity-95 backdrop-blur-sm border-b border-purple-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
                                <img 
                                    data-name="profile-image"
                                    src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3"
                                    alt="Sinclair Ariga"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h1 data-name="logo" className="text-xl font-bold gradient-text">Sinclair Ariga</h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <a data-name="nav-home" href="#home" className="nav-link px-3 py-2">Home</a>
                                <a data-name="nav-about" href="#about" className="nav-link px-3 py-2">About</a>
                                <a data-name="nav-skills" href="#skills" className="nav-link px-3 py-2">Skills</a>
                                <a data-name="nav-projects" href="#projects" className="nav-link px-3 py-2">Projects</a>
                                <a data-name="nav-gallery" href="#gallery" className="nav-link px-3 py-2">Gallery</a>
                                <a data-name="nav-blog" href="#blog" className="nav-link px-3 py-2">Blog</a>
                                <a data-name="nav-contact" href="#contact" className="nav-link px-3 py-2">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
