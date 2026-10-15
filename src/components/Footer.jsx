import React from 'react';
import { ArrowUp, Heart, Sparkles, Github, Linkedin, Code, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResumeModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-[#250a14] to-[#3a101f] text-rose-100/90 pt-16 pb-12 border-t border-maroon-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
          
          {/* Brand info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-300 flex items-center justify-center text-maroon-950 font-black text-base shadow-md">
                S
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Sumedha
              </span>
            </div>
            <p className="text-xs sm:text-sm text-rose-200/80 max-w-md leading-relaxed">
              MCA Scholar bridging Data Analytics, Software Engineering, and AI/Web Development. Focused on turning raw metrics into business value.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-rose-200 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-rose-200 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-rose-200 hover:text-white transition-colors"
                title="LeetCode"
              >
                <Code className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-rose-200 hover:text-white transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-3">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-rose-200/80">
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Core Skills Matrix</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Featured Projects</a></li>
              <li><a href="#data-analytics" className="hover:text-white transition-colors">Data Analytics Highlights</a></li>
              <li><a href="#achievements" className="hover:text-white transition-colors">Certifications & Hackathons</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact & Socials</a></li>
            </ul>
          </div>

          {/* Resumes & Actions */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-3">
              Resume Downloads
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={() => onOpenResumeModal('data-analyst')}
                className="block text-left text-rose-200 hover:text-white transition-colors font-medium"
              >
                📊 Data Analyst Resume (PDF)
              </button>
              <button
                onClick={() => onOpenResumeModal('software-dev')}
                className="block text-left text-rose-200 hover:text-white transition-colors font-medium"
              >
                💻 Software & Web Resume (PDF)
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-300/70">
          <div className="flex items-center gap-1.5">
            <span>Designed & Engineered by Sumedha</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" /> for Code & Data
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-xs font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
