import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import DataAnalyticsSection from './components/DataAnalyticsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedResumeId, setSelectedResumeId] = useState('data-analyst');

  const handleOpenResumeModal = (resumeId = 'data-analyst') => {
    setSelectedResumeId(resumeId);
    setResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#faf7f8] text-[#2c1820] flex flex-col font-sans selection:bg-rose-200 selection:text-maroon-950">
      {/* Top sticky navigation bar with Dual Resume dropdown */}
      <Navbar onOpenResumeModal={handleOpenResumeModal} />

      <main className="flex-grow">
        {/* Hero Section with Interactive Sprite/Frame Animation (3-Zone Cursor Tracking) */}
        <HeroSection onOpenResumeModal={handleOpenResumeModal} />

        {/* About Me Section */}
        <AboutSection />

        {/* Core Skills Matrix (Categorized Grids) */}
        <SkillsSection />

        {/* Featured Projects (Task Management, TripNova, ABTalks, Mental Health Chatbot) */}
        <ProjectsSection />

        {/* Data Analytics Highlights (HR Analytics, Retail Sales, Excel Sales Dashboard) */}
        <DataAnalyticsSection />

        {/* Hackathons, Certifications & Achievements */}
        <AchievementsSection />

        {/* Contact & Socials Footer */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={handleOpenResumeModal} />

      {/* Interactive Dual Resume Viewer & PDF Export Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={handleCloseResumeModal}
        initialResumeId={selectedResumeId}
      />
    </div>
  );
}
