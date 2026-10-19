import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Layout, 
  Server, 
  Database, 
  Bot,
  Terminal,
  Code2,
  Workflow
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsSection() {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Layout,
      iconClass: 'bg-rose-50 text-rose-600 border-rose-100',
      titleColor: 'text-rose-800',
      bulletColor: 'bg-rose-500',
      skills: [
        'React.js & Hooks',
        'JavaScript (ES6+)',
        'Tailwind CSS',
        'HTML5 & CSS3',
        'State Management (Context & Redux)',
        'Responsive Web Design'
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: Server,
      iconClass: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      titleColor: 'text-indigo-800',
      bulletColor: 'bg-indigo-500',
      skills: [
        'C++ (OOP & STL)',
        'Data Structures & Algorithms',
        'LeetCode (250+ Solved)',
        'Python & Flask APIs',
        'RESTful Web Services',
        'Git & GitHub Workflows'
      ]
    },
    {
      id: 'database',
      title: 'Database & Analytics',
      icon: Database,
      iconClass: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      titleColor: 'text-emerald-800',
      bulletColor: 'bg-emerald-500',
      skills: [
        'SQL / MySQL (Complex Queries)',
        'Pandas & NumPy',
        'Power BI & DAX Metrics',
        'Microsoft Excel (Pivots & Macros)',
        'Data Cleaning & EDA',
        'Data Visualization (Plotly & Seaborn)'
      ]
    },
    {
      id: 'devops-ai',
      title: 'DevOps & AI Tools',
      icon: Bot,
      iconClass: 'bg-purple-50 text-purple-600 border-purple-100',
      titleColor: 'text-purple-800',
      bulletColor: 'bg-purple-500',
      skills: [
        'CrewAI (Multi-Agents)',
        'Ollama (Local LLMs)',
        'Google Gemini APIs',
        'Git & GitHub CI/CD',
        'Jupyter Notebooks',
        'VS Code & Postman'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-gradient-to-b from-transparent via-[#fdf7f9]/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Reference Image */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/80 border border-rose-200/90 text-rose-900 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Core technical toolkit spanning data analytics, modern frontend development, and algorithmic problem solving as an MCA student.
          </p>
        </div>

        {/* 4-Column Cards Grid Matching Reference Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-2xl bg-white border border-slate-200/90 hover:border-rose-300/80 p-7 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-rose-100/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Top Accent Line on Hover */}
                <div className="h-1 w-full absolute top-0 left-0 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Category Icon Matching Reference */}
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 shadow-2xs group-hover:scale-110 transition-transform duration-300 ${category.iconClass}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Category Title Matching Reference */}
                  <h3 className={`text-xl font-bold tracking-tight mb-5 ${category.titleColor} group-hover:text-slate-900 transition-colors`}>
                    {category.title}
                  </h3>

                  {/* Bulleted Skills List with Colored Dots */}
                  <ul className="space-y-3.5">
                    {category.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-center gap-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 group/item transition-colors"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 group-hover/item:scale-125 transition-transform ${category.bulletColor}`} />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
