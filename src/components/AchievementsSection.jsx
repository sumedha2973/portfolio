import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Trophy, 
  Code2, 
  Terminal, 
  GraduationCap, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  BarChart3, 
  Bot, 
  ArrowUpRight 
} from 'lucide-react';
import { certificationsAndAchievements } from '../data/portfolioData';

// 8 curated achievements and certifications matching the 4x2 grid reference design
const achievementsList = [
  {
    id: 'deloitte',
    title: 'Deloitte Simulation',
    subtitle: 'Data Analysis & Storytelling Simulation',
    issuer: 'Deloitte Australia',
    icon: Award,
    iconBg: 'bg-rose-50 text-rose-600 border-rose-200/80',
    iconGradient: 'from-rose-500/20 to-pink-500/10',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/deloitte-sumedha.pdf',
    badge: 'Deloitte Verified'
  },
  {
    id: 'cisco-python',
    title: 'Cisco Certified Python',
    subtitle: 'Core Python & Object-Oriented Basics',
    issuer: 'Cisco Networking Academy',
    icon: Terminal,
    iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-200/80',
    iconGradient: 'from-indigo-500/20 to-blue-500/10',
    link: 'https://www.credly.com/org/cisco/sumedha',
    badge: 'Cisco Credential'
  },
  {
    id: 'hackathon',
    title: 'Smart Tech Finalist',
    subtitle: 'Top 5 Finalist in 36-Hour Hackathon',
    issuer: 'Smart Tech Challenge',
    icon: Trophy,
    iconBg: 'bg-amber-50 text-amber-600 border-amber-200/80',
    iconGradient: 'from-amber-500/20 to-rose-500/10',
    link: '#hackathons',
    badge: 'Top 5 Finalist'
  },
  {
    id: 'leetcode',
    title: '250+ LeetCode Solved',
    subtitle: 'C++ Algorithmic Problem Solving',
    issuer: 'Competitive Programming',
    icon: Code2,
    iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
    iconGradient: 'from-emerald-500/20 to-teal-500/10',
    link: 'https://leetcode.com/sumedha-codes',
    badge: '250+ Solved'
  },
  {
    id: 'mca-honors',
    title: 'MCA Academic Honors',
    subtitle: 'Strong Academic Standing & Peer Study',
    issuer: 'Dept. of Computer Applications',
    icon: GraduationCap,
    iconBg: 'bg-purple-50 text-purple-600 border-purple-200/80',
    iconGradient: 'from-purple-500/20 to-pink-500/10',
    link: '#college',
    badge: 'Academic Honors'
  },
  {
    id: 'powerbi-analytics',
    title: 'Power BI & DAX',
    subtitle: 'Interactive Dashboards & Data Modeling',
    issuer: 'Business Intelligence',
    icon: BarChart3,
    iconBg: 'bg-pink-50 text-pink-600 border-pink-200/80',
    iconGradient: 'from-pink-500/20 to-rose-500/10',
    link: '#data-analytics',
    badge: 'BI Modeling'
  },
  {
    id: 'crewai-agents',
    title: 'Applied AI Projects',
    subtitle: 'Conversational LLMs & Agent Workflows',
    issuer: 'Hands-on Projects',
    icon: Bot,
    iconBg: 'bg-sky-50 text-sky-600 border-sky-200/80',
    iconGradient: 'from-sky-500/20 to-indigo-500/10',
    link: '#projects',
    badge: 'Applied AI'
  },
  {
    id: 'fullstack-builder',
    title: 'Full-Stack Web Apps',
    subtitle: 'React, Tailwind CSS & REST APIs',
    issuer: 'Academic & Personal',
    icon: ShieldCheck,
    iconBg: 'bg-rose-50 text-rose-700 border-rose-200/80',
    iconGradient: 'from-rose-500/20 to-maroon-500/10',
    link: 'https://github.com/sumedha-dev',
    badge: 'Web Projects'
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 sm:py-32 relative bg-gradient-to-b from-transparent via-[#fdf7f9]/50 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Reference Image */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/80 border border-rose-200/90 text-rose-900 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Milestones & Recognition</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Awards & Achievements
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Milestones, certifications, and hackathon recognitions reflecting my continuous learning as an MCA student.
          </p>
        </div>

        {/* 4-Column x 2-Row Card Grid Matching Reference Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          {achievementsList.map((item, idx) => {
            const Icon = item.icon;
            const isExternal = item.link.startsWith('http');

            return (
              <motion.a
                key={item.id}
                href={item.link}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 hover:border-rose-300/80 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-rose-100/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between group relative overflow-hidden cursor-pointer"
              >
                {/* Subtle Top Border Gradient on Hover */}
                <div className="h-1 w-full absolute top-0 left-0 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle Hover Link Indicator */}
                <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-rose-600">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                <div className="flex flex-col items-center">
                  {/* Circular Badge / Icon Matching Reference Avatars */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border flex items-center justify-center mb-4 sm:mb-5 shadow-2xs group-hover:scale-110 transition-transform duration-300 relative ${item.iconBg}`}>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.iconGradient} opacity-70`} />
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
                  </div>

                  {/* Achievement Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-rose-950 transition-colors tracking-tight mb-1.5">
                    {item.title}
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                {/* Subtle Category / Issuer Tag */}
                <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center">
                  <span className="text-[11px] font-semibold text-slate-400 group-hover:text-rose-700 transition-colors">
                    {item.issuer}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
