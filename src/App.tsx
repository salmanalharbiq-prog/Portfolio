/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Language } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsRibbon } from './components/MetricsRibbon';
import { DataDashboardWidget } from './components/DataDashboardWidget';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { FilterableProjectGallery } from './components/FilterableProjectGallery';
import { SkillsGovernanceMatrix } from './components/SkillsGovernanceMatrix';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactFooter } from './components/ContactFooter';
import { ResumeModal } from './components/ResumeModal';

// Motion variants for smooth staggered scroll reveals
const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1], // Custom smooth cubic-bezier
    },
  },
};

const heroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
    },
  },
};

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title =
      lang === 'ar'
        ? 'سلمان الحربي | أخصائي ذكاء القرارات وعلوم البيانات (Decision Intelligence)'
        : 'Salman Alharbi | Decision Intelligence Specialist & MLOps';
  }, [lang]);

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 relative transition-colors duration-300 font-sans overflow-x-hidden"
    >
      {/* Top Glass Navbar with Language Toggle */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Staggered Animated Content Stream */}
      <main>
        {/* 1. Hero Section with Staggered Intro */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <HeroSection
            lang={lang}
            onOpenResumeModal={() => setResumeModalOpen(true)}
          />
        </motion.div>

        {/* 2. Impact Benchmarks & KPIs */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <MetricsRibbon lang={lang} />
        </motion.section>

        {/* 3. Interactive Data Dashboard Widget (Chart.js + 3 Dynamic KPI Cards) */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-70px' }}
          variants={sectionVariants}
        >
          <DataDashboardWidget lang={lang} />
        </motion.section>

        {/* 4. Applied Experience & Academic Timeline */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-70px' }}
          variants={sectionVariants}
        >
          <ExperienceTimeline lang={lang} />
        </motion.section>

        {/* 5. Flagship AI & Decision Engines */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-70px' }}
          variants={sectionVariants}
        >
          <ProjectsShowcase lang={lang} />
        </motion.section>

        {/* 6. Filterable Project Gallery & STAR Case Studies Modal */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-70px' }}
          variants={sectionVariants}
        >
          <FilterableProjectGallery lang={lang} />
        </motion.section>

        {/* 7. Skills & Saudi PDPL/NDMO Governance Matrix */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-70px' }}
          variants={sectionVariants}
        >
          <SkillsGovernanceMatrix lang={lang} />
        </motion.section>

        {/* 8. Globally Verified Certifications */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-70px' }}
          variants={sectionVariants}
        >
          <CertificationsSection lang={lang} />
        </motion.section>
      </main>

      {/* 9. Strategic Contact Footer with Scroll Reveal */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={sectionVariants}
      >
        <ContactFooter
          lang={lang}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />
      </motion.div>

      {/* Official Executive Resume Modal */}
      <ResumeModal
        lang={lang}
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
