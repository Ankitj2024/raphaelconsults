import React from 'react';

export function Gallery() {
    const images = [
        { src: "/images/student-group.jpg", alt: "Students Group", span: "md:col-span-2 md:row-span-2" },
        { src: "/images/award-parul.jpg", alt: "Parul Award", span: "col-span-1 md:row-span-1" },
        { src: "/images/airport-arrival.jpg", alt: "Airport Arrival", span: "col-span-1 md:row-span-1" },
        { src: "/images/partnership-amity.jpg", alt: "Amity Partnership", span: "col-span-1 md:row-span-1" },
        { src: "/images/award-certificate.jpg", alt: "Certificate Award", span: "col-span-1 md:row-span-1" },
        { src: "/images/luggage-loading.jpg", alt: "Luggage Loading", span: "col-span-2 md:col-span-4 md:row-span-1" }
    ];

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Our Global Reach in Action</h2>
                    <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 text-lg">Real student success stories, airport arrivals, and strong university partnerships worldwide.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {images.map((img, i) => (
                        <div key={i} className={`relative rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 ${img.span}`}>
                            <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
