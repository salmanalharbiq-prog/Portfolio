import React from 'react';
import { localizedData, Language } from '../data/portfolioData';
import { Award, CheckCircle2, Calendar } from 'lucide-react';

interface CertificationsSectionProps {
  lang: Language;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ lang }) => {
  const t = localizedData[lang].certifications;

  const getIssuerBadge = (issuer: string) => {
    switch (issuer) {
      case 'Google':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
      case 'DeepLearning.AI':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'University of Michigan':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'Microsoft':
        return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30';
      default:
        return 'text-slate-300 bg-slate-800 border-slate-700';
    }
  };

  return (
    <section id="certifications" className="py-20 relative bg-[#090f1b]/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1.5">
            <Award className="w-4 h-4" />
            <span>{t.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {t.items.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-b from-[#0e1626] to-[#0a101d] border border-slate-800/80 p-5 sm:p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 shadow-lg group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span
                    className={`px-2.5 py-1 rounded-md text-xs font-mono border font-semibold ${getIssuerBadge(
                      cert.issuer
                    )}`}
                  >
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight mb-1.5">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {cert.type}
                </span>
                <span className="text-[11px] text-emerald-400/90">{t.verifiedText}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
