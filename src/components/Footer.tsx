import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, ExternalLink, Instagram, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg">
                AG
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Abrish Gul
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Computer Science Student at PMAS ARID AGRICULTURE UNIVERSITY & Freelance Specialist in Data Entry, Excel, AI Websites, and Business Automation.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Freelance Hiring on Fiverr</span>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-teal-400 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#home" className="hover:text-teal-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-300 transition-colors">About Me</a></li>
              <li><a href="#services" className="hover:text-teal-300 transition-colors">Services</a></li>
              <li><a href="#skills" className="hover:text-teal-300 transition-colors">Skills</a></li>
              <li><a href="#portfolio" className="hover:text-teal-300 transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-teal-300 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-teal-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 4: Top Services */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-teal-400 mb-4">
              Top Services
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
              <li>Data Entry & Cleaning</li>
              <li>PDF to Excel Conversion</li>
              <li>Microsoft Excel Work</li>
              <li>AI Website Development</li>
              <li>Custom AI Chatbots</li>
              <li>Business Automation</li>
            </ul>
          </div>

          {/* Col 5: Direct Contacts */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-teal-400 mb-4">
              Connect & Hire
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-teal-300 transition-colors truncate"
              >
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={PERSONAL_INFO.fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fiverr: {PERSONAL_INFO.fiverrName}</span>
              </a>

              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-pink-300 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Abrish Gul. All rights reserved.</p>

          <p className="flex items-center gap-1">
            <span>Built for Abrish Gul — PMAS ARID CS Student</span>
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-teal-600 text-slate-300 hover:text-white border border-slate-800 transition-all flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
