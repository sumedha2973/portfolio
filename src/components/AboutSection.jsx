import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BarChart2, CheckCircle2, Sparkles, BookOpen, Layers, TrendingUp, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function AboutSection() {
  const stats = [
    { value: "15+", label: "Data & Web Projects", note: "Academic & Personal" },
    { value: "250+", label: "LeetCode DSA Solved", note: "C++ & Python" },
    { value: "50K+", label: "Data Rows Analyzed", note: "Retail & HR Datasets" },
    { value: "MCA", label: "Master of Computer Apps", note: "Active Student • 2023–2025" },
  ];

  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-transparent via-[#faedf1]/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-maroon-100/80 border border-maroon-200 text-maroon-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-maroon-600" />
            <span>About Me • Growth & Curiosity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#250d18] tracking-tight">
            Curiosity for Data, Passion for Clean Code
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            I'm an MCA student driven by a genuine love for learning: excavating actionable insights buried in complex datasets, and writing elegant, reliable code that brings ideas to life.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Data Stories & Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-[#fff9fb] to-[#faedf2] border border-rose-200/70 shadow-sm hover:shadow-xl hover:shadow-pink-100/70 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-maroon-900 to-rose-600 text-white flex items-center justify-center shadow-md shadow-maroon-900/15 group-hover:scale-110 transition-transform duration-300">
                  <BarChart2 className="w-6 h-6" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200/80 text-[11px] font-bold text-maroon-900 uppercase tracking-wider">
                  <TrendingUp className="w-3.5 h-3.5 text-rose-600" />
                  <span>SQL • Power BI</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-maroon-950 mb-3">
                Data Stories & Analytics
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                Finding clear answers in messy data. Querying relational tables with SQL, building interactive Power BI dashboards, and identifying practical trends for better decision making.
              </p>
            </div>

            {/* Mini visual + tags */}
            <div className="mt-5 pt-4 border-t border-rose-100/90 flex flex-col gap-3">
              <div className="flex items-end gap-2 h-12 px-3 py-1.5 rounded-xl bg-white/80 border border-rose-100 shadow-inner w-full justify-between">
                <div className="flex items-end gap-1.5 h-full">
                  <div className="w-3 bg-rose-200 rounded-t-sm h-5 group-hover:h-7 transition-all duration-300" />
                  <div className="w-3 bg-rose-300 rounded-t-sm h-8 group-hover:h-9 transition-all duration-300 delay-75" />
                  <div className="w-3 bg-maroon-600 rounded-t-sm h-7 group-hover:h-9 transition-all duration-300 delay-100" />
                  <div className="w-3 bg-maroon-800 rounded-t-sm h-10 group-hover:h-11 transition-all duration-300 delay-150" />
                  <div className="w-3 bg-rose-500 rounded-t-sm h-6 group-hover:h-8 transition-all duration-300 delay-200" />
                </div>
                <span className="text-[11px] font-bold text-maroon-900 self-center">50K+ Records</span>
              </div>

              <div className="flex flex-wrap gap-1.5 text-xs font-semibold text-maroon-900">
                <span className="px-2.5 py-0.5 rounded-full bg-white border border-rose-200/80 shadow-2xs">Python</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white border border-rose-200/80 shadow-2xs">SQL Joins</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white border border-rose-200/80 shadow-2xs">DAX</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: DSA & C++ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#240612] via-[#3b0b1e] to-[#18040c] text-white border border-rose-900/40 shadow-xl shadow-maroon-950/25 hover:shadow-2xl hover:shadow-maroon-900/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-rose-300 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-6 h-6 text-rose-300" />
                </div>
                <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-[11px] font-bold text-rose-200 tracking-wide">
                  C++ • LeetCode
                </span>
              </div>

              <div className="mb-4">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-rose-300 to-white tracking-tight">
                  250+
                </div>
                <p className="text-xs uppercase font-bold tracking-wider text-rose-300/90 mt-1">
                  Problems Solved & Verified
                </p>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                DSA & C++
              </h3>
              <p className="text-xs sm:text-sm text-rose-100/80 leading-relaxed">
                Practicing core computer science problem solving in C++. Focused on arrays, trees, dynamic programming, and writing clean, space-optimized algorithms.
              </p>
            </div>

            {/* Mini Terminal Code Snippet */}
            <div className="mt-5 pt-4 border-t border-white/10 font-mono text-[11px] text-rose-200/90 flex items-center justify-between bg-black/30 px-3.5 py-2 rounded-xl border border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>solve(vector&lt;int&gt;&amp; nums)</span>
              </div>
              <span className="text-[10px] text-rose-400 font-bold">O(N log N)</span>
            </div>
          </motion.div>

          {/* Card 3: Modern Web Craft (Streamlined & Clean) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-7 sm:p-8 rounded-3xl bg-white border border-rose-200/80 shadow-sm hover:shadow-xl hover:shadow-pink-100/70 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-maroon-900 to-rose-600 text-white flex items-center justify-center shadow-md shadow-maroon-900/15 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-rose-100/70 border border-rose-200/80 text-[11px] font-bold text-maroon-900 tracking-wide">
                  Frontend Craft
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-maroon-950 mb-3">
                Modern Web Craft
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
                Building responsive, accessible web interfaces with React and Tailwind CSS. Focused on clean component structure, predictable state, and intuitive user experiences.
              </p>
            </div>

            {/* Clean, lightweight tags */}
            <div className="mt-5 pt-4 border-t border-rose-100 flex flex-wrap gap-2 text-xs font-semibold text-maroon-900">
              <span className="px-3 py-1 rounded-lg bg-rose-50/80 border border-rose-200/70 text-[11px]">React</span>
              <span className="px-3 py-1 rounded-lg bg-rose-50/80 border border-rose-200/70 text-[11px]">Tailwind CSS</span>
              <span className="px-3 py-1 rounded-lg bg-rose-50/80 border border-rose-200/70 text-[11px]">JavaScript</span>
              <span className="px-3 py-1 rounded-lg bg-rose-50/80 border border-rose-200/70 text-[11px]">REST APIs</span>
            </div>
          </motion.div>

        </div>

        {/* Growth & Active Learning Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-rose-50/90 via-white to-rose-50/90 border border-maroon-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-maroon-900 to-rose-600 text-white flex items-center justify-center font-bold text-lg shadow-sm flex-shrink-0">
              🌱
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-maroon-950">
                Active Builder & Continuous Learner
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                Actively solving daily DSA challenges in C++, digging into retail & HR datasets, and building hands-on web projects.
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-maroon-200 text-xs font-bold text-maroon-900 shadow-sm whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>MCA Student • 2023–2025</span>
          </div>
        </motion.div>

        {/* Detailed Bio & Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Narrative Story */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-maroon-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-maroon-700 font-semibold text-xs uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4" />
                <span>My Journey & Philosophy</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-maroon-950 mb-4">
                "Where curiosity for data meets the joy of building software."
              </h3>
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <p>
                  I’m an MCA student working at the intersection of data analytics and software engineering. Driven by curiosity, I love transforming messy, complex datasets into clear, actionable stories—whether that means modeling retention drivers in SQL and Power BI or uncovering operational trends that inform real business decisions.
                </p>
                <p>
                  Alongside analytics, I build responsive web applications with React, Python, and C++. With a solid foundation in data structures and 250+ LeetCode problems solved, my focus is on writing clean, dependable code that connects analytical findings with intuitive user interfaces.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-maroon-100 flex flex-wrap gap-4 text-xs font-semibold text-maroon-900">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" /> Relational SQL & Optimization
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" /> Exploratory Data Analysis (EDA)
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" /> Modern Frontend Engineering
              </span>
            </div>
          </div>

          {/* Key Metrics / Education Card */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Education box */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#470f21] via-[#751c37] to-[#99294b] text-white shadow-xl shadow-maroon-950/15">
              <div className="flex items-center gap-2 text-rose-200 text-xs font-bold uppercase tracking-wider mb-2">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Foundation</span>
              </div>
              <h4 className="text-xl font-bold">Master of Computer Applications (MCA)</h4>
              <p className="text-rose-100/90 text-xs sm:text-sm mt-1">
                Postgraduate degree focused on Advanced Database Management, Software Engineering, Algorithms & Cloud Technologies.
              </p>
              <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-rose-100">
                <span>Top Academic Tier</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 font-bold">2023 - 2025</span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              {stats.map((s, idx) => (
                <div
                  key={s.label}
                  className="p-5 rounded-2xl bg-white/90 border border-maroon-100 shadow-sm flex flex-col justify-center"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-maroon-900 to-rose-600">
                    {s.value}
                  </span>
                  <span className="text-xs font-bold text-maroon-950 mt-1">
                    {s.label}
                  </span>
                  <span className="text-[11px] text-gray-500 mt-0.5">
                    {s.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
