function Blog() {
    try {
        const blogPosts = [
            {
                category: "Photography",
                title: "Essential DSLR Camera Settings for Beginners",
                excerpt: "Learn the fundamental camera settings that every photographer should master...",
                image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixlib=rb-4.0.3",
                date: "2024-01-15"
            },
            {
                category: "Data Science",
                title: "Introduction to Data Visualization with Python",
                excerpt: "Explore the power of data visualization using popular Python libraries...",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
                date: "2024-01-10"
            },
            {
                category: "Photography",
                title: "Mastering Natural Light Photography",
                excerpt: "Tips and techniques for capturing stunning photos using natural light...",
                image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3",
                date: "2024-01-05"
            },
            {
                category: "Data Science",
                title: "Machine Learning Model Evaluation Metrics",
                excerpt: "Understanding different metrics for evaluating machine learning models...",
                image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3",
                date: "2024-01-01"
            }
        ];

        return (
            <section data-name="blog" id="blog" className="py-20 bg-[#1a1625]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="blog-title" className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                        Blog & Articles
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {blogPosts.map((post, index) => (
                            <div data-name={`blog-post-${index}`} key={index} className="card rounded-lg overflow-hidden hover-scale">
                                <img 
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-sm text-purple-400">{post.category}</span>
                                        <span className="text-sm text-gray-400">{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 gradient-text">{post.title}</h3>
                                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                                    <a href="#" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                                        Read More 
                                        <i className="fas fa-arrow-right ml-2"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Blog component error:', error);
        reportError(error);
        return null;
    }
}
