import React, { useState } from 'react';
import { GlobeIcon } from './Icons';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-[5000] bg-bg/60 backdrop-blur-xl border-b border-white/5">
            {/* Logo */}
            <div className="font-display text-2xl font-bold uppercase tracking-tighter">
                Raphael<span className="text-accent">.</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
                {[
                    { name: 'Home', id: 'home' },
                    { name: 'Company', id: 'about' },
                    { name: 'Services', id: 'services' },
                    { name: 'Destinations', id: 'destinations' },
                    { name: 'Contact', id: 'contact' }
                ].map((item) => (
                    <a
                        key={item.name}
                        href={`#${item.id}`}
                        className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 hover:text-white transition-colors duration-300"
                    >
                        {item.name}
                    </a>
                ))}
                <a
                    href="https://wa.me/918427226647?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20for%20studying%20abroad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.3em] font-bold text-bg bg-accent px-6 py-3 rounded-full hover:bg-accent-light transition-colors duration-300"
                >
                    Book Consultation
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <div
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center cursor-pointer group"
                >
                    <div className={`w-5 h-[2px] bg-white relative transition-all duration-300
                        before:content-[''] before:absolute before:left-0 before:w-full before:h-full before:bg-white before:transition-all before:duration-300
                        after:content-[''] after:absolute after:left-0 after:w-full after:h-full after:bg-white after:transition-all after:duration-300
                        ${isMenuOpen
                            ? 'rotate-45 before:rotate-90 before:top-0 after:opacity-0'
                            : 'before:-top-1.5 after:top-1.5 group-hover:scale-x-75'
                        }`}
                    />
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden fixed inset-0 top-20 bg-bg/95 backdrop-blur-2xl z-[4999] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {[
                    { name: 'Home', id: 'home' },
                    { name: 'Company', id: 'about' },
                    { name: 'Services', id: 'services' },
                    { name: 'Destinations', id: 'destinations' },
                    { name: 'Contact', id: 'contact' }
                ].map((item) => (
                    <a
                        key={item.name}
                        href={`#${item.id}`}
                        className="font-display text-3xl font-bold uppercase tracking-tight text-white/70 hover:text-accent transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.name}
                    </a>
                ))}
                <a href="https://wa.me/918427226647?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20for%20studying%20abroad" target="_blank" rel="noopener noreferrer" className="mt-4 bg-accent text-bg px-8 py-4 rounded-full font-display font-bold uppercase tracking-widest text-sm">
                    Book Consultation
                </a>
            </div>
        </nav>
    );
}
