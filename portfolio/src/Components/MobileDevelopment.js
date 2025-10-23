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
        <h1 className="service-title">Mobile Development</h1>
        <p className="service-description">Creating innovative, user-friendly mobile applications for iOS and Android platforms using cutting-edge technologies and modern development practices.</p>
        
        <div className="service-overview">
          <h2>Service Overview</h2>
          <div className="service-text">
            <p>Mobile development is at the forefront of digital innovation, reaching users wherever they are. I specialize in creating native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth.</p>
            
            <p>My expertise spans both native iOS and Android development, as well as cross-platform solutions using React Native and Flutter. I focus on creating apps that are not only visually appealing but also performant, secure, and user-friendly across all devices.</p>
            
            <p>I specialize in building apps with offline capabilities, push notifications, real-time data synchronization, and seamless integration with backend services. Every mobile app I develop includes proper state management, navigation, and platform-specific optimizations.</p>
            
            <p>From simple utility apps to complex enterprise solutions and e-commerce platforms, I deliver mobile applications that meet modern standards for performance, security, and user experience. My development process includes thorough testing, app store optimization, and ongoing maintenance.</p>
          </div>
        </div>

        <div className="service-technologies">
          <h2>Technologies Used</h2>
          <div className="technologies-grid">
            <span className="tech-tag">React Native</span>
            <span className="tech-tag">Flutter</span>
            <span className="tech-tag">Swift</span>
            <span className="tech-tag">Kotlin</span>
            <span className="tech-tag">Java</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Dart</span>
            <span className="tech-tag">Firebase</span>
            <span className="tech-tag">Redux</span>
          </div>
        </div>

        <div className="service-features">
          <h2>Key Features</h2>
          <ul className="features-list">
            <li>Cross-platform development (iOS & Android)</li>
            <li>Native performance optimization</li>
            <li>Offline functionality and data sync</li>
            <li>Push notifications and real-time updates</li>
            <li>Secure authentication and data protection</li>
            <li>App store deployment and optimization</li>
            <li>Responsive design for all screen sizes</li>
            <li>Integration with backend APIs and services</li>
          </ul>
        </div>

        <div className="service-process">
          <h2>Our Process</h2>
          <ul className="process-list">
            <li>
              <span className="process-number">1</span>
              <span className="process-text">Requirements analysis and platform selection</span>
            </li>
            <li>
              <span className="process-number">2</span>
              <span className="process-text">UI/UX design and prototyping</span>
            </li>
            <li>
              <span className="process-number">3</span>
              <span className="process-text">App architecture and development</span>
            </li>
            <li>
              <span className="process-number">4</span>
              <span className="process-text">Backend integration and API development</span>
            </li>
            <li>
              <span className="process-number">5</span>
              <span className="process-text">Testing and quality assurance</span>
            </li>
            <li>
              <span className="process-number">6</span>
              <span className="process-text">App store submission and deployment</span>
            </li>
          </ul>
        </div>

        <div className="service-projects">
          <h2>Recent Mobile Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Investorly Mobile App</h3>
              <p>Cross-platform investment tracking application with real-time portfolio management, market data integration, and secure user authentication.</p>
              <div className="project-tech">
                <span className="tech-badge">React Native</span>
                <span className="tech-badge">Firebase</span>
                <span className="tech-badge">Redux</span>
              </div>
            </div>
            <div className="project-card">
              <h3>E-Commerce Mobile App</h3>
              <p>Feature-rich shopping application with payment integration, order tracking, and personalized recommendations for enhanced user experience.</p>
              <div className="project-tech">
                <span className="tech-badge">Flutter</span>
                <span className="tech-badge">Dart</span>
                <span className="tech-badge">Stripe API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
