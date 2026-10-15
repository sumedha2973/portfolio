import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Sparkles, CheckCircle2, Award, Briefcase, GraduationCap, Code2, BarChart3, Mail, MapPin, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, resumeOptions } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, initialResumeId = 'data-analyst' }) {
  const [activeResume, setActiveResume] = useState(initialResumeId);

  if (!isOpen) return null;

  const isDataAnalyst = activeResume === 'data-analyst';

  const handlePrint = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 }
    });
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl shadow-maroon-950/30 border border-maroon-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="px-6 py-4 border-b border-maroon-100 bg-[#fdf8fa] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-maroon-100 text-maroon-800">
                {isDataAnalyst ? <BarChart3 className="w-5 h-5" /> : <Code2 className="w-5 h-5" />}
              </span>
              <div>
                <h3 className="font-bold text-maroon-950 text-base sm:text-lg">
                  {isDataAnalyst ? "Data Analyst Resume" : "Software / Web Development Resume"}
                </h3>
                <p className="text-xs text-maroon-700/80">
                  {isDataAnalyst ? "Primary Version — Tailored for Data & Business Intelligence Roles" : "Secondary Version — Tailored for Software Engineering & Full-Stack Roles"}
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-maroon-800 text-white hover:bg-maroon-900 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Toggle Switch Bar */}
          <div className="px-6 py-2.5 bg-maroon-50/60 border-b border-maroon-100 flex items-center justify-center gap-2 text-xs">
            <span className="text-gray-500 font-medium">Switch Variant:</span>
            <button
              onClick={() => setActiveResume('data-analyst')}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${
                isDataAnalyst
                  ? 'bg-maroon-800 text-white shadow-sm'
                  : 'bg-white text-maroon-800 border border-maroon-200 hover:bg-maroon-50'
              }`}
            >
              📊 Data Analyst (Primary)
            </button>
            <button
              onClick={() => setActiveResume('software-dev')}
              className={`px-3 py-1 rounded-full font-semibold transition-all ${
                !isDataAnalyst
                  ? 'bg-maroon-800 text-white shadow-sm'
                  : 'bg-white text-maroon-800 border border-maroon-200 hover:bg-maroon-50'
              }`}
            >
              💻 Software / Web Dev
            </button>
          </div>

          {/* Resume Document Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 font-sans text-gray-800 text-xs sm:text-sm leading-relaxed space-y-6 bg-white selection:bg-rose-100">
            {/* Header info */}
            <div className="border-b border-gray-200 pb-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-maroon-950 tracking-tight">
                    {personalInfo.name}
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-maroon-700 mt-0.5">
                    {isDataAnalyst ? "Data Analyst & Business Intelligence Specialist" : "Software Engineer & Full-Stack Developer"}
                  </p>
                </div>
                <div className="text-right text-xs text-gray-600 space-y-1">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-maroon-600" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-maroon-600" />
                    <span>India (Open to Relocation / Remote)</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 text-maroon-700 font-medium">
                    <Globe className="w-3.5 h-3.5" />
                    <span>GitHub: /sumedha-dev | LeetCode: /sumedha-codes</span>
                  </div>
                </div>
              </div>

              {/* Summary Statement */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#fbf5f7] border border-maroon-100 text-gray-700">
                {isDataAnalyst ? (
                  <p>
                    <strong>Professional Summary:</strong> Analytical MCA scholar with strong expertise in data manipulation, exploratory data analysis, and dashboard architecture. Experienced in Python (Pandas, NumPy), advanced SQL, Power BI, DAX, and Excel modeling. Proven track record in uncovering business trends, optimizing retention metrics, and translating raw data into stakeholder-ready visual intelligence.
                  </p>
                ) : (
                  <p>
                    <strong>Professional Summary:</strong> Versatile software developer and MCA graduate skilled in modern web development, algorithmic problem-solving, and applied AI agents. Proficient in React.js, C++, DSA (250+ solved LeetCode challenges), Flask, RESTful APIs, and autonomous agent orchestration with CrewAI & Gemini. Dedicated to building responsive, accessible, high-performance web products.
                  </p>
                )}
              </div>
            </div>

            {/* Core Skills Matrix */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-maroon-900 border-b border-maroon-200 pb-1 mb-2">
                Technical Competencies
              </h4>
              {isDataAnalyst ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div>
                    <strong>Data Analysis & Querying:</strong> Python, SQL / MySQL, Pandas, NumPy, Relational Schema Design, Window Functions.
                  </div>
                  <div>
                    <strong>BI & Visualization:</strong> Power BI, DAX, Microsoft Excel (Advanced XLOOKUP, Pivot Tables, Macros), Matplotlib, Seaborn.
                  </div>
                  <div>
                    <strong>Data Engineering & Quality:</strong> Data Cleaning, Outlier Remediation, ETL Pipelines, Feature Engineering.
                  </div>
                  <div>
                    <strong>Analytical Tools:</strong> Jupyter Notebooks, Git/GitHub, Postman, Statistical Modeling.
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div>
                    <strong>Languages & Problem Solving:</strong> C++, JavaScript (ES6+), Python, HTML5, CSS3, Data Structures & Algorithms (250+ LeetCode).
                  </div>
                  <div>
                    <strong>Frontend & UI:</strong> React.js, Tailwind CSS, Framer Motion, Responsive Web Design, Component Architecture.
                  </div>
                  <div>
                    <strong>Backend & APIs:</strong> Flask, RESTful APIs, JSON Web Services, MySQL, Asynchronous Programming.
                  </div>
                  <div>
                    <strong>AI & Engineering Tools:</strong> CrewAI, Ollama, Google Gemini APIs, Git, GitHub, VS Code.
                  </div>
                </div>
              )}
            </div>

            {/* Featured Projects Highlight */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-maroon-900 border-b border-maroon-200 pb-1 mb-3">
                Key Projects & Practical Experience
              </h4>
              <div className="space-y-3.5">
                {isDataAnalyst ? (
                  <>
                    <div className="border-l-2 border-maroon-400 pl-3">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-gray-900 text-xs sm:text-sm">
                          HR Workforce & Attrition Analytics Dashboard
                        </span>
                        <span className="text-[11px] text-gray-500 font-mono">Python, Power BI, DAX</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        • Analyzed 1,400+ workforce records to identify turnover drivers; proved overtime employees had 30.5% attrition vs 10.2% benchmark.<br />
                        • Built dynamic Power BI report with interactive DAX KPI slicers, enabling executive retention risk modeling.
                      </p>
                    </div>

                    <div className="border-l-2 border-maroon-400 pl-3">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-gray-900 text-xs sm:text-sm">
                          Retail Sales & Customer Segmentation (RFM Analysis)
                        </span>
                        <span className="text-[11px] text-gray-500 font-mono">SQL, Python, Seaborn</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        • Executed exploratory analysis over 500,000+ retail transactions; discovered top 18% customer cohort generates 54% of revenue.<br />
                        • Formulated automated RFM segment scores in MySQL to trigger tailored churn mitigation campaigns.
                      </p>
                    </div>

                    <div className="border-l-2 border-maroon-400 pl-3">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-gray-900 text-xs sm:text-sm">
                          Executive Excel Sales & Margin Performance Dashboard
                        </span>
                        <span className="text-[11px] text-gray-500 font-mono">Advanced Excel, Power Pivot</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        • Built dynamic C-suite dashboard using Power Pivot models, nested formulas, and dynamic slicers across 450+ retail SKUs.<br />
                        • Automated monthly reporting routine, cutting data consolidation time by 90%.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="border-l-2 border-maroon-400 pl-3">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-gray-900 text-xs sm:text-sm">
                          Mental Health Support Chatbot
                        </span>
                        <span className="text-[11px] text-gray-500 font-mono">Flask, CrewAI, Ollama, Gemini API</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        • Orchestrated multi-agent conversational wellness pipeline utilizing CrewAI with local Ollama and cloud Gemini API fallbacks.<br />
                        • Built empathetic sentiment classifier and strict crisis safety boundaries for anonymous, private support.
                      </p>
                    </div>

                    <div className="border-l-2 border-maroon-400 pl-3">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-gray-900 text-xs sm:text-sm">
                          TripNova — Smart Travel Planner
                        </span>
                        <span className="text-[11px] text-gray-500 font-mono">React, JavaScript, Tailwind, Framer</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        • Engineered interactive multi-day itinerary builder featuring live budget optimization and route visualization.<br />
                        • Optimized client-side state handling and created responsive export mechanisms for travel summaries.
                      </p>
                    </div>

                    <div className="border-l-2 border-maroon-400 pl-3">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-gray-900 text-xs sm:text-sm">
                          Task Management Agile Suite
                        </span>
                        <span className="text-[11px] text-gray-500 font-mono">React, LocalStorage, Tailwind</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">
                        • Designed agile Kanban board with real-time sprint velocity charts, drag-and-drop workflow status, and filtering.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-maroon-900 border-b border-maroon-200 pb-1 mb-2">
                  Education
                </h4>
                <div className="space-y-1.5 text-xs">
                  <div className="font-bold text-gray-900">Master of Computer Applications (MCA)</div>
                  <div className="text-maroon-700">Specialization in Data Analytics & Software Systems</div>
                  <div className="text-gray-500">Graduating 2025 • Top Academic Standing</div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-maroon-900 border-b border-maroon-200 pb-1 mb-2">
                  Key Certifications
                </h4>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-maroon-600" />
                    <span><strong>Deloitte Australia:</strong> Data Analytics Simulation</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-maroon-600" />
                    <span><strong>Cisco Networking Academy:</strong> Python Essentials</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-maroon-600" />
                    <span><strong>Hackathon Finalist:</strong> Top 5 Innovation Prototype</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
