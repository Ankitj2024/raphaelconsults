import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

function SunIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
        </svg>
    );
}

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isDark, toggleTheme, toggleAccentColor } = useTheme();

    return (
        <nav className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-[5000] bg-bg/60 backdrop-blur-xl border-b border-white/5" style={{ borderBottomColor: 'var(--rc-border)' }}>
            {/* Logo */}
            <div className="font-display text-2xl font-bold uppercase tracking-tighter" style={{ color: 'var(--rc-fg-hex)' }}>
                Raphael
                <span 
                    className="text-accent cursor-pointer inline-block hover:scale-150 transition-transform active:scale-95 px-0.5"
                    onClick={toggleAccentColor}
                    title="Change Brand Color"
                >
                    .
                </span>
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
                        className="text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-300 hover:text-accent"
                        style={{ color: 'var(--rc-muted)' }}
                    >
                        {item.name}
                    </a>
                ))}

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className="w-9 h-9 rounded-full glass flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-accent"
                    style={{ color: 'var(--rc-fg-hex)' }}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={isDark ? 'moon' : 'sun'}
                            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                            {isDark ? <SunIcon /> : <MoonIcon />}
                        </motion.span>
                    </AnimatePresence>
                </button>

                <a
                    href="https://wa.me/918427226647?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20for%20studying%20abroad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] uppercase tracking-[0.3em] font-bold text-white bg-accent px-6 py-3 rounded-full hover:bg-accent-light transition-colors duration-300"
                >
                    Book Consultation
                </a>
            </div>

            {/* Mobile: Theme toggle + Hamburger */}
            <div className="md:hidden flex items-center gap-3">
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className="w-9 h-9 rounded-full glass flex items-center justify-center transition-all duration-300"
                    style={{ color: 'var(--rc-fg-hex)' }}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={isDark ? 'moon' : 'sun'}
                            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                            {isDark ? <SunIcon /> : <MoonIcon />}
                        </motion.span>
                    </AnimatePresence>
                </button>

                <div
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center cursor-pointer group"
                >
                    <div className={`w-5 h-[2px] relative transition-all duration-300`}
                        style={{ backgroundColor: 'var(--rc-fg-hex)' }}
                    >
                        <span className={`absolute left-0 w-full h-full transition-all duration-300 ${isMenuOpen ? 'rotate-90 top-0' : '-top-1.5 group-hover:scale-x-75'}`}
                            style={{ backgroundColor: 'var(--rc-fg-hex)', display: 'block' }}
                        />
                        <span className={`absolute left-0 w-full h-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-1.5 group-hover:scale-x-75'}`}
                            style={{ backgroundColor: 'var(--rc-fg-hex)', display: 'block' }}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden fixed inset-0 top-20 backdrop-blur-2xl z-[4999] flex flex-col items-center justify-center gap-8 transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                style={{ backgroundColor: 'color-mix(in srgb, var(--rc-bg) 95%, transparent)' }}
            >
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
                        className="font-display text-3xl font-bold uppercase tracking-tight hover:text-accent transition-colors duration-300"
                        style={{ color: 'var(--rc-muted)' }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.name}
                    </a>
                ))}
                <a href="https://wa.me/918427226647?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20for%20studying%20abroad" target="_blank" rel="noopener noreferrer" className="mt-4 bg-accent text-white px-8 py-4 rounded-full font-display font-bold uppercase tracking-widest text-sm">
                    Book Consultation
                </a>
            </div>
        </nav>
    );
}
