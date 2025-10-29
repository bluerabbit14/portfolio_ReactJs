import React from 'react'
import './Navbar.css'

export default function Navbar({ isScrolling, onShowGetInTouch }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Portfolio Label - Left Side */}
        <div className="navbar-brand">
          <button onClick={() => scrollToSection('home')} className="brand-link">
            DevApp
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
      </div>
    </nav>
  )
}
