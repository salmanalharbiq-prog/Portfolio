import React from 'react';
import { localizedData, Language } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Building, GraduationCap, ChevronRight, ChevronLeft } from 'lucide-react';

interface ExperienceTimelineProps {
  lang: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  const t = localizedData[lang].experience;
  const isRtl = lang === 'ar';

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1.5">
            <Briefcase className="w-4 h-4" />
            <span>{t.sectionTag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-2 text-slate-400 text-sm max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline Flow */}
        <div className={`relative border-slate-800 space-y-10 ${
          isRtl ? 'border-r mr-4 md:mr-8 pr-6 md:pr-10' : 'border-l ml-4 md:ml-8 pl-6 md:pl-10'
        }`}>
          {t.items.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className={`absolute top-2 w-6 h-6 rounded-full bg-[#080c14] border-2 border-emerald-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-200 ${
                isRtl ? '-right-[31px] md:-right-[47px]' : '-left-[31px] md:-left-[47px]'
              }`}>
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl bg-[#0f172a]/70 border border-slate-800/80 p-6 md:p-7 backdrop-blur-md hover:border-slate-700 hover:bg-[#121c33]/80 transition-all duration-300 shadow-xl">
                
                {/* Header Info */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3.5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {exp.badge}
                      </span>
                    </div>
                    <div className="text-emerald-400 font-medium text-sm flex items-center gap-2">
                      <Building className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{exp.entity}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets List */}
                <div className="space-y-2 mb-5">
                  {exp.impactBullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                      {isRtl ? (
                        <ChevronLeft className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      )}
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="pt-3.5 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">Stack:</span>
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-900/90 text-cyan-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

          {/* Academic Foundation Node */}
          <div className="relative group">
            <div className={`absolute top-2 w-6 h-6 rounded-full bg-[#080c14] border-2 border-indigo-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-200 ${
              isRtl ? '-right-[31px] md:-right-[47px]' : '-left-[31px] md:-left-[47px]'
            }`}>
              <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
            </div>

            <div className="rounded-2xl bg-[#0f172a]/70 border border-indigo-500/20 p-6 md:p-7 backdrop-blur-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-5 h-5 text-indigo-400" />
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {t.degree}
                    </h3>
                  </div>
                  <p className="text-sm text-indigo-300 font-medium">
                    {t.institution}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {t.period}
                </span>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400">{t.courseworkLabel}</span>
                {t.coursework.map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-950/40 text-indigo-200 border border-indigo-800/40"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
