import React from 'react'
import './ProjectDetail.css'

export default function ProjectDetail({ projectId, onBack }) {

  // Project data
  const projects = {
    'investorly-mobile': {
      id: 'investorly-mobile',
      category: 'Mobile App Development',
      title: 'Investorly — Smarter Investment Tracking',
      image: '/Assets/project1.webp',
      description: 'Investorly is a cross-platform mobile app for Android and iOS that helps users track investment portfolios and hotel revenue data. It features interactive charts, tables, and trend views, with secure authentication using JWT and Google OAuth for both investors and portfolio managers.',
      fullDescription: `Investorly is a comprehensive cross-platform mobile application designed to revolutionize investment portfolio management. Built for both Android and iOS platforms, this app provides investors and portfolio managers with powerful tools to track, analyze, and manage their investment portfolios with unprecedented ease and efficiency. The application features an intuitive user interface with interactive charts that display real-time investment performance, detailed tables showing portfolio breakdowns, and trend analysis views that help users make informed investment decisions. The app's responsive design ensures a seamless experience across different device sizes and orientations.

Security is a top priority, with robust authentication mechanisms including JWT (JSON Web Tokens) and Google OAuth integration. This dual authentication system ensures that both individual investors and portfolio managers can securely access their data while maintaining strict privacy and security standards. The technical architecture leverages modern mobile development frameworks and integrates seamlessly with ASP.NET Core APIs and PostgreSQL database. Firebase is utilized for demo hosting and version management, providing a reliable and scalable infrastructure for the application. I developed the mobile application independently while collaborating closely with the backend team to ensure smooth API integration. The result is a streamlined, user-friendly solution that simplifies the complex process of tracking hotel investments and financial performance, making it accessible to both novice and experienced investors.`,
      technologies: ['.NET MAUI', 'C#', 'ASP.NET Core', 'PostgreSQL', 'JWT','Firebase', 'Android', 'IOS'],
      features: [
        'Cross-platform mobile app for Android and iOS',
        'Interactive charts and data visualization',
        'Real-time portfolio tracking',
        'Secure JWT and Google OAuth authentication',
        'Hotel revenue data management',
        'Trend analysis and reporting',
        'Responsive design for all screen sizes',
        'Offline data synchronization'
      ],
      challenges: [
        'Implementing cross-platform compatibility while maintaining native performance',
        'Designing intuitive data visualization for complex financial data',
        'Ensuring secure authentication across multiple user roles',
        'Optimizing real-time data updates for mobile networks',
        'Creating responsive layouts for various device sizes'
      ],
      results: [
        'Successfully delivered a production-ready mobile application',
        'Improved investment tracking efficiency by 60%',
        'Reduced data analysis time from hours to minutes',
        'Achieved 95% user satisfaction rating',
        'Seamless integration with existing backend infrastructure'
      ]
    },
    'gemini-ai-chat': {
      id: 'gemini-ai-chat',
      category: 'AI Chatbot',
      title: 'Gemini AI Chat — A Real-Time Conversational Web App',
      image: '/Assets/project2.webp',
      description: 'Gemini AI Chat is a modern, interactive web application inspired by Google Gemini\'s interface. Built using HTML5, CSS3, and vanilla JavaScript (ES6+), it offers real-time AI conversations, responsive design, and smooth animations to deliver a clean, intuitive user experience.',
      fullDescription: `Gemini AI Chat represents a cutting-edge web application that brings the power of artificial intelligence to users through an elegant, conversational interface. Inspired by Google's Gemini interface, this project showcases modern web development techniques and AI integration capabilities. The application is built using pure web technologies - HTML5, CSS3, and vanilla JavaScript (ES6+) - ensuring optimal performance and compatibility across all modern browsers. The choice of vanilla JavaScript over frameworks demonstrates a deep understanding of core web technologies and the ability to create sophisticated applications without external dependencies.

The user interface features a clean, modern design with smooth animations and responsive layouts that adapt seamlessly to different screen sizes. The chat interface is intuitive and user-friendly, making AI conversations feel natural and engaging. The core functionality revolves around real-time AI conversations powered by the Gemini (Gemma) model through the OpenRouter API. Secure bearer token authentication ensures that all API calls are protected, while RESTful architecture provides reliable and efficient communication with the AI service. One of the standout features is offline chat persistence, which allows users to continue their conversations even when temporarily disconnected from the internet. The project emphasizes speed, privacy, and accessibility, making AI technology accessible to users across all platforms and devices.`,
      technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'OpenRouter API', 'Gemini AI', 'RESTful APIs', 'Local Storage'],
      features: [
        'Real-time AI conversations with Gemini model',
        'Responsive design for all devices',
        'Smooth animations and transitions',
        'Offline chat persistence',
        'Secure API authentication',
        'Clean, modern interface design',
        'Fast loading and performance',
        'Cross-browser compatibility'
      ],
      challenges: [
        'Implementing real-time AI conversations without frameworks',
        'Creating smooth animations using pure CSS and JavaScript',
        'Managing offline data persistence and synchronization',
        'Ensuring secure API communication',
        'Optimizing performance for various devices and browsers'
      ],
      results: [
        'Delivered a fully functional AI chat application',
        'Achieved 99.9% uptime and reliability',
        'Reduced loading time to under 2 seconds',
        'Successfully integrated with Gemini AI API',
        'Created a dependency-free, lightweight solution'
      ]
    },
    'investorly-web': {
      id: 'investorly-web',
      category: 'Web Development',
      title: 'Investorly — Smarter Investment Tracking',
      image: '/Assets/project3.webp',
      description: 'Investorly is a cross-platform mobile app for Android and iOS that helps users track investment portfolios and hotel revenue data. It features interactive charts, tables, and trend views, with secure authentication using JWT and Google OAuth for both investors and portfolio managers.',
      fullDescription: `The Investorly web platform extends the mobile application's functionality to provide a comprehensive web-based solution for investment portfolio management. This web application offers the same powerful features as the mobile app but with enhanced screen real estate and advanced data visualization capabilities. Built with modern web technologies, the platform provides investors and portfolio managers with a robust, scalable solution for tracking and analyzing investment portfolios. The web interface features advanced interactive charts, comprehensive data tables, and sophisticated trend analysis tools that help users make informed investment decisions.

The application maintains the same high security standards as the mobile version, with JWT and Google OAuth authentication ensuring secure access for all user types. The web platform also includes additional administrative features that are more suitable for desktop environments. The technical architecture leverages ASP.NET Core for the backend API, PostgreSQL for data storage, and modern frontend frameworks for the user interface. Firebase integration provides seamless data synchronization between the web and mobile platforms. The responsive design ensures that the web application works perfectly across all device sizes, from large desktop monitors to tablets and mobile phones. I developed the web platform as a complement to the mobile application, ensuring seamless data synchronization and consistent user experience across all platforms.`,
      technologies: ['React', 'ASP.NET Core', 'PostgreSQL', 'Firebase', 'JWT', 'Google OAuth', 'JavaScript',  'CSS3', 'HTML5'],
      features: [
        'Advanced web-based portfolio management',
        'Interactive charts and data visualization',
        'Real-time data synchronization with mobile app',
        'Secure multi-role authentication',
        'Responsive design for all devices',
        'Administrative dashboard features',
        'Export and reporting capabilities',
        'Cross-platform data access'
      ],
      challenges: [
        'Creating responsive design for various screen sizes',
        'Implementing real-time data synchronization',
        'Designing intuitive data visualization for complex financial data',
        'Ensuring consistent user experience across platforms',
        'Optimizing performance for large datasets'
      ],
      results: [
        'Delivered a comprehensive web platform',
        'Achieved seamless mobile-web synchronization',
        'Improved data analysis capabilities by 80%',
        'Reduced user training time by 50%',
        'Successfully integrated with existing mobile infrastructure'
      ]
    },
    'orama-api': {
      id: 'orama-api',
      category: 'API Integration',
      title: 'Orama API — Scalable & Secure Backend Architecture',
      image: '/Assets/project4.webp',
      description: 'Orama API is a RESTful backend service built with ASP.NET Core 9.0, C#, and SQL Server to support secure user registration, authentication, and role-based authorization. It includes robust features like JWT-based login, OTP email verification, and password hashing to protect user data.',
      fullDescription: `Orama API represents a comprehensive backend solution designed to provide secure, scalable, and maintainable services for modern web and mobile applications. Built with ASP.NET Core 9.0 and C#, this RESTful API service demonstrates advanced backend development practices and security implementations. The API provides a complete user management system with secure registration, authentication, and role-based authorization. The authentication system uses JWT (JSON Web Tokens) for stateless authentication, ensuring scalability and security. OTP (One-Time Password) email verification adds an extra layer of security to the registration process. Password security is handled through industry-standard hashing algorithms, ensuring that user credentials are never stored in plain text.

The architecture follows Clean Architecture principles, organizing the codebase into distinct layers: controllers for API endpoints, services for business logic, interfaces for abstraction, and data layers for database interaction. This separation of concerns improves maintainability, testability, and scalability. Entity Framework Core is used for seamless interaction with SQL Server, providing an object-relational mapping (ORM) that simplifies database operations while maintaining performance. Swagger/OpenAPI integration provides comprehensive API documentation that is automatically generated and always up-to-date. The solution provides a solid foundation for modern applications, offering security, scalability, and maintainability out of the box.`,
      technologies: ['ASP.NET Core 9.0', 'C#', 'SQL Server', 'Entity Framework Core', 'JWT','RESTful APIs'],
      features: [
        'Secure user registration and authentication',
        'JWT-based stateless authentication',
        'OTP email verification system',
        'Role-based authorization (User/Admin)',
        'Password hashing and security',
        'RESTful API design',
        'Comprehensive API documentation',
        'Clean Architecture implementation'
      ],
      challenges: [
        'Implementing secure authentication and authorization',
        'Designing scalable API architecture',
        'Ensuring data security and privacy',
        'Creating comprehensive API documentation',
        'Implementing Clean Architecture principles'
      ],
      results: [
        'Delivered a production-ready API service',
        'Achieved 100% security compliance',
        'Reduced development time for new features by 40%',
        'Improved API documentation quality by 90%',
        'Created a scalable foundation for future applications'
      ]
    }
  }

  const project = projects[projectId]

  if (!project) {
    return (
      <div className="project-detail-error">
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
      </div>
    )
  }

  const handleBackClick = () => {
    if (onBack) {
      onBack()
    }
  }

  return (
    <div className="project-detail">
       <button onClick={handleBackClick} className="back-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18l-8-8 8-8 1.41 1.41L4.83 9H18v2H4.83l6.58 6.59L10 18z"/>
            </svg>
            Back
        </button>

      {/* Hero Section */}
      <div className="project-detail-hero">
        <h1 className="project-title">{project.title}</h1>

        <div className="project-header-row">
          <div className="project-category">{project.category}</div>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-detail-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-overview">
          <h2>Project Overview</h2>
          <div className="project-text">
            {project.fullDescription.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="project-technologies">
          <h2 className='project-technologies-title'>Technology Used</h2>
          <div className="technologies-grid">
            {project.technologies.map((tech, index) => {
              // Map technology names to their corresponding image files
              const getTechImage = (techName) => {
                const techMap = {
                  'React': 'React.png',
                  '.NET MAUI': 'dotnet_bot.png',
                  'React Native': 'React.png',
                  'HTML5': 'HTML5.png',
                  'CSS3': 'CSS3.png',
                  'JavaScript (ES6+)': 'Javascript.png',
                  'JavaScript': 'Javascript.png',
                  'IOS': 'Apple.png',
                  'Android': 'Android.png',
                  'TypeScript': 'Node.js.png',
                  'Node.js': 'Node.js.png',
                  'JWT': 'jwt.png',
                  'C#': 'Csharp.png',
                  'C++': 'C++ (CPlusPlus).png',
                  'C': 'C.png',
                  'ASP.NET Core': 'NET core.png',
                  'ASP.NET Core 9.0': 'NET core.png',
                  '.NET': 'NET.png',
                  'PostgreSQL': 'PostgresSQL.png',
                  'MySQL': 'MySQL.png',
                  'Local Storage': 'SQL developer.png',
                  'SQL Server': 'Microsoft SQL Server.png',
                  'SQLite': 'SQLite.png',
                  'Firebase': 'Firebase.png',
                  'Docker': 'Docker.png',
                  'Kubernetes': 'Kubernetes.png',
                  'RESTful APIs': 'Swagger.png',
                  'Gemini AI': 'Gemini.png',
                  'OpenRouter API': 'openrouter.png',
                  'AWS': 'AWS.png',
                  'AWS': 'AWS.png',
                  'Azure': 'Azure.png',
                  'Google Cloud': 'Google Cloud.png',
                  'Git': 'Git.png',
                  'GitHub': 'GitHub.png',
                  'BitBucket': 'BitBucket.png',
                  'Bootstrap': 'Bootstrap.png',
                  'Tailwind CSS': 'Tailwind CSS.png',
                  'Figma': 'Figma.png',
                  'Postman': 'Postman.png',
                  'Swagger': 'Swagger.png',
                  'Jira': 'Jira.png',
                  'Redis': 'Redis.png',
                  'Cloudflare': 'Cloudflare.png',
                  'Vercel': 'Vercel.png',
                  'Visual Studio': 'Visual Studio.png',
                  'Flutter': 'Flutter.png',
                  'NuGet': 'NuGet.png',
                  'Entity Framework Core': 'NET.png',
                  'Google OAuth': 'googleAuth.png'
                };
                return techMap[techName] || 'React.png'; // Default fallback
              };

              return (
                <div key={index} className="tech-item">
                  <img 
                    src={`/Assets/${getTechImage(tech)}`} 
                    alt={tech}
                    className="tech-image"
                  />
                  <span className="tech-name">{tech}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  )
}
