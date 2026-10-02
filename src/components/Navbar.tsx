import React, { useState, useEffect } from 'react';
import { localizedData, Language } from '../data/portfolioData';
import { FileDown, Menu, X, Shield, Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenResumeModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = localizedData[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.overview, href: '#hero' },
    { label: t.metrics, href: '#metrics' },
    { label: t.experience, href: '#experience' },
    { label: t.projects, href: '#projects' },
    { label: t.skills, href: '#skills' },
    { label: t.certifications, href: '#certifications' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-indigo-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-mono font-bold text-lg shadow-sm group-hover:border-emerald-400 transition-colors">
              SA
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-100 tracking-tight flex items-center gap-2 text-sm sm:text-base">
                {lang === 'ar' ? 'سلمان الحربي' : 'Salman Alharbi'}
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400/90 font-medium">
                {lang === 'ar' ? 'ذكاء القرارات • MLOps' : 'Decision Intelligence'}
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher Pill */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-xs font-mono font-medium text-slate-200 hover:text-white transition-all shadow-sm"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل للغة العربية'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400 text-emerald-300 hover:text-emerald-200 text-xs font-medium transition-all shadow-sm"
            >
              <FileDown className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">{t.resumeBtn}</span>
              <span className="sm:hidden">CV</span>
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-800 bg-[#0e1626]/95 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-slate-800">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800/80 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Shield className="w-3.5 h-3.5" />
                  Saudi PDPL &amp; NDMO
                </span>
                <button
                  onClick={() => {
                    onToggleLang();
                    setMobileMenuOpen(false);
                  }}
                  className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 font-mono"
                >
                  {lang === 'ar' ? 'English' : 'عربي'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
