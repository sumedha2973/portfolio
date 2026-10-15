import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  FileSpreadsheet, 
  Sparkles, 
  CheckCircle2, 
  ChevronRight, 
  ExternalLink, 
  Github, 
  Database,
  ArrowUpRight,
  Target,
  Clock,
  Activity,
  Layers
} from 'lucide-react';
import { dataAnalyticsProjects } from '../data/portfolioData';

// Prominent, recruiter-ready colored stat callouts for immediate business impact
const kpiConfigs = {
  'hr-analytics': [
    {
      label: 'Overall Attrition',
      value: '16.1%',
      impact: 'Target: -3.4% Reduction',
      badgeClass: 'bg-pink-50 text-pink-600 border-pink-200/90 shadow-pink-100/50',
      icon: Users,
      highlight: true
    },
    {
      label: 'Primary Risk Factor',
      value: 'Overtime >35hr',
      impact: '2.8x Higher Attrition',
      badgeClass: 'bg-rose-50 text-rose-700 border-rose-200/90 shadow-rose-100/50',
      icon: Activity,
      highlight: false
    },
    {
      label: 'Retention Impact',
      value: '92% Accuracy',
      impact: 'Predictive Model',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/90 shadow-emerald-100/50',
      icon: Target,
      highlight: false
    },
    {
      label: 'Average Tenure',
      value: '4.8 Years',
      impact: '+0.6 YoY Increase',
      badgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200/90 shadow-indigo-100/50',
      icon: TrendingUp,
      highlight: false
    }
  ],
  'retail-sales-analytics': [
    {
      label: 'Gross Revenue Analyzed',
      value: '$4.2M',
      impact: '500,000+ Transactions',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/90 shadow-emerald-100/50',
      icon: TrendingUp,
      highlight: true
    },
    {
      label: 'Champion Cohort',
      value: '54% Revenue',
      impact: 'Top 18% RFM Segment',
      badgeClass: 'bg-pink-50 text-pink-600 border-pink-200/90 shadow-pink-100/50',
      icon: Target,
      highlight: true
    },
    {
      label: 'Repeat Purchase Rate',
      value: '64.2%',
      impact: '+8.1% YoY Loyalty Lift',
      badgeClass: 'bg-indigo-50 text-indigo-600 border-indigo-200/90 shadow-indigo-100/50',
      icon: ShoppingCart,
      highlight: false
    },
    {
      label: 'Avg Order Value (AOV)',
      value: '$78.40',
      impact: '+12% Upsell & Cross-sell',
      badgeClass: 'bg-purple-50 text-purple-700 border-purple-200/90 shadow-purple-100/50',
      icon: Activity,
      highlight: false
    }
  ],
  'excel-sales-dashboard': [
    {
      label: 'Quarterly Sales Target',
      value: '$1.85M',
      impact: '108% Target Attainment',
      badgeClass: 'bg-indigo-50 text-indigo-600 border-indigo-200/90 shadow-indigo-100/50',
      icon: TrendingUp,
      highlight: true
    },
    {
      label: 'Operating Profit Margin',
      value: '24.6%',
      impact: '+2.1% QoQ Expansion',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/90 shadow-emerald-100/50',
      icon: Target,
      highlight: false
    },
    {
      label: 'Monthly Prep Time',
      value: '8 Mins',
      impact: 'Slashed from 6 Hours',
      badgeClass: 'bg-pink-50 text-pink-600 border-pink-200/90 shadow-pink-100/50',
      icon: Clock,
      highlight: true
    },
    {
      label: 'Catalog & Region Scope',
      value: '450+ SKUs',
      impact: '42% Volume North America',
      badgeClass: 'bg-purple-50 text-purple-700 border-purple-200/90 shadow-purple-100/50',
      icon: FileSpreadsheet,
      highlight: false
    }
  ]
};

