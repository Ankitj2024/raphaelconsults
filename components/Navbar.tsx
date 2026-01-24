import React, { useState } from 'react';
import { GlobeIcon } from './Icons';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="bg-brand-500 rounded-lg p-2">
                            <GlobeIcon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-none">
                                Raphael<span className="text-brand-500">Consults</span>
                            </span>
                            <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide uppercase">Travel & Educational Consults</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home ❤️', 'Company 🤝', 'Services 💼', 'Destinations 🌍', 'Contact 📞'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '')}`}
                                className="text-gray-600 hover:text-brand-500 font-semibold text-sm uppercase tracking-wide transition"
                            >
                                {item}
                            </a>
                        ))}
                        <a href="#contact" className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition shadow-lg shadow-accent-500/30">
                            Book Consultation
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-brand-500 focus:outline-none p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl z-50">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {['Home', 'Company', 'Services', 'Destinations', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '')}`}
                                className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-500"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <a href="#contact" className="block w-full text-center mt-4 bg-accent-500 text-white py-3 rounded-lg font-bold">
                            Book Consultation
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
