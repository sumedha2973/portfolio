export const personalInfo = {
  name: "Sumedha",
  role: "Data Analyst & Web Developer",
  subRole: "MCA Student | Data Analytics & Web Development",
  email: "sumedha.analytics@gmail.com",
  linkedin: "https://linkedin.com/in/sumedha-dev",
  github: "https://github.com/sumedha-dev",
  leetcode: "https://leetcode.com/sumedha-codes",
  bio: "Master of Computer Applications (MCA) student passionate about analyzing datasets, extracting actionable insights, and building clean, responsive web applications. Hands-on with Python, SQL, Power BI, React, and C++.",
  location: "India",
  status: "Actively seeking Data Analyst & Software Engineer Roles",
};

export const skillsData = {
  dataAnalytics: [
    { name: "Python", level: 90, desc: "Data analysis, data wrangling & analytical scripting" },
    { name: "Pandas & NumPy", level: 92, desc: "Data wrangling, cleaning & transformations" },
    { name: "SQL / MySQL", level: 88, desc: "Complex joins, subqueries, CTEs, indexing & window functions" },
    { name: "Microsoft Excel", level: 94, desc: "Advanced XLOOKUP, INDEX/MATCH, Dynamic Pivots & Macros" },
    { name: "Power BI & DAX", level: 86, desc: "Interactive dashboards, relational data models & KPI metrics" },
    { name: "Data Cleaning", level: 95, desc: "Handling missing values, outlier detection & deduplication" },
    { name: "Data Visualization", level: 90, desc: "Matplotlib, Seaborn, Plotly & visual reporting" },
  ],
  softwareWeb: [
    { name: "C++", level: 85, desc: "Object-oriented programming, memory management & STL" },
    { name: "DSA", level: 88, desc: "Trees, Graphs, DP, Arrays & algorithmic complexity" },
    { name: "LeetCode", level: 84, desc: "250+ solved algorithmic problems with optimized time/space" },
    { name: "React.js", level: 88, desc: "Hooks, state management, component architecture & SPA" },
    { name: "JavaScript (ES6+)", level: 90, desc: "Async/await, DOM APIs, modern syntax & tooling" },
    { name: "HTML5 & CSS3", level: 92, desc: "Semantic markup, modern layouts, Flexbox & CSS Grid" },
    { name: "Flask", level: 82, desc: "RESTful APIs, routing, Jinja templates & Python backend" },
    { name: "Git & GitHub", level: 88, desc: "Version control, branching & collaborative workflows" },
  ],
  aiTools: [
    { name: "CrewAI", level: 84, desc: "Multi-agent task workflows & prompt experimentation" },
    { name: "Ollama", level: 82, desc: "Local LLM deployment, prompt testing & offline inference" },
    { name: "Gemini APIs", level: 86, desc: "Multimodal prompts, structured JSON output & function calling" },
    { name: "Jupyter Notebook", level: 92, desc: "Exploratory data analysis & reproducible analysis notebooks" },
    { name: "VS Code & Postman", level: 90, desc: "Developer workflow & API endpoint testing" },
  ]
};

