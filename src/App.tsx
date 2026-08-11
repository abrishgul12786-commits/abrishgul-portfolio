import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Strengths } from './components/Strengths';
import { Portfolio } from './components/Portfolio';
import { QuoteCalculator } from './components/QuoteCalculator';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [contactPrefillService, setContactPrefillService] = useState<string>('');
  const [contactPrefillMessage, setContactPrefillMessage] = useState<string>('');

  const handleOpenHireModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setContactPrefillService(serviceTitle);
      setContactPrefillMessage(`Hi Abrish Gul,\nI am interested in hiring you for ${serviceTitle}. Please share your timeline and process.`);
    } else {
      setContactPrefillService('Data Entry');
      setContactPrefillMessage(`Hi Abrish Gul,\nI would like to hire you for a custom project on Fiverr. Please get back to me with your availability.`);
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectQuotePackage = (details: string) => {
    setContactPrefillMessage(`Hi Abrish Gul,\nI calculated a package using your portfolio estimator:\n- ${details}\n\nPlease confirm availability to start.`);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-teal-500 selection:text-white transition-colors duration-300">
        {/* Navigation Bar */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenHireModal={handleOpenHireModal}
        />

        {/* Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenHireModal={handleOpenHireModal}
        />

        {/* About Me Section */}
        <About
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenHireModal={() => handleOpenHireModal()}
        />

        {/* Services Section */}
        <Services
          onOpenHireModal={handleOpenHireModal}
        />

        {/* Skills Section */}
        <Skills />

        {/* Strengths Section */}
        <Strengths />

        {/* Portfolio Section */}
        <Portfolio
          onOpenHireModal={handleOpenHireModal}
        />

        {/* Interactive Fiverr Quote Estimator */}
        <QuoteCalculator
          onSelectPackage={handleSelectQuotePackage}
        />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact
          prefilledService={contactPrefillService}
          prefilledMessage={contactPrefillMessage}
        />

        {/* Footer */}
        <Footer />

        {/* Resume CV Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
