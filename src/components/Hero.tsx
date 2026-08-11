import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Briefcase, Download, Eye, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Award, GraduationCap } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenHireModal: (serviceTitle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenHireModal }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 -ml-5"></span>
              <span>Freelance Professional • Available on Fiverr</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Abrish Gul
              </span>
            </h1>

            {/* Dynamic Rotating Titles */}
            <div className="h-10 sm:h-12 mt-3 mb-4 flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-slate-600 dark:text-slate-300 mr-2">
                Specialized
              </span>
              <span
                key={currentTitleIndex}
                className="text-xl sm:text-2xl font-extrabold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/40 px-3 py-1 rounded-lg border border-teal-200 dark:border-teal-800 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 inline-block"
              >
                {PERSONAL_INFO.titles[currentTitleIndex]}
              </span>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              A Computer Science student at{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">
                PMAS ARID AGRICULTURE UNIVERSITY
              </strong>{' '}
              and freelance specialist delivering precision Data Entry, Excel management, AI websites, custom agents, and business automation solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-hire-me-btn"
                onClick={() => onOpenHireModal()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-extrabold text-white bg-teal-600 hover:bg-teal-700 active:scale-95 shadow-lg shadow-teal-600/30 hover:shadow-teal-600/40 transition-all flex items-center justify-center gap-2.5 text-base"
              >
                <Briefcase className="w-5 h-5" />
                <span>Hire Me</span>
              </button>

              <button
                id="hero-download-cv-btn"
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-2.5 text-base"
              >
                <Download className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span>Download CV</span>
              </button>

              <button
                id="hero-view-portfolio-btn"
                onClick={() => scrollToSection('portfolio')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 hover:bg-teal-100 dark:hover:bg-teal-900/60 active:scale-95 transition-all border border-teal-200 dark:border-teal-800/80 flex items-center justify-center gap-2 text-base"
              >
                <Eye className="w-5 h-5" />
                <span>View Portfolio</span>
              </button>
            </div>

            {/* Quick Guarantees / Trust Highlights */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Accuracy Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Strict Confidentiality</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Fast Fiverr Turnaround</span>
              </div>
            </div>
          </div>

          {/* Right Column: Headshot Frame & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500 via-emerald-400 to-teal-300 rounded-3xl opacity-30 blur-lg animate-pulse"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-800">
                <img
                  src={PERSONAL_INFO.headshotImage}
                  alt="Abrish Gul - AI Engineer & Freelance Data Specialist"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Badge 1: Education */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md p-3 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl flex items-center gap-3 animate-bounce duration-1000">
                <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Education</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">CS at PMAS ARID</p>
                </div>
              </div>

              {/* Floating Badge 2: Freelance Rating */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-500 flex items-center justify-center font-bold text-lg">
                  ★ 5.0
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Top Fiverr Quality</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">100% Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stat Counters Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md hover:border-teal-300 dark:hover:border-teal-700 transition-all text-center group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-teal-600 dark:text-teal-400 group-hover:scale-105 transition-transform">
                {stat.value}
                <span>{stat.suffix}</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
