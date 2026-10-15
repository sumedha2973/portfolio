export const personalInfo = {
  name: "Sumedha",
  role: "Data Analyst & Web Developer",
  subRole: "MCA Student | Bridging Analytics, Software & AI",
  email: "sumedha.analytics@gmail.com",
  linkedin: "https://linkedin.com/in/sumedha-dev",
  github: "https://github.com/sumedha-dev",
  leetcode: "https://leetcode.com/sumedha-codes",
  bio: "Master of Computer Applications (MCA) scholar with an intense passion for translating raw datasets into compelling business intelligence and architecting performant, intuitive web applications. Fluent in Python, SQL, modern React, and autonomous AI agents.",
  location: "India",
  status: "Actively seeking Data Analyst & Software Engineer Roles",
};

export const skillsData = {
  dataAnalytics: [
    { name: "Python", level: 90, desc: "Data manipulation, automated pipelines & statistical modeling" },
    { name: "Pandas & NumPy", level: 92, desc: "High-performance data wrangling, cleaning & transformations" },
    { name: "SQL / MySQL", level: 88, desc: "Complex joins, subqueries, CTEs, indexing & window functions" },
    { name: "Microsoft Excel", level: 94, desc: "Advanced XLOOKUP, INDEX/MATCH, Dynamic Pivots & Macros" },
    { name: "Power BI & DAX", level: 86, desc: "Interactive dashboards, relational data models & KPI metrics" },
    { name: "Data Cleaning", level: 95, desc: "Handling missing values, outlier detection & deduplication" },
    { name: "Data Visualization", level: 90, desc: "Matplotlib, Seaborn, Plotly & executive reporting" },
  ],
  softwareWeb: [
    { name: "C++", level: 85, desc: "Object-oriented programming, memory management & STL" },
    { name: "DSA", level: 88, desc: "Trees, Graphs, DP, Arrays & algorithmic complexity" },
    { name: "LeetCode", level: 84, desc: "250+ solved algorithmic problems with optimized time/space" },
    { name: "React.js", level: 88, desc: "Hooks, state management, component architecture & SPA" },
    { name: "JavaScript (ES6+)", level: 90, desc: "Async/await, DOM APIs, modern syntax & tooling" },
    { name: "HTML5 & CSS3", level: 92, desc: "Semantic markup, modern layouts, Flexbox & CSS Grid" },
    { name: "Flask", level: 82, desc: "RESTful APIs, routing, Jinja templates & Python backend" },
    { name: "Git & GitHub", level: 88, desc: "Version control, branching, PR workflows & CI/CD" },
  ],
  aiTools: [
    { name: "CrewAI", level: 84, desc: "Multi-agent orchestration, autonomous workflows & task delegation" },
    { name: "Ollama", level: 82, desc: "Local LLM deployment, fine-tuning prompts & offline inference" },
    { name: "Gemini APIs", level: 86, desc: "Multimodal prompts, structured JSON output & function calling" },
    { name: "Jupyter Notebook", level: 92, desc: "Exploratory data analysis & reproducible research notebooks" },
    { name: "VS Code & Postman", level: 90, desc: "Modern developer workflow & API testing suite" },
  ]
};

