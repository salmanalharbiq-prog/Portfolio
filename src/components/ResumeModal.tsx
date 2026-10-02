import React from 'react';
import { localizedData, Language, personalContacts } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const t = localizedData[lang];
  const isRtl = lang === 'ar';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className={`relative w-full max-w-4xl bg-[#0c1322] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col ${
        isRtl ? 'text-right' : 'text-left'
      }`} dir={isRtl ? 'rtl' : 'ltr'}>
        
        {/* Top Action Bar */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-sm font-semibold text-slate-200 font-mono">
              {t.resumeModal.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-medium transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.resumeModal.printBtn}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-7 text-slate-200 print:text-black print:bg-white">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {t.hero.name}
            </h1>
            <p className="text-base font-semibold text-emerald-400 font-mono mt-1">
              {t.hero.title}
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {lang === 'ar' ? personalContacts.locationAr : personalContacts.locationEn}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                {personalContacts.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                {personalContacts.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                linkedin.com/in/salman-alharbi-data-scientist
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 font-bold">
              {t.resumeModal.summaryHeading}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {t.hero.hook}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3.5 font-bold">
              {t.resumeModal.experienceHeading}
            </h2>
            <div className="space-y-4">
              {t.experience.items.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-white">
                      {exp.role} <span className="font-normal text-emerald-300">— {exp.entity}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 pl-4 pr-4 text-xs text-slate-300 list-disc">
                    {exp.impactBullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3.5 font-bold">
              {t.resumeModal.projectsHeading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {t.projects.items.map((proj, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white text-sm">{proj.title}</span>
                    <span className="text-emerald-400 font-mono">{proj.period}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{proj.summary}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.metrics.map((m, mIdx) => (
                      <span key={mIdx} className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[11px]">
                        {m.label}: {m.value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 font-bold">
                {t.resumeModal.educationHeading}
              </h2>
              <div className="text-xs space-y-1">
                <p className="font-bold text-white">{t.experience.degree}</p>
                <p className="text-slate-400">{t.experience.institution}</p>
                <p className="text-slate-500 font-mono">{t.experience.period}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 font-bold">
                {t.resumeModal.certificationsHeading}
              </h2>
              <ul className="text-xs space-y-1 text-slate-300">
                {t.certifications.items.map((cert, cIdx) => (
                  <li key={cIdx} className="flex justify-between items-center">
                    <span>{cert.title} ({cert.issuer})</span>
                    <span className="font-mono text-slate-400">{cert.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
