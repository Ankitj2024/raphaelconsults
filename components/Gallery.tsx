import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Gallery() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const images = Array.from({ length: 7 }, (_, i) => ({
        src: `/images/gallery/image${i + 1}.jpeg`,
        alt: `Gallery Image ${i + 1}`
    }));

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = current.clientWidth * 0.8;
            const targetScroll = current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-16 lg:py-24 px-4 relative overflow-hidden bg-bg">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent text-[10px] font-bold tracking-[0.3em] mb-4 block uppercase">Moments</span>
                        <h2 className="font-sans text-4xl md:text-5xl lg:text-7xl font-bold leading-[0.9]" style={{ color: 'var(--rc-fg-hex)' }}>
                            Our Global<br />Reach in <span className="text-accent font-sans italic">History</span>
                        </h2>
                    </motion.div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="p-4 rounded-full glass border border-white/10 hover:bg-accent hover:text-white transition-all duration-300 group"
                            aria-label="Scroll Left"
                        >
                            <ChevronLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-4 rounded-full glass border border-white/10 hover:bg-accent hover:text-white transition-all duration-300 group"
                            aria-label="Scroll Right"
                        >
                            <ChevronRight className="w-6 h-6 group-active:scale-90 transition-transform" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 -mx-4 px-4 md:mx-0 md:px-0"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="relative min-w-[300px] md:min-w-[450px] aspect-[4/5] md:aspect-[16/10] overflow-hidden glass rounded-3xl group cursor-pointer snap-start"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
