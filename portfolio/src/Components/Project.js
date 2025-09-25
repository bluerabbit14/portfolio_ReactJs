import React from 'react'
import './Project.css'

export default function Project() {

  const projects = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      timestamp: "Jan 2024 - Present",
      description: "A comprehensive e-commerce mobile application built with React Native and .NET MAUI. Features include user authentication, product catalog, shopping cart, payment integration, and real-time notifications.",
      techStack: ["React Native", ".NET MAUI", "Firebase", "Stripe API", "Azure"],
      caseStudy: "Developed for a retail client to increase mobile sales by 40%. Implemented offline-first architecture for better user experience.",
      repoLink: "https://github.com/username/ecommerce-app",
      liveLink: "https://ecommerce-app.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      timestamp: "Sep 2023 - Dec 2023",
      description: "A complete healthcare management system for clinics and hospitals. Includes patient management, appointment scheduling, medical records, and billing system with HIPAA compliance.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      caseStudy: "Reduced appointment scheduling time by 60% and improved patient data management efficiency for 5+ healthcare facilities.",
      repoLink: "https://github.com/username/healthcare-system",
      liveLink: "https://healthcare-system.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Real Estate Platform",
      timestamp: "Jun 2023 - Aug 2023",
      description: "A modern real estate platform connecting buyers, sellers, and agents. Features include property listings, virtual tours, mortgage calculator, and advanced search filters.",
      techStack: ["Vue.js", "Laravel", "MySQL", "AWS S3", "Google Maps API"],
      caseStudy: "Increased property viewings by 35% through virtual tour integration and improved search functionality.",
      repoLink: "https://github.com/username/real-estate-platform",
      liveLink: "https://real-estate-platform.com",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Task Management Dashboard",
      timestamp: "Mar 2023 - May 2023",
      description: "A collaborative task management dashboard for teams. Features include project tracking, team collaboration, time tracking, and progress analytics with real-time updates.",
      techStack: ["Angular", "Spring Boot", "PostgreSQL", "WebSocket", "Redis"],
      caseStudy: "Improved team productivity by 25% through better task organization and real-time collaboration features.",
      repoLink: "https://github.com/username/task-dashboard",
      liveLink: "https://task-dashboard.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Social Media Analytics Tool",
      timestamp: "Jan 2023 - Feb 2023",
      description: "A comprehensive social media analytics dashboard for businesses. Tracks engagement metrics, audience insights, content performance, and provides actionable recommendations.",
      techStack: ["React", "Python", "Django", "PostgreSQL", "Chart.js"],
      caseStudy: "Helped 50+ businesses increase their social media engagement by an average of 45% through data-driven insights.",
      repoLink: "https://github.com/username/social-analytics",
      liveLink: "https://social-analytics.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    }
  ]

  return (
    <section id="projects" className="project">
      <div className="project-container">
        <h2 className="section-title">PROJECTS</h2>
        
        <div className="timeline">
          {projects.map((project, index) => (
            <div key={project.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-text">
                  <div className="project-timestamp">{project.timestamp}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="tech-stack">
                    <h4>Tech Stack:</h4>
                    <div className="tech-tags">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="case-study">
                    <h4>Case Study:</h4>
                    <p>{project.caseStudy}</p>
                  </div>
                  
                  <div className="project-links">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link repo-link">
                      <i className="fab fa-github"></i> Repository
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  </div>
                </div>
                
                <div className="timeline-image">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
