import React from 'react';
import { localizedData, Language } from '../data/portfolioData';
import { Database, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

interface MetricsRibbonProps {
  lang: Language;
}

export const MetricsRibbon: React.FC<MetricsRibbonProps> = ({ lang }) => {
  const t = localizedData[lang].metrics;

  const getMetricIcon = (id: string) => {
    switch (id) {
      case '500k':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'latency':
        return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'pdpl':
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case 'accuracy':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      default:
        return <Database className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getGradientBorder = (color: string) => {
    switch (color) {
      case 'emerald':
        return 'border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/[0.03]';
      case 'cyan':
        return 'border-cyan-500/30 hover:border-cyan-500/60 bg-cyan-500/[0.03]';
      case 'indigo':
        return 'border-indigo-500/30 hover:border-indigo-500/60 bg-indigo-500/[0.03]';
      case 'amber':
        return 'border-amber-500/30 hover:border-amber-500/60 bg-amber-500/[0.03]';
      default:
        return 'border-slate-800 bg-slate-900/40';
    }
  };

  const getTextGradient = (color: string) => {
    switch (color) {
      case 'emerald':
        return 'from-emerald-300 via-teal-200 to-emerald-400';
      case 'cyan':
        return 'from-cyan-300 via-sky-200 to-cyan-400';
      case 'indigo':
        return 'from-indigo-300 via-purple-200 to-indigo-400';
      case 'amber':
        return 'from-amber-300 via-yellow-200 to-amber-400';
      default:
        return 'from-white to-slate-300';
    }
  };

  return (
    <section id="metrics" className="py-12 relative border-y border-slate-800/80 bg-[#0a101d]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
              {t.sectionTag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.title}
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {t.items.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-6 border backdrop-blur-md transition-all duration-300 group hover:-translate-y-1 ${getGradientBorder(
                item.color
              )}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  {getMetricIcon(item.id)}
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Verified
                </span>
              </div>

              {/* Big High-Impact Value */}
              <div className="mb-2">
                <span
                  className={`text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r ${getTextGradient(
                    item.color
                  )} bg-clip-text text-transparent font-mono`}
                >
                  {item.value}
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-100 mb-1.5 leading-snug">
                {item.label}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
