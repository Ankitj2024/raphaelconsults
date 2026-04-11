import React from 'react';
import { destinations } from '../data/destinations';
import { motion } from 'motion/react';

export function DestinationsGrid() {
    return (
        <section id="destinations" className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Global Reach</span>
                    <h2 className="font-display text-5xl md:text-8xl font-bold uppercase leading-[0.9]" style={{ color: 'var(--rc-fg-hex)' }}>
                        Destinations<br />We <span className="text-stroke italic font-serif">Cover</span>
                    </h2>
                    <p className="mt-8 max-w-lg text-sm uppercase tracking-widest leading-loose" style={{ color: 'var(--rc-muted)' }}>
                        We counsel students and facilitate strategic placements across the most sought-after global universities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {destinations.slice(0, 8).map((dest, i) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            onClick={() => {
                                document.getElementById('universities')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group relative aspect-[3/4] overflow-hidden glass rounded-2xl cursor-pointer"
                        >
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                src={dest.image}
                                alt={dest.country}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-1">Explore</span>
                                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-white">{dest.country}</h3>
                            </div>
                            <div className="absolute bottom-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="font-display text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--rc-fg-hex)' }}>{dest.country}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
