import React, { useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Language } from '../data/portfolioData';
import { TrendingUp, Users, UserX, BarChart3, Filter, ArrowUpRight, ArrowDownRight, Sparkles } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface DataDashboardWidgetProps {
  lang: Language;
}

export const DataDashboardWidget: React.FC<DataDashboardWidgetProps> = ({ lang }) => {
  const [period, setPeriod] = useState<'monthly' | 'quarterly'>('monthly');
  const [activeMetric, setActiveMetric] = useState<'all' | 'revenue' | 'retention' | 'churn'>('all');

  const isRtl = lang === 'ar';

  // Dataset definitions
  const monthlyLabels = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const monthlyLabelsAr = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];

  const quarterlyLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  const quarterlyLabelsAr = ['الربع 1', 'الربع 2', 'الربع 3', 'الربع 4'];

  // Monthly values
  const monthlyRevenue = [240, 265, 290, 310, 345, 380, 410, 445, 490, 520, 560, 610]; // In thousands SAR
  const monthlyRetention = [89.2, 90.1, 90.8, 91.5, 92.4, 93.0, 93.8, 94.2, 94.8, 95.1, 95.5, 96.2]; // %
  const monthlyChurn = [7.8, 7.2, 6.8, 6.4, 5.9, 5.5, 5.0, 4.6, 4.2, 3.9, 3.5, 3.1]; // %

  // Quarterly aggregated values
  const quarterlyRevenue = [795, 1035, 1345, 1690];
  const quarterlyRetention = [90.0, 92.3, 94.3, 95.6];
  const quarterlyChurn = [7.3, 5.9, 4.6, 3.5];

  const labels = period === 'monthly'
    ? (isRtl ? monthlyLabelsAr : monthlyLabels)
    : (isRtl ? quarterlyLabelsAr : quarterlyLabels);

  const revenueData = period === 'monthly' ? monthlyRevenue : quarterlyRevenue;
  const retentionData = period === 'monthly' ? monthlyRetention : quarterlyRetention;
  const churnData = period === 'monthly' ? monthlyChurn : quarterlyChurn;

  // ChartJS Data setup
  const chartData = useMemo(() => {
    const datasets = [];

    if (activeMetric === 'all' || activeMetric === 'revenue') {
      datasets.push({
        label: isRtl ? 'القيمة / الإيرادات (ألف ريال)' : 'Revenue / Value Generated (k SAR)',
        data: revenueData,
        borderColor: '#10b981', // sovereign emerald
        backgroundColor: 'rgba(16, 185, 129, 0.12)',
        fill: true,
        tension: 0.38,
        pointBackgroundColor: '#10b981',
        pointBorderColor: '#080c14',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        yAxisID: 'yRevenue'
      });
    }

    if (activeMetric === 'all' || activeMetric === 'retention') {
      datasets.push({
        label: isRtl ? 'معدل الاحتفاظ بالعملاء (%)' : 'Customer Retention (%)',
        data: retentionData,
        borderColor: '#06b6d4', // cyber cyan
        backgroundColor: 'rgba(6, 182, 212, 0.08)',
        fill: false,
        tension: 0.38,
        pointBackgroundColor: '#06b6d4',
        pointBorderColor: '#080c14',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        yAxisID: 'yPercentage'
      });
    }

    if (activeMetric === 'all' || activeMetric === 'churn') {
      datasets.push({
        label: isRtl ? 'معدل فقدان العملاء (%)' : 'Churn Rate (%)',
        data: churnData,
        borderColor: '#f43f5e', // rose
        backgroundColor: 'rgba(244, 63, 94, 0.08)',
        fill: false,
        borderDash: [5, 5],
        tension: 0.38,
        pointBackgroundColor: '#f43f5e',
        pointBorderColor: '#080c14',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        yAxisID: 'yPercentage'
      });
    }

    return {
      labels,
      datasets
    };
  }, [labels, revenueData, retentionData, churnData, activeMetric, isRtl]);

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        rtl: isRtl,
        labels: {
          color: '#cbd5e1',
          font: {
            size: 11,
            family: 'system-ui, sans-serif'
          },
          usePointStyle: true,
          boxWidth: 8
        }
      },
      tooltip: {
        backgroundColor: '#0f172a',
        titleColor: '#f8fafc',
        bodyColor: '#cbd5e1',
        borderColor: '#334155',
        borderWidth: 1,
        padding: 10,
        boxPadding: 4,
        usePointStyle: true,
        rtl: isRtl
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(148, 163, 184, 0.06)'
        },
        ticks: {
          color: '#94a3b8',
          font: { size: 10 }
        }
      },
      yRevenue: {
        type: 'linear',
        display: activeMetric === 'all' || activeMetric === 'revenue',
        position: isRtl ? 'right' : 'left',
        grid: {
          color: 'rgba(148, 163, 184, 0.08)'
        },
        ticks: {
          color: '#10b981',
          font: { size: 10 },
          callback: (value) => `${value}k`
        }
      },
      yPercentage: {
        type: 'linear',
        display: activeMetric === 'all' || activeMetric === 'retention' || activeMetric === 'churn',
        position: isRtl ? 'left' : 'right',
        min: 0,
        max: 100,
        grid: {
          drawOnChartArea: false
        },
        ticks: {
          color: '#06b6d4',
          font: { size: 10 },
          callback: (value) => `${value}%`
        }
      }
    }
  };

  return (
    <section id="dashboard" className="py-20 relative bg-[#090f1b]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1.5">
              <BarChart3 className="w-4 h-4" />
              <span>{isRtl ? '// لوحة ذكاء الأعمال التفاعلية (Chart.js)' : '// Interactive BI & Analytics Dashboard'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {isRtl ? 'مؤشرات اتخاذ القرار وعوائد النماذج التنبؤية' : 'Decision Telemetry & ROI Performance'}
            </h2>
            <p className="mt-1 text-slate-400 text-xs sm:text-sm max-w-2xl">
              {isRtl
                ? 'نموذج تفاعلي حي يعكس نمو القيمة المؤسسية، رفع نسبة الاحتفاظ، وخفض معدلات التسرب عبر خوارزميات التدخل الاستباقي.'
                : 'Live interactive telemetry demonstrating quantifiable business value, retention uplift, and churn reduction powered by predictive intervention pipelines.'}
            </p>
          </div>

          {/* Controls: Timeframe Filter Dropdown */}
          <div className="flex items-center gap-2.5 bg-slate-900 border border-slate-800 p-1.5 rounded-xl self-start md:self-auto">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 pl-2 pr-2">
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              {isRtl ? 'الفترة:' : 'View:'}
            </span>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value as 'monthly' | 'quarterly')}
              className="bg-slate-950 text-white text-xs font-mono rounded-lg px-3 py-1.5 border border-slate-700/80 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="monthly">{isRtl ? 'شهري (Monthly - 12M)' : 'Monthly (12M)'}</option>
              <option value="quarterly">{isRtl ? 'ربعي (Quarterly - Q1-Q4)' : 'Quarterly (Q1-Q4)'}</option>
            </select>
          </div>
        </div>

        {/* 3 Dynamic KPI Cards (Revenue, Customer Retention, Churn Rate) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          
          {/* 1. Revenue / Business Value Card */}
          <div
            onClick={() => setActiveMetric(activeMetric === 'revenue' ? 'all' : 'revenue')}
            className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative backdrop-blur-md ${
              activeMetric === 'revenue' || activeMetric === 'all'
                ? 'bg-slate-900/80 border-emerald-500/40 hover:border-emerald-500/60 shadow-lg shadow-emerald-500/5'
                : 'bg-slate-950/40 border-slate-800 opacity-60 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-slate-400">
                {isRtl ? 'القيمة / العائد المالي (Revenue)' : 'Revenue / Value Realized'}
              </span>
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="text-3xl font-extrabold text-white font-mono tracking-tight">
                {period === 'monthly' ? 'SAR 4.86M' : 'SAR 4.86M'}
              </span>
              <span className="inline-flex items-center text-xs font-mono font-bold text-emerald-400 gap-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
                +24.8%
              </span>
            </div>

            <p className="text-[11px] text-slate-400 leading-snug">
              {isRtl
                ? 'عائد مالي ناتج عن أتمتة تدفقات البيانات ونماذج التسعير التنبؤية.'
                : 'Quantified savings & valuation gains driven by automated ML feature workflows.'}
            </p>
          </div>

          {/* 2. Customer Retention Card */}
          <div
            onClick={() => setActiveMetric(activeMetric === 'retention' ? 'all' : 'retention')}
            className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative backdrop-blur-md ${
              activeMetric === 'retention' || activeMetric === 'all'
                ? 'bg-slate-900/80 border-cyan-500/40 hover:border-cyan-500/60 shadow-lg shadow-cyan-500/5'
                : 'bg-slate-950/40 border-slate-800 opacity-60 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-slate-400">
                {isRtl ? 'الاحتفاظ بالعملاء (Customer Retention)' : 'Customer Retention'}
              </span>
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Users className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="text-3xl font-extrabold text-white font-mono tracking-tight">
                96.2%
              </span>
              <span className="inline-flex items-center text-xs font-mono font-bold text-cyan-400 gap-0.5">
                <ArrowUpRight className="w-3.5 h-3.5" />
                +7.0% YoY
              </span>
            </div>

            <p className="text-[11px] text-slate-400 leading-snug">
              {isRtl
                ? 'ارتفاع الاستبقاء بفضل كشف بوادر الانسحاب المبكر وتحليل المشاعر.'
                : 'High stickiness achieved via sentiment surveillance and proactive alerts.'}
            </p>
          </div>

          {/* 3. Churn Rate Card */}
          <div
            onClick={() => setActiveMetric(activeMetric === 'churn' ? 'all' : 'churn')}
            className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative backdrop-blur-md ${
              activeMetric === 'churn' || activeMetric === 'all'
                ? 'bg-slate-900/80 border-rose-500/40 hover:border-rose-500/60 shadow-lg shadow-rose-500/5'
                : 'bg-slate-950/40 border-slate-800 opacity-60 hover:opacity-100'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-slate-400">
                {isRtl ? 'معدل التسرب والانسحاب (Churn Rate)' : 'Churn Rate'}
              </span>
              <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400">
                <UserX className="w-4 h-4" />
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="text-3xl font-extrabold text-white font-mono tracking-tight">
                3.1%
              </span>
              <span className="inline-flex items-center text-xs font-mono font-bold text-emerald-400 gap-0.5">
                <ArrowDownRight className="w-3.5 h-3.5" />
                -60.2%
              </span>
            </div>

            <p className="text-[11px] text-slate-400 leading-snug">
              {isRtl
                ? 'تقليص الخسارة بنسبة تفوق 60% عبر نماذج التنبؤ السببي بالسلاسل الزمنية.'
                : 'Reduced from 7.8% down to 3.1% using time-series predictive intervention.'}
            </p>
          </div>

        </div>

        {/* Chart.js Line Visualization Container */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0e1626] to-[#0a101d] border border-slate-800 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <h3 className="text-sm font-semibold text-white font-mono">
                {isRtl
                  ? `تحليل الاتجاه الزمني (${period === 'monthly' ? 'شهري' : 'ربعي'})`
                  : `Telemetry Trend Analysis (${period === 'monthly' ? 'Monthly Resolution' : 'Quarterly Resolution'})`}
              </h3>
            </div>

            {/* Metric toggles */}
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <button
                onClick={() => setActiveMetric('all')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeMetric === 'all'
                    ? 'bg-slate-800 text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isRtl ? 'الكل' : 'All'}
              </button>
              <button
                onClick={() => setActiveMetric('revenue')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeMetric === 'revenue'
                    ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isRtl ? 'الإيرادات' : 'Revenue'}
              </button>
              <button
                onClick={() => setActiveMetric('retention')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeMetric === 'retention'
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isRtl ? 'الاحتفاظ' : 'Retention'}
              </button>
              <button
                onClick={() => setActiveMetric('churn')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  activeMetric === 'churn'
                    ? 'bg-rose-500/20 text-rose-300 font-semibold border border-rose-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isRtl ? 'التسرب' : 'Churn'}
              </button>
            </div>
          </div>

          <div className="h-72 sm:h-80 w-full">
            <Line data={chartData} options={chartOptions} />
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
            <span>● Chart.js v4 Line Renderer</span>
            <span className="text-emerald-400">
              {isRtl
                ? 'نموذج محاكاة واقعي متكامل مع معايير ذكاء القرارات'
                : 'Simulated real-world decision intelligence telemetry based on verified models'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
