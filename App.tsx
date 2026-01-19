import React, { useState } from 'react';
import {
  GraduationCapIcon,
  GlobeIcon,
  DocumentCheckIcon,
  PlaneIcon,
  StarIcon
} from './components/Icons';

import { Service, Destination, Testimonial } from './types';

// Updated Data with Raphael Travel & Educational Consults content
const services: Service[] = [
  {
    id: 1,
    title: "Career Advising",
    description: "Honest and transparent guidance to help students make the right career choices based on their background and aptitude.",
    icon: <GraduationCapIcon className="w-8 h-8 text-accent-500" />
  },
  {
    id: 2,
    title: "Admission Counseling",
    description: "Complete assistance with application documentation, offer letter processing, and SOP/LOR preparation.",
    icon: <GlobeIcon className="w-8 h-8 text-accent-500" />
  },
  {
    id: 3,
    title: "Visa Counseling",
    description: "Error-free visa application services, financial documentation guidance, and interview preparation.",
    icon: <DocumentCheckIcon className="w-8 h-8 text-accent-500" />
  },
  {
    id: 4,
    title: "Travel & Accommodation",
    description: "Assistance with travel bookings, airport pickup services, and finding suitable accommodation abroad.",
    icon: <PlaneIcon className="w-8 h-8 text-accent-500" />
  }
];

const destinations: Destination[] = [
  {
    id: 1,
    country: "United Kingdom",
    universities: 100,
    image: "https://flagcdn.com/w640/gb.png",
    description: "World-class education and heritage."
  },
  {
    id: 2,
    country: "Canada",
    universities: 90,
    image: "https://flagcdn.com/w640/ca.png",
    description: "Welcoming environment with post-study work options."
  },
  {
    id: 3,
    country: "Australia",
    universities: 40,
    image: "https://flagcdn.com/w640/au.png",
    description: "High quality of life and innovative research."
  },
  {
    id: 4,
    country: "USA",
    universities: 3000,
    image: "https://flagcdn.com/w640/us.png",
    description: "Top-ranked universities and diverse opportunities."
  },
  {
    id: 5,
    country: "Cyprus",
    universities: 10,
    image: "https://flagcdn.com/w640/cy.png",
    description: "Affordable education in a beautiful Mediterranean setting."
  },
  {
    id: 6,
    country: "Hungary",
    universities: 15,
    image: "https://flagcdn.com/w640/hu.png",
    description: "Rich history and high academic standards."
  },
  {
    id: 7,
    country: "India",
    universities: 50,
    image: "https://flagcdn.com/w640/in.png",
    description: "Emerging global education hub.",
    universityList: [
      "Lovely Professional University",
      "Chandigarh University",
      "CT University",
      "Parul University",
      "Rayat Bahra Professional University",
      "Swami University"
    ]
  }
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Tafadzwa M.",
    university: "United Kingdom",
    text: "Raphael Consults made my dream of studying in the UK a reality. Their guidance on the visa process was invaluable.",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 2,
    name: "Kwame A.",
    university: "Canada",
    text: "From Ghana to Canada, the transition was smooth thanks to the amazing team. They treated me like family.",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. Header / Navigation */}
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
              {['Home', 'Company', 'Services', 'Destinations', 'Contact'].map((item) => (
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

      {/* 2. Hero Section */}
      <section id="home" className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-brand-500">
        {/* Background Decorative Elements */}
        <div className="absolute inset-x-0 bottom-0">
          <svg viewBox="0 0 1440 320" className="w-full h-auto block text-white fill-current">
            <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Let Us Help You <br />
                <span className="text-accent-400">Discover The World</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-100 mb-8 max-w-lg font-light leading-relaxed">
                Embark on your journey to global education with Raphael Travel & Educational Consults.
                We provide smooth, cost-effective, and transparent guidance for students from Africa and Asia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#company" className="px-8 py-4 text-base font-bold rounded-full text-white bg-accent-500 hover:bg-accent-600 transition shadow-lg shadow-black/20 text-center">
                  Start Your Journey
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg aspect-square">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl transform scale-110"></div>
                <img
                  src="/hero_students.png"
                  alt="International Students"
                  className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl border-8 border-white/20"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 animate-bounce-slow">
                  <div className="bg-green-100 p-2 rounded-full">
                    <DocumentCheckIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-800 font-semibold uppercase">Trusted Since</p>
                    <p className="text-lg font-bold text-gray-900">Inception</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Company & Stats Section */}
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

      {/* 6. Top Destinations (Moved) */}
      <section id="destinations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900">Destinations We Cover</h2>
            <div className="w-16 h-1 bg-accent-500 mx-auto mt-2 rounded-full"></div>
            <p className="mt-4 text-gray-600">We counsel students for top-renowned universities across these regions.</p>
          </div>

          <div className="relative flex overflow-hidden group">
            <div className="flex animate-scroll whitespace-nowrap gap-8 py-4 hover:[animation-play-state:paused]">
              {[...destinations, ...destinations, ...destinations].map((dest, i) => (
                <div key={`${dest.id}-${i}`} className="group/card cursor-pointer min-w-[180px] hover:scale-105 transition-transform duration-300">
                  <div className="relative overflow-hidden rounded-lg aspect-video mb-3 border border-gray-100 shadow-sm group-hover/card:shadow-md">
                    <img
                      src={dest.image}
                      alt={dest.country}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-900/0 group-hover/card:bg-brand-900/10 transition-colors duration-300"></div>
                  </div>
                  <h3 className="text-center font-bold text-gray-900 group-hover/card:text-brand-600 transition-colors text-sm">{dest.country}</h3>
                </div>
              ))}
            </div>
            {/* Gradient masks for seamless effect */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white to-transparent z-10"></div>
          </div>
        </div>
      </section>

      {/* Partner Universities Section */}
      <section className="py-16 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-brand-900">Featured University Partners</h2>
            <div className="w-16 h-1 bg-accent-500 mx-auto mt-2 rounded-full"></div>
            <p className="mt-4 text-gray-600">We represent top institutions in our key destinations.</p>
          </div>

          <div className="flex justify-center">
            {destinations.filter(d => d.universityList).map(dest => (
              <div key={dest.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 border border-brand-100 max-w-2xl w-full">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                  <img src={dest.image} alt={dest.country} className="w-16 h-10 object-cover rounded shadow-sm" />
                  <h3 className="font-bold text-xl text-gray-900">{dest.country}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {dest.universityList?.map((uni, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="text-accent-500 mt-1 shrink-0">
                        <GraduationCapIcon className="w-5 h-5" />
                      </span>
                      <span className="font-medium hover:text-brand-600 transition-colors cursor-default">{uni}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section id="services" className="py-20 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">Comprehensive support tailored for ambitious youth seeking a successful future.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-8 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 border-t-4 border-transparent hover:border-accent-500 group">
                <div className="bg-warm-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* 7. Footer */}
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
    </div>
  );
}

export default App;