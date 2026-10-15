import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code, Send, CheckCircle2, Copy, Sparkles, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    {
      name: 'LinkedIn',
      handle: 'linkedin.com/in/sumedha-dev',
      url: personalInfo.linkedin,
      icon: Linkedin,
      desc: 'Professional network & career updates',
      color: 'hover:border-blue-300 hover:bg-blue-50/50'
    },
    {
      name: 'GitHub',
      handle: 'github.com/sumedha-dev',
      url: personalInfo.github,
      icon: Github,
      desc: 'Code repositories, commits & projects',
      color: 'hover:border-gray-400 hover:bg-gray-50/80'
    },
    {
      name: 'LeetCode',
      handle: 'leetcode.com/sumedha-codes',
      url: personalInfo.leetcode,
      icon: Code,
      desc: '250+ solved algorithmic challenges',
      color: 'hover:border-amber-300 hover:bg-amber-50/50'
    },
    {
      name: 'Direct Email',
      handle: personalInfo.email,
      url: `mailto:${personalInfo.email}`,
      icon: Mail,
      desc: 'Inquiries, hiring & project proposals',
      color: 'hover:border-rose-300 hover:bg-rose-50/50'
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-maroon-100/80 border border-maroon-200 text-maroon-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-maroon-600" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#250d18] tracking-tight">
            Get in Touch & Socials
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Interested in discussing an opportunity, data analytics collaboration, or software engineering project? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Socials & Direct Contact Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Email Copy Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-maroon-900 via-maroon-800 to-rose-800 text-white shadow-xl shadow-maroon-950/15">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-200">
                  Direct Inquiries
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Fast Response
                </span>
              </div>

              <h3 className="text-xl font-bold mb-1">
                Let's build something exceptional together
              </h3>
              <p className="text-xs text-rose-100/80 mb-5 leading-relaxed">
                Available for full-time Data Analyst, Software Engineer, or Full-Stack Web Development positions.
              </p>

              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-mono truncate text-white">
                  {personalInfo.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl bg-white text-maroon-950 hover:bg-rose-50 text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-4 rounded-2xl bg-white/90 border border-maroon-100/90 shadow-sm transition-all group flex flex-col justify-between ${item.color}`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-xl bg-maroon-50 text-maroon-800 group-hover:bg-maroon-800 group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-maroon-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <h4 className="font-bold text-sm text-maroon-950">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7 p-7 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-xl border border-maroon-200 shadow-xl shadow-maroon-950/5">
            <h3 className="text-xl font-extrabold text-maroon-950 mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-maroon-950 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl border border-maroon-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-maroon-600/30 focus:border-maroon-600 transition-all placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-maroon-950 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-maroon-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-maroon-600/30 focus:border-maroon-600 transition-all placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-maroon-950 uppercase tracking-wider mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Job Opportunity / Project Collaboration / Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl border border-maroon-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-maroon-600/30 focus:border-maroon-600 transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-maroon-950 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note or project description here..."
                  className="w-full px-4 py-2.5 rounded-xl border border-maroon-200 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-maroon-600/30 focus:border-maroon-600 transition-all placeholder:text-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-maroon-800 to-rose-700 hover:from-maroon-900 hover:to-rose-800 text-white font-bold text-sm shadow-md shadow-maroon-900/15 flex items-center justify-center gap-2 hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
