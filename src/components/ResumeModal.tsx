import React from 'react';
import { PERSONAL_INFO, SKILLS, SERVICES } from '../data/portfolioData';
import { X, Printer, Download, GraduationCap, Briefcase, Award, CheckCircle2, Mail, Globe } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative my-8 p-6 sm:p-10">
        {/* Header Action Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 mb-8 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Abrish Gul — Curriculum Vitae
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div id="printable-cv" className="space-y-8">
          {/* Header */}
          <div className="text-center sm:text-left border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-teal-600 dark:text-teal-400">
                Abrish Gul
              </h1>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-1">
                CS Student • AI Engineer • Data Specialist • Automation Developer
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                PMAS ARID AGRICULTURE UNIVERSITY
              </p>
            </div>

            <div className="text-xs space-y-1 text-slate-600 dark:text-slate-400 text-right">
              <p>Email: <strong>{PERSONAL_INFO.email}</strong></p>
              <p>Fiverr: <strong>{PERSONAL_INFO.fiverrName}</strong></p>
              <p>Status: <strong className="text-emerald-600 dark:text-emerald-400">Freelance Professional</strong></p>
            </div>
          </div>

          {/* Professional Profile */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Professional Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-xs text-teal-600 dark:text-teal-400 font-semibold">
                    PMAS ARID AGRICULTURE UNIVERSITY
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300">
                  Enrolled Candidate
                </span>
              </div>
            </div>
          </div>

          {/* Core Freelance Specializations */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Core Freelance Services
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold">
              {SERVICES.map((s) => (
                <div key={s.id} className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                  <span className="truncate">{s.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
              Technical Skill Matrix
            </h2>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((sk) => (
                <span
                  key={sk.id}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800"
                >
                  {sk.name} ({sk.level}%)
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
