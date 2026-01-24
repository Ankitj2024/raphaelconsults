import React from 'react';
import { GlobeIcon } from './Icons';

export function Footer() {
    return (
        <footer id="contact" className="bg-brand-900 text-gray-300 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white/10 p-2 rounded-lg">
                                <GlobeIcon className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">Raphael<span className="text-accent-500">Consults</span></span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            Your preferred partner in helping you gain the wings to soar high in life. We bridge the gap between your ambition and world-class education.
                        </p>
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="text-white font-bold text-lg mb-6">Our Offices & Contact</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                            {/* Zimbabwe */}
                            <div>
                                <h5 className="text-accent-500 font-bold mb-2">Zimbabwe (Southern Africa)</h5>
                                <p className="leading-relaxed">
                                    Suite 503/504, 5th Floor, Throgmorton<br />
                                    Corner of Samora Machel Ave & Julius Nyerere Way<br />
                                    Harare, Zimbabwe
                                </p>
                            </div>
                            {/* Ghana */}
                            <div>
                                <h5 className="text-accent-500 font-bold mb-2">Ghana (West Africa)</h5>
                                <p className="leading-relaxed">
                                    Old Tafo, Mile 4<br />
                                    Beside Rural Bank Ltd.<br />
                                    Kumasi, Ghana
                                </p>
                            </div>
                            {/* India */}
                            <div className="md:col-span-2">
                                <h5 className="text-accent-500 font-bold mb-2">India (Asia) & General Contact</h5>
                                <p className="flex items-center gap-2 mb-1">
                                    <span>📞</span> +91 84272 26647
                                </p>
                                <p className="flex items-center gap-2 mb-1">
                                    <span>✉️</span> raphtravelconsult1204@gmail.com
                                </p>
                                <p className="flex items-center gap-2">
                                    <span>🌐</span> www.raphaeltraveleducationconsults.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Values</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                'Reliability & Accuracy',
                                'Transparency',
                                'Ethical Conduct',
                                'Compassion & Fairness'
                            ].map(item => (
                                <li key={item} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm">
                    <p>&copy; {new Date().getFullYear()} Raphael Travel & Educational Consults Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
