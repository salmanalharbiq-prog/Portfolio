export type Language = 'ar' | 'en';

export interface ExperienceItem {
  role: string;
  entity: string;
  badge: string;
  period: string;
  location: string;
  impactBullets: string[];
  tags: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  tag: string;
  summary: string;
  metrics: ProjectMetric[];
  pipelineSteps: string[];
  keyHighlights: string[];
  techStack: string[];
}

export interface SkillGroup {
  title: string;
  iconName: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  type: string;
}

export interface ContentByLang {
  nav: {
    overview: string;
    metrics: string;
    dashboard: string;
    experience: string;
    projects: string;
    gallery: string;
    skills: string;
    certifications: string;
    contact: string;
    resumeBtn: string;
    statusActive: string;
  };
  hero: {
    badge: string;
    name: string;
    subName: string;
    title: string;
    hook: string;
    entitiesLabel: string;
    ctaProjects: string;
    ctaContact: string;
    ctaResume: string;
    terminalTitle: string;
    terminalStatus: string;
    terminalTask: string;
    terminalSpeed: string;
    terminalPrivacy: string;
  };
  metrics: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      value: string;
      label: string;
      detail: string;
      color: 'emerald' | 'cyan' | 'indigo' | 'amber';
    }>;
  };
  experience: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: ExperienceItem[];
    educationTitle: string;
    degree: string;
    institution: string;
    period: string;
    courseworkLabel: string;
    coursework: string[];
  };
  projects: {
    sectionTag: string;
    title: string;
    subtitle: string;
    tabLabel1: string;
    tabLabel2: string;
    pipelineLabel: string;
    highlightsLabel: string;
    items: ProjectItem[];
  };
  skills: {
    sectionTag: string;
    title: string;
    subtitle: string;
    complianceTitle: string;
    complianceBadge: string;
    complianceDesc: string;
    verifiedBadge: string;
    groups: SkillGroup[];
  };
  certifications: {
    sectionTag: string;
    title: string;
    subtitle: string;
    verifiedText: string;
    items: CertificationItem[];
  };
  contact: {
    statusBadge: string;
    title: string;
    desc: string;
    resumeBtn: string;
    directEmailBtn: string;
    emailLabel: string;
    phoneLabel: string;
    linkedinLabel: string;
    locationLabel: string;
    locationValue: string;
    copyBtn: string;
    copiedBtn: string;
    footerRole: string;
    footerTech: string;
  };
  resumeModal: {
    title: string;
    printBtn: string;
    summaryHeading: string;
    experienceHeading: string;
    projectsHeading: string;
    educationHeading: string;
    certificationsHeading: string;
  };
}

