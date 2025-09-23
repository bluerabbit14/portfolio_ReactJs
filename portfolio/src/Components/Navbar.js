import React, { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

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
      const scrollTop = window.scrollY
      
      // Show transparent/blur effect while scrolling
      setIsScrolling(true)
      
      // Clear previous timeout
      clearTimeout(scrollTimeout)
      
      // Set timeout to return to original state after scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150) // 150ms delay after scroll stops
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <nav className={`navbar ${isScrolling ? 'scrolling' : ''}`}>
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
