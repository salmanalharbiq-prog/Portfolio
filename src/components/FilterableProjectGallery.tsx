import React, { useState } from 'react';
import { Language } from '../data/portfolioData';
import {
  Layers,
  CheckCircle2,
  Cpu,
  Eye,
  FileText,
  Filter,
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Activity,
  Zap,
  ShieldCheck,
  TrendingUp,
  Database
} from 'lucide-react';

export interface StarMetricChip {
  label: string;
  value: string;
  color: 'emerald' | 'cyan' | 'indigo' | 'amber';
}

export interface StarCaseStudy {
  situation: string;
  task: string;
  action: string;
  result: string;
}

export interface GalleryProject {
  id: string;
  title: string;
  titleAr: string;
  category: 'Machine Learning' | 'BI Dashboards' | 'NLP' | 'Computer Vision';
  period: string;
  summary: string;
  summaryAr: string;
  techStack: string[];
  metricChips: StarMetricChip[];
  starEn: StarCaseStudy;
  starAr: StarCaseStudy;
}

const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'insurance-yolo',
    title: 'Automated Vehicular Insurance Decision Support',
    titleAr: 'نظام دعم قرارات التأمين الآلي لتقدير حوادث المركبات',
    category: 'Computer Vision',
    period: '10/2024 – 01/2025',
    summary: 'Automating multi-stage vehicular damage localization and cost estimation via YOLOv8 and EfficientNetB0.',
    summaryAr: 'أتمتة الفحص البصري لحوادث السيارات وتقدير تكاليف الإصلاح عبر YOLOv8 و EfficientNetB0.',
    techStack: ['Python', 'YOLOv8', 'EfficientNetB0', 'OpenCV', 'Streamlit', 'Pandas'],
    metricChips: [
      { label: 'Damage Detection', value: '81% Precision', color: 'emerald' },
      { label: 'Severity Accuracy', value: '93% Conf', color: 'cyan' },
      { label: 'Part Identification', value: '100% (21 Parts)', color: 'indigo' },
      { label: 'Dataset Scale', value: '23,000+ Images', color: 'amber' }
    ],
    starEn: {
      situation: 'Vehicle damage evaluation for insurance claims relied on manual field inspections, causing delayed processing times, claim disputes, and human estimation variance.',
      task: 'Engineer an end-to-end computer vision decision pipeline to localize physical impact, classify damage severity, identify specific components, and compute accurate repair estimates automatically.',
      action: 'Curated and annotated 23,000+ real-world collision photos using OpenCV. Trained YOLOv8 for bounding-box spatial localization and coupled it with EfficientNetB0 for severity classification. Integrated a rule-based financial logic engine mapping components to approved pricing catalogs in a Streamlit app.',
      result: 'Achieved 81% spatial damage detection, 93% severity classification accuracy, and 100% part recognition across 21 vehicle components. Slashed claim assessment time from days to under 30 seconds with audit-ready PDF reports.'
    },
    starAr: {
      situation: 'كانت عمليات تقدير أضرار حوادث المركبات في التأمين تعتمد على المعاينة اليدوية التقليدية، مما يتسبب في بطء معالجة المطالبات وتفاوت التقديرات البشرية وارتفاع النزاعات.',
      task: 'تصميم وبناء نظام رؤية حاسوبية وذكاء قرارات متكامل يحدد موقع الضرر، يقيس شدته، يتعرف على القطعة التالفة، ويصدر تقرير تسعير تقديري فوري.',
      action: 'معالجة وتنقية أكثر من 23 ألف صورة حادث حقيقي باستخدام OpenCV. تدريب نموذج YOLOv8 لتحديد مواقع الاصطدام ودمجه بنموذج EfficientNetB0 لتصنيف شدة الضرر، وتطوير محرك تسعير ذكي يربط المخرجات بكتالوجات القطع المعتمدة وتوليد تقارير PDF عبر Streamlit.',
      result: 'تحقيق دقة اكتشاف 81%، ودقة تحديد شدة 93%، ومطابقة تامة 100% لـ 21 جزءاً في المركبة، مع تقليص زمن تقييم المطالبة من أيام إلى أقل من 30 ثانية.'
    }
  },
  {
    id: 'real-estate-valuation',
    title: 'Saudi Real Estate Investment Valuation Engine',
    titleAr: 'محرك تقييم الاستثمار العقاري السعودي والتنبؤ بالأسعار',
    category: 'Machine Learning',
    period: '10/2023 – 11/2023',
    summary: 'Predictive analytics pipeline benchmarking 7 ML regressors to accurately value property transactions.',
    summaryAr: 'محرك تنبؤي متقدم يقيّم الصفقات العقارية بالمملكة مع مقارنة معيارية بين 7 خوارزميات تعلم آلي.',
    techStack: ['Python', 'Scikit-Learn', 'RandomForest', 'Feature Engineering', 'DuckDB'],
    metricChips: [
      { label: 'Accuracy', value: '97.2%', color: 'emerald' },
      { label: 'R-Squared (R²)', value: '0.919', color: 'cyan' },
      { label: 'Models Evaluated', value: '7 ML Algorithms', color: 'indigo' },
      { label: 'Data Features', value: 'Automated Pipeline', color: 'amber' }
    ],
    starEn: {
      situation: 'Real estate investment committees struggled with volatile property valuation estimates and subjective pricing in metropolitan Saudi markets.',
      task: 'Build a rigorous, data-driven machine learning regression pipeline capable of predicting transaction values with high statistical confidence.',
      action: 'Engineered automated geospatial and municipal feature extraction pipelines. Benchmarked 7 regressors (Linear, Ridge, Lasso, XGBoost, LightGBM, Random Forest, SVR) with extensive hyperparameter tuning and outlier mitigation.',
      result: 'The tuned Random Forest model achieved 97.2% predictive precision with an R² of 0.919, delivering reliable valuation indicators that guide investment committee capital allocations.'
    },
    starAr: {
      situation: 'واجهت لجان الاستثمار والصناديق العقارية صعوبة في تقييم الأصول وتذبذب تقديرات الأسعار في المدن الرئيسية بالمملكة نتيجة غياب التحليل التنبؤي المعياري.',
      task: 'تطوير خط تدفق بيانات وخوارزميات تعلم آلي تتنبأ بأسعار الصفقات العقارية بدقة إحصائية عالية لدعم قرارات الشراء والاستثمار.',
      action: 'بناء مسار مؤتمت لهندسة الخصائص الجغرافية والمكانية، ومقارنة واختبار 7 خوارزميات تنبؤية (Random Forest, XGBoost, Ridge, Lasso وغيرها) مع ضبط المعاملات الفائقة ومعالجة القيم الشاذة.',
      result: 'تفوق نموذج Random Forest محققاً دقة تنبؤ 97.2% ومعامل ارتباط R² = 0.919، مما وفر مؤشرات استباقية رفعت من ثقة القرارات الاستثمارية وقادت لاكتشاف الفرص الواعدة.'
    }
  },
  {
    id: 'sera-regulatory-pipeline',
    title: 'SERA Regulatory 4-Year Ingestion & Sentiment Analytics',
    titleAr: 'أتمتة وحصاد متراكم 4 سنوات وتحليل المشاعر لهيئة تنظيم الكهرباء',
    category: 'BI Dashboards',
    period: '12/2025 – 06/2026',
    summary: 'Harvesting 500K+ regulatory records in 15 mins and synthesizing sentiment across 5+ platforms.',
    summaryAr: 'حصاد 500 ألف سجل تنظيمي في 15 دقيقة فقط وبناء لوحات رقابية ومؤشرات مشاعر تنفيذية.',
    techStack: ['Python', 'DuckDB', 'FastAPI', 'Power BI', 'Streamlit', 'Docker'],
    metricChips: [
      { label: 'Data Ingested', value: '500,000+ Records', color: 'emerald' },
      { label: 'Time to Ingest', value: '15 Minutes', color: 'cyan' },
      { label: 'Platforms Tracked', value: '5+ Channels', color: 'indigo' },
      { label: 'Enterprise Scaling', value: '4 New Clients', color: 'amber' }
    ],
    starEn: {
      situation: 'A four-year backlog of regulatory compliance data (500K+ records) was trapped in disparate silos, hindering timely oversight and consumer sentiment awareness for the primary regulator (SERA).',
      task: 'Design and deploy an automated, high-throughput ingestion framework and executive intelligence dashboard for rapid regulatory monitoring.',
      action: 'Built an optimized ETL pilot utilizing DuckDB and Python multiprocessing. Ingested the entire 4-year backlog in 15 minutes, automated sentiment analytics across 5+ platforms, and packaged insights into executive dashboards.',
      result: 'Delivered an operational pilot that scaled to 4 additional enterprise clients, providing continuous regulatory oversight and reducing weekly manual data reconciliation by 95%.'
    },
    starAr: {
      situation: 'وجود متراكم بيانات رقابية ضخم يمتد لـ 4 سنوات بأكثر من 500 ألف سجل موزعة في أنظمة متفرقة، مما أعاق الرقابة الآنية وتتبع صوت المشتركين لهيئة تنظيم الكهرباء.',
      task: 'ابتكار وهندسة مسار استخلاص ومعالجة فائق السرعة، وبناء لوحات مؤشرات ذكاء أعمال لدعم القرارات التنظيمية في الهيئة.',
      action: 'تطوير خط استخلاص بيانات متوازي باستخدام بايثون و DuckDB، ومعالجة الـ 500 ألف سجل في 15 دقيقة فقط، مع بناء محلل مشاعر متقدم على أكثر من 5 منصات لعكس انطباعات المستفيدين.',
      result: 'نجاح المسار وتوسيع استخدامه ليشمل 4 جهات مؤسسية إضافية، مع تقليص وقت إعداد التقارير الدورية بنسبة 95% وتوفير رؤى فورية للقيادات التنظيمية.'
    }
  },
  {
    id: 'sovereign-local-llm',
    title: 'Sovereign On-Premise Local LLM Decision Assistant',
    titleAr: 'مساعد ذكاء القرارات المحلي السيادي (100% PDPL Compliance)',
    category: 'NLP',
    period: '01/2026 – 05/2026',
    summary: 'Zero-cloud data leakage Local LLM compressing executive awareness-to-analysis cycles to under 5 seconds.',
    summaryAr: 'تشغيل محلي بالكامل لنماذج الذكاء الاصطناعي مع تقليص دورة اتخاذ القرار لأقل من 5 ثوانٍ.',
    techStack: ['Local LLMs', 'Ollama', 'LangChain', 'Python', 'DuckDB', 'Docker'],
    metricChips: [
      { label: 'Decision Cycle', value: '< 5 Seconds', color: 'emerald' },
      { label: 'Data Sovereignty', value: '100% In-Kingdom', color: 'cyan' },
      { label: 'PDPL Compliance', value: 'Zero Data Leaks', color: 'indigo' },
      { label: 'Query Speedup', value: '30x Faster', color: 'amber' }
    ],
    starEn: {
      situation: 'Strict regulatory privacy mandates (Saudi PDPL / NDMO) prohibited transmitting confidential institutional records to external international cloud LLM APIs.',
      task: 'Deploy high-performance open-source Large Language Models running strictly on local sovereign infrastructure to synthesize massive regulatory documents into executive answers.',
      action: 'Containerized and tuned quantized Local LLMs with local vector retrieval (RAG) and DuckDB storage, enforcing 100% data residency with zero outbound internet dependencies.',
      result: 'Compressed the awareness-to-analysis decision cycle from hours down to < 5 seconds, meeting 100% of Saudi PDPL and NDMO data sovereignty requirements with zero privacy compromise.'
    },
    starAr: {
      situation: 'لوائح حماية البيانات الشخصية بالمملكة (PDPL) ومعايير NDMO تمنع تماماً إرسال البيانات والوثائق التنظيمية الحساسة إلى خوادم وسحابات الذكاء الاصطناعي الخارجية.',
      task: 'نشر وتفعيل نماذج ذكاء اصطناعي لغوية محلية (Local LLMs) تعمل بنسبة 100% داخل البنية التحتية للمؤسسة للإجابة على الاستفسارات وتلخيص الوثائق فورياً.',
      action: 'تهيئة نماذج لغوية مفتوحة المصدر مكممة (Quantized) داخل حاويات Docker مع محرك استرجاع محلي (RAG) ومستودع DuckDB، دون أي اتصال خارجي بالإنترنت.',
      result: 'تسريع وقت اتخاذ القرار والتحليل من ساعات إلى أقل من 5 ثوانٍ فقط، مع ضمان سيادة البيانات داخل المملكة بنسبة 100% والامتثال الكامل للأنظمة.'
    }
  },
  {
    id: 'ncm-weather-timeseries',
    title: 'NCM Weather Time-Series & ICAO Arrival System',
    titleAr: 'نظام السلاسل الزمنية للأرصاد وتصنيف رسائل الطيران (NCM)',
    category: 'BI Dashboards',
    period: '06/2024 – 08/2024',
    summary: 'Automating hourly meteorology feeds and classifying international aviation ICAO messages.',
    summaryAr: 'أتمتة تقارير الطقس الساعية وتصنيف رسائل الطيران العالمية ICAO لتحسين عمليات الوصول.',
    techStack: ['Python', 'Pandas & Regex', 'DuckDB', 'Docker', 'Git', 'Time-Series'],
    metricChips: [
      { label: 'Manual Entry', value: '0% (Eliminated)', color: 'emerald' },
      { label: 'Query Turnaround', value: '4x Faster', color: 'cyan' },
      { label: 'Containerization', value: 'Docker & Git', color: 'indigo' },
      { label: 'Data Source', value: 'ICAO Messages', color: 'amber' }
    ],
    starEn: {
      situation: 'Hourly meteorological observations and aviation messages at the National Center of Meteorology (NCM) required laborious manual parsing, causing operational lag for flight safety reports.',
      task: 'Automate meteorological data pipelines and develop a time-series classification system for flight arrival messages.',
      action: 'Engineered automated Python ingestion scripts using regex and pandas. Optimized SQL query performance using DuckDB, refactored codebase to modular OOP, and established Docker containerized environments.',
      result: 'Eliminated 100% of manual entry overhead, quadrupled SQL query speeds, and provided continuous hourly time-series updates for aviation operations.'
    },
    starAr: {
      situation: 'كانت عمليات تدقيق تقارير الأرصاد الساعية ورسائل الطيران في المركز الوطني للأرصاد تتطلب إدخالاً يدوياً مجهداً يؤخر إصدار تقارير سلامة الرحلات الجوية.',
      task: 'أتمتة خط تدفق بيانات الطقس وبناء نظام تصنيف للسلاسل الزمنية لرسائل الطيران الدولي (ICAO).',
      action: 'كتابة برمجيات بايثون مؤتمتة لمعالجة النصوص (Regex & Pandas)، وتحسين استعلامات SQL عبر DuckDB، مع إعادة هيكلة الكود بنمط كائني التوجه (OOP) وحزم البيئة في Docker.',
      result: 'إلغاء الإدخال اليدوي بنسبة 100%، وتسريع تنفيذ الاستعلامات بـ 4 أضعاف، وتوفير تدفقات فورية للبيانات المعتمدة لحركة الطيران.'
    }
  },
  {
    id: 'tuwaiq-ai-instruct',
    title: 'Tuwaiq Academy Generative AI & IoT Delivery Labs',
    titleAr: 'مختبرات الذكاء الاصطناعي التوليدي وإنترنت الأشياء بأكاديمية طويق',
    category: 'Machine Learning',
    period: '07/2026 – 08/2026',
    summary: 'Instructing advanced Generative AI modules and mentoring student teams in IoT and VR architectures.',
    summaryAr: 'قيادة مسار الذكاء الاصطناعي التوليدي وتوجيه الطلاب في بناء نماذج إنترنت الأشياء والواقع الافتراضي.',
    techStack: ['Generative AI', 'Prompt Engineering', 'IoT & Arduino', 'VR Systems', 'Python'],
    metricChips: [
      { label: 'Leadership', value: 'Multi-Cohort Lead', color: 'emerald' },
      { label: 'Curriculum', value: 'University-Grade', color: 'cyan' },
      { label: 'Projects Built', value: 'IoT & VR Systems', color: 'indigo' },
      { label: 'Commendations', value: 'Executive Level', color: 'amber' }
    ],
    starEn: {
      situation: 'High-school tech tracks required university-caliber mentorship to bridge theoretical AI knowledge with real-world applied deep-tech prototyping.',
      task: 'Lead male and female cohorts across Prompt Engineering, Cybersecurity threat simulations, and interactive hardware prototypes.',
      action: 'Designed hands-on workshops in Generative AI prompting paradigms and coached students through building Arduino sensor arrays and VR environments.',
      result: 'Orchestrated the culminating tech exhibition, coached youth speakers for stage presentations, and received executive leadership commendations from academy leadership.'
    },
    starAr: {
      situation: 'الحاجة إلى نقل المفاهيم العميقة في الذكاء الاصطناعي إلى تطبيقات عملية ومشاريع ملموسة لطلبة المسارات المتقدمة بأكاديمية طويق.',
      task: 'قيادة المسارات التقنية وتدريب الطلاب على هندسة الأوامر (Prompt Engineering)، محاكاة التهديدات السيبرانية، وتطوير نماذج إنترنت الأشياء.',
      action: 'تقديم ورش تطبيقية تفاعلية وتوجيه الطلاب في ربط الحساسات (Arduino) مع بيئات الواقع الافتراضي وتطبيق خوارزميات الذكاء الاصطناعي.',
      result: 'تنظيم المعرض التقني الختامي بنجاح وتدريب الطلاب على الإلقاء التقني أمام القيادات التنفيذية وحصد إشادات رسمية من إدارة الأكاديمية.'
    }
  }
];