export default function DataAnalyticsSection() {
  const [activeProject, setActiveProject] = useState(dataAnalyticsProjects[0].id);

  const currentData = dataAnalyticsProjects.find((p) => p.id === activeProject) || dataAnalyticsProjects[0];
  const prominentStats = kpiConfigs[currentData.id] || [];

  return (
    <section id="data-analytics" className="py-24 relative bg-gradient-to-b from-transparent via-[#fcf3f6]/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/80 border border-rose-200/90 text-rose-900 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Business Intelligence & Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Data Analytics Highlights
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Analytical studies demonstrating statistical modeling, SQL cohort segmentation, Power BI executive dashboards, and automated business insights.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="p-1.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-10">
          {dataAnalyticsProjects.map((proj) => {
            const isSelected = activeProject === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-rose-800 to-maroon-950 text-white shadow-md shadow-rose-950/15 scale-[1.02]'
                    : 'text-slate-700 hover:text-rose-900 hover:bg-rose-50/60'
                }`}
              >
                {proj.id === 'hr-analytics' && <Users className="w-4 h-4" />}
                {proj.id === 'retail-sales-analytics' && <ShoppingCart className="w-4 h-4" />}
                {proj.id === 'excel-sales-dashboard' && <FileSpreadsheet className="w-4 h-4" />}
                <span>{proj.title.split('&')[0]}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-rose-50 text-rose-700 border border-rose-200/70'
                }`}>
                  {proj.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Project Deep Dive Display */}
        <motion.div
          key={currentData.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 p-7 sm:p-10 relative overflow-hidden"
        >
          {/* Subtle Top Accent Gradient Line */}
          <div className="h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r from-rose-500 via-pink-500 to-indigo-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Project Overview & Insights (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Meta Badge Row */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200/80">
                    {currentData.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 font-mono">
                    Case Study Analysis
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1">
                  {currentData.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-rose-700 mb-4">
                  {currentData.subtitle}
                </p>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {currentData.description}
                </p>

                {/* Key Findings / Strategic Insights */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-rose-600" />
                    <span>Key Analytical Insights & Business Value</span>
                  </h4>
                  <div className="space-y-2.5">
                    {currentData.insights.map((ins, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-rose-50/40 hover:border-rose-200/80 transition-all text-xs sm:text-sm text-slate-700 leading-relaxed group/ins"
                      >
                        <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <span>{ins}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modern Compact Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Toolchain:</span>
                  </span>
                  {currentData.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-rose-50 hover:text-rose-800 hover:border-rose-200/90 transition-all duration-200 cursor-default shadow-2xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                <a
                  href={currentData.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 text-xs font-bold flex items-center gap-2 transition-all shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>View SQL Queries & Notebooks</span>
                </a>
                <a
                  href={currentData.liveReportUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-800 to-maroon-950 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Interactive Dashboard Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Prominent Recruiter-Ready Metric Callouts (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Header Bar */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 font-bold flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-rose-600" />
                  <span>Executive Business Impact</span>
                </span>
                <span className="text-[11px] font-mono text-slate-500 font-medium">Recruiter Spotlights</span>
              </div>

              {/* 2x2 Prominent Colored Stat Callouts Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                {prominentStats.map((kpi, idx) => {
                  const Icon = kpi.icon;
                  return (
                    <motion.div
                      key={kpi.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.06 }}
                      className={`p-4 sm:p-5 rounded-2xl border text-left flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group shadow-xs ${kpi.badgeClass}`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] sm:text-[11px] font-bold opacity-80 uppercase tracking-wider truncate">
                            {kpi.label}
                          </span>
                          <Icon className="w-3.5 h-3.5 shrink-0 opacity-80" />
                        </div>
                        <div className="text-xl sm:text-2xl font-black tracking-tight mt-0.5">
                          {kpi.value}
                        </div>
                      </div>

                      <div className="mt-3 pt-2 border-t border-current/15 flex items-center gap-1 text-[11px] font-semibold">
                        <TrendingUp className="w-3 h-3 shrink-0" />
                        <span className="truncate">{kpi.impact}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* ETL & Star Schema Architecture Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-[#2e0b19] to-[#1a050e] text-white border border-slate-800 shadow-md">
                <div className="flex items-center gap-2 text-rose-200 text-xs font-bold uppercase tracking-wider mb-2.5">
                  <Database className="w-4 h-4 text-rose-400" />
                  <span>Pipeline Architecture & Schema</span>
                </div>
                <div className="text-xs text-rose-100/90 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">1. Data Hygiene & Cleaning</span>
                    <span className="text-emerald-400 font-mono font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                      100% Validated
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">2. Relational Star Schema</span>
                    <span className="text-emerald-400 font-mono font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                      Normalized
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">3. DAX & Statistical Modeling</span>
                    <span className="text-emerald-400 font-mono font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                      Optimized
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
