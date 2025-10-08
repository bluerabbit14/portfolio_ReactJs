import React from 'react'
import './DatabaseDesign.css'

export default function DatabaseDesign({ onBack }) {
  const handleBackClick = () => {
    if (onBack) {
      onBack()
    }
  }

  return (
    <div className="database-design">
      {/* Header */}
      <div className="database-design-header">
        <button onClick={handleBackClick} className="back-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18l-8-8 8-8 1.41 1.41L4.83 9H18v2H4.83l6.58 6.59L10 18z"/>
          </svg>
          Back
        </button>
      </div>

      {/* Hero Section */}
      <div className="database-design-hero">
        <div className="service-icon">🗄️</div>
        <h1 className="service-title">Database Design</h1>
        <p className="service-description">Designing efficient, scalable, and secure database architectures that support your application needs and growth.</p>
        
        <div className="service-overview">
          <h2>Service Overview</h2>
          <div className="service-text">
            <p>Database design is crucial for the performance and scalability of any application. I create well-structured, normalized database schemas that efficiently store and retrieve data while maintaining data integrity and security.</p>
            
            <p>My expertise spans both relational and NoSQL databases, including SQL Server, PostgreSQL, MySQL, MongoDB, and Redis. I design databases that can handle complex queries, large datasets, and high concurrent user loads.</p>
            
            <p>I specialize in database optimization, indexing strategies, and query performance tuning. Every database design includes proper normalization, foreign key relationships, and constraints to ensure data consistency and referential integrity.</p>
            
            <p>From simple single-table designs to complex multi-database architectures, I create solutions that support your current needs while being flexible enough to accommodate future growth. I also provide database migration strategies and backup solutions.</p>
          </div>
        </div>

        <div className="service-technologies">
          <h2>Technologies Used</h2>
          <div className="technologies-grid">
            <span className="tech-tag">SQL Server</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">MySQL</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">Redis</span>
            <span className="tech-tag">SQLite</span>
            <span className="tech-tag">Oracle</span>
            <span className="tech-tag">DynamoDB</span>
          </div>
        </div>

        <div className="service-features">
          <h2>Key Features</h2>
          <ul className="features-list">
            <li>Database schema design and normalization</li>
            <li>Query optimization and indexing</li>
            <li>Data migration and synchronization</li>
            <li>Backup and recovery strategies</li>
            <li>Performance monitoring and tuning</li>
            <li>Security and access control</li>
            <li>Scalability planning</li>
            <li>Documentation and maintenance</li>
          </ul>
        </div>

        <div className="service-process">
          <h2>Our Process</h2>
          <ul className="process-list">
            <li>
              <span className="process-number">1</span>
              <span className="process-text">Requirements analysis and data modeling</span>
            </li>
            <li>
              <span className="process-number">2</span>
              <span className="process-text">Schema design and normalization</span>
            </li>
            <li>
              <span className="process-number">3</span>
              <span className="process-text">Indexing and optimization</span>
            </li>
            <li>
              <span className="process-number">4</span>
              <span className="process-text">Security implementation</span>
            </li>
            <li>
              <span className="process-number">5</span>
              <span className="process-text">Testing and validation</span>
            </li>
            <li>
              <span className="process-number">6</span>
              <span className="process-text">Deployment and monitoring</span>
            </li>
          </ul>
        </div>

        <div className="service-projects">
          <h2>Recent Database Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Investment Portfolio Database</h3>
              <p>Comprehensive database design for tracking investment portfolios with real-time analytics and reporting capabilities.</p>
              <div className="project-tech">
                <span className="tech-badge">PostgreSQL</span>
                <span className="tech-badge">Redis</span>
                <span className="tech-badge">Optimization</span>
              </div>
            </div>
            <div className="project-card">
              <h3>User Management System</h3>
              <p>Secure database architecture for user authentication, authorization, and profile management with role-based access control.</p>
              <div className="project-tech">
                <span className="tech-badge">SQL Server</span>
                <span className="tech-badge">JWT</span>
                <span className="tech-badge">Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
