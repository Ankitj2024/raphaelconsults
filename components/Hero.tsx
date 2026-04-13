import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { World } from './ui/globe';
import { useTheme } from '../context/ThemeContext';

export function Hero() {
    const { isDark, accentColor } = useTheme();
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

    const globeConfig = {
        pointSize: 12,
        globeColor: "transparent",
        showAtmosphere: true,
        atmosphereColor: isDark ? "#ffffff" : "#0066FF",
        atmosphereAltitude: 0.1,
        emissive: isDark ? "#000000" : "#ffffff",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)",
        ambientLight: isDark ? "#ffffff" : "#000000",
        directionalLeftLight: isDark ? "#ffffff" : "#000000",
        directionalTopLight: isDark ? "#ffffff" : "#000000",
        pointLight: isDark ? "#ffffff" : "#000000",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 20, lng: 0 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };

    const colors = accentColor === 'blue'
        ? ["#0066FF", "#3385FF", "#ffffff"]
        : ["#ff4e00", "#ff6a2a", "#ffffff"];
    const sampleArcs = [
        { order: 1, startLat: 51.5072, startLng: -0.1276, endLat: 28.6139, endLng: 77.209, arcAlt: 0.2, color: colors[0] },
        { order: 1, startLat: -19.8856, startLng: -43.9512, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.5, color: colors[1] },
        { order: 2, startLat: 28.6139, startLng: 77.209, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.3, color: colors[2] },
        { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.2, color: colors[0] },
        { order: 3, startLat: 34.0522, startLng: -118.2437, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[1] },
        { order: 4, startLat: 40.7128, startLng: -74.006, endLat: -34.6037, endLng: -58.3816, arcAlt: 0.4, color: colors[2] },
        { order: 5, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[0] },
        { order: 6, startLat: -22.9068, startLng: -43.1729, endLat: 28.6139, endLng: 77.209, arcAlt: 0.7, color: colors[1] }
    ];

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
                    style={{ color: 'var(--rc-fg-hex)' }}
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
                    <p className="max-w-xs text-sm font-sans uppercase tracking-widest leading-loose" style={{ color: 'var(--rc-muted)' }}>
                        Embark on your journey to global<br />education with Raphael Consults
                    </p>
                    <div className="h-px w-24 hidden md:block" style={{ backgroundColor: 'var(--rc-subtle)' }} />
                    <p className="max-w-xs text-sm font-sans uppercase tracking-widest leading-loose" style={{ color: 'var(--rc-muted)' }}>
                        Transparent guidance for<br />students from Africa &amp; Asia
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
                        className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden rounded-full transition-all duration-500 hover:border-accent"
                        style={{ border: '1px solid var(--rc-border)' }}
                    >
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        <span className="relative z-10 font-display font-bold uppercase tracking-widest text-sm group-hover:text-white transition-colors" style={{ color: 'var(--rc-fg-hex)' }}>
                            Start Your Journey →
                        </span>
                    </a>
                </motion.div>
            </motion.div>

            {/* Background Globe Integration */}
            <div className="absolute inset-0 z-0 opacity-80 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 right-0 h-[200%] aspect-square -translate-y-1/2 translate-x-1/2">
                    <World data={sampleArcs} globeConfig={globeConfig} />
                </div>
                {/* Fallback Glow */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-radial from-accent/10 via-transparent to-transparent opacity-30 blur-3xl pointer-events-none"
                />
            </div>
        </section>  
    );  
}

