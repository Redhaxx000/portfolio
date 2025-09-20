import { useState, useEffect } from 'react';
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { PortfolioSection } from './components/portfolio-section';
import { ContactSection } from './components/contact-section';
import { Navigation } from './components/navigation';
import { ProjectModal } from './components/project-modal';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className={`${isDark ? 'bg-black' : 'bg-white'} text-white overflow-x-hidden transition-all duration-1000`}>
      <Navigation toggleTheme={toggleTheme} isDark={isDark} />
      
      {/* Smooth scroll container */}
      <div className="relative">
        <HeroSection 
          onViewWork={() => scrollToSection('portfolio')}
          onGetInTouch={() => scrollToSection('contact')}
        />
        <AboutSection />
        <PortfolioSection onProjectClick={handleProjectClick} />
        <ContactSection />
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}