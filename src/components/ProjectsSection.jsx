import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ChevronRight, 
  X, 
  ArrowUpRight,
  Zap,
  Compass,
  MessageSquare,
  CheckSquare2,
  TrendingUp,
  ShieldCheck,
  Activity
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

// Project-specific aesthetic styling and striking metric configurations
const projectConfigs = {
  'mental-health-chatbot': {
    primaryMetric: {
      label: '< 450ms Response Latency',
      value: '< 450ms Latency',
      badgeClass: 'bg-pink-50 text-pink-600 border-pink-200/90',
      icon: Zap
    },
    headerBadgeClass: 'bg-pink-50 text-pink-700 border-pink-200/80',
    accentLine: 'group-hover:from-pink-500 group-hover:to-rose-600',
    statTints: {
      'Response Latency': 'bg-pink-50 text-pink-600 border-pink-200/90',
      'Safety Rating': 'bg-emerald-50 text-emerald-700 border-emerald-200/90',
      'Multi-Agents': 'bg-purple-50 text-purple-700 border-purple-200/90'
    }
  },
  'tripnova': {
    primaryMetric: {
      label: '120+ Destinations',
      value: '120+ Destinations',
      badgeClass: 'bg-indigo-50 text-indigo-600 border-indigo-200/90',
      icon: Compass
    },
    headerBadgeClass: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
    accentLine: 'group-hover:from-indigo-500 group-hover:to-blue-600',
    statTints: {
      'Destinations': 'bg-indigo-50 text-indigo-600 border-indigo-200/90',
      'Avg Trip Plan Time': 'bg-blue-50 text-blue-700 border-blue-200/90',
      'Export Formats': 'bg-sky-50 text-sky-700 border-sky-200/90'
    }
  },
  'abtalks': {
    primaryMetric: {
      label: '40+ Active Topics',
      value: '40+ Active Topics',
      badgeClass: 'bg-pink-50 text-pink-600 border-pink-200/90',
      icon: MessageSquare
    },
    headerBadgeClass: 'bg-purple-50 text-purple-700 border-purple-200/80',
    accentLine: 'group-hover:from-purple-500 group-hover:to-pink-600',
    statTints: {
      'Active Topics': 'bg-pink-50 text-pink-600 border-pink-200/90',
      'User Engagement': 'bg-rose-50 text-rose-700 border-rose-200/90',
      'Lighthouse Score': 'bg-emerald-50 text-emerald-700 border-emerald-200/90'
    }
  },
  'task-management': {
    primaryMetric: {
      label: '1,000+ Tasks Handled',
      value: '1,000+ Tasks',
      badgeClass: 'bg-indigo-50 text-indigo-600 border-indigo-200/90',
      icon: CheckSquare2
    },
    headerBadgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    accentLine: 'group-hover:from-emerald-500 group-hover:to-teal-600',
    statTints: {
      'Tasks Handled': 'bg-indigo-50 text-indigo-600 border-indigo-200/90',
      'Storage': 'bg-emerald-50 text-emerald-700 border-emerald-200/90',
      'Load Speed': 'bg-rose-50 text-rose-700 border-rose-200/90'
    }
  }
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative bg-gradient-to-b from-transparent via-[#fcf3f6]/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/80 border border-rose-200/90 text-rose-900 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Featured Software Engineering & AI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Software & AI Projects
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Production-grade web apps and multi-agent AI architectures engineered with clean code, sub-second latency, and responsive SaaS design.
          </p>
        </div>

        {/* 2-Column Responsive Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {featuredProjects.map((project, idx) => {
            const config = projectConfigs[project.id] || {
              primaryMetric: {
                label: 'Production Ready',
                value: 'Production Ready',
                badgeClass: 'bg-pink-50 text-pink-600 border-pink-200/90',
                icon: Activity
              },
              headerBadgeClass: 'bg-rose-50 text-rose-700 border-rose-200/80',
              accentLine: 'group-hover:from-rose-500 group-hover:to-pink-600',
              statTints: {}
            };
            const MetricIcon = config.primaryMetric.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl bg-white border border-slate-200/80 hover:border-rose-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"
              >
                {/* Top Subtle Accent Gradient Bar */}
                <div className={`h-1.5 w-full bg-slate-100 transition-all duration-500 bg-gradient-to-r ${config.accentLine}`} />

                {/* Main Card Content */}
                <div className="p-7 sm:p-9 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Top Meta & Striking Primary Metric Badge Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border tracking-wide ${config.headerBadgeClass}`}>
                          {project.badge}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500 font-mono tracking-tight bg-slate-50 px-2.5 py-0.5 rounded-lg border border-slate-200/60">
                          {project.category}
                        </span>
                      </div>

                      {/* Striking Mini-Badge for Key Metric */}
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shadow-xs ${config.primaryMetric.badgeClass}`}>
                        <MetricIcon className="w-3.5 h-3.5 shrink-0" />
                        <span>{config.primaryMetric.label}</span>
                      </div>
                    </div>

                    {/* Project Title & Tagline */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-rose-950 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-rose-700 mt-1 mb-3.5">
                      {project.tagline}
                    </p>

                    {/* Project Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Striking Performance Metrics Bar */}
                    <div className="mb-6">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                        <Activity className="w-3 h-3 text-slate-400" />
                        <span>Key Performance Metrics</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2.5">
                        {Object.entries(project.stats).map(([k, v]) => {
                          const tintClass = config.statTints[k] || 'bg-slate-50 text-slate-700 border-slate-200/80';
                          return (
                            <div
                              key={k}
                              className={`p-2.5 sm:p-3 rounded-2xl border text-center transition-all duration-200 shadow-2xs ${tintClass}`}
                            >
                              <div className="font-extrabold text-xs sm:text-sm tracking-tight">{v}</div>
                              <div className="text-[10px] font-semibold opacity-80 uppercase tracking-wider truncate mt-0.5">
                                {k}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Architectural Highlights Bullet Points */}
                    <div className="space-y-2 mb-6">
                      {project.highlights.slice(0, 2).map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Modern Compact Tech Stack Pills */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-rose-50 hover:text-rose-800 hover:border-rose-200/90 transition-all duration-200 cursor-default shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SaaS Card Footer Actions */}
                <div className="px-7 sm:px-9 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-slate-700 hover:text-rose-700 flex items-center gap-1.5 transition-colors group/btn"
                  >
                    <Layers className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-rose-600 transition-colors" />
                    <span>Detailed Architecture</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-white border border-slate-200/90 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-xs"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-rose-800 to-maroon-950 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study & Architecture Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/80">
                      {selectedProject.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 font-mono">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-rose-700 font-medium mt-0.5">
                    {selectedProject.tagline}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Stats Bar */}
              <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-center">
                {Object.entries(selectedProject.stats).map(([k, v]) => (
                  <div key={k}>
                    <div className="font-extrabold text-sm text-slate-900">{v}</div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider truncate mt-0.5">{k}</div>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-600" />
                <span>Core Architectural Highlights</span>
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-slate-500" />
                <span>Tech Stack & Libraries</span>
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Modal Footer Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/90 hover:bg-slate-100 flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-rose-800 to-maroon-950 hover:shadow-md flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
