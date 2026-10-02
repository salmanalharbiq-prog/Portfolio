import React, { useState } from 'react';
import { localizedData, Language, personalContacts } from '../data/portfolioData';
import { Mail, Phone, Linkedin, MapPin, Copy, Check, ArrowUp, Shield, FileDown, Send } from 'lucide-react';

interface ContactFooterProps {
  lang: Language;
  onOpenResumeModal: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ lang, onOpenResumeModal }) => {
  const t = localizedData[lang].contact;
  const isRtl = lang === 'ar';
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-16 pb-12 border-t border-slate-800/80 bg-[#070b12]">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-60 bg-emerald-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Contact Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#0a101d] border border-slate-800 p-6 sm:p-10 mb-12 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono mb-3.5">
                <Shield className="w-3.5 h-3.5" />
                <span>{t.statusBadge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                {t.title}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal max-w-xl">
                {t.desc}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-emerald-500/20"
                >
                  <FileDown className="w-4 h-4" />
                  <span>{t.resumeBtn}</span>
                </button>
                <a
                  href={`mailto:${personalContacts.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium transition-all"
                >
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>{t.directEmailBtn}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Channels */}
            <div className="lg:col-span-6 space-y-3.5">
              
              {/* Email */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                    <Mail className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 block">{t.emailLabel}</span>
                    <a
                      href={`mailto:${personalContacts.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-emerald-300 transition-colors truncate block"
                    >
                      {personalContacts.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalContacts.email, 'email')}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 shrink-0 transition-all"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.copiedBtn}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.copyBtn}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 block">{t.phoneLabel}</span>
                    <a
                      href={`tel:${personalContacts.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {personalContacts.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalContacts.phone, 'phone')}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono flex items-center gap-1.5 shrink-0 transition-all"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.copiedBtn}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.copyBtn}</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <a
                  href={personalContacts.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 flex items-center gap-3 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 shrink-0">
                    <Linkedin className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 block">{t.linkedinLabel}</span>
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors truncate block">
                      salman-alharbi-data-scientist
                    </span>
                  </div>
                </a>

                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 shrink-0">
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">{t.locationLabel}</span>
                    <span className="text-xs font-semibold text-slate-200 block">
                      {t.locationValue}
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Salman Alharbi</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400">{t.footerRole}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">{t.footerTech}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              title="Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
