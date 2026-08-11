import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import {
  FileSpreadsheet,
  Keyboard,
  Sparkles,
  Table,
  FileType2,
  Database,
  Code2,
  FileCode,
  Palette,
  Terminal,
  Cpu,
  Bot,
  Workflow,
  CheckCircle2,
  Search
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Skills (13)' },
    { id: 'data', label: 'Data & Excel' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI & Automation' },
  ];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Keyboard': return <Keyboard className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Table': return <Table className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'FileType2': return <FileType2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Database': return <Database className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Workflow': return <Workflow className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    }
  };

  const filteredSkills = SKILLS.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mt-3 text-base">
            Verified mastery across spreadsheet management, web development, and AI engineering.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
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

        {/* Skills Progress Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-900/40">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                      {skill.badge} Proficiency
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-sm font-extrabold text-teal-600 dark:text-teal-400">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Animated Progress Bar Track */}
              <div className="w-full bg-slate-100 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden p-0.5">
                <div
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 h-full rounded-full transition-all duration-1000 ease-out shadow-xs"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
