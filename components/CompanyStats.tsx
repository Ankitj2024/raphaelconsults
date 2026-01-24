import React from 'react';

export function CompanyStats() {
    return (
        <section id="company" className="py-16 bg-white relative -mt-10 z-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 border border-brand-100/50">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-brand-900">Why Choose Raphael Consults?</h2>
                        <div className="w-16 h-1 bg-accent-500 mx-auto mt-2 rounded-full"></div>
                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                            We are a digitally driven consultancy with a presence in **Zimbabwe, Ghana, and India**.
                            Our mission is to enable education providers and students to achieve their objectives in the most efficient and cost-effective manner.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                        {[
                            { label: 'Visa Success Rate', val: 'High', color: 'text-brand-600' },
                            { label: 'Support', val: '24/7', color: 'text-accent-500' },
                            { label: 'Global Offices', val: '3', color: 'text-brand-600' },
                            { label: 'Destinations', val: '9+', color: 'text-accent-500' }
                        ].map((stat, i) => (
                            <div key={i} className="px-2">
                                <div className={`text-3xl md:text-4xl font-extrabold ${stat.color} mb-2`}>{stat.val}</div>
                                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
