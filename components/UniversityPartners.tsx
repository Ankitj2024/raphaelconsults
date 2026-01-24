import React, { useState } from 'react';
import { destinations } from '../data/destinations';

export function UniversityPartners() {
    const [activeTab, setActiveTab] = useState(destinations[0].id);
    const activeDestination = destinations.find(d => d.id === activeTab) || destinations[0];

    return (
        <section className="py-20 bg-blue-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Top Universities to <span className="text-brand-500">Study Abroad 🎓</span>
                    </h2>

                    {/* Country Tabs */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12">
                        {destinations.map((dest) => (
                            <button
                                key={dest.id}
                                onClick={() => setActiveTab(dest.id)}
                                className={`flex items-center gap-2 pb-2 px-2 transition-all duration-300 border-b-2 ${activeTab === dest.id
                                    ? 'border-brand-500'
                                    : 'border-transparent hover:border-gray-300'
                                    }`}
                            >
                                <img
                                    src={dest.image}
                                    alt={dest.country}
                                    className="w-6 h-4 object-cover rounded shadow-sm"
                                />
                                <span className={`font-semibold text-lg ${activeTab === dest.id ? 'text-brand-500' : 'text-gray-500'
                                    }`}>
                                    {dest.country}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* University Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* 
                Render from universityDetails if available, otherwise fallback to list or placeholder generation
              */}
                        {(activeDestination.universityDetails || activeDestination.universityList || [1, 2, 3, 4, 5, 6]).slice(0, 10).map((uni, idx) => {
                            let uniName = "";
                            let location = "";
                            let courseCount = "";

                            if (typeof uni === 'object' && 'name' in uni) { // University object
                                uniName = uni.name;
                                location = uni.location;
                                courseCount = uni.courseCount;
                            } else if (typeof uni === 'string') { // String from list
                                uniName = uni;
                                location = activeDestination.country;
                                courseCount = "Available";
                            } else { // Placeholder number
                                uniName = `University of ${activeDestination.country} ${idx + 1}`;
                                location = `${['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds', 'Bristol'][idx % 6]}, ${activeDestination.country}`;
                                courseCount = ['400+', '350+', '500+', '230+', '150+', '450+'][idx % 6];
                            }

                            return (
                                <div
                                    key={idx}
                                    onClick={() => {
                                        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer"
                                >
                                    <div className="w-16 h-16 shrink-0 bg-white rounded-xl border border-gray-100 p-1 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(uniName)}&background=random&color=fff&size=128&bold=true`}
                                            alt={uniName}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1 line-clamp-2">
                                            {uniName}
                                        </h3>
                                        <p className="text-gray-500 text-sm mb-2">{location}</p>
                                    </div>
                                </div>
                            );
                        })}

                        {/* "And Many More" Card - Only show for countries with long lists (e.g. UK) */}
                        {activeDestination.universityDetails && activeDestination.universityDetails.length > 10 && (
                            <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-6 shadow-sm border border-brand-400 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow h-full min-h-[100px]">
                                <h3 className="font-bold text-white text-xl md:text-2xl mb-2">And Many More...</h3>
                                <p className="text-brand-100 text-sm">Contact us for the full list of our university partners.</p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
