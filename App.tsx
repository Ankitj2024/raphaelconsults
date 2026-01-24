import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyStats } from './components/CompanyStats';
import { About } from './components/About';
import { DestinationsGrid } from './components/DestinationsGrid';
import { UniversityPartners } from './components/UniversityPartners';
import { Services } from './components/Services';
import { LeadGenCTA } from './components/LeadGenCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navbar />
      <Hero />
      <CompanyStats />
      <DestinationsGrid />
      <UniversityPartners />
      <Services />
      <About />
      <LeadGenCTA />
      <Footer />
    </div>
  );
}

export default App;