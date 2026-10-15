import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Download, ArrowUpRight } from 'lucide-react';
import DualResumeDropdown from './DualResumeDropdown';

export default function Navbar({ onOpenResumeModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Data Analytics', href: '#data-analytics' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-maroon-200/50 shadow-sm shadow-maroon-950/5 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-maroon-900 via-maroon-700 to-rose-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-maroon-800/20 group-hover:scale-105 transition-transform">
            S
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-maroon-950 group-hover:text-maroon-800 transition-colors">
                Sumedha
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for roles
              </span>
            </div>
            <p className="text-[10px] text-maroon-700/80 font-medium -mt-0.5">
              Data Analyst & Web Developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/70 backdrop-blur-md border border-maroon-100 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-700 hover:text-maroon-900 hover:bg-maroon-50/80 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Dual Resume Action */}
        <div className="hidden sm:flex items-center gap-3">
          <DualResumeDropdown onOpenResumeModal={onOpenResumeModal} variant="nav" />
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-maroon-900 hover:bg-maroon-50 transition-colors border border-maroon-200/60"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-maroon-200 px-5 py-5 shadow-2xl transition-all">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-800 hover:bg-maroon-50 hover:text-maroon-900 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-maroon-400" />
              </a>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-maroon-100 flex flex-col gap-2">
            <div className="text-xs font-semibold text-maroon-700 mb-1 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Resume Downloads</span>
            </div>
            <DualResumeDropdown onOpenResumeModal={onOpenResumeModal} variant="hero" />
          </div>
        </div>
      )}
    </header>
  );
}