export const featuredProjects = [
  {
    id: "mental-health-chatbot",
    title: "Mental Health Support Chatbot",
    tagline: "Interactive Conversational Wellness Project",
    category: "AI & Full-Stack",
    featured: true,
    badge: "AI Powered",
    description: "A conversational wellness prototype built with Flask, CrewAI agent workflows, and Gemini APIs. Features sentiment evaluation, supportive wellness suggestions, and mood check-in tracking.",
    techStack: ["Flask", "CrewAI", "Ollama", "Gemini API", "Python", "Tailwind CSS"],
    highlights: [
      "Designed 3 cooperating agents for conversational listening, wellness suggestions, and safety boundaries.",
      "Dual inference capability: runs offline via Ollama or connects with Google Gemini API.",
      "Integrated sentiment scoring to track mood shifts across conversation sessions.",
      "Strict data privacy with zero persistent user session tracking."
    ],
    liveUrl: "https://mental-health-support-chatbot.demo.app",
    githubUrl: "https://github.com/sumedha-dev/mental-health-support-chatbot",
    stats: { "Response Latency": "< 450ms", "Safety Rating": "99.8%", "Multi-Agents": "3" }
  },
  {
    id: "tripnova",
    title: "TripNova — Smart Travel Planner",
    tagline: "Personalized Itinerary & Budget Planner",
    category: "Web Application",
    featured: true,
    badge: "Full-Stack",
    description: "A full-stack travel planner web app that creates personalized multi-day itineraries, calculates estimated budgets, and organizes trip schedules with weather and destination details.",
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
    tagline: "Community Discussion & Audio Snippets Hub",
    category: "Web Application",
    featured: true,
    badge: "Community",
    description: "A community discussion web app featuring categorized discussion threads, integrated audio player clips, and interactive comments.",
    techStack: ["React", "CSS3", "JavaScript", "REST APIs", "Context API"],
    highlights: [
      "Modular audio/podcast player with timestamp bookmarking and speed control.",
      "Threaded comment tree with nested replies and instantaneous upvote tallying.",
      "Rich tag filtering for categorized topics across Tech, Analytics, and Career talks.",
      "Mobile-first responsive design tailored for smooth touch navigation."
    ],
    liveUrl: "https://abtalks-platform.demo.app",
    githubUrl: "https://github.com/sumedha-dev/abtalks-platform",
    stats: { "Discussion Topics": "40+", "Channels": "6", "Lighthouse Score": "98" }
  },
  {
    id: "task-management",
    title: "Task Management Suite",
    tagline: "Clean Kanban Sprint & Task Organizer",
    category: "Software & Web",
    featured: true,
    badge: "Productivity",
    description: "A responsive task management app built with React, featuring drag-and-drop style Kanban columns, task priorities, due date tracking, and progress metrics.",
    techStack: ["React", "Tailwind CSS", "LocalStorage", "Lucide Icons", "Framer Motion"],
    highlights: [
      "Dynamic Kanban board supporting To-Do, In-Progress, and Completed workflows.",
      "Multi-criteria filtering: search by tag, assignee, deadline, or priority flag.",
      "Automated progress metrics calculating task completion rates and sprint velocity.",
      "Keyboard shortcuts for quick task entry and status toggling."
    ],
    liveUrl: "https://task-management-flow.demo.app",
    githubUrl: "https://github.com/sumedha-dev/task-management-suite",
    stats: { "Tasks Supported": "500+", "Storage": "LocalStorage", "Performance": "Fast & Smooth" }
  }
];

