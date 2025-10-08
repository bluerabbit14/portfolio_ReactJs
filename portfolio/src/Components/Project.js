import React from 'react'
import './Project.css'

export default function Project({ onProjectClick }) {
  const handleReadMore = (projectId) => {
    if (onProjectClick) {
      onProjectClick(projectId)
    }
  }

  return (
    <section id="projects" className="project">
      {/* Header Section */}
      <div className="project-header">
        <div className="project-pattern">
          <div className="pattern-dots"></div>
        </div>
        
        <div className="project-title-section">
          <div className="project-icon">
            <div className="sun-icon">
              <div className="sun-center"></div>
              <div className="sun-rays"></div>
            </div>
          </div>
          <h1 className="project-main-title">PROJECTS</h1>
          <p className="project-description">
          Developed a responsive web application that allows users to track daily tasks with real-time updates and cloud-based storage. Built using React, Firebase, and Material UI to ensure performance and scalability.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-container">
        {/* Project 1  */}
        <div className="project-card">
          <div className="card-content">
            <div className="content-right">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/project1.webp" alt="Project 1" />
                </div>
              </div>
            </div>
            
            <div className="content-left">
              <h3 className="card-subtitle">Mobile App Development</h3>
              <h2 className="card-title">
              Investorly — <span className="highlight-text">Smarter Investment Tracking</span>
              </h2>
              <p className="card-description">
                Investorly is a cross-platform mobile app for Android and iOS that helps users track investment portfolios and hotel revenue data. It features interactive charts, tables, and trend views, with secure authentication using JWT and Google OAuth for both investors and portfolio managers.
                <br/>
                The app integrates with ASP.NET Core APIs and PostgreSQL, with Firebase used for demo hosting and versioning. I developed the mobile app independently while collaborating on backend integration, delivering a streamlined solution for tracking hotel investments and financial performance.
              </p>
              <button className="cta-button" onClick={() => handleReadMore('investorly-mobile')}>Read More</button>
            </div>
          </div>
        </div>

        {/* Project 2*/}
        <div className="project-card">
          <div className="card-content">
            <div className="content-left text-left">
              <h3 className="card-subtitle">AI Chatbot</h3>
              <h2 className="card-title">
              Gemini AI Chat — <span className="highlight-text">A Real-Time Conversational Web App</span>
              </h2>
              <p className="card-description">
              Gemini AI Chat is a modern, interactive web application inspired by Google Gemini's interface. Built using HTML5, CSS3, and vanilla JavaScript (ES6+), it offers real-time AI conversations, responsive design, and smooth animations to deliver a clean, intuitive user experience.
                <br/>
                The app connects to the Gemini (Gemma) model via the OpenRouter API using secure bearer token authentication and RESTful calls. With a lightweight, dependency-free architecture and offline chat persistence, this project emphasizes speed, privacy, and accessibility across platforms.
              </p>
              <button className="cta-button" onClick={() => handleReadMore('gemini-ai-chat')}>Read More</button>
            </div>
            
            <div className="content-right">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/project2.webp" alt="Project" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3*/}
        <div className="project-card">
          <div className="card-content">
          <div className="content-left">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/project3.webp" alt="Project" />
                </div>
              </div>
          </div>
            
            <div className="content-right">
              <h3 className="card-subtitle">Web Development</h3>
              <h2 className="card-title">
                Investorly — <span className="highlight-text">Smarter Investment Tracking</span>
              </h2>
              <p className="card-description">
                Investorly is a cross-platform mobile app for Android and iOS that helps users track investment portfolios and hotel revenue data. It features interactive charts, tables, and trend views, with secure authentication using JWT and Google OAuth for both investors and portfolio managers.
                <br/>
                The app integrates with ASP.NET Core APIs and PostgreSQL, with Firebase used for demo hosting and versioning. I developed the mobile app independently while collaborating on backend integration, delivering a streamlined solution for tracking hotel investments and financial performance.
              </p>
              <button className="cta-button" onClick={() => handleReadMore('investorly-web')}>Read More</button>
            </div>
            
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <div className="card-content">
            <div className="content-left text-left">
              <h3 className="card-subtitle">API Integration</h3>
              <h2 className="card-title">
              Orama API — <span className="highlight-text">Scalable & Secure Backend Architecture</span>
              </h2>
              <p className="card-description">
              Orama API is a RESTful backend service built with ASP.NET Core 9.0, C#, and SQL Server to support secure user registration, authentication, and role-based authorization. It includes robust features like JWT-based login, OTP email verification, and password hashing to protect user data. Both user and admin roles are supported with strict access control.
                <br/>
                The backend follows Clean Architecture principles, organizing logic into controllers, services, interfaces, and data layers for better maintainability and scalability. Swagger/OpenAPI is integrated for live API documentation, and Entity Framework Core handles seamless interaction with SQL Server. This solution provides a reliable, secure foundation for modern web and mobile applications.
              </p>
              <button className="cta-button" onClick={() => handleReadMore('orama-api')}>Read More</button>
            </div>
            
            <div className="content-right">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/project4.webp" alt="Project" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}