function Contact() {
    try {
        const socialLinks = {
            email: "sincriga@gmail.com",
            phone: "+254741967853",
            instagram: "sincriga_",
            twitter: "sincriga",
            github: "sincriga"
        };

        return (
            <section data-name="contact" id="contact" className="py-20 bg-[#1a1625] relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="contact-title" className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                        Get In Touch
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <div className="card p-8 rounded-lg">
                                <form data-name="contact-form" className="space-y-6">
                                    <div>
                                        <label className="block text-gray-300 mb-2">Name</label>
                                        <input 
                                            type="text"
                                            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-purple-800 focus:border-purple-500 focus:outline-none"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 mb-2">Email</label>
                                        <input 
                                            type="email"
                                            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-purple-800 focus:border-purple-500 focus:outline-none"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 mb-2">Message</label>
                                        <textarea 
                                            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-purple-800 focus:border-purple-500 focus:outline-none h-32"
                                            placeholder="Your message here..."
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit"
                                        className="w-full button-gradient py-3 rounded-lg text-white font-semibold"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            <div className="card p-8 rounded-lg space-y-4">
                                <h3 className="text-xl font-semibold mb-4 gradient-text">Connect With Me</h3>
                                <div className="space-y-3">
                                    <a href={`mailto:${socialLinks.email}`} className="flex items-center text-gray-300 hover:text-purple-400">
                                        <i className="fas fa-envelope w-8"></i>
                                        <span>{socialLinks.email}</span>
                                    </a>
                                    <a href={`tel:${socialLinks.phone}`} className="flex items-center text-gray-300 hover:text-purple-400">
                                        <i className="fas fa-phone w-8"></i>
                                        <span>{socialLinks.phone}</span>
                                    </a>
                                    <a href={`https://instagram.com/${socialLinks.instagram}`} target="_blank" className="flex items-center text-gray-300 hover:text-purple-400">
                                        <i className="fab fa-instagram w-8"></i>
                                        <span>@{socialLinks.instagram}</span>
                                    </a>
                                    <a href={`https://twitter.com/${socialLinks.twitter}`} target="_blank" className="flex items-center text-gray-300 hover:text-purple-400">
                                        <i className="fab fa-twitter w-8"></i>
                                        <span>@{socialLinks.twitter}</span>
                                    </a>
                                    <a href={`https://github.com/${socialLinks.github}`} target="_blank" className="flex items-center text-gray-300 hover:text-purple-400">
                                        <i className="fab fa-github w-8"></i>
                                        <span>@{socialLinks.github}</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="card p-8 rounded-lg h-[400px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.156929142332!2d36.70442!3d-1.31442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b73d0c37c6f%3A0x91b6f6c7a8e3f390!2sKaren%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1674896245611!5m2!1sen!2ske"
                                    width="100%"
                                    height="100%"
                                    style={{border: 0}}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                            <div className="card p-6 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <i className="fas fa-map-marker-alt text-purple-400"></i>
                                    <p className="text-gray-300">Kenya, Nairobi, Karen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
