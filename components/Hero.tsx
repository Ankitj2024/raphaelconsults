import React from 'react';
import { DocumentCheckIcon } from './Icons';

export function Hero() {
    return (
        <section id="home" className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-brand-500">
            {/* Background Decorative Elements */}
            <div className="absolute inset-x-0 bottom-0">
                <svg viewBox="0 0 1440 320" className="w-full h-auto block text-white fill-current">
                    <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                            Let Us Help You <br />
                            <span className="text-accent-400">Discover The World</span>
                        </h1>
                        <p className="text-lg md:text-xl text-brand-100 mb-8 max-w-lg font-light leading-relaxed">
                            Embark on your journey to global education with Raphael Travel & Educational Consults.
                            We provide smooth, cost-effective, and transparent guidance for students from Africa and Asia.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact-form" className="px-8 py-4 text-base font-bold rounded-full text-white bg-accent-500 hover:bg-accent-600 transition shadow-lg shadow-black/20 text-center">
                                Start Your Journey
                            </a>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg aspect-square">
                            <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl transform scale-110"></div>
                            <img
                                src="/images/hero-airport.jpg"
                                alt="Students Arriving"
                                className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl border-8 border-white/20"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-bounce-slow">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <DocumentCheckIcon className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-brand-800 font-semibold uppercase">Trusted Since</p>
                                    <p className="text-lg font-bold text-gray-900">Inception</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
