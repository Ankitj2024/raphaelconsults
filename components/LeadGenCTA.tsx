import React, { useState } from 'react';
import { motion } from 'motion/react';

export function LeadGenCTA() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '', phone: '', email: '', city: '',
        qualification: 'Bachelors Degree', passingYear: '', grade: '',
        destination: 'United Kingdom & Ireland', studyLevel: 'Masters / Postgrad',
        intake: 'Sept 2025', budget: '', message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        const text = `*New Study Abroad Enquiry*\n--------------------------------\n*Personal Details*\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCity: ${formData.city}\n\n*Academic Profile*\nQualification: ${formData.qualification}\nPassing Year: ${formData.passingYear}\nGrade/Percentage: ${formData.grade}\n\n*Study Preferences*\nDestination: ${formData.destination}\nLevel: ${formData.studyLevel}\nIntake: ${formData.intake}\nBudget: ${formData.budget}\nMessage: ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/918427226647?text=${encodedText}`, '_blank');
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        backgroundColor: 'var(--rc-glass-bg)',
        border: '1px solid var(--rc-glass-bd)',
        borderRadius: '0.75rem',
        padding: '0.875rem 1rem',
        outline: 'none',
        color: 'var(--rc-fg-hex)',
        fontSize: '0.875rem',
        transition: 'border-color 0.3s',
    };

    const labelStyle: React.CSSProperties = {
        fontSize: '10px',
        fontWeight: 700,
        color: 'var(--rc-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
    };

    const InputField = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
        <input {...props} style={inputStyle} />
    );

    const SelectField = ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => (
        <select {...props} style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
            {children}
        </select>
    );

    return (
        <section id="contact-form" className="py-32 px-4 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Get Started</span>
                        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.9] mb-8" style={{ color: 'var(--rc-fg-hex)' }}>
                            Ready to<br />Study <span className="text-stroke italic font-serif">Abroad?</span>
                        </h2>
                        <p className="max-w-md text-sm uppercase tracking-widest leading-loose mb-12" style={{ color: 'var(--rc-muted)' }}>
                            Fill out the form to get a free personalized consultation from our expert counselors.
                            We'll guide you to the best universities worldwide.
                        </p>

                        <div className="space-y-4">
                            {[
                                "100% Free Initial Assessment",
                                "Visa Assurance Support",
                                "Scholarship Guidance",
                                "Application Fee Waivers (Select Unis)"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300" />
                                    <span className="text-sm uppercase tracking-wider group-hover:text-accent transition-colors duration-300" style={{ color: 'var(--rc-muted)' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

                        {isSubmitted ? (
                            <div className="text-center relative z-10 py-12">
                                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="font-display text-3xl font-bold uppercase mb-4" style={{ color: 'var(--rc-fg-hex)' }}>Thank You!</h3>
                                <p className="mb-8 max-w-xs mx-auto" style={{ color: 'var(--rc-muted)' }}>We've received your enquiry. One of our expert counselors will contact you within 24 hours.</p>
                                <button
                                    onClick={() => { setIsSubmitted(false); setStep(1); setFormData({ name: '', phone: '', email: '', city: '', qualification: 'Bachelors Degree', passingYear: '', grade: '', destination: 'United Kingdom & Ireland', studyLevel: 'Masters / Postgrad', intake: 'Sept 2025', budget: '', message: '' }); }}
                                    className="text-accent font-bold hover:text-accent-light transition-colors uppercase tracking-widest text-xs"
                                >
                                    Send Another Enquiry
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                                {/* Progress */}
                                <div className="w-full h-1 rounded-full mb-6 overflow-hidden" style={{ backgroundColor: 'var(--rc-glass-bg)' }}>
                                    <div className="bg-accent h-full rounded-full transition-all duration-700 ease-out" style={{ width: `${(step / 3) * 100}%` }} />
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-display text-xl font-bold uppercase" style={{ color: 'var(--rc-fg-hex)' }}>
                                        {step === 1 && "Start Your Journey"}
                                        {step === 2 && "Academic Profile"}
                                        {step === 3 && "Study Preferences"}
                                    </h3>
                                    <span className="text-[10px] font-bold text-accent bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20 uppercase tracking-widest">Step {step}/3</span>
                                </div>

                                {step === 1 && (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5"><label style={labelStyle}>Full Name <span className="text-accent">*</span></label><InputField required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" /></div>
                                            <div className="space-y-1.5"><label style={labelStyle}>Phone <span className="text-accent">*</span></label><InputField required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 98765 43210" /></div>
                                        </div>
                                        <div className="space-y-1.5"><label style={labelStyle}>Email <span className="text-accent">*</span></label><InputField required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" /></div>
                                        <div className="space-y-1.5"><label style={labelStyle}>City <span className="text-accent">*</span></label><InputField required name="city" value={formData.city} onChange={handleChange} type="text" placeholder="e.g. Mumbai" /></div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-4">
                                        <div className="space-y-1.5"><label style={labelStyle}>Current Qualification</label><SelectField name="qualification" value={formData.qualification} onChange={handleChange}><option>High School (12th Grade)</option><option>Diploma</option><option>Bachelors Degree</option><option>Masters Degree</option><option>Other</option></SelectField></div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5"><label style={labelStyle}>Passing Year</label><InputField name="passingYear" value={formData.passingYear} onChange={handleChange} type="number" placeholder="e.g. 2023" /></div>
                                            <div className="space-y-1.5"><label style={labelStyle}>Grade / %</label><InputField name="grade" value={formData.grade} onChange={handleChange} type="text" placeholder="e.g. 85% or 3.5 GPA" /></div>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5"><label style={labelStyle}>Destination</label><SelectField name="destination" value={formData.destination} onChange={handleChange}><option>United Kingdom &amp; Ireland</option><option>USA</option><option>Canada</option><option>Germany</option><option>Australia</option><option>New Zealand</option><option>Dubai (UAE)</option><option>Cyprus</option><option>Hungary</option><option>Turkey</option><option>India</option><option>Other</option></SelectField></div>
                                            <div className="space-y-1.5"><label style={labelStyle}>Study Level</label><SelectField name="studyLevel" value={formData.studyLevel} onChange={handleChange}><option>Masters / Postgrad</option><option>Bachelors / Undergrad</option><option>PhD / Doctorate</option><option>Diploma</option></SelectField></div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5"><label style={labelStyle}>Intake</label><SelectField name="intake" value={formData.intake} onChange={handleChange}><option>Sept 2025</option><option>Jan 2026</option><option>May 2026</option><option>Sept 2026</option><option>Unsure</option></SelectField></div>
                                            <div className="space-y-1.5"><label style={labelStyle}>Budget</label><InputField name="budget" value={formData.budget} onChange={handleChange} type="text" placeholder="e.g. 15-20 Lakhs" /></div>
                                        </div>
                                        <div className="space-y-1.5"><label style={labelStyle}>Message (Optional)</label>
                                            <textarea name="message" value={formData.message} onChange={handleChange} rows={2} placeholder="Any specific questions?" style={{ ...inputStyle, resize: 'none' }} />
                                        </div>
                                    </div>
                                )}

                                <div className="flex gap-3 pt-4">
                                    {step > 1 && (
                                        <button type="button" onClick={handleBack} className="w-1/3 glass font-display font-bold py-3.5 rounded-xl hover:border-accent transition-all duration-300 text-sm uppercase tracking-wider" style={{ color: 'var(--rc-fg-hex)' }}>
                                            Back
                                        </button>
                                    )}
                                    {step < 3 ? (
                                        <button type="button" onClick={handleNext} className="flex-1 bg-accent hover:bg-accent-light text-white font-display font-bold py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm uppercase tracking-wider">
                                            Next Step →
                                        </button>
                                    ) : (
                                        <button type="submit" className="flex-1 bg-accent hover:bg-accent-light text-white font-display font-bold py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm uppercase tracking-wider">
                                            Submit Application
                                        </button>
                                    )}
                                </div>
                                <p className="text-center text-[10px] mt-4 uppercase tracking-[0.2em]" style={{ color: 'var(--rc-subtle)' }}>Step {step} of 3 • Secure &amp; Confidential</p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
