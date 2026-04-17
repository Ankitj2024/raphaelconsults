import React from 'react';
import { motion } from 'motion/react';

export function Footer() {
    return (
        <footer id="contact" className="relative py-16 lg:py-20 px-4 overflow-hidden">
            {/* Decorative background text */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none select-none" style={{ opacity: 0.03 }}>
                <span className="font-sans text-[25vw] font-bold" style={{ color: 'var(--rc-fg-hex)' }}>RAPHAEL</span>
            </div>

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="font-sans text-5xl md:text-9xl font-bold leading-none mb-12" style={{ color: 'var(--rc-fg-hex)' }}>
                        Let's build the<br /><span className="text-accent font-sans">Future</span>
                    </h2>
                    <a
                        href="https://wa.me/918427226647?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20for%20studying%20abroad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden rounded-full transition-all duration-500 hover:border-accent"
                        style={{ border: '1px solid var(--rc-border)' }}
                    >
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        <span className="relative z-10 font-sans font-bold tracking-widest text-lg group-hover:text-white transition-colors" style={{ color: 'var(--rc-fg-hex)' }}>
                            Get in Touch
                        </span>
                    </a>
                </motion.div>

                {/* Contact Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20"
                >
                    <div>
                        <h5 className="text-accent text-xs font-bold tracking-widest mb-4">Zimbabwe (Southern Africa)</h5>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--rc-muted)' }}>
                            Suite 503/504, 5th Floor, Throgmorton<br />
                            Corner of Samora Machel Ave &amp; Julius Nyerere Way<br />
                            Harare, Zimbabwe
                        </p>
                    </div>
                    <div>
                        <h5 className="text-accent text-xs font-bold tracking-widest mb-4">Ghana (West Africa)</h5>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--rc-muted)' }}>
                            Old Tafo, Mile 4<br />
                            Beside Rural Bank Ltd.<br />
                            Kumasi, Ghana
                        </p>
                    </div>
                    <div>
                        <h5 className="text-accent text-xs font-bold tracking-widest mb-4">India (Asia) &amp; General Contact</h5>
                        <div className="space-y-2 text-sm" style={{ color: 'var(--rc-muted)' }}>
                            <p>📞 +91 84272 26647</p>
                            <p>✉️ raphtravelconsult1204@gmail.com</p>
                            <p>🌐 www.raphaeltraveleducationconsults.com</p>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8" style={{ borderTop: '1px solid var(--rc-border)' }}>
                    <div className="font-sans text-2xl font-bold tracking-tighter" style={{ color: 'var(--rc-fg-hex)' }}>
                        Raphael<span className="text-accent">.</span>Consults
                    </div>

                    <div className="flex gap-8 text-xs tracking-widest" style={{ color: 'var(--rc-muted)' }}>
                        <span className="hover:text-accent transition-colors cursor-default">Reliability</span>
                        <span className="hover:text-accent transition-colors cursor-default">Transparency</span>
                        <span className="hover:text-accent transition-colors cursor-default">Ethics</span>
                        <span className="hover:text-accent transition-colors cursor-default">Compassion</span>
                    </div>

                    <div className="text-[10px] tracking-[0.2em]" style={{ color: 'var(--rc-subtle)' }}>
                        © {new Date().getFullYear()} Raphael Travel &amp; Educational Consults Pvt. Ltd.
                    </div>
                </div>
            </div>
        </footer>
    );
}