export const localizedData: Record<Language, ContentByLang> = {
  ar: {
    nav: {
      overview: 'الرئيسية',
      metrics: 'الأرقام',
      dashboard: 'المؤشرات',
      experience: 'الخبرات',
      projects: 'المشاريع',
      gallery: 'معرض STAR',
      skills: 'المهارات والسيادة',
      certifications: 'الشهادات',
      contact: 'تواصل',
      resumeBtn: 'السيرة الذاتية (PDF)',
      statusActive: 'متاح للفرص والمشاريع الكبرى'
    },
    hero: {
      badge: 'ذكاء القرارات • نماذج محلية آمنة (Local LLMs) • MLOps',
      name: 'سلمان الحربي',
      subName: 'Salman Alharbi',
      title: 'أخصائي ذكاء القرارات وعلوم البيانات (Decision Intelligence Specialist)',
      hook: 'أحوّل البيانات الضخمة لقرارات استراتيجية فورية عبر نماذج ذكاء اصطناعي محلية تضمن سيادة وخصوصية البيانات 100% وفق معايير PDPL و NDMO.',
      entitiesLabel: 'خبرات نوعية مع جهات حكومية ومؤسسية رائدة:',
      ctaProjects: 'استكشف المشاريع والأرقام',
      ctaContact: 'تواصل معي مباشرة',
      ctaResume: 'استعراض السيرة الذاتية',
      terminalTitle: 'sera_regulatory_core.py',
      terminalStatus: 'يعمل بكفاءة',
      terminalTask: 'معالجة متراكم 4 سنوات (500K+ سجل) في 15 دقيقة',
      terminalSpeed: 'دورة اتخاذ القرار: أقل من 5 ثوانٍ',
      terminalPrivacy: 'خصوصية تامة: تشغيل محلي بدون تسريب'
    },
    metrics: {
      sectionTag: '// إنجازات رقمية مثبتة',
      title: 'أرقام قياسية تصنع الفارق',
      subtitle: 'مؤشرات أداء ملموسة من مشاريع حكومية ومؤسسية حقيقية',
      items: [
        {
          id: '500k',
          value: '500K+',
          label: 'سجل عولجت في 15 دقيقة',
          detail: 'أتمتة متراكم 4 سنوات لهيئة تنظيم الكهرباء وتوسيعها لـ 4 جهات',
          color: 'emerald'
        },
        {
          id: 'latency',
          value: '< 5 ثوانٍ',
          label: 'سرعة اتخاذ القرار',
          detail: 'تقليص زمن التحليل من ساعات إلى ثوانٍ عبر نماذج LLM محلية',
          color: 'cyan'
        },
        {
          id: 'pdpl',
          value: '100%',
          label: 'سيادة وامتثال PDPL',
          detail: 'التزام تام بمعايير مكتب NDMO وحوكمة البيانات داخل المملكة',
          color: 'indigo'
        },
        {
          id: 'accuracy',
          value: '97.2%',
          label: 'دقة التنبؤ الاستثماري',
          detail: 'محرك تقييم العقارات بمعامل R² = 0.919 ومقارنة 7 خوارزميات',
          color: 'amber'
        }
      ]
    },
    experience: {
      sectionTag: '// المسار المهني',
      title: 'خبرات قيادية وتنفيذية نوعية',
      subtitle: 'أثر ملموس في أتمتة الأنظمة، دعم القرار، وتأهيل الكفاءات الوطنية',
      items: [
        {
          role: 'قائد ومدرب تقني مسار الذكاء الاصطناعي',
          entity: 'أكاديمية طويق (بالشراكة مع وزارة التعليم)',
          badge: 'قيادة وتدريب تقني',
          period: '07/2026 – 08/2026',
          location: 'جدة، المملكة العربية السعودية',
          impactBullets: [
            'قيادة مسارات الذكاء الاصطناعي التوليدي (Prompt Engineering) والأمن السيبراني لطلبة المدارس.',
            'توجيه بناء نماذج أولية في إنترنت الأشياء (Arduino) وبيئات الواقع الافتراضي (VR).',
            'إدارة المعرض التقني الختامي وتدريب المتحدثين وحصد إشادات القيادات التنفيذية.'
          ],
          tags: ['GenAI', 'Prompt Engineering', 'IoT & Sensors', 'VR Prototypes', 'Leadership']
        },
        {
          role: 'أخصائي علوم بيانات وذكاء قرارات (تمهير)',
          entity: 'هيئة تنظيم الكهرباء (عبر مجموعة الخطوات العالمية)',
          badge: 'حوكمة وذكاء اصطناعي سيادي',
          period: '12/2025 – 06/2026',
          location: 'الرياض، المملكة العربية السعودية',
          impactBullets: [
            'ابتكار مسار أتمتة حصد متراكم 4 سنوات (500K+ سجل) في 15 دقيقة فقط، والتوسع لـ 4 جهات أخرى.',
            'تسريع دورة اتخاذ القرار من ساعات إلى أقل من 5 ثوانٍ بنماذج لغوية محلية (Local LLMs) لضمان الخصوصية 100%.',
            'أتمتة عقبات التشغيل وبناء لوحات بيانات تنفيذية لدعم الرقابة التنظيمية وتحليل المشاعر عبر 5+ منصات.'
          ],
          tags: ['Local LLMs', 'PDPL & NDMO', '500K Ingestion', 'Executive Insights', 'DuckDB']
        },
        {
          role: 'مهندس بيانات متدرب',
          entity: 'المركز الوطني للأرصاد (NCM)',
          badge: 'هندسة خطوط البيانات',
          period: '06/2024 – 08/2024',
          location: 'جدة، المملكة العربية السعودية',
          impactBullets: [
            'أتمتة معالجة تقارير الطقس الساعية عبر بايثون وإلغاء الإدخال اليدوي بالكامل.',
            'تطوير نظام لتصنيف رسائل الطيران (ICAO) عبر تحليل السلاسل الزمنية.',
            'تحسين استعلامات SQL عبر DuckDB، وتطبيق حاويات Docker ومنظومة Git لضمان استقرار البيئة.'
          ],
          tags: ['Python / Regex', 'DuckDB', 'ICAO Data', 'Docker', 'Time-Series']
        }
      ],
      educationTitle: 'المؤهل الأكاديمي',
      degree: 'بكالوريوس علوم البيانات (Bachelor of Data Science)',
      institution: 'جامعة جدة — كلية علوم وهندسة الحاسب',
      period: '08/2020 – 01/2025',
      courseworkLabel: 'أبرز المواد التخصصية:',
      coursework: ['تعلم الآلة', 'استخراج البيانات', 'تحليلات البيانات الضخمة', 'معالجة اللغات الطبيعية NLP', 'الحوسبة السحابية']
    },
    projects: {
      sectionTag: '// مشاريع استراتيجية',
      title: 'حلول ذكية من الفكرة إلى الإنتاج',
      subtitle: 'معمارية متكاملة تجمع دقة النماذج وعائد الاستثمار المباشر',
      tabLabel1: 'نظام التأمين الآلي (CV)',
      tabLabel2: 'محرك العقار الاستثماري',
      pipelineLabel: 'مسار التنفيذ الهندسي (Pipeline)',
      highlightsLabel: 'أبرز نقاط الإنجاز والابتكار:',
      items: [
        {
          id: 'insurance-yolo',
          title: 'نظام دعم قرارات التأمين الآلي لحوادث المركبات',
          category: 'رؤية حاسوبية ونظم ذكاء القرارات',
          period: '10/2024 – 01/2025',
          tag: 'مشروع التخرج المتميز | Graduation Project',
          summary: 'منصة ذكية متكاملة ترصد أضرار المركبات تلقائياً، وتصنف شدتها، وتحدد القطع المتضررة، ثم تحسب تكلفة الإصلاح وتصدر تقرير PDF تنفيذي فوري.',
          metrics: [
            { label: 'دقة اكتشاف الضرر', value: '81%', subtext: 'YOLOv8 Detection' },
            { label: 'دقة تحديد الشدة', value: '93%', subtext: 'EfficientNetB0' },
            { label: 'التعرف على القطع', value: '100%', subtext: 'تغطية 21 جزءاً بالمركبة' },
            { label: 'حجم مجموعة البيانات', value: '23,000+', subtext: 'صورة معالجة ومفلترة' }
          ],
          pipelineSteps: [
            'معالجة 23k+ صورة حادث عبر OpenCV',
            'تحديد مواقع الضرر بنموذج YOLOv8',
            'تصنيف شدة الضرر بنموذج EfficientNetB0',
            'مطابقة 21 جزءاً بدقة 100%',
            'توليد تقرير تكاليف PDF عبر Streamlit'
          ],
          keyHighlights: [
            'معالجة وتوسيم أكثر من 23 ألف صورة حوادث لإنشاء مجموعة بيانات عالية الجودة.',
            'دمج نموذجين (YOLOv8 + EfficientNetB0) لتحقيق دقة تامة في تحديد 21 قطعة غيار.',
            'بناء محرك تسعير ذكي يربط مخرجات النماذج بكتالوجات التكاليف المعتمدة.',
            'نشر تطبيق تفاعلي بـ Streamlit يصدر تقارير فورية معتمدة لشركات التأمين.'
          ],
          techStack: ['Python', 'YOLOv8', 'EfficientNetB0', 'OpenCV', 'Streamlit', 'Pandas', 'PyTorch']
        },
        {
          id: 'real-estate-ai',
          title: 'محرك تقييم الاستثمار العقاري السعودي والتنبؤ بالأسعار',
          category: 'التحليلات التنبؤية ونمذجة البيانات',
          period: '10/2023 – 11/2023',
          tag: 'محرك تنبؤي متقدم | Predictive Engine',
          summary: 'محرك تنبؤي عالي الدقة يحلل الصفقات العقارية بالمملكة، ويتنبأ بالأسعار المستقبلية لدعم قرارات المستثمرين والصناديق العقارية بدقة 97.2%.',
          metrics: [
            { label: 'دقة التنبؤ بالأسعار', value: '97.2%', subtext: 'RandomForest Regressor' },
            { label: 'معامل التفسير', value: '0.919', subtext: 'R-squared (R²)' },
            { label: 'النماذج المقارنة', value: '7 نماذج', subtext: 'Benchmarking Matrix' },
            { label: 'هندسة الخصائص', value: 'مؤتمتة', subtext: 'Pipeline End-to-End' }
          ],
          pipelineSteps: [
            'سحب وتنقية بيانات الصفقات العقارية',
            'هندسة آلية للمتغيرات الجغرافية والمالية',
            'مقارنة واختبار 7 خوارزميات ML',
            'ضبط النموذج الأفضل (RandomForest)',
            'توليد مؤشرات السوق للجان الاستثمار'
          ],
          keyHighlights: [
            'تحقيق دقة 97.2% ومعامل R² يبلغ 0.919 باستخدام نموذج غابات عشوائية مضبوط بدقة.',
            'بناء مسار تدريب وتنبؤ مؤتمت بالكامل يشمل كشف القيم الشاذة وترميز المواقع الجغرافية.',
            'مقارنة معيارية بين 7 نماذج لاختيار التوازن الأمثل بين سرعة الاستجابة وأقل هامش خطأ.',
            'تزويد لجان الاستثمار بمؤشرات استباقية تسهم في تعظيم العائد الاستثماري (ROI).'
          ],
          techStack: ['Python', 'Scikit-Learn', 'RandomForest', 'Feature Engineering', 'Data Analytics']
        }
      ]
    },
    skills: {
      sectionTag: '// القدرات والحوكمة',
      title: 'ترسانة تقنية محصنة بالسيادة',
      subtitle: 'جمع فريد بين عمق الرياضيات، بنية MLOps التحتية، والامتثال الصارم للأنظمة',
      complianceTitle: 'الالتزام الكامل بنظام حماية البيانات الشخصية ومكتب NDMO',
      complianceBadge: '100% سيادة بيانات داخل المملكة',
      complianceDesc: 'تشغيل آمن للنماذج اللغوية محلياً (On-Premise) دون أي تسريب لبيانات المشتركين أو السجلات الحساسة خارج البيئة المعتمدة.',
      verifiedBadge: 'معايير مؤسسية معتمدة',
      groups: [
        {
          title: 'الذكاء الاصطناعي والرؤية واللغات',
          iconName: 'BrainCircuit',
          skills: ['Python', 'R', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision (YOLOv8)', 'Time-Series', 'Predictive Modeling']
        },
        {
          title: 'هندسة البيانات وخطوط MLOps',
          iconName: 'Workflow',
          skills: ['SQL Optimization', 'DuckDB (OLAP)', 'Docker Containers', 'Git & Workflows', 'ETL Pipelines', 'Streamlit', 'Power BI', 'Tableau', 'SAP']
        },
        {
          title: 'السيادة واللوائح السعودية',
          iconName: 'ShieldCheck',
          skills: ['Saudi PDPL', 'NDMO Frameworks', 'Local LLMs', '100% In-Kingdom Residency', 'Data Ethics', 'Regulatory Compliance']
        },
        {
          title: 'ذكاء القرارات والاستراتيجية',
          iconName: 'TrendingUp',
          skills: ['ROI Analysis', 'Executive Data Storytelling', 'Market Surveillance', 'Decision Latency Reduction', 'Tech Mentorship']
        }
      ]
    },
    certifications: {
      sectionTag: '// الشهادات المعتمدة',
      title: 'اعتمادات مهنية من كبرى المؤسسات',
      subtitle: 'أسس رياضية وتحليلية معتمدة عالمياً لدعم القرارات التقنية الحساسة',
      verifiedText: 'معتمدة ومحققة',
      items: [
        { title: 'Google Data Analytics Specialization', issuer: 'Google', date: '04/2023', type: 'تحليلات البيانات المتقدمة' },
        { title: 'Calculus for Machine Learning and Data Science', issuer: 'DeepLearning.AI', date: '10/2023', type: 'رياضيات الذكاء الاصطناعي' },
        { title: 'Linear Algebra for Machine Learning and Data Science', issuer: 'DeepLearning.AI', date: '11/2023', type: 'جبر خطي متقدم' },
        { title: 'Python for Everybody Specialization', issuer: 'University of Michigan', date: '05/2025', type: 'برمجة احترافية' },
        { title: 'Microsoft 365 Fundamentals', issuer: 'Microsoft', date: '07/2025', type: 'سحابة مؤسسية' }
      ]
    },
    contact: {
      statusBadge: 'جاهز لقيادة مشاريع الذكاء والبيانات الكبرى',
      title: 'لنصنع أثراً حقيقياً في منظومتك',
      desc: 'سواء كنت بحاجة لأتمتة خطوط بيانات ضخمة، نشر نماذج ذكاء اصطناعي سيادية، أو تسريع اتخاذ القرار في جهتك — أنا جاهز للتعاون المباشر.',
      resumeBtn: 'استعراض وتحميل السيرة الذاتية (PDF)',
      directEmailBtn: 'إرسال بريد فوري',
      emailLabel: 'البريد الرسمي',
      phoneLabel: 'الهاتف المباشر',
      linkedinLabel: 'ملف LinkedIn',
      locationLabel: 'المقر',
      locationValue: 'الرياض، المملكة العربية السعودية',
      copyBtn: 'نسخ',
      copiedBtn: 'تم النسخ!',
      footerRole: 'أخصائي ذكاء القرارات وعلوم البيانات',
      footerTech: 'مبني بأحدث تقنيات React 19 • Tailwind CSS • Motion'
    },
    resumeModal: {
      title: 'السيرة الذاتية الرسمية التنفيذية | سلمان الحربي',
      printBtn: 'طباعة / حفظ كملف PDF',
      summaryHeading: '// الملخص المهني',
      experienceHeading: '// الخبرات العملية',
      projectsHeading: '// المشاريع الاستراتيجية',
      educationHeading: '// التعليم',
      certificationsHeading: '// الشهادات المعتمدة'
    }
  },
  en: {
    nav: {
      overview: 'Overview',
      metrics: 'Impact KPIs',
      dashboard: 'BI Dashboard',
      experience: 'Experience',
      projects: 'Projects',
      gallery: 'STAR Gallery',
      skills: 'Skills & PDPL',
      certifications: 'Credentials',
      contact: 'Contact',
      resumeBtn: 'Resume (PDF)',
      statusActive: 'Available for Strategic Roles'
    },
    hero: {
      badge: 'Decision Intelligence • Privacy-First Local LLMs • MLOps',
      name: 'Salman Alharbi',
      subName: 'سلمان الحربي',
      title: 'Decision Intelligence Specialist | Data Science & MLOps',
      hook: 'Turning high-velocity enterprise data into sub-5-second strategic decisions using privacy-first Local LLMs with 100% Saudi PDPL and NDMO data sovereignty.',
      entitiesLabel: 'Proven track record across premier Saudi entities:',
      ctaProjects: 'Explore Flagship Projects',
      ctaContact: 'Direct Contact',
      ctaResume: 'View Executive Resume',
      terminalTitle: 'sera_regulatory_core.py',
      terminalStatus: 'LIVE & SCALED',
      terminalTask: 'Harvest 4-year backlog (500K+ records) in 15 mins',
      terminalSpeed: 'Decision cycle: < 5.0 seconds',
      terminalPrivacy: '100% In-Kingdom Data Sovereignty'
    },
    metrics: {
      sectionTag: '// High-Impact Benchmarks',
      title: 'Numbers That Drive Executive Impact',
      subtitle: 'Quantitative milestones proven in applied government and regulatory operations',
      items: [
        {
          id: '500k',
          value: '500K+',
          label: 'Records Ingested in 15 Mins',
          detail: 'Automated 4-year backlog for primary regulator SERA, scaled to 4 clients',
          color: 'emerald'
        },
        {
          id: 'latency',
          value: '< 5s',
          label: 'Decision Velocity',
          detail: 'Compressed awareness-to-analysis from hours to seconds via Local LLMs',
          color: 'cyan'
        },
        {
          id: 'pdpl',
          value: '100%',
          label: 'Data Sovereignty (PDPL)',
          detail: 'Full compliance with NDMO frameworks with zero external data leaks',
          color: 'indigo'
        },
        {
          id: 'accuracy',
          value: '97.2%',
          label: 'Predictive Valuation Accuracy',
          detail: 'Achieved R² = 0.919 bench-tested across 7 machine learning regressors',
          color: 'amber'
        }
      ]
    },
    experience: {
      sectionTag: '// Career Track',
      title: 'Applied Leadership & Enterprise Delivery',
      subtitle: 'Proven operational delivery, regulatory AI deployments, and national talent enablement',
      items: [
        {
          role: 'Lead Technical Instructor | AI Track',
          entity: 'Tuwaiq Academy (in partnership with MoE)',
          badge: 'Technical Leadership',
          period: '07/2026 – 08/2026',
          location: 'Jeddah, Saudi Arabia',
          impactBullets: [
            'Led deep-tech cohorts instructing university-grade Generative AI and Cybersecurity.',
            'Mentored student teams building IoT sensor systems and interactive VR environments.',
            'Directed the flagship tech exhibition and earned executive leadership commendations.'
          ],
          tags: ['GenAI', 'Prompt Engineering', 'IoT & Sensors', 'VR Systems', 'Leadership']
        },
        {
          role: 'Data Science Specialist (Tamheer)',
          entity: 'Saudi Electricity Regulatory Authority (via Universal Steps Group)',
          badge: 'Regulatory Oversight & AI',
          period: '12/2025 – 06/2026',
          location: 'Riyadh, Saudi Arabia',
          impactBullets: [
            'Ingested 4-year data backlog (500K+ records) in 15 mins for SERA; scaled framework to 4 clients.',
            'Compressed decision cycles from hours to < 5 seconds using Local LLMs for 100% PDPL data residency.',
            'Automated operational bottlenecks and transformed multi-source sentiment data into executive insights.'
          ],
          tags: ['Local LLMs', 'PDPL & NDMO', '500K Ingestion', 'Executive Insights', 'DuckDB']
        },
        {
          role: 'Data Engineer Intern',
          entity: 'National Center of Meteorology (NCM)',
          badge: 'Pipelines & Infrastructure',
          period: '06/2024 – 08/2024',
          location: 'Jeddah, Saudi Arabia',
          impactBullets: [
            'Automated hourly weather report processing using Python (Pandas/Regex), eliminating manual entry.',
            'Built ICAO message classification system for flight arrivals via time-series analysis.',
            'Optimized DuckDB SQL queries and containerized workflows with Docker and Git.'
          ],
          tags: ['Python / Regex', 'DuckDB', 'ICAO Data', 'Docker', 'Time-Series']
        }
      ],
      educationTitle: 'Academic Foundation',
      degree: 'Bachelor of Data Science',
      institution: 'University of Jeddah — College of Computer Science & Engineering',
      period: '08/2020 – 01/2025',
      courseworkLabel: 'Core Coursework:',
      coursework: ['Machine Learning', 'Data Mining', 'Big Data Analytics', 'NLP', 'Cloud Computing']
    },
    projects: {
      sectionTag: '// Flagship Architectures',
      title: 'Production-Grade AI & Decision Engines',
      subtitle: 'End-to-end architectures balancing precision, inference speed, and measurable business ROI',
      tabLabel1: 'Auto Insurance AI (CV)',
      tabLabel2: 'Real Estate Valuation',
      pipelineLabel: 'Execution Pipeline Flow',
      highlightsLabel: 'Key Engineering Highlights:',
      items: [
        {
          id: 'insurance-yolo',
          title: 'Automated Insurance Decision Support System',
          category: 'Computer Vision & Decision Intelligence',
          period: '10/2024 – 01/2025',
          tag: 'Graduation Flagship Project',
          summary: 'End-to-end multi-stage deep learning platform automating vehicular damage detection, severity classification, and instant audit-ready PDF claims valuation.',
          metrics: [
            { label: 'Damage Detection', value: '81%', subtext: 'YOLOv8 Localization' },
            { label: 'Severity Accuracy', value: '93%', subtext: 'EfficientNetB0' },
            { label: 'Part Identification', value: '100%', subtext: 'Across 21 Vehicle Parts' },
            { label: 'Dataset Scale', value: '23,000+', subtext: 'Curated Image Library' }
          ],
          pipelineSteps: [
            '23,000+ Raw Collision Images (OpenCV)',
            'YOLOv8 Spatial Bounding-Box Detection',
            'EfficientNetB0 Severity Classification',
            '100% Match Across 21 Vehicle Parts',
            'Streamlit Automated PDF Valuation Report'
          ],
          keyHighlights: [
            'Curated and preprocessed 23,000+ vehicle damage images using OpenCV and automated Pandas workflows.',
            'Coupled YOLOv8 localization with EfficientNetB0 to achieve 100% part identification accuracy.',
            'Engineered a rule-based cost estimation engine linking model outputs to official pricing tables.',
            'Deployed Streamlit web app generating audit-ready PDF claims reports on the fly.'
          ],
          techStack: ['Python', 'YOLOv8', 'EfficientNetB0', 'OpenCV', 'Streamlit', 'Pandas', 'PyTorch']
        },
        {
          id: 'real-estate-ai',
          title: 'Saudi Real Estate Investment Valuation Engine',
          category: 'Predictive Analytics & Market Intelligence',
          period: '10/2023 – 11/2023',
          tag: 'Predictive Valuation Engine',
          summary: 'High-confidence predictive ML pipeline forecasting property transaction values across metropolitan Saudi markets to guide real estate investment funds.',
          metrics: [
            { label: 'Valuation Precision', value: '97.2%', subtext: 'RandomForest Regressor' },
            { label: 'Variance Explained', value: '0.919', subtext: 'R-squared (R²)' },
            { label: 'Models Evaluated', value: '7 Models', subtext: 'Benchmarking Matrix' },
            { label: 'Feature Pipeline', value: 'Automated', subtext: 'End-to-End Scalable' }
          ],
          pipelineSteps: [
            'Saudi Transaction Data Ingestion',
            'Geospatial & Structural Feature Engineering',
            '7-Model Cross-Validation Matrix',
            'Hyperparameter-Tuned Random Forest',
            'Executive Investment Committee Dashboards'
          ],
          keyHighlights: [
            'Predicted property prices with 97.2% precision (R² = 0.919) using an optimized Random Forest Regressor.',
            'Engineered automated geospatial and structural feature extraction pipelines.',
            'Rigorously benchmarked 7 ML regressors to optimize the trade-off between inference speed and lowest MAE.',
            'Provided market surveillance indicators empowering investment committees to maximize ROI.'
          ],
          techStack: ['Python', 'Scikit-Learn', 'RandomForest', 'Feature Engineering', 'Data Analytics']
        }
      ]
    },
    skills: {
      sectionTag: '// Technical Matrix',
      title: 'Deep-Tech Stack & Sovereign Governance',
      subtitle: 'Rigorous mathematical foundations combined with MLOps infrastructure and strict regulatory compliance',
      complianceTitle: 'Strict Adherence to Saudi PDPL & NDMO Mandates',
      complianceBadge: '100% In-Kingdom Data Residency',
      complianceDesc: 'Zero external cloud model leaks. All Large Language Models and inference pipelines operate on-premise or within sanctioned Saudi cloud zones.',
      verifiedBadge: 'Verified Enterprise Standard',
      groups: [
        {
          title: 'Core AI, Vision & Language',
          iconName: 'BrainCircuit',
          skills: ['Python', 'R', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision (YOLOv8)', 'Time-Series', 'Predictive Modeling']
        },
        {
          title: 'MLOps, Data Engineering & Pipelines',
          iconName: 'Workflow',
          skills: ['SQL Optimization', 'DuckDB (OLAP)', 'Docker Containers', 'Git & Workflows', 'ETL Pipelines', 'Streamlit', 'Power BI', 'Tableau', 'SAP']
        },
        {
          title: 'Data Governance & Saudi Regulations',
          iconName: 'ShieldCheck',
          skills: ['Saudi PDPL', 'NDMO Frameworks', 'Local LLMs', '100% In-Kingdom Residency', 'Data Ethics', 'Regulatory Compliance']
        },
        {
          title: 'Decision Intelligence & Strategy',
          iconName: 'TrendingUp',
          skills: ['ROI Analysis', 'Executive Data Storytelling', 'Market Surveillance', 'Decision Latency Reduction', 'Tech Mentorship']
        }
      ]
    },
    certifications: {
      sectionTag: '// Credentials',
      title: 'Globally Certified Technical Foundations',
      subtitle: 'Specialized machine learning mathematics and cloud architectures certified by global leaders',
      verifiedText: 'Verified Credential',
      items: [
        { title: 'Google Data Analytics Specialization', issuer: 'Google', date: '04/2023', type: 'Advanced Analytics' },
        { title: 'Calculus for Machine Learning and Data Science', issuer: 'DeepLearning.AI', date: '10/2023', type: 'Mathematics for AI' },
        { title: 'Linear Algebra for Machine Learning and Data Science', issuer: 'DeepLearning.AI', date: '11/2023', type: 'Advanced Linear Algebra' },
        { title: 'Python for Everybody Specialization', issuer: 'University of Michigan', date: '05/2025', type: 'Production Programming' },
        { title: 'Microsoft 365 Fundamentals', issuer: 'Microsoft', date: '07/2025', type: 'Enterprise Cloud' }
      ]
    },
    contact: {
      statusBadge: 'Open for Strategic & Enterprise Roles',
      title: "Let's Drive Measurable Impact",
      desc: 'Whether building sovereign data pipelines, deploying on-premise AI models, or automating high-stakes executive decisions — let us connect.',
      resumeBtn: 'View & Download Resume (PDF)',
      directEmailBtn: 'Send Direct Email',
      emailLabel: 'Official Email',
      phoneLabel: 'Direct Phone',
      linkedinLabel: 'LinkedIn Profile',
      locationLabel: 'Base Location',
      locationValue: 'Riyadh, Saudi Arabia',
      copyBtn: 'Copy',
      copiedBtn: 'Copied!',
      footerRole: 'Decision Intelligence Specialist | Data Science & MLOps',
      footerTech: 'Engineered with React 19 • Tailwind CSS • Motion'
    },
    resumeModal: {
      title: 'Official Executive Resume | Salman Alharbi',
      printBtn: 'Print / Save as PDF',
      summaryHeading: '// Professional Summary',
      experienceHeading: '// Professional Experience',
      projectsHeading: '// Strategic AI Projects',
      educationHeading: '// Education',
      certificationsHeading: '// Certifications'
    }
  }
};

export const personalContacts = {
  phone: '+966 590197730',
  email: 'salman.alharbi.q@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/salman-alharbi-data-scientist',
  locationAr: 'الرياض، المملكة العربية السعودية',
  locationEn: 'Riyadh, Saudi Arabia'
};
