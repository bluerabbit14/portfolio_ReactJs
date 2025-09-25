import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Project from './Components/Project';
import About from './Components/About';
import Skill from './Components/Skill';
import VerticallScroll from './Components/VerticallScroll';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import GetInTouchForm from './Components/GetInTouchForm';
import './App.css';

function App() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [showGetInTouch, setShowGetInTouch] = useState(false);

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

  return (
    <>
    <Navbar 
      isScrolling={isScrolling} 
      onShowGetInTouch={() => setShowGetInTouch(true)} 
    />
    <Hero></Hero>
    <Project></Project>
    <Skill></Skill>
    <About></About>
    
    <VerticallScroll></VerticallScroll>
    {/* <Contact></Contact> */}
    <Footer></Footer>
    
    {/* GetInTouch Form Modal */}
    <GetInTouchForm 
      isOpen={showGetInTouch} 
      onClose={() => setShowGetInTouch(false)} 
    />
    </>
  );
}

export default App;
