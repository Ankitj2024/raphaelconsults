import React from 'react';
import { motion } from 'motion/react';

export function Gallery() {
    const images = [
        { src: "/images/students_campus_1775913252217.png", alt: "International Students", span: "col-span-2 row-span-2" },
        { src: "/images/award-parul.jpg", alt: "Parul Award", span: "col-span-1 row-span-1" },
        { src: "/images/consultancy_partnership_1775913288670.png", alt: "Consultancy Partnership", span: "col-span-1 row-span-1" },
        { src: "/images/graduation_celebration_1775913271414.png", alt: "Graduation Celebration", span: "col-span-2 row-span-1" },
        { src: "/images/student-group.jpg", alt: "Student Group", span: "col-span-2 row-span-2" },
        { src: "/images/student_airport_1775913307857.png", alt: "Student at Airport", span: "col-span-1 row-span-2" },
        { src: "/images/airport-arrival.jpg", alt: "Airport Walk", span: "col-span-1 row-span-1" },
        { src: "/images/award-certificate.jpg", alt: "Certificate Event", span: "col-span-1 row-span-1" }
    ];

    return (
        <section className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Moments</span>
                    <h2 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9]" style={{ color: 'var(--rc-fg-hex)' }}>
                        Our Global<br />Reach in <span className="text-stroke italic font-serif">Action</span>
                    </h2>
                    <p className="mt-8 max-w-lg text-sm uppercase tracking-widest leading-loose" style={{ color: 'var(--rc-muted)' }}>
                        Real student success stories, airport arrivals, and strong university partnerships worldwide.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className={`relative overflow-hidden glass rounded-2xl group cursor-pointer ${img.span}`}
                        >
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                <span className="text-accent text-xs font-bold uppercase tracking-widest">{img.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
