import React from 'react';
import { destinations } from '../data/destinations';

export function DestinationsGrid() {
    return (
        <section id="destinations" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-brand-900">Destinations We Cover</h2>
                    <div className="w-16 h-1 bg-accent-500 mx-auto mt-2 rounded-full"></div>
                    <p className="mt-4 text-gray-600">We counsel students for top-renowned universities across these regions.</p>
                </div>

                <div className="relative flex overflow-hidden group">
                    <div className="flex animate-scroll whitespace-nowrap gap-8 py-4 hover:[animation-play-state:paused]">
                        {[...destinations, ...destinations, ...destinations].map((dest, i) => (
                            <div key={`${dest.id}-${i}`} className="group/card cursor-pointer min-w-[180px] hover:scale-105 transition-transform duration-300">
                                <div className="relative overflow-hidden rounded-lg aspect-video mb-3 border border-gray-100 shadow-sm group-hover/card:shadow-md">
                                    <img
                                        src={dest.image}
                                        alt={dest.country}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-brand-900/0 group-hover/card:bg-brand-900/10 transition-colors duration-300"></div>
                                </div>
                                <h3 className="text-center font-bold text-gray-900 group-hover/card:text-brand-600 transition-colors text-sm">{dest.country}</h3>
                            </div>
                        ))}
                    </div>
                    {/* Gradient masks for seamless effect */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white to-transparent z-10"></div>
                </div>
            </div>
        </section>
    );
}
