import React from 'react';
import { localizedData, Language } from '../data/portfolioData';
import { BrainCircuit, Workflow, ShieldCheck, TrendingUp, Check, Award } from 'lucide-react';

interface SkillsGovernanceMatrixProps {
  lang: Language;
}

export const SkillsGovernanceMatrix: React.FC<SkillsGovernanceMatrixProps> = ({ lang }) => {
  const t = localizedData[lang].skills;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      default:
        return <Award className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getCategoryTheme = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return 'border-emerald-500/20 bg-emerald-500/[0.02] hover:border-emerald-500/40';
      case 'Workflow':
        return 'border-cyan-500/20 bg-cyan-500/[0.02] hover:border-cyan-500/40';
      case 'ShieldCheck':
        return 'border-indigo-500/20 bg-indigo-500/[0.02] hover:border-indigo-500/40';
      case 'TrendingUp':
        return 'border-amber-500/20 bg-amber-500/[0.02] hover:border-amber-500/40';
      default:
        return 'border-slate-800 bg-slate-900/40';
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {t.groups.map((group, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 sm:p-7 backdrop-blur-md transition-all duration-300 shadow-xl ${getCategoryTheme(
                group.iconName
              )}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                  {getCategoryIcon(group.iconName)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {group.title}
                </h3>
              </div>

              {/* Badges Grid */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-200 border border-slate-800/90 hover:border-slate-700 transition-all shadow-sm"
                  >
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Saudi PDPL & NDMO Callout Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-indigo-950/40 border border-emerald-500/30 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex flex-wrap items-center gap-2">
                <span>{t.complianceTitle}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                  {t.complianceBadge}
                </span>
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {t.complianceDesc}
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 shrink-0 border border-emerald-500/30 px-3 py-1.5 rounded-lg bg-emerald-500/5">
            {t.verifiedBadge}
          </span>
        </div>

      </div>
    </section>
  );
};
