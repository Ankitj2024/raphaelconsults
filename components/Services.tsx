import React from 'react';
import { services } from '../data/services';
import { motion } from 'motion/react';

export function Services() {
    return (
        <section id="services" className="py-16 lg:py-20 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-20"
                >
                    <div>
                        <span className="text-accent text-[10px] font-bold tracking-[0.3em] mb-4 block">Expertise</span>
                        <h2 className="font-sans text-5xl md:text-7xl font-bold leading-[0.9]" style={{ color: 'var(--rc-fg-hex)' }}>
                            Our<br /><span className="text-accent font-sans">Services</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm tracking-widest leading-loose" style={{ color: 'var(--rc-muted)' }}>
                        Comprehensive support tailored for ambitious youth seeking a successful future abroad.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group glass rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                                {service.icon}
                            </div>
                            <h3 className="font-sans text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300" style={{ color: 'var(--rc-fg-hex)' }}>{service.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--rc-muted)' }}>
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
