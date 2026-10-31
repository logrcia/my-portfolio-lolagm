/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ProjectGrid } from './components/ProjectGrid.tsx';
import { ToolsSection } from './components/ToolsSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ContactFooter } from './components/ContactFooter.tsx';
import { FlowerDecorations } from './components/FlowerDecorations.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { portfolioProjects } from './data/portfolioData.ts';
import { Project } from './types.ts';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleExploreClick = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF4EF] text-[#1D1B1B] relative overflow-x-hidden flex flex-col font-sans selection:bg-[#E89AA8] selection:text-white">
      {/* Decorative hand-drawn flowers scattered in background */}
      <FlowerDecorations />

      {/* Top Bar Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero onExploreClick={handleExploreClick} />

        {/* Portfolio Projects Grid */}
        <ProjectGrid
          projects={portfolioProjects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Tools Section */}
        <ToolsSection />

        {/* About & Background Section */}
        <AboutSection />
      </main>

      {/* Bottom Contact Bar */}
      <ContactFooter />

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
