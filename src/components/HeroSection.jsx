import React, { useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';
import HeroCharacter from './HeroCharacter';
import DualResumeDropdown from './DualResumeDropdown';

export default function HeroSection({ onOpenResumeModal }) {
  const heroSectionRef = useRef(null);

  // Mutable ref storing normalized coordinates for zero-re-render rAF tracking
  const mouseCoordsRef = useRef({ x: 0, y: 0, active: false });

  // Symmetrical mousemove calculation from character anchor
  const handleMouseMove = useCallback((e) => {
    if (!heroSectionRef.current) return;
    const rect = heroSectionRef.current.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const isDesktop = window.innerWidth >= 1024;
    // Character head anchor: around 68% width and 45% height on desktop
    const anchorX = isDesktop ? rect.left + rect.width * 0.68 : rect.left + rect.width * 0.5;
    const anchorY = isDesktop ? rect.top + rect.height * 0.45 : rect.top + rect.height * 0.55;

    // Symmetrical half-span for balanced left and right reach
    const halfSpanX = isDesktop ? rect.width * 0.55 : rect.width * 0.5;
    const halfSpanY = rect.height * 0.5;

    const normX = Math.max(-1, Math.min(1, (e.clientX - anchorX) / halfSpanX));
    const normY = Math.max(-1, Math.min(1, (e.clientY - anchorY) / halfSpanY));

    // Window-relative horizontal fraction:
    // Left Zone (0% to ~45%): windowFracX < 0.45
    // Right Zone (~55% to 100%): windowFracX > 0.55
    // Center Zone (~45% to ~55%): 0.45 <= windowFracX <= 0.55
    const windowFracX = e.clientX / window.innerWidth;
    let windowZone = 'center';
    if (windowFracX < 0.45) {
      windowZone = 'left';
    } else if (windowFracX > 0.55) {
      windowZone = 'right';
    }

    mouseCoordsRef.current.x = normX;
    mouseCoordsRef.current.y = normY;
    mouseCoordsRef.current.windowFracX = windowFracX;
    mouseCoordsRef.current.windowZone = windowZone;
    mouseCoordsRef.current.active = true;
  }, []);

  // Mouseleave handler: automatically and smoothly glides target back to (0, 0)
  const handleMouseLeave = useCallback(() => {
    mouseCoordsRef.current.x = 0;
    mouseCoordsRef.current.y = 0;
    mouseCoordsRef.current.windowFracX = 0.5;
    mouseCoordsRef.current.windowZone = 'center';
    mouseCoordsRef.current.active = false;
  }, []);

  return (
    <section
      ref={heroSectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-screen pt-24 lg:pt-24 pb-0 flex flex-col justify-end overflow-hidden"
      style={{
        // Soft, elegant background gradient: dusty-rose/light-maroon edges transitioning to bright white in center
        background: 'radial-gradient(ellipse 95% 85% at 68% 60%, #ffffff 28%, #fdf2f5 50%, #f7dbe3 72%, #deb1c0 90%, #8e2b4b 100%)',
      }}
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-rose-200/35 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-maroon-200/30 blur-3xl pointer-events-none -z-10" />

      {/* Expansive layout container allowing character to dominate the right side */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 w-full flex-1 flex flex-col justify-end">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">
          
          {/* Left Column: Clean Minimal Branding & Guidance (lg:col-span-5 xl:col-span-4) */}
          <div className="lg:col-span-5 xl:col-span-4 pb-8 sm:pb-12 lg:pb-24 z-20 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* 1. Journey Status Badge: MCA Student • Data Analytics & Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-maroon-200/80 shadow-sm shadow-maroon-900/5 mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-maroon-900 tracking-wide uppercase">
                MCA Student • Data Analytics & Web Development
              </span>
            </motion.div>

            {/* 2. Heading: "I'm Sumedha — Data Analyst & Web Developer" */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#220914] tracking-tight leading-[1.14]"
            >
              I'm <span className="text-maroon-900">Sumedha</span> —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-800 via-maroon-600 to-rose-600">
                Data Analyst & Web Developer
              </span>
            </motion.h1>

            {/* Grounded & Approachable Intro */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 text-sm sm:text-base text-gray-700 max-w-lg leading-relaxed"
            >
              Curious about the stories hidden in numbers, passionate about solving algorithmic puzzles, and building clean web apps that people genuinely love using.
            </motion.p>

            {/* Growth & Active Learning Note */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-maroon-900 bg-rose-50/90 border border-rose-200/90 px-3.5 py-1.5 rounded-full shadow-sm"
            >
              <span className="text-rose-600 font-bold">⚡</span>
              <span>Currently: Solving 250+ DSA in C++ & analyzing open retail datasets</span>
            </motion.div>

            {/* 3. Subtext: "Move cursor to call me !" with cursor icon */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 flex items-center justify-center lg:justify-start gap-2.5 text-sm sm:text-base font-bold text-maroon-900"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute w-4 h-4 rounded-full bg-maroon-400/40 animate-ping" />
                <MousePointer2 className="w-4 h-4 text-maroon-700 animate-bounce transition-transform" />
              </div>
              <span>Move cursor to call me !</span>
            </motion.div>

            {/* 4. Primary CTA Button: Download Data Analyst Resume */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex items-center justify-center lg:justify-start"
            >
              <DualResumeDropdown onOpenResumeModal={onOpenResumeModal} variant="hero" />
            </motion.div>
          </div>

          {/* Right Column: Character Container (~45% to 55% Center Zone) (lg:col-span-7 xl:col-span-8) */}
          <div className="lg:col-span-7 xl:col-span-8 flex justify-center items-end z-10 w-full overflow-visible">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full flex justify-center items-end"
            >
              <HeroCharacter mouseCoordsRef={mouseCoordsRef} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
