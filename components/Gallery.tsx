import React from 'react';
import { motion } from 'motion/react';

export function Gallery() {
    const images = [
        { src: "/images/students_campus_1775913252217.png", alt: "International Students", span: "md:col-span-2 md:row-span-2" },
        { src: "/images/award-parul.jpg", alt: "Parul Award", span: "" },
        { src: "/images/consultancy_partnership_1775913288670.png", alt: "Consultancy Partnership", span: "" },
        { src: "/images/graduation_celebration_1775913271414.png", alt: "Graduation Celebration", span: "md:col-span-2" },
        { src: "/images/student-group.jpg", alt: "Student Group", span: "md:col-span-2 md:row-span-2" },
        { src: "/images/student_airport_1775913307857.png", alt: "Student at Airport", span: "md:row-span-2" },
        { src: "/images/airport-arrival.jpg", alt: "Airport Walk", span: "" },
        { src: "/images/award-certificate.jpg", alt: "Certificate Event", span: "" }
    ];

    return (
        <section className="py-16 lg:py-20 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-12 md:mb-20"
                >
                    <span className="text-accent text-[10px] font-bold tracking-[0.3em] mb-4 block">Moments</span>
                    <h2 className="font-sans text-4xl md:text-5xl lg:text-7xl font-bold leading-[0.9]" style={{ color: 'var(--rc-fg-hex)' }}>
                        Our Global<br />Reach in <span className="text-accent font-sans">History</span>
                    </h2>
                    <p className="mt-6 md:mt-8 max-w-lg text-sm tracking-widest leading-loose" style={{ color: 'var(--rc-muted)' }}>
                        Real student success stories, airport arrivals, and strong university partnerships worldwide.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] sm:auto-rows-[200px] md:auto-rows-[220px]">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-50px" }}
                            className={`relative overflow-hidden glass rounded-2xl group cursor-pointer ${img.span}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                <span className="text-accent text-xs font-bold tracking-widest">{img.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
