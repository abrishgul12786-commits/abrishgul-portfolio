import React from 'react';
import { STRENGTHS } from '../data/portfolioData';
import {
  CheckCircle2,
  SearchCheck,
  Zap,
  FolderTree,
  ShieldCheck,
  MessageSquare,
  Award
} from 'lucide-react';

export const Strengths: React.FC = () => {
  const getStrengthIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle2': return <CheckCircle2 className="w-7 h-7 text-teal-600 dark:text-teal-400" />;
      case 'SearchCheck': return <SearchCheck className="w-7 h-7 text-teal-600 dark:text-teal-400" />;
      case 'Zap': return <Zap className="w-7 h-7 text-teal-600 dark:text-teal-400" />;
      case 'FolderTree': return <FolderTree className="w-7 h-7 text-teal-600 dark:text-teal-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-teal-600 dark:text-teal-400" />;
      case 'MessageSquare': return <MessageSquare className="w-7 h-7 text-teal-600 dark:text-teal-400" />;
      default: return <Award className="w-7 h-7 text-teal-600 dark:text-teal-400" />;
    }
  };

  return (
    <section id="strengths" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Core Values</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Clients Choose Abrish Gul
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 text-base">
            Professional standards that guarantee error-free results, confidentiality, and seamless working relationships.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 6 Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRENGTHS.map((item) => (
            <div
              key={item.id}
              className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:bg-white dark:hover:bg-slate-800 hover:border-teal-400 dark:hover:border-teal-600 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-100/80 dark:bg-teal-950/80 text-teal-600 dark:text-teal-300 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-xs">
                {getStrengthIcon(item.iconName)}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
