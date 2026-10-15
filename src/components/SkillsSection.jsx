import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Code2, 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  Cpu,
  Terminal,
  Zap,
  Workflow
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsSection() {
  const stackCategories = [
    {
      id: 'dataAnalytics',
      title: 'Data Analytics & BI',
      badgeText: 'Analytics Core',
      icon: BarChart3,
      accentLine: 'from-pink-500 via-rose-500 to-pink-400',
      iconBadgeClass: 'bg-pink-50 text-pink-600 border-pink-200/80',
      description: 'From messy exploratory wrangling to executive dashboards. I transform raw transactional records into normalized schemas, statistical models, and clear business intelligence.',
      builderNote: 'Regularly analyzing 500k+ row datasets & building automated KPI reporting.',
      items: [
        { name: 'Python', role: 'Automation & Modeling', highlight: true, tint: 'bg-pink-50 text-pink-700 border-pink-200/90' },
        { name: 'SQL / MySQL', role: 'Complex CTEs & Joins', highlight: true, tint: 'bg-pink-50 text-pink-700 border-pink-200/90' },
        { name: 'Pandas & NumPy', role: 'Data Wrangling' },
        { name: 'Power BI & DAX', role: 'Interactive BI Dashboards', highlight: true, tint: 'bg-pink-50 text-pink-700 border-pink-200/90' },
        { name: 'Microsoft Excel', role: 'Advanced Pivots & Macros' },
        { name: 'Data Cleaning & EDA', role: 'Outlier Detection & Hygiene' },
        { name: 'Data Visualization', role: 'Matplotlib, Seaborn & Plotly' },
        { name: 'Statistical Modeling', role: 'Cohort & Trend Evaluation' },
      ]
    },
    {
      id: 'softwareWeb',
      title: 'Software & Web Craft',
      badgeText: 'Full-Stack & Systems',
      icon: Code2,
      accentLine: 'from-indigo-500 via-blue-500 to-cyan-400',
      iconBadgeClass: 'bg-indigo-50 text-indigo-600 border-indigo-200/80',
      description: 'Grounded in computer science fundamentals and responsive user experiences. Writing clean, modular code with optimized time complexity and component-driven architecture.',
      builderNote: 'Practicing daily DSA challenges in C++ & architecting full-stack web applications.',
      items: [
        { name: 'C++', role: 'OOP & Memory Management', highlight: true, tint: 'bg-indigo-50 text-indigo-700 border-indigo-200/90' },
        { name: 'DSA & Algorithms', role: 'Trees, Graphs, DP & Arrays', highlight: true, tint: 'bg-indigo-50 text-indigo-700 border-indigo-200/90' },
        { name: 'LeetCode (250+ Solved)', role: 'Optimized Time & Space Complexity', highlight: true, tint: 'bg-indigo-50 text-indigo-700 border-indigo-200/90' },
        { name: 'React.js', role: 'Hooks, SPA & State Management', highlight: true, tint: 'bg-indigo-50 text-indigo-700 border-indigo-200/90' },
        { name: 'JavaScript (ES6+)', role: 'Async/Await & DOM APIs' },
        { name: 'Tailwind CSS', role: 'Modern Responsive Design' },
        { name: 'Flask', role: 'RESTful Python APIs' },
        { name: 'Git & GitHub', role: 'Branching & Version Control' },
      ]
    },
    {
      id: 'aiTools',
      title: 'Applied AI & Tools',
      badgeText: 'Autonomous Agents',
      icon: Bot,
      accentLine: 'from-purple-500 via-pink-500 to-rose-400',
      iconBadgeClass: 'bg-purple-50 text-purple-600 border-purple-200/80',
      description: 'Harnessing autonomous agentic pipelines and modern developer tooling. Connecting local and cloud LLMs with structured outputs, task delegation, and reproducible notebooks.',
      builderNote: 'Building multi-agent autonomous teams & testing private local inference.',
      items: [
        { name: 'CrewAI', role: 'Multi-Agent Orchestration', highlight: true, tint: 'bg-purple-50 text-purple-700 border-purple-200/90' },
        { name: 'Ollama', role: 'Local LLM Execution', highlight: true, tint: 'bg-purple-50 text-purple-700 border-purple-200/90' },
        { name: 'Gemini API', role: 'Multimodal AI & JSON Outputs', highlight: true, tint: 'bg-purple-50 text-purple-700 border-purple-200/90' },
        { name: 'Jupyter Notebooks', role: 'Reproducible Data Science' },
        { name: 'VS Code & Postman', role: 'Developer Environment & API Testing' },
        { name: 'Autonomous Workflows', role: 'Task Pipelines & Guardrails' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-gradient-to-b from-transparent via-[#fdf7f9]/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/80 border border-rose-200/90 text-rose-900 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Modern Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Tech Stack Showcase
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A practical, modern toolchain spanning data analytics, algorithmic engineering, responsive web applications, and applied autonomous AI systems.
          </p>
        </div>

        {/* 3-Column Minimalist Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {stackCategories.map((category, idx) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="rounded-3xl bg-white border border-slate-200/80 hover:border-rose-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"
              >
                {/* Top Subtle Gradient Accent Line */}
                <div className={`h-1.5 w-full bg-slate-100 transition-all duration-500 bg-gradient-to-r ${category.accentLine}`} />

                {/* Card Main Body */}
                <div className="p-7 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Header: Icon & Category Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className={`p-3 rounded-2xl border shadow-2xs ${category.iconBadgeClass}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${category.iconBadgeClass}`}>
                        {category.badgeText}
                      </span>
                    </div>

                    {/* Category Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-rose-950 transition-colors tracking-tight mb-2.5">
                      {category.title}
                    </h3>

                    {/* Authentic Natural Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {category.description}
                    </p>

                    {/* Tactile Tag Pills & Floating Badges */}
                    <div className="mb-6">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-slate-400" />
                        <span>Core Tools & Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {category.items.map((item) => {
                          const isHighlight = item.highlight;
                          const customTint = item.tint || 'bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-rose-50 hover:text-rose-800 hover:border-rose-200/90';

                          return (
                            <div
                              key={item.name}
                              className={`group/pill inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default select-none ${
                                isHighlight ? item.tint : customTint
                              }`}
                              title={item.role}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                isHighlight ? 'bg-current' : 'bg-slate-400 group-hover/pill:bg-rose-500'
                              }`} />
                              <span>{item.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Builder Focus Note */}
                  <div className="pt-4 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-600 bg-slate-50/70 p-3.5 rounded-2xl border border-slate-200/60">
                    <Zap className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">
                      {category.builderNote}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
