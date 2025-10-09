import React from 'react'
import './UIUXDesign.css'

export default function UIUXDesign({ onBack }) {
  const handleBackClick = () => {
    if (onBack) {
      onBack()
    }
  }

  return (
    <div className="ui-ux-design">
      {/* Header */}
      <div className="ui-ux-design-header">
        <button onClick={handleBackClick} className="back-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18l-8-8 8-8 1.41 1.41L4.83 9H18v2H4.83l6.58 6.59L10 18z"/>
          </svg>
          Back
        </button>
      </div>

      {/* Hero Section */}
      <div className="ui-ux-design-hero">
        <div className="service-icon">🎨</div>
        <h1 className="service-title">UI/UX Design</h1>
        <p className="service-description">Creating intuitive, beautiful, and user-centered designs that enhance user experience and drive engagement.</p>
        
        <div className="service-overview">
          <h2>Service Overview</h2>
          <div className="service-text">
            <p>UI/UX design is about creating digital experiences that users love. I combine creativity with user research and design principles to create interfaces that are not only beautiful but also highly functional and intuitive.</p>
            
            <p>My design process begins with understanding your users, their needs, and your business goals. I conduct user research, create user personas, and develop user journey maps to ensure every design decision is backed by data and user insights.</p>
            
            <p>I specialize in creating wireframes, prototypes, and high-fidelity designs using tools like Figma, Adobe XD, and Sketch. My designs focus on accessibility, usability, and visual hierarchy to create experiences that users can navigate effortlessly.</p>
            
            <p>From mobile apps to web applications, I ensure that every interface is consistent with your brand identity while providing an exceptional user experience. I also provide design systems and style guides to maintain consistency across all touchpoints.</p>
          </div>
        </div>

        <div className="service-technologies">
          <h2>Technologies Used</h2>
          <div className="technologies-grid">
            <span className="tech-tag">Figma</span>
            <span className="tech-tag">Adobe XD</span>
            <span className="tech-tag">Sketch</span>
            <span className="tech-tag">Photoshop</span>
            <span className="tech-tag">Illustrator</span>
            <span className="tech-tag">Principle</span>
            <span className="tech-tag">InVision</span>
            <span className="tech-tag">Zeplin</span>
          </div>
        </div>

        <div className="service-features">
          <h2>Key Features</h2>
          <ul className="features-list">
            <li>User research and persona development</li>
            <li>Wireframing and prototyping</li>
            <li>High-fidelity UI designs</li>
            <li>Design systems and style guides</li>
            <li>User testing and feedback integration</li>
            <li>Responsive design for all devices</li>
            <li>Accessibility compliance</li>
            <li>Brand identity integration</li>
          </ul>
        </div>

        <div className="service-process">
          <h2>Our Process</h2>
          <ul className="process-list">
            <li>
              <span className="process-number">1</span>
              <span className="process-text">User research and analysis</span>
            </li>
            <li>
              <span className="process-number">2</span>
              <span className="process-text">Information architecture planning</span>
            </li>
            <li>
              <span className="process-number">3</span>
              <span className="process-text">Wireframing and prototyping</span>
            </li>
            <li>
              <span className="process-number">4</span>
              <span className="process-text">Visual design and branding</span>
            </li>
            <li>
              <span className="process-number">5</span>
              <span className="process-text">User testing and iteration</span>
            </li>
            <li>
              <span className="process-number">6</span>
              <span className="process-text">Design handoff and documentation</span>
            </li>
          </ul>
        </div>

        <div className="service-projects">
          <h2>Recent Design Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Investorly Mobile App UI</h3>
              <p>Complete UI/UX design for investment tracking mobile application with intuitive data visualization and user-friendly interface.</p>
              <div className="project-tech">
                <span className="tech-badge">Figma</span>
                <span className="tech-badge">Principle</span>
                <span className="tech-badge">User Research</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Web Platform Design System</h3>
              <p>Comprehensive design system and component library for web applications ensuring consistency and scalability.</p>
              <div className="project-tech">
                <span className="tech-badge">Figma</span>
                <span className="tech-badge">Design System</span>
                <span className="tech-badge">Components</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



