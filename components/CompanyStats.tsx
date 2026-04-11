import React from 'react';
import { motion } from 'motion/react';

export function CompanyStats() {
    return (
        <section id="company" className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end"
                >
                    <div>
                        <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Why Choose Us</span>
                        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9]" style={{ color: 'var(--rc-fg-hex)' }}>
                            The Trusted<br />Pathway to<br />
                            <span className="text-stroke italic font-serif">Global</span>{' '}
                            <span className="text-accent">Education</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm uppercase tracking-widest leading-loose" style={{ color: 'var(--rc-muted)' }}>
                        We are a digitally driven consultancy with a presence in Zimbabwe, Ghana, and India.
                        Our mission is to empower ambitious students to achieve their educational objectives efficiently.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
                >
                    {[
                        { label: 'Visa Success Rate', val: '98%' },
                        { label: 'Support System', val: '24/7' },
                        { label: 'Global Hubs', val: '3' },
                        { label: 'Partner Institutions', val: '3000+' }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-8 group transition-colors duration-500"
                        >
                            <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-3">{stat.val}</div>
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--rc-muted)' }}>{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
