import React from 'react'
import './APIDevelopment.css'

export default function APIDevelopment({ onBack }) {
  const handleBackClick = () => {
    if (onBack) {
      onBack()
    }
  }

  return (
    <div className="api-development">
      {/* Header */}
      <div className="api-development-header">
        <button onClick={handleBackClick} className="back-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18l-8-8 8-8 1.41 1.41L4.83 9H18v2H4.83l6.58 6.59L10 18z"/>
          </svg>
          Back
        </button>
      </div>

      {/* Hero Section */}
      <div className="api-development-hero">
        <div className="service-icon">🔌</div>
        <h1 className="service-title">API Development</h1>
        <p className="service-description">Building robust, scalable, and secure APIs that power modern applications and enable seamless data integration.</p>
        
        <div className="service-overview">
          <h2>Service Overview</h2>
          <div className="service-text">
            <p>API development is the backbone of modern software architecture. I create RESTful APIs, GraphQL endpoints, and microservices that enable seamless communication between different systems and applications.</p>
            
            <p>My expertise includes designing and implementing APIs using technologies like ASP.NET Core, Node.js, and Express.js. I focus on creating APIs that are not only functional but also secure, scalable, and well-documented.</p>
            
            <p>I specialize in implementing authentication and authorization mechanisms, rate limiting, caching strategies, and error handling to ensure your APIs are production-ready. Every API I develop includes comprehensive documentation using Swagger/OpenAPI standards.</p>
            
            <p>From simple CRUD operations to complex business logic and third-party integrations, I build APIs that can handle high traffic loads while maintaining optimal performance. I also provide ongoing monitoring, maintenance, and updates to keep your APIs current and secure.</p>
          </div>
        </div>

        <div className="service-technologies">
          <h2>Technologies Used</h2>
          <div className="technologies-grid">
            <span className="tech-tag">ASP.NET Core</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Express.js</span>
            <span className="tech-tag">C#</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">Redis</span>
            <span className="tech-tag">Swagger</span>
          </div>
        </div>

        <div className="service-features">
          <h2>Key Features</h2>
          <ul className="features-list">
            <li>RESTful API design and development</li>
            <li>GraphQL endpoint creation</li>
            <li>Authentication and authorization</li>
            <li>Rate limiting and caching</li>
            <li>Comprehensive API documentation</li>
            <li>Error handling and logging</li>
            <li>Third-party integrations</li>
            <li>Performance monitoring</li>
          </ul>
        </div>

        <div className="service-process">
          <h2>Our Process</h2>
          <ul className="process-list">
            <li>
              <span className="process-number">1</span>
              <span className="process-text">API architecture planning</span>
            </li>
            <li>
              <span className="process-number">2</span>
              <span className="process-text">Database design and modeling</span>
            </li>
            <li>
              <span className="process-number">3</span>
              <span className="process-text">Endpoint development and testing</span>
            </li>
            <li>
              <span className="process-number">4</span>
              <span className="process-text">Security implementation</span>
            </li>
            <li>
              <span className="process-number">5</span>
              <span className="process-text">Documentation and deployment</span>
            </li>
            <li>
              <span className="process-number">6</span>
              <span className="process-text">Monitoring and maintenance</span>
            </li>
          </ul>
        </div>

        <div className="service-projects">
          <h2>Recent API Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Orama API</h3>
              <p>Scalable backend service with secure user registration, JWT authentication, and role-based authorization.</p>
              <div className="project-tech">
                <span className="tech-badge">ASP.NET Core</span>
                <span className="tech-badge">C#</span>
                <span className="tech-badge">SQL Server</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Investment Portfolio API</h3>
              <p>RESTful API for managing investment portfolios with real-time data synchronization and analytics.</p>
              <div className="project-tech">
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">PostgreSQL</span>
                <span className="tech-badge">JWT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
