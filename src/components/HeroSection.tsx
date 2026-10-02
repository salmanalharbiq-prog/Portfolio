import React from 'react';
import { localizedData, Language } from '../data/portfolioData';
import { ShieldCheck, ArrowRight, ArrowLeft, Terminal, Cpu, Database, Award, Building2, Lock, Zap } from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang, onOpenResumeModal }) => {
  const t = localizedData[lang].hero;
  const isRtl = lang === 'ar';

  const nationalEntities = [
    lang === 'ar' ? 'هيئة تنظيم الكهرباء (SERA)' : 'Saudi Electricity Regulatory Authority (SERA)',
    lang === 'ar' ? 'أكاديمية طويق & وزارة التعليم' : 'Tuwaiq Academy & Ministry of Education',
    lang === 'ar' ? 'المركز الوطني للأرصاد (NCM)' : 'National Center of Meteorology (NCM)'
  ];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-emerald-600/10 via-cyan-500/10 to-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Live Status Pill-less Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-slate-900/80 border border-slate-700/60 text-slate-300 text-xs font-mono mb-5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold tracking-wide">
                {t.badge}
              </span>
            </div>

            {/* Candidate Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-3">
              {t.name}
              <span className="block text-xl sm:text-2xl font-mono text-emerald-400 mt-2 font-normal">
                {t.subName}
              </span>
            </h1>

            <p className="text-base sm:text-lg font-semibold text-cyan-300/90 mb-4 tracking-tight flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400 inline shrink-0" />
              {t.title}
            </p>

            {/* Concise Magnetic Hook */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl font-normal">
              {t.hook}
            </p>

            {/* National Entities Badges */}
            <div className="w-full mb-7 pt-4 border-t border-slate-800/80">
              <p className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2.5 flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                {t.entitiesLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {nationalEntities.map((entity, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-medium hover:border-emerald-500/40 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {entity}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              >
                <span>{t.ctaProjects}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 text-xs sm:text-sm font-medium transition-all"
              >
                <span>{t.ctaContact}</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm font-medium hover:bg-emerald-500/5 transition-all"
              >
                <Award className="w-4 h-4" />
                <span>{t.ctaResume}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Deep-Tech Telemetry Widget */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#0e1626] to-[#0a101d] border border-slate-800 p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    {t.terminalTitle}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  {t.terminalStatus}
                </span>
              </div>

              {/* Code Snippet & Live Pipeline Feed */}
              <div className="font-mono text-xs text-slate-300 space-y-3 leading-relaxed">
                <div className="text-slate-400">
                  <span className="text-cyan-400 font-semibold">import</span> local_llm, duckdb, yolo_v8
                </div>
                <div className="text-slate-400">
                  <span className="text-cyan-400 font-semibold">from</span> saudi_sovereignty <span className="text-cyan-400 font-semibold">import</span> PDPL, NDMO
                </div>

                {/* Progress Task 1 */}
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/60 space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] text-slate-300 font-semibold">
                    <span>{t.terminalTask}</span>
                    <span className="text-emerald-400">100%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-1.5 rounded-full w-full"></div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/60 space-y-1">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{t.terminalSpeed}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span>{t.terminalPrivacy}</span>
                  </div>
                </div>

                {/* Badges */}
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px]">
                    <ShieldCheck className="w-3 h-3" />
                    Saudi PDPL Compliant
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px]">
                    <Database className="w-3 h-3" />
                    NDMO Data Residency
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