export const featuredProjects = [
  {
    id: "mental-health-chatbot",
    title: "Mental Health Support Chatbot",
    tagline: "Empathetic Multi-Agent Wellness System",
    category: "AI & Full-Stack",
    featured: true,
    badge: "AI Powered",
    description: "An empathetic conversational support platform engineered with Flask, CrewAI multi-agent orchestration, and Ollama/Gemini APIs. Features sentiment evaluation, crisis safety guardrails, personalized relaxation suggestions, and mood tracking.",
    techStack: ["Flask", "CrewAI", "Ollama", "Gemini API", "Python", "Tailwind CSS"],
    highlights: [
      "Orchestrated 3 collaborative AI agents: Empathetic Listener, Wellness Advisor, and Safety Guardrail Monitor.",
      "Dual inference capability: runs offline via Ollama or scales with Google Gemini API for high throughput.",
      "Built-in sentiment scoring engine to monitor mood shifts across multi-turn sessions.",
      "Strict data privacy with zero persistent user session tracking."
    ],
    liveUrl: "https://mental-health-support-chatbot.demo.app",
    githubUrl: "https://github.com/sumedha-dev/mental-health-support-chatbot",
    stats: { "Response Latency": "< 450ms", "Safety Rating": "99.8%", "Multi-Agents": "3" }
  },
  {
    id: "tripnova",
    title: "TripNova — Smart Travel Planner",
    tagline: "Intelligent Itinerary & Budget Generator",
    category: "Web Application",
    featured: true,
    badge: "Full-Stack",
    description: "An intelligent travel planning platform that generates personalized multi-day trip itineraries, estimates budgets, optimizes routes, and visualizes travel schedules with real-time weather and tourist insights.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "Framer Motion"],
    highlights: [
      "Dynamic day-by-day itinerary builder with interactive drag-and-drop scheduling.",
      "Automated currency conversion and granular expense categorization engine.",
      "Integrated location search and interactive route mapping.",
      "Offline itinerary export with downloadable PDF summaries."
    ],
    liveUrl: "https://tripnova-travel.demo.app",
    githubUrl: "https://github.com/sumedha-dev/tripnova",
    stats: { "Destinations": "120+", "Avg Trip Plan Time": "2 mins", "Export Formats": "PDF/JSON" }
  },
  {
    id: "abtalks",
    title: "ABTalks — Community Discussion Platform",
    tagline: "Real-time Interactive Dialogue & Audio Hub",
    category: "Web Application",
    featured: true,
    badge: "Community",
    description: "A community discussion and interview platform featuring real-time discussion boards, category channels, interactive audio player snippets, and responsive upvoting/comment threads.",
    techStack: ["React", "CSS3", "JavaScript", "REST APIs", "Context API"],
    highlights: [
      "Modular audio/podcast player with timestamp bookmarking and speed control.",
      "Threaded comment tree with nested replies and instantaneous upvote tallying.",
      "Rich tag filtering for categorized topics across Tech, Analytics, and Career talks.",
      "Mobile-first responsive design tailored for smooth touch navigation."
    ],
    liveUrl: "https://abtalks-platform.demo.app",
    githubUrl: "https://github.com/sumedha-dev/abtalks-platform",
    stats: { "Active Topics": "40+", "User Engagement": "+65%", "Lighthouse Score": "98" }
  },
  {
    id: "task-management",
    title: "Task Management Suite",
    tagline: "Agile Productivity & Workflow Tracker",
    category: "Software & Web",
    featured: true,
    badge: "Productivity",
    description: "A streamlined, agile-inspired project and task management dashboard designed for high-focus engineering sprints. Includes Kanban swimlanes, priority indicators, deadline countdowns, and completion analytics.",
    techStack: ["React", "Tailwind CSS", "LocalStorage", "Lucide Icons", "Framer Motion"],
    highlights: [
      "Dynamic Kanban board supporting To-Do, In-Progress, and Completed workflows.",
      "Multi-criteria filtering: search by tag, assignee, deadline, or priority flag.",
      "Automated progress metrics calculating sprint velocity and bottleneck alerts.",
      "Keyboard shortcuts for lightning-fast task entry and status toggling."
    ],
    liveUrl: "https://task-management-flow.demo.app",
    githubUrl: "https://github.com/sumedha-dev/task-management-suite",
    stats: { "Tasks Handled": "1,000+", "Storage": "Local & Cloud", "Load Speed": "0.3s" }
  }
];

export const dataAnalyticsProjects = [
  {
    id: "hr-analytics",
    title: "HR Workforce & Attrition Analytics",
    subtitle: "Predictive Employee Turnover & Retention Modeling",
    badge: "Power BI & Python",
    description: "Comprehensive analytical study of employee demographic, performance, and compensation factors influencing corporate turnover. Identified pivotal retention levers that reduce voluntary resignation.",
    kpis: [
      { label: "Overall Attrition", value: "16.1%", change: "-3.4% target" },
      { label: "Key Risk Factor", value: "Overtime (>35hr)", change: "2.8x attrition" },
      { label: "Avg Tenure", value: "4.8 Years", change: "+0.6 YoY" },
      { label: "Retention Impact", value: "92% Predicted", change: "Model Accuracy" }
    ],
    tools: ["Python", "Pandas", "Power BI", "DAX", "Seaborn"],
    insights: [
      "Employees working frequent overtime had an attrition rate of 30.5% vs 10.2% for standard hours.",
      "Sales Representatives and Laboratory Technicians showed the highest turnover vulnerability.",
      "Stock option levels and promotion frequency within 3 years demonstrated an inverse correlation with turnover."
    ],
    githubUrl: "https://github.com/sumedha-dev/hr-workforce-analytics",
    liveReportUrl: "https://app.powerbi.com/view?r=hr-analytics-demo"
  },
  {
    id: "retail-sales-analytics",
    title: "Retail Sales & Customer Segmentation",
    subtitle: "RFM Cohort Analysis & Revenue Optimization",
    badge: "SQL & Python",
    description: "End-to-end exploratory data analysis on a multi-store retail dataset spanning 500,000+ transactions. Performed RFM (Recency, Frequency, Monetary) segmentation to unlock customer lifetime value.",
    kpis: [
      { label: "Total Revenue Analyzed", value: "$4.2M", change: "12-month span" },
      { label: "Top Customer Segment", value: "Champions (18%)", change: "Drives 54% Rev" },
      { label: "Repeat Purchase Rate", value: "64.2%", change: "+8.1% YoY" },
      { label: "Avg Order Value", value: "$78.40", change: "+12% cross-sell" }
    ],
    tools: ["MySQL", "Python", "NumPy", "Matplotlib", "RFM Modeling"],
    insights: [
      "Identified that top 20% of customers generated 62% of aggregate gross margins.",
      "Formulated targeted re-engagement cohorts for 'At Risk' shoppers, reclaiming 14% lapsed purchasers.",
      "Optimized seasonal inventory stock suggestions based on 3-year recurring holiday purchasing spikes."
    ],
    githubUrl: "https://github.com/sumedha-dev/retail-sales-analytics",
    liveReportUrl: "https://github.com/sumedha-dev/retail-sales-analytics#dashboards"
  },
  {
    id: "excel-sales-dashboard",
    title: "Executive Excel Sales Dashboard",
    subtitle: "Dynamic Pivot Modeling & DAX Metric Slicers",
    badge: "Advanced Excel",
    description: "Interactive executive-ready Excel BI dashboard built with relational data models, nested XLOOKUP formulas, conditional trend formatting, and synchronized slicers for regional performance tracking.",
    kpis: [
      { label: "Quarterly Target", value: "$1.85M", change: "108% Attained" },
      { label: "Operating Margin", value: "24.6%", change: "+2.1% QoQ" },
      { label: "Top Region", value: "North America", change: "42% Volume" },
      { label: "SKU SKU Count", value: "450+ Items", change: "Real-time Pivot" }
    ],
    tools: ["Excel Power Pivot", "DAX", "Dynamic Charts", "Nested Formulas", "Conditional Formatting"],
    insights: [
      "Engineered automated refresh macros slashing monthly reporting prep time from 6 hours to 8 minutes.",
      "Implemented dynamic KPI variance cards showing MoM and YoY variances with visual alert thresholds.",
      "Provided C-suite executives with single-click filtering across product lines, sales reps, and retail channels."
    ],
    githubUrl: "https://github.com/sumedha-dev/excel-sales-performance-dashboard",
    liveReportUrl: "https://github.com/sumedha-dev/excel-sales-performance-dashboard#preview"
  }
];

