import React from 'react'
import './ProjectDetail.css'

export default function ProjectDetail({ projectId, onBack }) {

  // Project data
  const projects = {
    'innvestorly-flutter': {
      id: 'innvestorly-flutter',
      category: 'Mobile App Development',
      title: 'Innvestorly Flutter — Hotel Revenue & Investment Tracking',
      image: '/Assets/project1.webp',
      description: 'Innvestorly is a comprehensive cross-platform Flutter mobile application designed for hotel revenue and investment tracking. The app provides real-time insights into hotel performance metrics, revenue analytics, occupancy rates, and investment returns through intuitive dashboards and detailed reports.',
      fullDescription: `Innvestorly Flutter represents a sophisticated mobile application solution built with Flutter 3.9.2+ and Dart, designed to revolutionize how investors and portfolio managers track hotel investments and revenue performance. The application provides comprehensive tools for monitoring investment portfolios with real-time data synchronization, interactive visualizations, and detailed analytics across multiple time periods.

The app features a robust authentication system supporting multiple methods including JWT token-based authentication, biometric authentication (fingerprint and face recognition), and MPIN (Mobile PIN) with security validations. The dashboard provides multi-period views for revenue tracking including daily, weekly, monthly, and yearly perspectives, each with interactive bar charts using the fl_chart library. The application includes comprehensive reporting features such as Year-over-Year (YoY) reports for comparing revenue across different years, occupancy management with real-time occupancy rate calculations, and hotel-wise breakdowns showing individual hotel performance metrics.

Built with Material Design 3, the app offers a modern, clean interface with dark mode support and responsive layouts that adapt to different screen sizes. Local data persistence using SharedPreferences ensures offline capability, while real-time API integration keeps data synchronized. The technical architecture emphasizes performance, security, and user experience, making complex financial data accessible and actionable for both novice and experienced investors.`,
      technologies: ['Flutter', 'Dart', 'Android', 'IOS', 'JWT', 'PostgreSQL', 'RESTful APIs', 'Firebase'],
      features: [
        'Cross-platform mobile app for Android and iOS',
        'Real-time revenue and occupancy analytics',
        'Interactive charts and data visualization',
        'Multi-authentication methods (JWT, Biometric, MPIN)',
        'Comprehensive reporting (Daily, Weekly, Monthly, Yearly)',
        'Year-over-Year comparison reports',
        'Hotel-wise performance breakdown',
        'Material Design 3 with dark mode support',
        'Offline data persistence',
        'Profile management with image upload'
      ],
      challenges: [
        'Implementing complex financial data visualization in Flutter',
        'Creating seamless real-time data synchronization',
        'Designing intuitive multi-period reporting interface',
        'Ensuring secure authentication across multiple methods',
        'Optimizing performance for large datasets on mobile devices'
      ],
      results: [
        'Successfully delivered a production-ready Flutter application',
        'Improved investment tracking efficiency significantly',
        'Reduced data analysis time from hours to minutes',
        'Achieved high user satisfaction with intuitive interface',
        'Seamless integration with backend APIs'
      ]
    },
    'investorly-maui': {
      id: 'investorly-maui',
      category: 'Mobile App Development',
      title: 'Investorly MAUI — Cross-Platform Investment Management',
      image: '/Assets/project1.webp',
      description: 'Investorly MAUI is a cross-platform mobile application built with .NET MAUI (.NET 9) for Android and iOS that helps users track investment portfolios and hotel revenue data. It features interactive charts, tables, and trend views with secure authentication using JWT and Google OAuth.',
      fullDescription: `Investorly MAUI is a comprehensive cross-platform mobile application built with .NET MAUI (.NET 9) that provides investors and portfolio managers with powerful tools to track, analyze, and manage their investment portfolios. The application leverages the latest .NET technologies to deliver a native-like experience across Android and iOS platforms while maintaining a single codebase.

The app features rich data visualization capabilities using Syncfusion components, including interactive charts that display real-time investment performance, detailed tables showing portfolio breakdowns, and trend analysis views. The authentication system supports JWT (JSON Web Tokens) and Google OAuth integration, ensuring secure access for both individual investors and portfolio managers. Biometric authentication is also supported for enhanced security and user convenience.

The technical architecture integrates seamlessly with ASP.NET Core APIs and PostgreSQL database, with Firebase utilized for demo hosting and version management. The application includes features for tracking hotel investments, revenue data management, interactive data visualization, and comprehensive reporting. Built with modern .NET MAUI patterns and best practices, the app provides a streamlined, user-friendly solution that simplifies the complex process of tracking hotel investments and financial performance.`,
      technologies: ['.NET MAUI', 'C#', 'ASP.NET Core', 'PostgreSQL', 'JWT', 'Firebase', 'Android', 'IOS', 'Syncfusion'],
      features: [
        'Cross-platform mobile app for Android and iOS',
        'Interactive charts and data visualization with Syncfusion',
        'Real-time portfolio tracking',
        'Secure JWT and Google OAuth authentication',
        'Biometric authentication support',
        'Hotel revenue data management',
        'Trend analysis and reporting',
        'Responsive design for all screen sizes',
        'Offline data synchronization'
      ],
      challenges: [
        'Implementing cross-platform compatibility with .NET MAUI',
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
    'multimodel-ai': {
      id: 'multimodel-ai',
      category: 'AI Chatbot',
      title: 'MultiModel.ai — Multi-Model AI Chat Assistant',
      image: '/Assets/project2.webp',
      description: 'MultiModel.ai is a modern, multi-model AI chat assistant built with React that provides access to multiple state-of-the-art AI models through a single, unified interface powered by OpenRouter API.',
      fullDescription: `MultiModel.ai represents a cutting-edge web application that revolutionizes how users interact with artificial intelligence by providing access to multiple state-of-the-art AI models through a single, unified interface. Built with React 19.1.1, this application allows users to seamlessly switch between different AI models including Google Gemma 3N E2B IT, Mistral Devstral 2512, and Llama 3.3 70B Instruct, all configured to use free tier access.

The application features a modern, intuitive interface with real-time chat capabilities, smooth typing animations, and comprehensive conversation history management. Users can search through their chat history with highlighted results, switch between AI models mid-conversation, and enjoy rich text formatting with markdown support for headers, lists, and paragraphs. The interface includes one-click copy functionality for messages, sample prompts for quick-start conversations, and a responsive design optimized for both desktop and mobile devices.

Powered by the OpenRouter API, the application provides secure bearer token authentication and RESTful API calls to access various AI models. The lightweight architecture emphasizes speed, privacy, and accessibility, making advanced AI technology accessible to users across all platforms. The clean, modern UI with smooth animations delivers an engaging user experience that makes AI conversations feel natural and intuitive.`,
      technologies: ['React', 'JavaScript', 'OpenRouter API', 'HTML5', 'CSS3', 'FontAwesome'],
      features: [
        'Multiple AI model support (Gemma, Mistral, Llama)',
        'Real-time chat with smooth typing animations',
        'Conversation history with search functionality',
        'Model switching mid-conversation',
        'Markdown support for rich text formatting',
        'One-click message copy functionality',
        'Sample prompts for quick-start',
        'Responsive design for all devices',
        'Clean, modern interface design'
      ],
      challenges: [
        'Implementing seamless model switching without losing context',
        'Creating smooth animations for real-time chat',
        'Managing conversation history efficiently',
        'Ensuring secure API communication',
        'Optimizing performance for various AI models'
      ],
      results: [
        'Delivered a fully functional multi-model AI chat application',
        'Achieved seamless model switching capability',
        'Reduced loading time for AI responses',
        'Successfully integrated with multiple AI providers',
        'Created an intuitive, user-friendly interface'
      ]
    },
    'orama-api': {
      id: 'orama-api',
      category: 'API Integration',
      title: 'Orama API — Scalable & Secure Backend Architecture',
      image: '/Assets/project4.webp',
      description: 'Orama API is a comprehensive RESTful backend service built with ASP.NET Core 9.0, C#, and SQL Server to support secure user registration, authentication, and role-based authorization. It includes robust features like JWT-based login, OTP email verification via EmailJS, and password hashing.',
      fullDescription: `Orama API represents a comprehensive backend solution designed to provide secure, scalable, and maintainable services for modern web and mobile applications. Built with ASP.NET Core 9.0 and C#, this RESTful API service demonstrates advanced backend development practices and security implementations. The API provides a complete user management system with secure registration, authentication, and role-based authorization.

The authentication system uses JWT (JSON Web Tokens) for stateless authentication, ensuring scalability and security. OTP (One-Time Password) email verification via EmailJS adds an extra layer of security to the registration process, with time-limited OTPs (5 minutes expiry) and rate limiting to prevent spam (max 2 active OTPs per email). Password security is handled through industry-standard hashing algorithms, ensuring that user credentials are never stored in plain text.

The architecture follows Clean Architecture principles, organizing the codebase into distinct layers: controllers for API endpoints, services for business logic, interfaces for abstraction, and data layers for database interaction. This separation of concerns improves maintainability, testability, and scalability. Entity Framework Core is used for seamless interaction with SQL Server, providing an object-relational mapping (ORM) that simplifies database operations while maintaining performance. Swagger/OpenAPI integration provides comprehensive API documentation that is automatically generated and always up-to-date. The API includes comprehensive admin features for user management, account activation/deactivation, and profile updates, making it a complete backend solution for modern applications.`,
      technologies: ['ASP.NET Core 9.0', 'C#', 'SQL Server', 'Entity Framework Core', 'JWT', 'EmailJS', 'RESTful APIs', 'Swagger'],
      features: [
        'Secure user registration and authentication',
        'JWT-based stateless authentication',
        'OTP email verification system via EmailJS',
        'Role-based authorization (User/Admin)',
        'Password hashing and security',
        'Comprehensive admin controls',
        'User status management (activate/deactivate)',
        'RESTful API design',
        'Comprehensive API documentation with Swagger',
        'Clean Architecture implementation'
      ],
      challenges: [
        'Implementing secure authentication and authorization',
        'Designing scalable API architecture',
        'Ensuring data security and privacy',
        'Integrating EmailJS for OTP delivery',
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
    },
    'orama-maui': {
      id: 'orama-maui',
      category: 'Mobile App Development',
      title: 'Orama MAUI — Secure Authentication & Profile Management',
      image: '/Assets/project4.webp',
      description: 'Orama is a cross-platform mobile application built with .NET MAUI (.NET 9) featuring secure user authentication, biometric authentication support, and comprehensive user profile management across Android, iOS, Mac Catalyst, Windows, and Tizen platforms.',
      fullDescription: `Orama MAUI is a modern cross-platform mobile application built with .NET MAUI (.NET 9) that provides a secure and user-friendly experience for user authentication and profile management. The application demonstrates advanced mobile development practices using the MVVM (Model-View-ViewModel) pattern with CommunityToolkit.Mvvm, ensuring clean code architecture and maintainability.

The authentication system is comprehensive, supporting user registration with email, password, full name, and optional phone number, secure login with email and password validation, and password recovery functionality. The app features advanced biometric authentication support including Face ID for iOS and fingerprint authentication for both Android and iOS platforms. Biometric authentication can be automatically prompted on app launch if enabled, providing a seamless and secure user experience.

Profile management capabilities include viewing and managing user profile information, uploading profile photos from camera or gallery, removing profile photos with support for JPG/JPEG formats, and secure password change functionality. The app includes settings for theme support (Light and Dark themes), user information display, and quick navigation to profile pages. The application uses secure local storage via MAUI SecureStorage for user credentials and preferences, ensuring data encryption at rest and proper session management. The app integrates seamlessly with the Orama API backend for authentication and data synchronization.`,
      technologies: ['.NET MAUI', 'C#', 'CommunityToolkit.Mvvm', 'Plugin.Maui.Biometric', 'Syncfusion', 'Android', 'IOS', 'Mac Catalyst', 'Windows'],
      features: [
        'Cross-platform support (Android, iOS, Mac Catalyst, Windows, Tizen)',
        'User registration and login',
        'Biometric authentication (Face ID, Fingerprint)',
        'Profile management with image upload',
        'Password change functionality',
        'Theme support (Light/Dark mode)',
        'Secure local storage',
        'Forgot password functionality',
        'Session management',
        'MVVM architecture pattern'
      ],
      challenges: [
        'Implementing cross-platform biometric authentication',
        'Managing secure local storage across platforms',
        'Creating consistent UI/UX across different platforms',
        'Ensuring secure data synchronization with backend',
        'Implementing MVVM pattern effectively'
      ],
      results: [
        'Successfully delivered a production-ready cross-platform app',
        'Achieved seamless biometric authentication across platforms',
        'Improved user experience with intuitive interface',
        'Reduced development time with single codebase',
        'Created a secure foundation for user management'
      ]
    },
    'soli-maui': {
      id: 'soli-maui',
      category: 'Mobile App Development',
      title: 'SOLI MAUI — Clinician & Healthcare Management App',
      image: '/Assets/project3.webp',
      description: 'SOLI is a comprehensive .NET MAUI mobile application designed for healthcare clinicians and therapists. Built with .NET 9.0, the app provides a complete solution for managing patient care, scheduling, documentation, and healthcare workflows on both Android and iOS platforms.',
      fullDescription: `SOLI MAUI is a comprehensive healthcare management application built with .NET MAUI (.NET 9) specifically designed for clinicians and therapists. The application provides a complete solution for managing patient care, scheduling appointments, documenting treatments, and handling various healthcare workflows. Built for both Android and iOS platforms, the app leverages modern .NET technologies to deliver a native-like experience.

The application features comprehensive patient management capabilities, allowing clinicians to maintain detailed patient records, track care progress, and manage patient lists efficiently. Signature capture and storage functionality enables clinicians to collect and store digital signatures for documentation purposes. Location tracking features help ensure accurate service delivery and compliance with healthcare regulations. Calendar integration provides scheduling capabilities for appointments and care sessions.

The app includes timer functionality for tracking care duration and comprehensive reporting features for analyzing patient outcomes and care delivery metrics. Built using Syncfusion and Telerik UI components, the application provides a rich, native-like user experience with advanced data visualization and interactive elements. The application supports real-time data synchronization with backend services, ensuring that clinicians always have access to the most up-to-date patient information. The technical architecture emphasizes reliability, security, and ease of use, making it an essential tool for healthcare professionals.`,
      technologies: ['.NET MAUI', 'C#', 'Syncfusion', 'Telerik', 'Android', 'IOS', 'SQLite', 'RESTful APIs'],
      features: [
        'Patient management and care tracking',
        'Signature capture and storage',
        'Location tracking and verification',
        'Calendar integration and scheduling',
        'Timer functionality for care duration',
        'Comprehensive reporting and analytics',
        'Real-time data synchronization',
        'Rich UI with Syncfusion and Telerik components',
        'Therapist information management',
        'Care documentation and records'
      ],
      challenges: [
        'Implementing complex healthcare workflows in mobile app',
        'Ensuring HIPAA compliance and data security',
        'Managing real-time data synchronization',
        'Creating intuitive UI for complex healthcare data',
        'Integrating multiple third-party components'
      ],
      results: [
        'Successfully delivered a production-ready healthcare app',
        'Improved care documentation efficiency',
        'Enhanced patient management capabilities',
        'Reduced administrative overhead for clinicians',
        'Created a reliable tool for healthcare professionals'
      ]
    },
    'vm-maui': {
      id: 'vm-maui',
      category: 'Mobile App Development',
      title: 'Virtu-Meet — Event Management & Virtual Meeting Platform',
      image: '/Assets/project2.webp',
      description: 'Virtu-Meet (VM-Maui) is a cross-platform event management mobile application built with .NET MAUI (.NET 9) for Android, iOS, and Mac Catalyst. The app provides a comprehensive solution for managing virtual and hybrid events, including attendee management, exhibitor interactions, agenda scheduling, and real-time communication.',
      fullDescription: `Virtu-Meet (VM-Maui) is a comprehensive event management platform built with .NET MAUI (.NET 9) that revolutionizes how virtual and hybrid events are managed and experienced. The application provides event organizers, attendees, and exhibitors with powerful tools to create, manage, and participate in engaging virtual events. Built for Android, iOS, and Mac Catalyst platforms, the app leverages modern .NET technologies to deliver a seamless, native-like experience across all devices.

The application features a customizable event dashboard with theme support, allowing each event to have its unique branding and appearance. Attendee and exhibitor management capabilities enable organizers to efficiently manage participant lists, profiles, and interactions. The agenda and session tracking features help attendees stay organized and never miss important sessions. Zoom meeting integration provides seamless access to virtual meetings directly from the app.

Activity feed and messaging features enable real-time communication between attendees, exhibitors, and organizers, fostering engagement and networking opportunities. The gamification system with points rewards active participation and engagement. Firebase integration provides push notifications to keep users informed about important event updates, schedule changes, and networking opportunities. CMS page support allows organizers to create custom content pages for their events. Built with Syncfusion and Telerik components, the app provides a rich, engaging user experience with advanced UI elements and smooth animations.`,
      technologies: ['.NET MAUI', 'C#', 'Syncfusion', 'Telerik', 'Firebase', 'Zoom API', 'Android', 'IOS', 'Mac Catalyst', 'RESTful APIs'],
      features: [
        'Event dashboard with customizable themes',
        'Attendee and exhibitor management',
        'Agenda and session tracking',
        'Zoom meeting integration',
        'Activity feed and messaging',
        'Gamification with points system',
        'Push notifications via Firebase',
        'CMS page support',
        'Real-time communication',
        'Rich UI with Syncfusion and Telerik components'
      ],
      challenges: [
        'Implementing real-time communication features',
        'Integrating multiple third-party services (Zoom, Firebase)',
        'Creating scalable architecture for large events',
        'Ensuring smooth user experience with complex event data',
        'Managing real-time notifications and updates'
      ],
      results: [
        'Successfully delivered a production-ready event management platform',
        'Enhanced attendee engagement and networking',
        'Improved event organization efficiency',
        'Reduced technical overhead for event organizers',
        'Created an engaging platform for virtual events'
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
                  'Google OAuth': 'googleAuth.png',
                  'Flutter': 'Flutter.png',
                  'Dart': 'Flutter.png',
                  'EmailJS': 'EmailJS.png',
                  'Syncfusion': 'NET.png',
                  'Telerik': 'NET.png',
                  'Zoom API': 'Swagger.png',
                  'Mac Catalyst': 'Apple.png'
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
