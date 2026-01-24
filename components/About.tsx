import React from 'react';
import { StarIcon } from './Icons';

export function About() {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Us</h2>
                    <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Raphael Travel & Educational Consults is an international education consultancy with a presence in
                        <span className="font-bold text-brand-600"> Zimbabwe, Ghana, and India</span>.
                        We serve as a trusted gateway to global education, helping students reach new heights through unbiased and professional guidance.
                    </p>
                </div>

                {/* Vision, Mission, Purpose Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {/* Vision */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            To be your preferred partner in helping you gain the wings to soar high. We provide step-by-step guidance to place students in top-renowned universities globally.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            To enable education providers and aspiring students to achieve their objectives in the most efficient and cost-effective manner possible.
                        </p>
                    </div>

                    {/* Purpose */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Our Purpose</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Leveraging close relationships with embassies and universities to deliver superior, reliable, and transparent services to our clients.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
