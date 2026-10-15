import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDown, ChevronDown, CheckCircle2, Sparkles, Code2, BarChart3, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { resumeOptions } from '../data/portfolioData';

export default function DualResumeDropdown({ onOpenResumeModal, variant = 'nav' }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDownload = (option, e) => {
    e.stopPropagation();
    setIsOpen(false);

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#bd2f5a', '#e47193', '#d44772', '#ffd1dc']
    });

    // Open detailed resume modal for high quality review & printing
    if (onOpenResumeModal) {
      onOpenResumeModal(option.id);
    }
  };

  const isNav = variant === 'nav';

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Primary Split Action or Single Dropdown Button */}
      <div className="inline-flex items-center rounded-full shadow-md shadow-maroon-900/10 border border-maroon-600/40 bg-gradient-to-r from-maroon-800 via-maroon-700 to-rose-700 text-white font-medium transition-all hover:shadow-lg hover:shadow-maroon-900/20 hover:scale-[1.02] active:scale-[0.98]">
        {/* Primary Action Button */}
        <button
          onClick={(e) => handleDownload(resumeOptions[0], e)}
          className={`flex items-center gap-2 ${isNav ? 'px-3.5 py-2 text-xs sm:text-sm' : 'px-5 py-3 text-sm sm:text-base font-semibold'} border-r border-white/20 hover:bg-white/10 transition-colors rounded-l-full`}
          title="Download Primary Data Analyst Resume"
        >
          <BarChart3 className={isNav ? "w-3.5 h-3.5 text-rose-200" : "w-4 h-4 text-rose-200"} />
          <span>Download Data Analyst Resume</span>
        </button>

        {/* Secondary Dropdown Toggle Arrow */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center ${isNav ? 'px-2.5 py-2' : 'px-3.5 py-3'} hover:bg-white/10 transition-colors rounded-r-full`}
          aria-expanded={isOpen}
          aria-label="Toggle resume options"
          title="Choose Software Developer Resume"
        >
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`absolute right-0 mt-2 ${isNav ? 'w-72 sm:w-80' : 'w-80 sm:w-96'} rounded-2xl bg-white/95 backdrop-blur-xl border border-maroon-200 shadow-2xl shadow-maroon-950/20 p-2 z-50 overflow-hidden`}
          >
            <div className="px-3 py-2 border-b border-maroon-100/80 mb-1">
              <span className="text-[11px] uppercase font-bold tracking-wider text-maroon-600 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-maroon-500" />
                Select Tailored Resume
              </span>
            </div>

            {/* Option 1: Data Analyst */}
            <button
              onClick={(e) => handleDownload(resumeOptions[0], e)}
              className="w-full text-left p-3 rounded-xl hover:bg-maroon-50 transition-colors group flex items-start gap-3 border border-transparent hover:border-maroon-200/60"
            >
              <div className="p-2 rounded-lg bg-maroon-100 text-maroon-700 group-hover:bg-maroon-700 group-hover:text-white transition-colors">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-semibold text-xs sm:text-sm text-maroon-950 group-hover:text-maroon-700">
                    Data Analyst Resume
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">
                    Primary
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-2">
                  SQL, Python, Pandas, Power BI, DAX, Statistical Modeling & Dashboards.
                </p>
              </div>
              <FileDown className="w-4 h-4 text-maroon-400 group-hover:text-maroon-700 shrink-0 mt-1" />
            </button>

            {/* Option 2: Software / Web Developer */}
            <button
              onClick={(e) => handleDownload(resumeOptions[1], e)}
              className="w-full text-left p-3 rounded-xl hover:bg-maroon-50 transition-colors group flex items-start gap-3 border border-transparent hover:border-maroon-200/60 mt-1"
            >
              <div className="p-2 rounded-lg bg-dusty-100 text-maroon-800 group-hover:bg-maroon-800 group-hover:text-white transition-colors">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-semibold text-xs sm:text-sm text-maroon-950 group-hover:text-maroon-700">
                    Software / Web Dev Resume
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                    Full-Stack
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-2">
                  React, JavaScript, C++, DSA (250+ LeetCode), Flask, REST APIs & AI Agents.
                </p>
              </div>
              <FileDown className="w-4 h-4 text-maroon-400 group-hover:text-maroon-700 shrink-0 mt-1" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
