import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, CheckCircle2, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 text-base">
            Sample client reviews demonstrating satisfaction in Data Entry, PDF conversions, and AI web development.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-xl hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-teal-200 dark:text-teal-900/60 absolute top-6 right-6 pointer-events-none group-hover:text-teal-300 dark:group-hover:text-teal-800 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed mb-6">
                  "{item.comment}"
                </p>

                {/* Service Badge */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-semibold border border-teal-200 dark:border-teal-800">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>{item.serviceOrdered}</span>
                  </span>
                </div>
              </div>

              {/* Client Info Header */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700/80 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.clientName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-500 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {item.clientRole} • {item.country}
                  </p>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    ✓ {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
