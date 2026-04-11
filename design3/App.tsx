import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyStats } from './components/CompanyStats';
import { About } from './components/About';
import { DestinationsGrid } from './components/DestinationsGrid';
import { UniversityPartners } from './components/UniversityPartners';
import { Services } from './components/Services';
import { LeadGenCTA } from './components/LeadGenCTA';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll, useSpring } from 'motion/react';

function AppContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen bg-bg selection:bg-accent selection:text-white" style={{ color: 'var(--rc-fg-hex)', transition: 'background-color 0.4s ease' }}>
      {/* Global Elements */}
      <CustomCursor />
      <div className="noise" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[10000] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <Hero />
      <CompanyStats />
      <DestinationsGrid />
      <UniversityPartners />
      <Services />
      <Gallery />
      <About />
      <LeadGenCTA />
      <Footer />

      {/* Page Load Transition */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="fixed inset-0 bg-bg z-[99999] pointer-events-none"
      />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;