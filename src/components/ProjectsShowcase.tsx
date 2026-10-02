import React, { useState } from 'react';
import { localizedData, Language } from '../data/portfolioData';
import { Layers, CheckCircle2, Cpu, Car, Home, ArrowDown } from 'lucide-react';

interface ProjectsShowcaseProps {
  lang: Language;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ lang }) => {
  const t = localizedData[lang].projects;
  const [activeTab, setActiveTab] = useState<string>(t.items[0].id);

  // Sync activeTab with items if language changes
  const selectedProject = t.items.find((p) => p.id === activeTab) || t.items[0];

  return (
    <section id="projects" className="py-20 relative bg-[#090f1b]/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1.5">
              <Layers className="w-4 h-4" />
              <span>{t.sectionTag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.title}
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-2xl">
              {t.subtitle}
            </p>
          </div>

          {/* Project Switcher Tabs */}
          <div className="flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
            {t.items.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setActiveTab(proj.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedProject.id === proj.id
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {idx === 0 ? <Car className="w-4 h-4" /> : <Home className="w-4 h-4" />}
                <span>{idx === 0 ? t.tabLabel1 : t.tabLabel2}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Project Full Detailed Showcase Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0e1626] to-[#0a101d] border border-slate-800 p-6 sm:p-9 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          {/* Top Banner Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800 mb-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {selectedProject.tag}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {selectedProject.period}
              </span>
            </div>
            <span className="text-xs font-mono text-cyan-400 font-medium">
              {selectedProject.category}
            </span>
          </div>

          {/* Title & Concise Summary */}
          <div className="mb-7">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              {selectedProject.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
              {selectedProject.summary}
            </p>
          </div>

          {/* Metric KPI Grid for This Project */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
            {selectedProject.metrics.map((metric, mIdx) => (
              <div
                key={mIdx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between"
              >
                <span className="text-xs font-mono text-slate-400 mb-1">
                  {metric.label}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-mono my-1">
                  {metric.value}
                </span>
                <span className="text-[11px] text-slate-400 leading-tight">
                  {metric.subtext}
                </span>
              </div>
            ))}
          </div>

          {/* Pipeline & Highlights Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
            
            {/* Highlights List */}
            <div className="lg:col-span-7 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {t.highlightsLabel}
              </h4>
              <div className="space-y-2.5">
                {selectedProject.keyHighlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-sm text-slate-200 leading-relaxed flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Architecture Flow */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-950/80 border border-slate-800 p-5 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 mb-3.5">
                <span className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <Cpu className="w-4 h-4" />
                  {t.pipelineLabel}
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Ready
                </span>
              </div>

              <div className="space-y-2 text-slate-300">
                {selectedProject.pipelineSteps.map((step, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-200">{step}</span>
                      <span className="text-[10px] text-emerald-400 font-mono">0{sIdx + 1}</span>
                    </div>
                    {sIdx < selectedProject.pipelineSteps.length - 1 && (
                      <div className="flex justify-center text-slate-600">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

          {/* Tech Stack */}
          <div className="pt-5 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">Tech:</span>
            {selectedProject.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
