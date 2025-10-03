import React from 'react'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left Side - About Content */}
        <div className="about-content">
          <div className="about-greeting">
            <h2 className="about-title">
              <span className="greeting-text">Hello!</span> I'm <span className="name-text">Asif</span>
            </h2>
          </div>
          
          <div className="about-role">
            <div className="role-line"></div>
            <span className="role-text">Mobile App Developer</span>
            <span className="role-icon">⭐</span>
          </div>
          
          <p className="about-description">
            Hello! I'm Asif. I'm a <strong>mobile app developer, cross-platform expert,</strong> 
            UI/UX designer, API developer & tech enthusiast. I specialize in creating 
            modern mobile applications that deliver exceptional user experiences.
          </p>
          
          {/* Key Points/Values */}
          <div className="about-values">
            <div className="value-item">
              <span className="checkmark">✓</span>
              <span className="value-text">Apps must be user-friendly</span>
            </div>
            <div className="value-item">
              <span className="checkmark">✓</span>
              <span className="value-text">Solve problems elegantly</span>
            </div>
            <div className="value-item">
              <span className="checkmark">✓</span>
              <span className="value-text">Testing, feedback, and validation</span>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="about-buttons">
            <button className="about-btn filled">Let's Talk</button>
            <a href="#" className="about-btn-link">Download CV ↓</a>
          </div>
        </div>
        
        {/* Right Side - Visual Content */}
        <div className="about-visual">
          <div className="about-image-container">
            <img src="/Assets/asifimage.JPG" alt="Asif" className="about-image" />
          
          </div>
        </div>
      </div>
    </section>
  )
}