interface FilterableProjectGalleryProps {
  lang: Language;
}

export const FilterableProjectGallery: React.FC<FilterableProjectGalleryProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStarModal, setActiveStarModal] = useState<GalleryProject | null>(null);

  const isRtl = lang === 'ar';

  const categories = [
    { id: 'All', labelEn: 'All Projects', labelAr: 'كافة المشاريع' },
    { id: 'Machine Learning', labelEn: 'Machine Learning', labelAr: 'التعلم الآلي' },
    { id: 'BI Dashboards', labelEn: 'BI & Decision Systems', labelAr: 'لوحات البيانات والقرارات' },
    { id: 'NLP', labelEn: 'NLP & Local LLMs', labelAr: 'معالجة اللغات والنماذج المحلية' },
    { id: 'Computer Vision', labelEn: 'Computer Vision', labelAr: 'الرؤية الحاسوبية' }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter((p) => p.category === selectedCategory);

  const getChipStyle = (color: string) => {
    switch (color) {
      case 'emerald':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'cyan':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
      case 'indigo':
        return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30';
      case 'amber':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      default:
        return 'text-slate-300 bg-slate-800 border-slate-700';
    }
  };

  return (
    <section id="gallery" className="py-20 relative bg-[#080d17]/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1.5">
              <Layers className="w-4 h-4" />
              <span>{isRtl ? '// معرض دراسات الحالة الهندسية (STAR Method)' : '// Filterable Project Gallery & STAR Case Studies'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {isRtl ? 'معرض المشاريع المصنفة ودراسات الحالة' : 'Filterable Portfolio & Impact Case Studies'}
            </h2>
            <p className="mt-1 text-slate-400 text-xs sm:text-sm max-w-2xl">
              {isRtl
                ? 'استكشف المشاريع عبر تصنيف التقنيات. انقر على أي مشروع لفتح دراسة الحالة المفصلة بنموذج STAR والرقائق الإحصائية.'
                : 'Browse verified projects by technical discipline. Click any project to open a structured STAR case study (Situation, Task, Action, Result) with visual metric chips.'}
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg self-start md:self-auto">
            <span>{isRtl ? 'المشاريع المعروضة: ' : 'Showing: '}</span>
            <span className="text-emerald-400 font-bold">{filteredProjects.length}</span> / {GALLERY_PROJECTS.length}
          </div>
        </div>

        {/* Category Buttons Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-slate-800/80">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/10'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>{isRtl ? cat.labelAr : cat.labelEn}</span>
              {cat.id !== 'All' && (
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-400">
                  {GALLERY_PROJECTS.filter((p) => p.category === cat.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Filterable Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveStarModal(project)}
              className="cursor-pointer rounded-2xl bg-gradient-to-b from-[#0e1626] to-[#0a101d] border border-slate-800/80 p-5 sm:p-6 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-[#121c33]/80 transition-all duration-300 shadow-xl group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Category & Date Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.period}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight mb-2">
                  {isRtl ? project.titleAr : project.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {isRtl ? project.summaryAr : project.summary}
                </p>
              </div>

              {/* Metric Chips Ribbon */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.metricChips.slice(0, 2).map((chip, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded border font-medium ${getChipStyle(
                        chip.color
                      )}`}
                    >
                      {chip.value}
                    </span>
                  ))}
                  {project.metricChips.length > 2 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      +{project.metricChips.length - 2} more
                    </span>
                  )}
                </div>

                {/* Card Footer: Tech tags + Call to Action */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1 max-w-[70%]">
                    {project.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-mono font-semibold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1">
                    <span>{isRtl ? 'دراسة STAR' : 'STAR Modal'}</span>
                    {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Sleek Popup Modal structured in STAR format */}
      {activeStarModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
          onClick={() => setActiveStarModal(null)}
        >
          <div
            className={`relative w-full max-w-3xl bg-[#0c1322] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col ${
              isRtl ? 'text-right' : 'text-left'
            }`}
            dir={isRtl ? 'rtl' : 'ltr'}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
                  STAR CASE STUDY
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  {activeStarModal.category}
                </span>
              </div>

              <button
                onClick={() => setActiveStarModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Project Title & Period */}
              <div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight mb-1">
                  {isRtl ? activeStarModal.titleAr : activeStarModal.title}
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {isRtl ? 'الفترة الزمنية: ' : 'Timeline: '} {activeStarModal.period}
                </span>
              </div>

              {/* Visual Metric Chips Ribbon */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                  {isRtl ? '// المؤشرات والأرقام الإحصائية المحققة (Quantified Metrics):' : '// Quantified Impact Metrics:'}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {activeStarModal.metricChips.map((chip, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-lg border flex flex-col justify-between ${getChipStyle(
                        chip.color
                      )}`}
                    >
                      <span className="text-[10px] font-mono text-slate-300 mb-0.5 truncate">
                        {chip.label}
                      </span>
                      <span className="text-sm sm:text-base font-extrabold font-mono">
                        {chip.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* STAR Cards Grid (S, T, A, R) */}
              <div className="space-y-4">
                
                {/* 1. Situation */}
                <div className="rounded-xl bg-slate-900/60 border border-amber-500/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-md bg-amber-500/20 text-amber-300 font-mono font-bold text-xs flex items-center justify-center border border-amber-500/30">
                      S
                    </span>
                    <h4 className="text-sm font-bold text-amber-200">
                      {isRtl ? 'الموقف والتحدي (Situation)' : 'Situation'}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {isRtl ? activeStarModal.starAr.situation : activeStarModal.starEn.situation}
                  </p>
                </div>

                {/* 2. Task */}
                <div className="rounded-xl bg-slate-900/60 border border-cyan-500/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-300 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                      T
                    </span>
                    <h4 className="text-sm font-bold text-cyan-200">
                      {isRtl ? 'المهمة والأهداف (Task)' : 'Task'}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {isRtl ? activeStarModal.starAr.task : activeStarModal.starEn.task}
                  </p>
                </div>

                {/* 3. Action */}
                <div className="rounded-xl bg-slate-900/60 border border-indigo-500/20 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-300 font-mono font-bold text-xs flex items-center justify-center border border-indigo-500/30">
                      A
                    </span>
                    <h4 className="text-sm font-bold text-indigo-200">
                      {isRtl ? 'الإجراء الهندسي والتقني (Action)' : 'Action'}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {isRtl ? activeStarModal.starAr.action : activeStarModal.starEn.action}
                  </p>
                </div>

                {/* 4. Result */}
                <div className="rounded-xl bg-slate-900/60 border border-emerald-500/30 p-4 bg-emerald-950/10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-300 font-mono font-bold text-xs flex items-center justify-center border border-emerald-500/40">
                      R
                    </span>
                    <h4 className="text-sm font-bold text-emerald-300">
                      {isRtl ? 'النتيجة المحققة بالأرقام (Quantified Result)' : 'Quantified Result'}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {isRtl ? activeStarModal.starAr.result : activeStarModal.starEn.result}
                  </p>
                </div>

              </div>

              {/* Tech Stack in Modal */}
              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400">
                  {isRtl ? 'التقنيات المستخدمة:' : 'Technologies:'}
                </span>
                {activeStarModal.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
