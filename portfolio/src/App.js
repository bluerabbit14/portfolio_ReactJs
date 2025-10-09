import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import TechStackScroller from './Components/TechStackScroller';
import Project from './Components/Project';
import About from './Components/About';
import Skill from './Components/Skill';
import Footer from './Components/Footer';
import GetInTouchForm from './Components/GetInTouchForm';
import ProjectDetail from './Components/ProjectDetail';
import MobileDevelopment from './Components/MobileDevelopment';
import WebDevelopment from './Components/WebDevelopment';
import UIUXDesign from './Components/UIUXDesign';
import APIDevelopment from './Components/APIDevelopment';
import DatabaseDesign from './Components/DatabaseDesign';
import AIBot from './Components/AIBot';
import './App.css';
import SpecialistStack from './Components/SpecialistStack';

function App() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [showGetInTouch, setShowGetInTouch] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home', 'project', or service views
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      // Set scrolling to true when user scrolls
      setIsScrolling(true);
      
      // Clear previous timeout
      clearTimeout(scrollTimeout);
      
      // Set scrolling to false when user stops scrolling
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // 150ms delay after scroll stops
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
    setCurrentView('project');
    window.scrollTo(0, 0); // Scroll to top when viewing project
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProject(null);
    setSelectedService(null);
    window.scrollTo(0, 0); // Scroll to top when going back
  };

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
    setCurrentView(serviceId);
    window.scrollTo(0, 0); // Scroll to top when viewing service
  };

  // If viewing project detail, show ProjectDetail component
  if (currentView === 'project' && selectedProject) {
    return <ProjectDetail projectId={selectedProject} onBack={handleBackToHome} />;
  }

  // If viewing services, show respective service components
  if (currentView === 'mobile-app-development') {
    return <MobileDevelopment onBack={handleBackToHome} />;
  }
  if (currentView === 'web-development') {
    return <WebDevelopment onBack={handleBackToHome} />;
  }
  if (currentView === 'ui-ux-design') {
    return <UIUXDesign onBack={handleBackToHome} />;
  }
  if (currentView === 'api-development') {
    return <APIDevelopment onBack={handleBackToHome} />;
  }
  if (currentView === 'database-design') {
    return <DatabaseDesign onBack={handleBackToHome} />;
  }
  if (currentView === 'ai-bot') {
    return <AIBot onBack={handleBackToHome} />;
  }

  // Otherwise show main portfolio
  return (
    <>
      <Navbar 
        isScrolling={isScrolling} 
        onShowGetInTouch={() => setShowGetInTouch(true)} 
      />
      <Hero onShowGetInTouch={() => setShowGetInTouch(true)}></Hero>
      <About onShowGetInTouch={() => setShowGetInTouch(true)}></About>
      <Skill></Skill>
      <Project onProjectClick={handleProjectClick}></Project>
      <SpecialistStack></SpecialistStack>
      <Footer onServiceClick={handleServiceClick}></Footer>
      
      {/* GetInTouch Form Modal */}
      <GetInTouchForm 
        isOpen={showGetInTouch} 
        onClose={() => setShowGetInTouch(false)} 
      /> 
    </>
  );
}

export default App;
