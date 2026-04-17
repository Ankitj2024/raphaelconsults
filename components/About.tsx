import React from 'react';
import { motion } from 'motion/react';

export function About() {
    return (
        <section id="about" className="py-16 lg:py-20 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-accent text-[10px] font-bold tracking-[0.3em] mb-4 block">Corporate Identity</span>
                    <h2 className="font-sans text-5xl md:text-8xl font-bold leading-[0.9] mb-8" style={{ color: 'var(--rc-fg-hex)' }}>
                        About <span className="text-accent font-sans">Us</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--rc-muted)' }}>
                        Raphael Travel &amp; Educational Consults is a premier international education consultancy operating globally across
                        <span className="text-accent font-semibold"> Zimbabwe, Ghana, and India</span>.
                        We operate as your elite gateway to unparalleled global education, unlocking high-tier universities through unbiased and precise professional guidance.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    viewport={{ once: true }}
                    className="h-px mb-12 md:mb-20 origin-left"
                    style={{ backgroundColor: 'var(--rc-border)' }}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Our Vision',
                            desc: 'To be your preferred partner in helping you gain the wings to soar high. We provide step-by-step guidance to place students in top-renowned universities globally.',
                            icon: (
                                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            )
                        },
                        {
                            title: 'Our Mission',
                            desc: 'To enable education providers and aspiring students to achieve their objectives in the most efficient and cost-effective manner possible.',
                            icon: (
                                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            )
                        },
                        {
                            title: 'Our Purpose',
                            desc: 'Leveraging close relationships with embassies and elite universities to deliver completely superior, reliable, and transparent services.',
                            icon: (
                                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            )
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group glass rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2"
                            style={{ ['--hover-bg' as string]: 'var(--rc-glass-bg)' }}
                        >
                            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-500">
                                {item.icon}
                            </div>
                            <h3 className="font-sans text-xl font-bold mb-4 group-hover:text-accent transition-colors duration-300" style={{ color: 'var(--rc-fg-hex)' }}>{item.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--rc-muted)' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