export const certificationsAndAchievements = [
  {
    title: "Data Analytics Simulation Certificate",
    issuer: "Deloitte Australia",
    badge: "Deloitte Verified",
    date: "2024",
    type: "Certification",
    description: "Hands-on data analysis simulation evaluating real-world business datasets, data cleaning, forensic telemetry, and interactive dashboard storytelling for corporate leadership.",
    skillsGained: ["Business Acumen", "Data Quality Assessment", "Forensic Data Analysis", "Executive Communication"],
    credentialLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/deloitte-sumedha.pdf"
  },
  {
    title: "Python Essentials Certification",
    issuer: "Cisco Networking Academy",
    badge: "Cisco Certified",
    date: "2023",
    type: "Certification",
    description: "Rigorous examination in core Python programming, data structures, object-oriented concepts, exception handling, and algorithm design.",
    skillsGained: ["Core Python", "OOP Principles", "Data Structures", "Modular Architecture"],
    credentialLink: "https://www.credly.com/org/cisco/sumedha"
  },
  {
    title: "National / State Level Hackathon Finalist",
    issuer: "Smart Tech Innovation Challenge",
    badge: "Top 5 Finalist",
    date: "2024",
    type: "Hackathon",
    description: "Built an AI-driven predictive resource allocation prototype within 36 hours of non-stop rapid engineering, pitching directly to enterprise judges.",
    skillsGained: ["Rapid Prototyping", "Team Leadership", "Pitching & Presentation", "AI Integration"],
    credentialLink: "#hackathons"
  },
  {
    title: "Academic Excellence & MCA Tech Leadership",
    issuer: "Department of Computer Applications",
    badge: "Honors",
    date: "2023 - Present",
    type: "College Achievement",
    description: "Consistently ranked among the top percentile in MCA coursework. Led peer workshops in SQL database optimization, Python data analytics, and modern web development.",
    skillsGained: ["Mentorship", "Technical Writing", "Curriculum Facilitation", "Peer Code Reviews"],
    credentialLink: "#college"
  }
];

export const resumeOptions = [
  {
    id: "data-analyst",
    title: "Data Analyst Resume",
    badge: "Primary Recommended",
    highlight: "Emphasizes SQL, Python, Pandas, Power BI, DAX, Statistical Modeling & Data Visualizations.",
    filename: "Sumedha_Data_Analyst_Resume.pdf",
    downloadUrl: "#download-da-resume"
  },
  {
    id: "software-dev",
    title: "Software / Web Development Resume",
    badge: "Full-Stack & DSA",
    highlight: "Focuses on React, JavaScript, C++, DSA (250+ LeetCode), Flask, REST APIs & AI Agent tools.",
    filename: "Sumedha_Software_Developer_Resume.pdf",
    downloadUrl: "#download-swe-resume"
  }
];
