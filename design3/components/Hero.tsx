import React, { useRef } from 'react';
import { DocumentCheckIcon } from './Icons';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set((clientX / innerWidth - 0.5) * 30);
        mouseY.set((clientY / innerHeight - 0.5) * 30);
    };

    const textX = useSpring(mouseX, { damping: 20, stiffness: 100 });
    const textY = useSpring(mouseY, { damping: 20, stiffness: 100 });

    return (
        <section
            id="home"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            <motion.div
                style={{ y: scrollY, opacity, scale, x: textX, translateY: textY }}
                className="relative z-10 text-center px-4 pt-40 max-w-6xl mx-auto"
            >


                {/* Main Title */}
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] font-bold uppercase tracking-tighter"
                >
                    Chart Your<br />
                    Course To<br />
                    <span className="text-stroke italic font-serif">Global</span>{' '}
                    <span className="text-accent">Excellence</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8"
                >
                    <p className="max-w-xs text-sm text-white/50 font-sans uppercase tracking-widest leading-loose">
                        Embark on your journey to global<br />education with Raphael Consults
                    </p>
                    <div className="h-px w-24 bg-white/20 hidden md:block" />
                    <p className="max-w-xs text-sm text-white/50 font-sans uppercase tracking-widest leading-loose">
                        Transparent guidance for<br />students from Africa & Asia
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12"
                >
                    <a
                        href="#contact-form"
                        className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden rounded-full border border-white/20 transition-all duration-500 hover:border-accent"
                    >
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        <span className="relative z-10 font-display font-bold uppercase tracking-widest text-sm group-hover:text-white transition-colors">
                            Start Your Journey →
                        </span>
                    </a>
                </motion.div>
            </motion.div>

            {/* Background Radial Glow */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-radial from-accent/15 via-transparent to-transparent opacity-50 blur-3xl"
                />
            </div>


        </section>
    );
}
