import React from 'react';
import { services } from '../data/services';

export function Services() {
    return (
        <section id="services" className="py-20 bg-warm-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Our Services</h2>
                    <p className="text-gray-600 text-lg">Comprehensive support tailored for ambitious youth seeking a successful future.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-xl p-8 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 border-t-4 border-transparent hover:border-accent-500 group">
                            <div className="bg-warm-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-50 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
