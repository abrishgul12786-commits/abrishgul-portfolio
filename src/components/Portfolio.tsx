import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { InteractiveDataCleaning } from './InteractiveDataCleaning';
import {
  FolderKanban,
  CheckCircle2,
  ExternalLink,
  Info,
  Wrench,
  AlertCircle,
  FileSpreadsheet,
  Globe,
  GraduationCap,
  Sparkles,
  Layers
} from 'lucide-react';

interface PortfolioProps {
  onOpenHireModal: (serviceTitle?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenHireModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Portfolio Projects (3)' },
    { id: 'data', label: 'Data Entry & Excel' },
    { id: 'ai-web', label: 'AI Websites' },
    { id: 'academic', label: 'Academic CS Projects' },
  ];

  const filteredProjects = PROJECTS.filter(
    (proj) => activeCategory === 'all' || proj.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-slate-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Portfolio Showcase
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 text-base">
            Demonstrating expertise in Excel data cleaning, AI web development, and academic Computer Science projects.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* IMPORTANT DISCLAIMER NOTE (Mandatory Requirement) */}
        <div className="mb-10 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 flex items-start gap-3 shadow-xs">
          <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 hover:border-teal-400 dark:hover:border-teal-600 transition-all duration-300"
            >
              {/* Image Preview Column */}
              <div className="lg:col-span-5 relative overflow-hidden bg-slate-100 dark:bg-slate-900 min-h-[280px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500 text-white shadow-md">
                    {project.category === 'data' && 'Microsoft Excel & Data Entry'}
                    {project.category === 'ai-web' && 'AI Website & UI/UX'}
                    {project.category === 'academic' && 'PMAS ARID CS Academic'}
                  </span>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Problem Statement */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1 mb-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Problem
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Work Done List */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider flex items-center gap-1 mb-2">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Work Done & Execution
                    </span>
                    <ul className="space-y-1.5">
                      {project.workDone.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interactive Component for Project 1 */}
                  {project.demoType === 'data-cleaning' && <InteractiveDataCleaning />}

                  {/* Tools Used */}
                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-2">
                      <Wrench className="w-3.5 h-3.5" />
                      Tools Used
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 mb-6">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 block mb-0.5">
                      ★ Measured Result
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-900 dark:text-emerald-200">
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Verified Portfolio Project
                  </span>
                  <button
                    onClick={() => onOpenHireModal(`Inquiry regarding ${project.title}`)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-md shadow-teal-600/20 flex items-center gap-1.5 transition-all"
                  >
                    <span>Request Similar Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
