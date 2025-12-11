import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar({ isScrolling, onShowGetInTouch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Close menu when link is clicked
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleGetInTouch = () => {
    setIsMenuOpen(false) // Close menu
    onShowGetInTouch()
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Portfolio Label - Left Side */}
        <div className="navbar-brand">
          <button onClick={() => scrollToSection('home')} className="brand-link">
            Iris.Dev
          </button>
        </div>

        {/* Navigation Links - Right Side (Desktop) */}
        <div className="navbar-links">
          <a href="#projects" onClick={() => scrollToSection('projects')} className="navbar-link">
            Projects
          </a>
          <a href="#about" onClick={() => scrollToSection('about')} className="navbar-link">
            About
          </a>
          <button onClick={onShowGetInTouch} className="navbar-link contact-btn">
            Get in touch
          </button>
        </div>

        {/* Dropdown Menu Button (Mobile) */}
        <button className="dropdown-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <svg className="menu-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg className="menu-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Dropdown Menu (Mobile) */}
        <div className={`dropdown-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#projects" onClick={() => scrollToSection('projects')} className="dropdown-link">
            Projects
          </a>
          <a href="#about" onClick={() => scrollToSection('about')} className="dropdown-link">
            About
          </a>
          <button onClick={handleGetInTouch} className="dropdown-link contact-btn">
            Get in touch
          </button>
        </div>
      </div>
    </nav>
  )
}
