import React, { useState } from 'react';
import { destinations } from '../data/destinations';
import { motion } from 'motion/react';

export function UniversityPartners() {
    const validDestinations = destinations.filter(d =>
        (d.universityDetails && d.universityDetails.length > 0) ||
        (d.universityList && d.universityList.length > 0)
    );

    const [activeTab, setActiveTab] = useState(validDestinations[0]?.id);
    const activeDestination = validDestinations.find(d => d.id === activeTab) || validDestinations[0];

    return (
        <section id="universities" className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Partners</span>
                    <h2 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] mb-6" style={{ color: 'var(--rc-fg-hex)' }}>
                        Top Universities to<br /><span className="text-stroke italic font-serif">Study</span>{' '}<span className="text-accent">Abroad</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-sm uppercase tracking-widest leading-loose" style={{ color: 'var(--rc-muted)' }}>
                        Explore our extensive network of world-renowned partner institutions and find your perfect academic destination.
                    </p>
                </motion.div>

                {/* Country Tabs */}
                <div className="flex justify-start md:justify-center gap-3 mb-14 overflow-x-auto pb-4 px-2 hide-scrollbar">
                    {validDestinations.map((dest) => (
                        <button
                            key={dest.id}
                            onClick={() => setActiveTab(dest.id)}
                            className={`flex items-center gap-2.5 px-6 py-3 rounded-full transition-all duration-300 shrink-0 text-sm font-bold uppercase tracking-wider ${activeTab === dest.id
                                    ? 'bg-accent text-white'
                                    : 'glass hover:border-accent'
                                }`}
                            style={activeTab !== dest.id ? { color: 'var(--rc-muted)' } : {}}
                        >
                            <img src={dest.image} alt={dest.country} className="w-5 h-3.5 object-cover rounded-[2px]" />
                            <span className="whitespace-nowrap">{dest.country}</span>
                        </button>
                    ))}
                </div>

                {/* University Cards */}
                <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {(activeDestination.universityDetails || activeDestination.universityList || [1, 2, 3, 4, 5, 6]).slice(0, 10).map((uni, idx) => {
                        let uniName = "";
                        let location = "";

                        if (typeof uni === 'object' && 'name' in uni) {
                            uniName = uni.name;
                            location = uni.location;
                        } else if (typeof uni === 'string') {
                            uniName = uni;
                            location = activeDestination.country;
                        } else {
                            uniName = `University of ${activeDestination.country} ${idx + 1}`;
                            location = `${['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds', 'Bristol'][idx % 6]}, ${activeDestination.country}`;
                        }

                        const formattedName = uniName.replace(/ /g, '_').toLowerCase();
                        const localLogoSrc = `/images/logos/${formattedName}.png`;
                        const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(uniName)}&background=111111&color=ff4e00&size=128&bold=true`;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                onClick={() => {
                                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="glass rounded-2xl p-5 flex items-center gap-5 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                            >
                                <div className="w-14 h-14 shrink-0 rounded-xl border p-1.5 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: 'var(--rc-bg-elevated)', borderColor: 'var(--rc-border)' }}
                                >
                                    <img
                                        src={localLogoSrc}
                                        alt={uniName}
                                        className="w-full h-full object-contain rounded-lg"
                                        onError={(e) => { e.currentTarget.src = fallbackAvatar; }}
                                    />
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-1 group-hover:text-accent transition-colors duration-300 line-clamp-2" style={{ color: 'var(--rc-fg-hex)' }}>
                                        {uniName}
                                    </h3>
                                    <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--rc-muted)' }}>{location}</span>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-accent">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </motion.div>
                        );
                    })}

                    {activeDestination.universityDetails && activeDestination.universityDetails.length > 10 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            onClick={() => {
                                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-accent rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                        >
                            <h3 className="font-display font-bold text-white text-xl uppercase mb-2 flex items-center gap-2">
                                And Many More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                            </h3>
                            <p className="text-white/70 text-sm">Contact us for the full list of partners.</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
