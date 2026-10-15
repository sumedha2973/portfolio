# Sumedha — Data Analyst & Web Developer Portfolio

A production-ready, highly responsive developer and data analyst portfolio website built using **React**, **Tailwind CSS**, and **Framer Motion**, featuring an interactive 300-frame character animation with 3-zone cursor interaction logic.

---

## 🌟 Key Features

### 1. Interactive Hero Section with Sprite/Frame Animation
- **Visual Anchor**: Center/right-aligned large hero graphic showcasing the character working at a laptop with a soft, elegant background gradient (`dusty-rose/light-maroon` edges transitioning to bright white in the center behind the character). The laptop remains fully visible and the head uncropped across all viewports.
- **Left Branding & Guidance**:
  - Heading: `"I'm Sumedha — Data Analyst & Web Developer"`
  - Subtext: `"Move cursor to call me !"` with an animated pulsing cursor indicator.
- **3-Zone Cursor Interaction Logic (Desktop)**:
  - `onMouseMove` across the hero container divided into 3 horizontal zones (Left, Center, Right):
    - **Left Zone (< 33%)**: Switches to the left-looking character sequence (`frames 46–85`), displays message banner `"Anyone here on the left? 👀"`, holds for 2.5 seconds, then returns to normal working state.
    - **Right Zone (> 67%)**: Switches to the right-looking character sequence (`frames 106–135`), displays message banner `"Anyone here on the right? 🌸"`, holds for 2.5 seconds, then returns to normal working state.
    - **Center Zone (33%–67%)**: Triggers the greeting sequence (noticing user → headset removal → waving hello → pointing down) while cycling messages: `"Hey, it's you! ✨"` → `"Hiiii! Welcome! 👋"` → `"Check out my portfolio below! 👇"`.
- **Mobile View**:
  - Automatically disables 3-zone mouse tracking.
  - Keeps the character large, centered, and locked in a static, friendly working state with the laptop fully visible.
  - Interactive "Say Hi! / Wave" toggle button for mobile users.

---

### 2. Dual Resumes Dropdown & PDF Viewer
- **Primary CTA**: `"Download Data Analyst Resume"` highlighting SQL, Python, Pandas, Power BI, DAX, and statistical modeling.
- **Secondary Option**: `"Software / Web Development Resume"` focusing on React, JavaScript, C++, DSA (250+ LeetCode), Flask, and CrewAI/Gemini integrations.
- **Interactive Modal**: Full resume preview with instant switching between Data Analyst and Software Developer profiles, celebratory confetti, and a clean print/save PDF layout.

---

### 3. Portfolio Content & Sections Structure
- **About Me**: MCA student background bridging Data Analytics, Software Engineering, and AI/Web Development, with key metrics and educational foundation.
- **Core Skills Matrix (Categorized Grids & Tabs)**:
  - **Data Analytics**: Python, Pandas, SQL / MySQL, Excel, Power BI, DAX, data cleaning & visualization.
  - **Software & Web**: C++, DSA, LeetCode, HTML, CSS, JavaScript, React, Flask, Git/GitHub.
  - **AI & Tools**: CrewAI, Ollama, Gemini APIs, Jupyter Notebook, Postman, VS Code.
- **Featured Projects**:
  - **Task Management**: Agile Kanban workflow system with filtering and velocity metrics.
  - **TripNova**: AI-assisted smart travel itinerary planner and budget calculator.
  - **ABTalks**: Real-time community discussion and audio/podcast platform.
  - **Mental Health Support Chatbot**: Conversational wellness platform built with Flask, CrewAI multi-agent orchestration, and Ollama/Gemini APIs.
- **Data Analytics Highlights**:
  - **HR Workforce & Attrition Analytics**: Statistical analysis of turnover risk factors, overtime impact, and retention modeling in Power BI.
  - **Retail Sales & Customer Analytics**: 500,000+ transaction cohort study with RFM segmentation and revenue optimization.
  - **Excel Executive Sales Dashboard**: Power Pivot dynamic modeling, DAX calculated measures, and automated executive slicers.
- **Hackathons, Certifications & Achievements**:
  - Deloitte Australia Data Analytics Simulation Certificate.
  - Cisco Networking Academy Python Essentials Certificate.
  - Smart Tech Hackathon Finalist (Top 5%).
  - Collegiate academic honors & MCA technology workshop leadership.
- **Contact & Socials Footer**:
  - Direct links to Email, LinkedIn, GitHub, and LeetCode.
  - Interactive contact form with validation and quick copy-to-clipboard email utility.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation
```bash
# Clone or navigate to the project directory
cd portfolio-me

# Install dependencies
npm install
```

### Running Locally
```bash
# Start the Vite development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
# Compile and optimize production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 Design System
- **Color Palette**: Dusty-rose (`#deb1c0`, `#f6dbe3`) and light-maroon (`#420b1e`, `#831f3c`, `#bd2f5a`) with bright white center transitions.
- **Typography**: Plus Jakarta Sans, Outfit, and JetBrains Mono.
- **Animations**: Framer Motion spring physics and HTML5 Canvas frame buffer rendering.
