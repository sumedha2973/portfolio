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
  ArrowRight,
  Globe,
  User,
  Calendar,
  Zap
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

// Visual details, photography, and metadata mapped to each project
const projectDetails = {
  'mental-health-chatbot': {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    domain: 'Conversational AI',
    role: 'Full-Stack Developer',
    year: '2024',
    metric: 'Multi-Agent Flow'
  },
  'tripnova': {
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    domain: 'Travel Planner App',
    role: 'Full-Stack Developer',
    year: '2024',
    metric: '120+ Destinations'
  },
  'abtalks': {
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    domain: 'Discussion Hub',
    role: 'Frontend Developer',
    year: '2023',
    metric: '40+ Topics'
  },
  'task-management': {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    domain: 'Productivity Tool',
    role: 'Frontend Developer',
    year: '2023',
    metric: 'Kanban Workflow'
  }
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-gradient-to-b from-transparent via-[#fcf3f6]/40 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Reference Image */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/80 border border-rose-200/90 text-rose-900 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Featured Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Selected academic and personal projects demonstrating hands-on work in data analysis, modern web development, and software problem solving.
          </p>
        </div>

        {/* Alternating Zig-Zag Project Showcase */}
        <div className="space-y-24 sm:space-y-32">
          {featuredProjects.map((project, idx) => {
            const meta = projectDetails[project.id] || {
              image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
              domain: project.category || 'Software Engineering',
              role: 'Developer',
              year: '2024',
              metric: 'Working Prototype'
            };

            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center group"
              >
                {/* Project Image Column (Alternating Left/Right) */}
                <div
                  className={`lg:col-span-6 xl:col-span-7 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-md group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={meta.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Floating Key Metric Pill Badge */}
                    <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-slate-800 shadow-sm border border-white/60">
                      <Zap className="w-3.5 h-3.5 text-rose-600" />
                      <span>{meta.metric}</span>
                    </div>
                  </div>
                </div>

                {/* Content & Details Column */}
                <div
                  className={`lg:col-span-6 xl:col-span-5 flex flex-col justify-center ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  {/* Tech Stack Pills (Top) */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60 hover:bg-rose-50 hover:text-rose-800 hover:border-rose-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight group-hover:text-rose-950 transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Metadata Row with Icons (Matching Reference Image) */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-500 mb-8 pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>Domain:</span>
                      <span className="font-semibold text-slate-800">{meta.domain}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>Role:</span>
                      <span className="font-semibold text-slate-800">{meta.role}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>Year:</span>
                      <span className="font-semibold text-slate-800">{meta.year}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Primary Dark Button Matching Reference "View Project ->" */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#14080e] hover:bg-rose-950 text-white shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    {/* Secondary GitHub Source Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs sm:text-sm font-bold bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>

                    {/* Architecture Details Modal Trigger */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs sm:text-sm font-bold text-rose-800 bg-rose-50 border border-rose-200/70 hover:bg-rose-100 transition-all"
                    >
                      <Layers className="w-4 h-4 text-rose-600" />
                      <span>Architecture</span>
                    </button>
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
