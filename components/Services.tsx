import React, { useRef } from 'react';
import { services } from '../data/services';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        // Entry animation for header
        gsap.from(".services-header > *", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".services-header",
                start: "top 85%",
            }
        });

        // Staggered entrance for cards
        gsap.from(cardsRef.current, {
            y: 100,
            opacity: 0,
            scale: 0.8,
            rotationX: -20,
            duration: 1.2,
            stagger: 0.15,
            ease: "expo.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, { scope: containerRef });

    // 3D Tilt Effect on Mouse Move
    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const card = cardsRef.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 1000
        });
    };

    const onMouseLeave = (index: number) => {
        const card = cardsRef.current[index];
        if (!card) return;

        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)"
        });
    };

    return (
        <section id="services" ref={containerRef} className="py-16 lg:py-24 px-4 relative overflow-hidden bg-bg">
            <div className="max-w-7xl mx-auto">
                <div className="services-header grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-20">
                    <div>
                        <span className="text-accent text-[10px] font-bold tracking-[0.3em] mb-4 block uppercase">Expertise</span>
                        <h2 className="font-sans text-5xl md:text-7xl font-bold leading-[0.9]" style={{ color: 'var(--rc-fg-hex)' }}>
                            Our<br /><span className="text-accent font-sans italic">Services</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm tracking-widest leading-loose" style={{ color: 'var(--rc-muted)' }}>
                        Comprehensive support tailored for ambitious youth seeking a successful future abroad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            ref={(el) => (cardsRef.current[i] = el)}
                            onMouseMove={(e) => onMouseMove(e, i)}
                            onMouseLeave={() => onMouseLeave(i)}
                            className="group glass rounded-3xl p-10 transition-colors duration-500 hover:border-accent/30 cursor-pointer relative overflow-hidden"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(255,78,0,0)] group-hover:shadow-[0_0_30px_rgba(255,78,0,0.3)]" style={{ transform: 'translateZ(30px)' }}>
                                {service.icon}
                            </div>
                            <h3 className="font-sans text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300" style={{ color: 'var(--rc-fg-hex)', transform: 'translateZ(20px)' }}>
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--rc-muted)', transform: 'translateZ(10px)' }}>
                                {service.description}
                            </p>
                            
                            {/* Decorative background flare */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
