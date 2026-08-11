import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle, Target, Sparkles, Cpu, Database, Laptop, ArrowRight } from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
  onOpenHireModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume, onOpenHireModal }) => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Driven by Precision, Empowered by AI
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Education & Highlight Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 dark:bg-teal-500/20 rounded-bl-full pointer-events-none"></div>

              <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-teal-600/30">
                <GraduationCap className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                Academic Background
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2">
                Computer Science Student
              </h3>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                PMAS ARID AGRICULTURE UNIVERSITY
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Combining solid Computer Science fundamentals (algorithms, database architecture, web technologies) with practical freelancing expertise in data entry and AI automation.
              </p>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Status</span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                  Active Freelancer
                </span>
              </div>
            </div>

            {/* Quick Specializations Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-teal-900 to-slate-900 text-white shadow-xl">
              <h4 className="text-base font-bold mb-4 flex items-center gap-2 text-teal-300">
                <Target className="w-5 h-5 text-teal-400" />
                Specialization Pillars
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm font-medium text-slate-200">
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span>Excel Data Cleaning & Formatting Expert</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span>PDF to Excel Table Extraction & Conversion</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span>AI Website Development & Chatbot Setup</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <span>Custom AI Agents & Business Automation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Exact About Me Text & Mission Statement */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Hi, I'm Abrish Gul — Your Partner for High-Accuracy Data & AI Solutions
            </h3>

            {/* Prompt's Exact Required Intro Paragraph */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border-l-4 border-teal-500 shadow-md mb-8">
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed italic font-medium">
                "{PERSONAL_INFO.bio}"
              </p>
            </div>

            {/* Value Addition Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">Data Management</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    Structured datasets, error-free transcription, and Excel formulas.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">AI & Automation</h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    AI websites, custom agents, chatbots, and productivity tools.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenHireModal}
                className="px-6 py-3 rounded-xl font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-md shadow-teal-600/30 transition-all flex items-center gap-2"
              >
                <span>Hire Abrish Gul</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all"
              >
                View Academic & Work CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
