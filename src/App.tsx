/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ProjectGrid } from './components/ProjectGrid.tsx';
import { Moodboard } from './components/Moodboard.tsx';
import { ToolsSection } from './components/ToolsSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ContactFooter } from './components/ContactFooter.tsx';
import { FlowerDecorations } from './components/FlowerDecorations.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { portfolioProjects } from './data/portfolioData.ts';
import { Project } from './types.ts';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    handleNavigate('work');
  };

  return (
    <div className="min-h-screen bg-[#FAF4EF] text-[#1D1B1B] relative overflow-x-hidden flex flex-col font-sans selection:bg-[#E89AA8] selection:text-white">
      {/* Flores ilustradas decorativas en segundo plano */}
      <FlowerDecorations />

      {/* 1. Navbar fija (fixed top-0) */}
      <Header onNavigate={handleNavigate} />

      {/* Main Content Area con espacio para la barra fija */}
      <main className="flex-1 relative z-10">
        {/* 2. Hero: En fullscreen ocupa el 100vh exacto de pantalla inicial */}
        <Hero onExploreClick={handleExploreClick} />

        {/* 3. Work: Proyectos seleccionados */}
        <ProjectGrid
          projects={portfolioProjects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 4. Live Moodboard: Conectado a canal propio de Lola: inspo-z5eag9wxqag */}
        <Moodboard channelSlug="inspo-z5eag9wxqag" />

        {/* 5. Tools: 8 herramientas con iconos y badges */}
        <ToolsSection />

        {/* 6. About & Background detallado */}
        <AboutSection />
      </main>

      {/* 7. Contact Footer */}
      <ContactFooter />

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
