import React, { useRef } from 'react';
import { destinations } from '../data/destinations';
import { motion, useScroll, useTransform } from 'motion/react';

export function DestinationsGrid() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

    return (
        <>
            {/* Desktop: Horizontal scroll */}
            <section ref={targetRef} id="destinations" className="relative h-[200vh] hidden md:block">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-12 px-[10vw]">
                        <div className="flex-shrink-0 w-[40vw] flex flex-col justify-center">
                            <span className="text-accent text-[10px] font-bold tracking-[0.3em] mb-4 block">Global Reach</span>
                            <h2 className="font-sans text-5xl md:text-8xl font-bold leading-[0.9]" style={{ color: 'var(--rc-fg-hex)' }}>
                                Destinations<br />We <span className="text-accent font-sans">Cover</span>
                            </h2>
                            <p className="mt-8 max-w-lg text-sm tracking-widest leading-loose" style={{ color: 'var(--rc-muted)' }}>
                                We counsel students and facilitate strategic placements across the most sought-after global universities.
                            </p>
                        </div>

                        <div className="grid grid-rows-2 grid-flow-col gap-6 items-center">
                            {destinations.slice(0, 8).map((dest, i) => (
                                <div
                                    key={dest.id}
                                    className="group relative w-[22vw] aspect-[3/2] overflow-hidden glass rounded-none cursor-pointer border border-white/10 shadow-lg"
                                    onClick={() => {
                                        document.getElementById('universities')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        src={dest.image}
                                        alt={dest.country}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-opacity duration-500"
                                    />
                                    <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="text-accent text-xs font-bold tracking-widest mb-1">Explore</span>
                                        <h3 className="font-sans text-3xl md:text-4xl font-bold text-white">{dest.country}</h3>
                                    </div>
                                    <div className="absolute bottom-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                        <h3 className="font-sans text-sm font-bold tracking-wider" style={{ color: 'var(--rc-fg-hex)' }}>{dest.country}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex-shrink-0 w-[20vw] flex items-center justify-center">
                            <div
                                className="w-24 h-24 rounded-full border border-[var(--rc-border-color)] flex items-center justify-center group cursor-pointer hover:bg-accent hover:border-accent transition-colors duration-500"
                                onClick={() => {
                                    document.getElementById('universities')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <span className="font-sans text-xs font-bold group-hover:text-white transition-colors" style={{ color: 'var(--rc-fg-hex)' }}>View All</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mobile: Standard grid */}
            <section id="destinations-mobile" className="md:hidden py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="mb-10"
                    >
                        <span className="text-accent text-[10px] font-bold tracking-[0.3em] mb-4 block">Global Reach</span>
                        <h2 className="font-sans text-4xl font-bold leading-[0.9]" style={{ color: 'var(--rc-fg-hex)' }}>
                            Destinations<br />We <span className="text-accent font-sans">Cover</span>
                        </h2>
                        <p className="mt-6 text-sm tracking-widest leading-loose" style={{ color: 'var(--rc-muted)' }}>
                            We counsel students and facilitate strategic placements across the most sought-after global universities.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-3">
                        {destinations.slice(0, 8).map((dest, i) => (
                            <motion.div
                                key={dest.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="group relative aspect-[4/3] overflow-hidden glass rounded-xl cursor-pointer"
                                onClick={() => {
                                    document.getElementById('universities')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <img
                                    src={dest.image}
                                    alt={dest.country}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-3 left-3">
                                    <h3 className="font-sans text-sm font-bold text-white">{dest.country}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button
                            className="px-8 py-3 rounded-full border border-accent text-accent font-sans font-bold text-sm tracking-wider hover:bg-accent hover:text-white transition-all duration-300"
                            onClick={() => {
                                document.getElementById('universities')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            View All Destinations
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
