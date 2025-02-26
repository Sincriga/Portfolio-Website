function Gallery() {
    try {
        const photos = [
            {
                url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3",
                title: "Urban Photography"
            },
            {
                url: "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-4.0.3",
                title: "Nature Close-up"
            },
            {
                url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3",
                title: "Portrait"
            },
            {
                url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3",
                title: "Landscape"
            },
            {
                url: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3",
                title: "Architecture"
            },
            {
                url: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3",
                title: "Abstract"
            }
        ];

        return (
            <section data-name="gallery" id="gallery" className="py-20 bg-[#1a1625]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="gallery-title" className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
                        Photography Gallery
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {photos.map((photo, index) => (
                            <div 
                                data-name={`gallery-item-${index}`}
                                key={index} 
                                className="gallery-item relative overflow-hidden rounded-lg"
                            >
                                <img 
                                    src={photo.url}
                                    alt={photo.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <h3 className="text-white p-4 w-full text-center">{photo.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Gallery component error:', error);
        reportError(error);
        return null;
    }
}