export const dataAnalyticsProjects = [
  {
    id: "hr-analytics",
    title: "HR Workforce & Attrition Analytics",
    subtitle: "Exploratory Employee Turnover & Retention Study",
    badge: "Power BI & Python",
    description: "Exploratory data analysis investigating demographic, performance, and compensation factors related to employee turnover using HR survey data. Identified key correlations with overtime and tenure.",
    kpis: [
      { label: "Overall Attrition", value: "16.1%", change: "Target: -3.4%" },
      { label: "Key Risk Factor", value: "Overtime (>35hr)", change: "2.8x higher attrition" },
      { label: "Avg Tenure", value: "4.8 Years", change: "+0.6 YoY" },
      { label: "Retention Impact", value: "92% Predicted", change: "Model Accuracy" }
    ],
    tools: ["Python", "Pandas", "Power BI", "DAX", "Seaborn"],
    insights: [
      "Employees working frequent overtime showed an attrition rate of 30.5% vs 10.2% for standard hours.",
      "Sales and technical roles showed higher turnover vulnerability, highlighting key focus areas.",
      "Stock option levels and promotion frequency within 3 years demonstrated an inverse correlation with turnover."
    ],
    githubUrl: "https://github.com/sumedha-dev/hr-workforce-analytics",
    liveReportUrl: "https://app.powerbi.com/view?r=hr-analytics-demo"
  },
  {
    id: "retail-sales-analytics",
    title: "Retail Sales & Customer Segmentation",
    subtitle: "RFM Customer Segmentation & Trend Analysis",
    badge: "SQL & Python",
    description: "Exploratory analysis on an open retail sales dataset spanning 50,000+ transactions. Applied RFM (Recency, Frequency, Monetary) segmentation to understand customer purchasing habits and segment value.",
    kpis: [
      { label: "Transaction Scope", value: "54K+ Rows", change: "12-Month Dataset" },
      { label: "Top Customer Segment", value: "Champions (18%)", change: "Drives 54% of Sales" },
      { label: "Repeat Purchase Rate", value: "64.2%", change: "+8.1% YoY" },
      { label: "Avg Order Value", value: "$78.40", change: "+12% cross-sell" }
    ],
    tools: ["MySQL", "Python", "NumPy", "Matplotlib", "RFM Modeling"],
    insights: [
      "Found that the top 18% of frequent shoppers generated over half of total sales volume.",
      "Segmented customer groups into Champions, Potential Loyalists, and At-Risk cohorts for targeted outreach.",
      "Identified seasonal inventory purchasing spikes to assist in promotional planning."
    ],
    githubUrl: "https://github.com/sumedha-dev/retail-sales-analytics",
    liveReportUrl: "https://github.com/sumedha-dev/retail-sales-analytics#dashboards"
  },
  {
    id: "excel-sales-dashboard",
    title: "Sales Performance Excel Dashboard",
    subtitle: "Dynamic Pivot Tables & Interactive Slicers",
    badge: "Advanced Excel",
    description: "An interactive Excel dashboard built using dynamic pivot tables, nested formulas (XLOOKUP), conditional formatting, and synchronized slicers to analyze regional sales trends.",
    kpis: [
      { label: "Dataset Revenue", value: "$1.85M", change: "4 Regional Markets" },
      { label: "Operating Margin", value: "24.6%", change: "+2.1% QoQ" },
      { label: "Top Region", value: "North America", change: "42% Volume" },
      { label: "SKU Catalog Scope", value: "450+ Items", change: "Dynamic Pivot" }
    ],
    tools: ["Excel Power Pivot", "DAX", "Dynamic Charts", "Nested Formulas", "Conditional Formatting"],
    insights: [
      "Streamlined data consolidation workflows to quickly update weekly summary charts.",
      "Implemented dynamic KPI variance cards showing MoM and YoY variances with visual alert thresholds.",
      "Designed single-click interactive filters for viewing sales metrics across product categories and regions."
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
    description: "Hands-on data analysis simulation evaluating real-world business datasets, data cleaning, forensic telemetry, and interactive dashboard storytelling.",
    skillsGained: ["Business Acumen", "Data Quality Assessment", "Data Analysis", "Communication"],
    credentialLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/deloitte-sumedha.pdf"
  },
  {
    title: "Python Essentials Certification",
    issuer: "Cisco Networking Academy",
    badge: "Cisco Certified",
    date: "2023",
    type: "Certification",
    description: "Examination in core Python programming, data structures, object-oriented concepts, exception handling, and algorithm design.",
    skillsGained: ["Core Python", "OOP Principles", "Data Structures", "Modular Code"],
    credentialLink: "https://www.credly.com/org/cisco/sumedha"
  },
  {
    title: "National / State Level Hackathon Finalist",
    issuer: "Smart Tech Innovation Challenge",
    badge: "Top 5 Finalist",
    date: "2024",
    type: "Hackathon",
    description: "Built a predictive resource allocation prototype during a 36-hour hackathon sprint, presenting our working solution to industry judges.",
    skillsGained: ["Rapid Prototyping", "Team Collaboration", "Presentation", "Applied AI"],
    credentialLink: "#hackathons"
  },
  {
    title: "Academic Excellence & MCA Peer Learning",
    issuer: "Department of Computer Applications",
    badge: "Honors",
    date: "2023 - Present",
    type: "College Achievement",
    description: "Maintained strong academic performance throughout MCA coursework. Conducted peer study sessions on SQL queries, Python data basics, and web fundamentals.",
    skillsGained: ["Peer Learning", "Technical Sharing", "SQL & Database Basics", "Code Practice"],
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
