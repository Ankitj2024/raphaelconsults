import React from 'react';

export function LeadGenCTA() {
    return (
        <section id="contact-form" className="py-20 bg-brand-900 text-white relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-700/30 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text & Trust */}
                    <div>
                        <div className="inline-block bg-accent-500/20 text-accent-400 font-bold px-4 py-2 rounded-full text-sm mb-6 border border-accent-500/30">
                            🚀 Start Your Journey Today
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Ready to Study Abroad? <br />
                            <span className="text-accent-500">Let's Get You There.</span>
                        </h2>
                        <p className="text-brand-100 text-lg mb-8 leading-relaxed">
                            Fill out the form to get a **free personalized consultation** from our expert counselors.
                            We'll analyze your profile and guide you to the best universities in the UK, USA, Canada, Germany, and more.
                        </p>

                        <div className="space-y-4">
                            {[
                                "100% Free Initial Assessment",
                                "Visa Assurance Support",
                                "Scholarship Guidance",
                                "Application Fee Waivers (Select Unis)"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="bg-green-500/20 p-1 rounded-full">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="font-medium text-brand-50">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Lead Gen Form */}
                    <div className="bg-white text-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Consultation</h3>
                            <p className="text-gray-500 text-sm mb-6">Complete the form below and we'll contact you within 24 hours.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
                                    <input type="tel" placeholder="+91 98765 43210" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition" />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">City (Applying from)</label>
                                <input type="text" placeholder="e.g. Mumbai, Delhi" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Preferred Destination</label>
                                    <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition appearance-none cursor-pointer">
                                        <option>United Kingdom & Ireland</option>
                                        <option>USA</option>
                                        <option>Canada</option>
                                        <option>Germany</option>
                                        <option>Australia</option>
                                        <option>New Zealand</option>
                                        <option>Dubai (UAE)</option>
                                        <option>Cyprus</option>
                                        <option>Hungary</option>
                                        <option>Turkey</option>
                                        <option>India</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Study Level</label>
                                    <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition appearance-none cursor-pointer">
                                        <option>Masters / Postgrad</option>
                                        <option>Bachelors / Undergrad</option>
                                        <option>PhD / Doctorate</option>
                                        <option>Diploma</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Message (Optional)</label>
                                <textarea rows={3} placeholder="Tell us about your profile or questions..." className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition resize-none"></textarea>
                            </div>

                            <button className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-accent-500/30 transition-all transform hover:-translate-y-1 mt-2">
                                Submit Enquiry
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-4">We respect your privacy. No spam, ever.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
