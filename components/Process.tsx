import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { UserCheck, GraduationCap, FileText, Globe, Plane } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        title: "Expert Counseling",
        description: "Our journey begins with a deep dive into your academic background, career goals, and personal preferences to map out your ideal path.",
        icon: <UserCheck className="w-24 h-24 text-accent" />,
        color: "#ff4e00",
        number: "01"
    },
    {
        title: "University Selection",
        description: "We curate a tailored list of world-class universities that align with your profile, ensuring you apply to institutions where you'll thrive.",
        icon: <GraduationCap className="w-24 h-24 text-accent" />,
        color: "#0066ff",
        number: "02"
    },
    {
        title: "Application Mastery",
        description: "From perfecting your SOP to gathering recommendations, we handle the intricacies of your application to maximize your chances of admission.",
        icon: <FileText className="w-24 h-24 text-accent" />,
        color: "#7c3aed",
        number: "03"
    },
    {
        title: "Visa Success",
        description: "Navigating visa requirements can be daunting. We provide comprehensive documentation support and mock interviews for a stress-free process.",
        icon: <Globe className="w-24 h-24 text-accent" />,
        color: "#10b981",
        number: "04"
    },
    {
        title: "Pre-Departure",
        description: "Before you fly, we brief you on everything from accommodation to local culture, ensuring a smooth transition to your new home.",
        icon: <Plane className="w-24 h-24 text-accent" />,
        color: "#f59e0b",
        number: "05"
    }
];

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftSideRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            // Pin the left side
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: leftSideRef.current,
                scrub: true,
            });

            // Rotate the rings
            gsap.to(".process-ring", {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: "none"
            });

            // Transition visuals based on active step
            steps.forEach((step, i) => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: `.step-text-${i}`,
                        start: "top 60%",
                        end: "top 20%",
                        scrub: true,
                    }
                });

                tl.to(".visual-container", {
                    borderColor: `${step.color}40`,
                    boxShadow: `0 0 50px ${step.color}20`,
                    duration: 0.5
                }, 0);

                tl.to(`.icon-wrapper-${i}`, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.5
                }, 0);

                if (i > 0) {
                    tl.to(`.icon-wrapper-${i - 1}`, {
                        opacity: 0,
                        scale: 0.5,
                        y: -50,
                        duration: 0.5
                    }, 0);
                }
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative bg-bg min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
                
                {/* Left Side: Sticky Visuals */}
                <div ref={leftSideRef} className="hidden lg:block lg:w-1/2 h-screen relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                        
                        <div className="visual-container relative w-full aspect-square max-w-md rounded-[40px] glass border border-white/10 flex items-center justify-center transition-all duration-700">
                            
                            {/* Abstract Rings */}
                            <div className="process-ring absolute inset-8 border border-accent/20 rounded-full border-dashed" />
                            <div className="process-ring absolute inset-16 border border-accent/10 rounded-full border-dashed" style={{ animationDirection: 'reverse' }} />
                            
                            {/* Icons */}
                            {steps.map((step, i) => (
                                <div
                                    key={i}
                                    className={`icon-wrapper-${i} absolute flex flex-col items-center justify-center opacity-0 scale-50 translate-y-12 transition-all duration-300`}
                                    style={{ opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 0.5, transform: i === 0 ? 'translateY(0)' : 'translateY(50px)' }}
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 blur-3xl opacity-20" style={{ backgroundColor: step.color }} />
                                        {React.cloneElement(step.icon as React.ReactElement, { 
                                            style: { color: step.color },
                                            className: "w-32 h-32 relative z-10" 
                                        })}
                                    </div>
                                    <span className="mt-6 font-display text-2xl font-bold tracking-widest uppercase opacity-40" style={{ color: step.color }}>
                                        Step {step.number}
                                    </span>
                                </div>
                            ))}

                            {/* Floating particles background effect */}
                            <div className="absolute inset-0 pointer-events-none">
                                {[...Array(6)].map((_, i) => (
                                    <div 
                                        key={i}
                                        className="absolute w-2 h-2 rounded-full bg-accent/20"
                                        style={{ 
                                            top: `${Math.random() * 100}%`, 
                                            left: `${Math.random() * 100}%`,
                                            animation: `pulse ${2 + i}s infinite alternate`
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Side: Scrolling Content */}
                <div className="w-full lg:w-1/2 py-24 px-6 md:px-12 lg:py-[30vh]">
                    <div className="lg:hidden mb-12">
                         <span className="text-accent text-[10px] font-bold tracking-[0.3em] mb-4 block uppercase">Our Path</span>
                         <h2 className="font-sans text-4xl font-bold leading-[0.9]" style={{ color: 'var(--rc-fg-hex)' }}>
                            The Roadmap to Your <span className="text-accent italic">Success</span>
                        </h2>
                    </div>

                    {steps.map((step, i) => (
                        <div 
                            key={i} 
                            className={`step-text-${i} min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center mb-24 lg:mb-0`}
                        >
                            <div className="flex items-center gap-6 mb-6">
                                <span className="text-5xl md:text-7xl font-display font-bold text-stroke opacity-30" style={{ WebkitTextStrokeColor: `${step.color}40` }}>{step.number}</span>
                                <div className="h-[2px] flex-grow transition-colors duration-500" style={{ backgroundColor: `${step.color}20` }} />
                            </div>
                            
                            <h3 className="font-sans text-3xl md:text-5xl font-bold mb-6 transition-colors duration-500" style={{ color: i === 0 ? step.color : 'var(--rc-fg-hex)' }}>
                                {step.title}
                            </h3>
                            <p className="text-lg md:text-xl leading-relaxed max-w-md" style={{ color: 'var(--rc-muted)' }}>
                                {step.description}
                            </p>

                            {/* Mobile Visual (Simplified) */}
                            <div className="lg:hidden mt-8 w-full aspect-square max-w-[200px] rounded-3xl glass flex items-center justify-center mx-auto">
                                 {React.cloneElement(step.icon as React.ReactElement, { style: { color: step.color } })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
