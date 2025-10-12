import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar({ isScrolling, onShowGetInTouch }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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


  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Portfolio Label - Left Side */}
        <div className="navbar-brand">
          <button onClick={() => scrollToSection('home')} className="brand-link">
            Mobile App Developer
          </button>
        </div>

        {/* Navigation Links - Right Side */}
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
        <button onClick={onShowGetInTouch} className="mobile-link">
          Get in touch
        </button>
      </div>
    </nav>
  )
}
