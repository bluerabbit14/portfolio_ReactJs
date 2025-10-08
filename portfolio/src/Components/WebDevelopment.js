import React from 'react'
import './WebDevelopment.css'

export default function WebDevelopment({ onBack }) {
  const handleBackClick = () => {
    if (onBack) {
      onBack()
    }
  }

  return (
    <div className="web-development">
      {/* Header */}
      <div className="web-development-header">
        <button onClick={handleBackClick} className="back-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18l-8-8 8-8 1.41 1.41L4.83 9H18v2H4.83l6.58 6.59L10 18z"/>
          </svg>
          Back
        </button>
      </div>

      {/* Hero Section */}
      <div className="web-development-hero">
        <div className="service-icon">🌐</div>
        <h1 className="service-title">Web Development</h1>
        <p className="service-description">Building responsive, fast, and scalable web applications using modern frameworks and best practices.</p>
        
        <div className="service-overview">
          <h2>Service Overview</h2>
          <div className="service-text">
            <p>Web development is the foundation of digital presence in today's connected world. I create modern, responsive web applications that deliver exceptional user experiences across all devices and browsers.</p>
            
            <p>My expertise spans both frontend and backend development, using technologies like React, Next.js, Node.js, and ASP.NET Core. I focus on creating fast-loading, SEO-optimized websites that rank well in search engines and provide smooth user interactions.</p>
            
            <p>I specialize in building single-page applications (SPAs), progressive web apps (PWAs), and full-stack web solutions. Every project includes responsive design, accessibility compliance, and cross-browser compatibility to ensure your website works perfectly for all users.</p>
            
            <p>From simple landing pages to complex e-commerce platforms and enterprise applications, I deliver solutions that are not only visually appealing but also highly functional, secure, and maintainable. My development process includes thorough testing, performance optimization, and ongoing support.</p>
          </div>
        </div>

        <div className="service-technologies">
          <h2>Technologies Used</h2>
          <div className="technologies-grid">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Next.js</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">ASP.NET Core</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">HTML5</span>
            <span className="tech-tag">CSS3</span>
            <span className="tech-tag">Bootstrap</span>
            <span className="tech-tag">Tailwind CSS</span>
          </div>
        </div>

        <div className="service-features">
          <h2>Key Features</h2>
          <ul className="features-list">
            <li>Responsive design for all devices</li>
            <li>Fast loading and performance optimization</li>
            <li>SEO-friendly and accessible</li>
            <li>Cross-browser compatibility</li>
            <li>Progressive Web App (PWA) features</li>
            <li>Real-time functionality</li>
            <li>Secure authentication and data protection</li>
            <li>Content management systems</li>
          </ul>
        </div>

        <div className="service-process">
          <h2>Our Process</h2>
          <ul className="process-list">
            <li>
              <span className="process-number">1</span>
              <span className="process-text">Project planning and requirements gathering</span>
            </li>
            <li>
              <span className="process-number">2</span>
              <span className="process-text">UI/UX design and wireframing</span>
            </li>
            <li>
              <span className="process-number">3</span>
              <span className="process-text">Frontend and backend development</span>
            </li>
            <li>
              <span className="process-number">4</span>
              <span className="process-text">Database design and integration</span>
            </li>
            <li>
              <span className="process-number">5</span>
              <span className="process-text">Testing and quality assurance</span>
            </li>
            <li>
              <span className="process-number">6</span>
              <span className="process-text">Deployment and maintenance</span>
            </li>
          </ul>
        </div>

        <div className="service-projects">
          <h2>Recent Web Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Investorly Web Platform</h3>
              <p>Comprehensive web-based investment portfolio management with real-time data synchronization and advanced analytics.</p>
              <div className="project-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">ASP.NET Core</span>
                <span className="tech-badge">PostgreSQL</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Gemini AI Chat</h3>
              <p>Modern, interactive web application with real-time AI conversations and responsive design.</p>
              <div className="project-tech">
                <span className="tech-badge">HTML5</span>
                <span className="tech-badge">CSS3</span>
                <span className="tech-badge">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
