import React, { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      closeMenu()
    }
  }

  useEffect(() => {
    let scrollTimeout

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true)
        setIsScrolling(false)
        clearTimeout(scrollTimeout)
      } else {
        // Hide navbar while scrolling
        setIsVisible(false)
        setIsScrolling(true)
        
        // Clear previous timeout
        clearTimeout(scrollTimeout)
        
        // Show navbar when user stops scrolling
        scrollTimeout = setTimeout(() => {
          setIsVisible(true)
          setIsScrolling(false)
        }, 150) // 150ms delay after scroll stops
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <nav className={`navbar ${isScrolling ? 'scrolling' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        {/* Portfolio Label - Left Side */}
        <div className="navbar-brand">
          <a href="#home" onClick={() => scrollToSection('home')} className="brand-link">
            Portfolio
          </a>
        </div>

        {/* Navigation Links - Right Side */}
        <div className="navbar-links">
          <a href="#projects" onClick={() => scrollToSection('projects')} className="navbar-link">
            Projects
          </a>
          <a href="#about" onClick={() => scrollToSection('about')} className="navbar-link">
            About
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="navbar-link contact-btn">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-button" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <a href="#projects" onClick={() => scrollToSection('projects')} className="mobile-link">
          Projects
        </a>
        <a href="#about" onClick={() => scrollToSection('about')} className="mobile-link">
          About
        </a>
        <a href="#contact" onClick={() => scrollToSection('contact')} className="mobile-link">
          Contact
        </a>
      </div>
    </nav>
  )
}
