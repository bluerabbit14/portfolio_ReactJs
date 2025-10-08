import React from 'react'
import './MobileDevelopment.css'

export default function MobileDevelopment({ onBack }) {
  const handleBackClick = () => {
    if (onBack) {
      onBack()
    }
  }

  return (
    <div className="mobile-development">
      {/* Header */}
      <div className="mobile-development-header">
        <button onClick={handleBackClick} className="back-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18l-8-8 8-8 1.41 1.41L4.83 9H18v2H4.83l6.58 6.59L10 18z"/>
          </svg>
          Back
        </button>
      </div>

      {/* Hero Section */}
      <div className="mobile-development-hero">
        <div className="service-icon">📱</div>
        <h1 className="service-title">Mobile App Development</h1>
        <p className="service-description">Creating powerful, cross-platform mobile applications for iOS and Android using modern frameworks and technologies.</p>
        
        <div className="service-overview">
          <h2>Service Overview</h2>
          <div className="service-text">
            <p>Mobile app development is at the heart of modern digital experiences. I specialize in creating robust, scalable, and user-friendly mobile applications that work seamlessly across iOS and Android platforms.</p>
            
            <p>Using cutting-edge technologies like React Native, .NET MAUI, and Flutter, I develop applications that provide native performance while maintaining code efficiency. My approach focuses on creating intuitive user interfaces, smooth animations, and responsive designs that adapt to various screen sizes and orientations.</p>
            
            <p>I have extensive experience in integrating complex features such as real-time data synchronization, push notifications, offline functionality, and secure authentication systems. Whether it's a simple utility app or a complex enterprise solution, I ensure that every application meets the highest standards of performance, security, and user experience.</p>
            
            <p>My mobile development process includes thorough testing across different devices and operating systems, ensuring compatibility and optimal performance. I also provide ongoing maintenance and updates to keep your applications current with the latest platform requirements and user expectations.</p>
          </div>
        </div>

        <div className="service-technologies">
          <h2>Technologies Used</h2>
          <div className="technologies-grid">
            <span className="tech-tag">React Native</span>
            <span className="tech-tag">.NET MAUI</span>
            <span className="tech-tag">Flutter</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">C#</span>
            <span className="tech-tag">Android</span>
            <span className="tech-tag">iOS</span>
            <span className="tech-tag">Firebase</span>
            <span className="tech-tag">Xamarin</span>
          </div>
        </div>

        <div className="service-features">
          <h2>Key Features</h2>
          <ul className="features-list">
            <li>Cross-platform development for iOS and Android</li>
            <li>Native performance with shared codebase</li>
            <li>Real-time data synchronization</li>
            <li>Push notifications and offline support</li>
            <li>Secure authentication and authorization</li>
            <li>Responsive design for all screen sizes</li>
            <li>App store optimization and deployment</li>
            <li>Performance monitoring and analytics</li>
          </ul>
        </div>

        <div className="service-process">
          <h2>Our Process</h2>
          <ul className="process-list">
            <li>
              <span className="process-number">1</span>
              <span className="process-text">Requirements analysis and planning</span>
            </li>
            <li>
              <span className="process-number">2</span>
              <span className="process-text">UI/UX design and prototyping</span>
            </li>
            <li>
              <span className="process-number">3</span>
              <span className="process-text">Architecture design and technology selection</span>
            </li>
            <li>
              <span className="process-number">4</span>
              <span className="process-text">Development and testing</span>
            </li>
            <li>
              <span className="process-number">5</span>
              <span className="process-text">App store submission and deployment</span>
            </li>
            <li>
              <span className="process-number">6</span>
              <span className="process-text">Maintenance and updates</span>
            </li>
          </ul>
        </div>

        <div className="service-projects">
          <h2>Recent Mobile Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Investorly Mobile App</h3>
              <p>Cross-platform investment tracking application with real-time portfolio management and secure authentication.</p>
              <div className="project-tech">
                <span className="tech-badge">React Native</span>
                <span className="tech-badge">Firebase</span>
                <span className="tech-badge">JWT</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Hotel Revenue Tracker</h3>
              <p>Mobile solution for tracking hotel investments and revenue data with interactive charts and analytics.</p>
              <div className="project-tech">
                <span className="tech-badge">.NET MAUI</span>
                <span className="tech-badge">C#</span>
                <span className="tech-badge">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
