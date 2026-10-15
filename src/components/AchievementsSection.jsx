import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink, Sparkles, Trophy, Calendar, ShieldCheck, Flame, BookOpen } from 'lucide-react';
import { certificationsAndAchievements } from '../data/portfolioData';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 relative bg-gradient-to-b from-transparent via-[#faebef]/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-maroon-100/80 border border-maroon-200 text-maroon-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-maroon-600" />
            <span>Milestones & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#250d18] tracking-tight">
            Certifications & Hackathon Highlights
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Industry credentials from global organizations and competitive hackathon honors proving problem-solving under pressure.
          </p>
        </div>

        {/* Certifications & Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {certificationsAndAchievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-maroon-100/90 shadow-sm hover:shadow-xl hover:shadow-maroon-950/5 hover:-translate-y-1 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-maroon-100 text-maroon-800 border border-maroon-200 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-maroon-600" />
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-maroon-950 group-hover:text-maroon-800 transition-colors mb-1">
                  {item.title}
                </h3>
                <div className="text-xs sm:text-sm font-semibold text-maroon-700 mb-3">
                  Issued by {item.issuer}
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Skills gained */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#faf3f5] text-maroon-900 border border-maroon-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t border-maroon-100/70 flex items-center justify-between">
                <span className="text-xs font-bold text-maroon-900">
                  {item.type}
                </span>
                <a
                  href={item.credentialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-maroon-700 hover:text-maroon-950 transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathon Photo & Sprint Spotlight Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#440f20] via-[#6f1b34] to-[#99284a] text-white shadow-xl shadow-maroon-950/15 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-rose-200 text-xs font-bold uppercase tracking-wider mb-3">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Competitive Coding & Innovation Sprint</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
                36-Hour Hackathon High-Pressure Prototyping
              </h3>
              <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed max-w-2xl">
                Collaborated in cross-functional agile teams under stringent time deadlines. Architected data schemas, built responsive frontend components, and delivered working interactive MVPs presented directly to industry juries.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="text-2xl font-black text-rose-200">Top 5%</div>
                <div className="text-xs text-rose-100">National Finalist Ranking</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="text-2xl font-black text-rose-200">100%</div>
                <div className="text-xs text-rose-100">Project Delivery On Time</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
