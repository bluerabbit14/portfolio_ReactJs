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
        
          <h1 className="project-main-title">PROJECTS</h1>
          <p className="project-description">
          A diverse portfolio showcasing cross-platform mobile applications, web applications, AI-powered solutions, and robust backend APIs. Built with modern technologies including Flutter, .NET MAUI, React, ASP.NET Core, and various cloud services to deliver scalable and performant solutions.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-container">
        {/* Project 1 - Innvestorly Flutter */}
          {/* <div className="card-content">
            <div className="content-left">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/project1.webp" alt="Innvestorly Flutter" />
                </div>
              </div>
            </div>
            
            <div className="content-right">
              <h3 className="card-subtitle">Mobile App Development</h3>
              <h2 className="card-title">
              Innvestorly Flutter — <span className="highlight-text">Hotel Revenue & Investment Tracking</span>
              </h2>
              <p className="card-description">
                Innvestorly is a comprehensive cross-platform Flutter mobile application designed for hotel revenue and investment tracking. The app provides real-time insights into hotel performance metrics, revenue analytics, occupancy rates, and investment returns through intuitive dashboards and detailed reports.
                <br/><br/>
                Built with Flutter, it offers a seamless experience on both Android and iOS platforms. Features include secure authentication with JWT, Biometric, and MPIN support, comprehensive reporting with daily, weekly, monthly, and yearly views, interactive charts using fl_chart library, and offline data persistence. The app integrates with backend APIs for real-time data synchronization and provides a modern Material Design 3 interface with dark mode support.
              </p>
              <button className="cta-button" onClick={() => handleReadMore('innvestorly-flutter')}>Read More</button>
            </div>
          </div> */}
        

        {/* Project 2 - Investorly MAUI */}
          <div className="card-content card-content-reverse">
            <div className="content-right">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/project1.webp" alt="Investorly MAUI" />
                </div>
              </div>
            </div>
            
            <div className="content-left text-left">
              <h3 className="card-subtitle">Mobile App Development</h3>
              <h2 className="card-title">
              Investorly MAUI — <span className="highlight-text">Cross-Platform Investment Management</span>
              </h2>
              <p className="card-description">
                Investorly MAUI is a cross-platform mobile application built with .NET MAUI (.NET 9) for Android and iOS that helps users track investment portfolios and hotel revenue data. It features interactive charts, tables, and trend views with secure authentication using JWT and Google OAuth for both investors and portfolio managers.
                <br/><br/>
                The app integrates with ASP.NET Core APIs and PostgreSQL, with Firebase used for demo hosting and versioning. Built using Syncfusion components for rich UI elements, the application provides a native-like experience across platforms. Features include biometric authentication, real-time data synchronization, interactive data visualization, and comprehensive reporting capabilities.
              </p>
              <button className="cta-button" onClick={() => handleReadMore('investorly-maui')}>Read More</button>
            </div>
          </div>

        {/* Project 3 - MultiModel.ai */}
          <div className="card-content">
            <div className="content-left">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/project2.webp" alt="MultiModel.ai" />
                </div>
              </div>
            </div>
            
            <div className="content-right">
              <h3 className="card-subtitle">AI Chatbot</h3>
              <h2 className="card-title">
              MultiModel.ai — <span className="highlight-text">Multi-Model AI Chat Assistant</span>
              </h2>
              <p className="card-description">
              MultiModel.ai is a modern, multi-model AI chat assistant built with React that provides access to multiple state-of-the-art AI models through a single, unified interface powered by OpenRouter API. The application allows users to seamlessly switch between different AI models including Google Gemma 3N E2B IT, Mistral Devstral, and Llama 3.3 70B.
                <br/><br/>
                Built with React 19.1.1, the app features real-time chat with smooth typing animations, conversation history with search functionality, markdown support for rich text formatting, and a responsive design optimized for both desktop and mobile devices. The lightweight architecture emphasizes speed, privacy, and accessibility across platforms.
              </p>
              <button className="cta-button" onClick={() => handleReadMore('multimodel-ai')}>Read More</button>
            </div>
          </div>

        {/* Project 4 - Orama API */}
          <div className="card-content card-content-reverse">
            <div className="content-right">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/project4.webp" alt="Orama API" />
                </div>
              </div>
            </div>
            
            <div className="content-left text-left">
              <h3 className="card-subtitle">API Integration</h3>
              <h2 className="card-title">
              Orama API — <span className="highlight-text">Scalable & Secure Backend Architecture</span>
              </h2>
              <p className="card-description">
              Orama API is a comprehensive RESTful backend service built with ASP.NET Core 9.0, C#, and SQL Server to support secure user registration, authentication, and role-based authorization. It includes robust features like JWT-based login, OTP email verification via EmailJS, and password hashing to protect user data.
                <br/><br/>
                The backend follows Clean Architecture principles, organizing logic into controllers, services, interfaces, and data layers for better maintainability and scalability. Swagger/OpenAPI is integrated for live API documentation, and Entity Framework Core handles seamless interaction with SQL Server. The API provides comprehensive admin controls for user management, account activation/deactivation, and profile updates.
              </p>
              <button className="cta-button" onClick={() => handleReadMore('orama-api')}>Read More</button>
            </div>
          </div>

          {/* Project 5 - VM-Maui */}
          <div className="card-content">
            <div className="content-left">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/project2.webp" alt="VM-Maui" />
                </div>
              </div>
            </div>
            
            <div className="content-right">
              <h3 className="card-subtitle">Mobile App Development</h3>
              <h2 className="card-title">
              Virtu-Meet — <span className="highlight-text">Event Management & Virtual Meeting Platform</span>
              </h2>
              <p className="card-description">
              Virtu-Meet (VM-Maui) is a cross-platform event management mobile application built with .NET MAUI (.NET 9) for Android, iOS, and Mac Catalyst. The app provides a comprehensive solution for managing virtual and hybrid events, including attendee management, exhibitor interactions, agenda scheduling, and real-time communication.
                <br/><br/>
                Features include event dashboard with customizable themes, attendee and exhibitor management, agenda and session tracking, Zoom meeting integration, activity feed and messaging, gamification with points system, notifications via Firebase, and CMS page support. Built with Syncfusion and Telerik components, the app provides a rich, engaging experience for event attendees and organizers.
              </p>
              <button className="cta-button" onClick={() => handleReadMore('vm-maui')}>Read More</button>
            </div>
          </div>

        {/* Project 6 - SOLI MAUI */}
          <div className="card-content card-content-reverse">
            <div className="content-right">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/project3.webp" alt="SOLI MAUI" />
                </div>
              </div>
            </div>
            
            <div className="content-left text-left">
              <h3 className="card-subtitle">Mobile App Development</h3>
              <h2 className="card-title">
              SOLI MAUI — <span className="highlight-text">Clinician & Healthcare Management App</span>
              </h2>
              <p className="card-description">
              SOLI is a comprehensive .NET MAUI mobile application designed for healthcare clinicians and therapists. Built with .NET 9.0, the app provides a complete solution for managing patient care, scheduling, documentation, and healthcare workflows on both Android and iOS platforms.
                <br/><br/>
                The application features patient management, signature capture and storage, location tracking, calendar integration, timer functionality, and comprehensive reporting. Built using Syncfusion and Telerik UI components, the app provides a rich, native-like experience. It includes features for therapist information management, patient list management, care documentation, and real-time data synchronization with backend services.
              </p>
              <button className="cta-button" onClick={() => handleReadMore('soli-maui')}>Read More</button>
            </div>
          </div>

          {/* Project 7 - Orama MAUI */}
          {/* <div className="card-content">
            <div className="content-left">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/project4.webp" alt="Orama MAUI" />
                </div>
              </div>
            </div>
            
            <div className="content-right">
              <h3 className="card-subtitle">Mobile App Development</h3>
              <h2 className="card-title">
              Orama MAUI — <span className="highlight-text">Secure Authentication & Profile Management</span>
              </h2>
              <p className="card-description">
              Orama is a cross-platform mobile application built with .NET MAUI (.NET 9) featuring secure user authentication, biometric authentication support, and comprehensive user profile management. The app provides a modern, user-friendly experience across Android, iOS, Mac Catalyst, Windows, and Tizen platforms.
                <br/><br/>
                Built using MVVM pattern with CommunityToolkit.Mvvm, the application includes features such as user registration and login, biometric authentication (Face ID and Fingerprint), profile management with image upload, password change functionality, theme support (Light/Dark mode), and secure local storage. The app integrates with the Orama API backend for authentication and data synchronization.
              </p>
              <button className="cta-button" onClick={() => handleReadMore('orama-maui')}>Read More</button>
            </div>
          </div> */}

        

        </div>
    </section>
  )
}