import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Project.css'

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(0) // Default to first project (index 0)

  const projects = [
    {
      id: 1,
      title: "Innvestorly App",
      category: "Mobile Application",
      description: "Innvestorly is a hotel revenue monitoring app developed using .NET MAUI for a U.S.-based client. Designed for cross-platform use, the app provides real-time insights into hotel performance metrics, enabling property owners and investors to track revenue, occupancy rates, and financial trends from anywhere. With a focus on usability and data clarity, Investorly empowers informed decision-making in the hospitality sector.",
      image: "/assets/InnvestorlyIcon.png",
      technologies: [".NET MAUI", "JWT", "PostgreSQL", "Stripe API", "Git", "Firebase", "Rest API","Syncfusion","CommunityToolkit.Maui","CommunityToolkit.Mvvm","Android","iOS"],
      features: ["Jwt Authentication","Periodic Sync","Theme Services", "Localization", "Push Notifications", "Data statistics", "Graphical Analysis"],
      demo: "https://example.com",
      github: "https://github.com/example"
    },
    {
      id: 2,
      title: "Google Gemini Bot",
      category: "Web Application",
      description: "A collaborative task management platform with real-time updates, team collaboration features, and project tracking capabilities.",
      image: "📋",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      features: ["Real-time Updates", "Team Collaboration", "Project Tracking", "File Sharing", "Notifications"],
      demo: "https://example.com",
      github: "https://github.com/example"
    },
    {
      id: 3,
      title: "Orama App",
      category: "Mobile Development",
      description: "A beautiful weather application with location-based forecasts, detailed weather maps, and personalized weather alerts.",
      image: "🌤️",
      technologies: ["Flutter", "Dart", "OpenWeather API", "Google Maps"],
      features: ["Location Services", "Weather Maps", "7-Day Forecast", "Weather Alerts", "Offline Support"],
      demo: "https://example.com",
      github: "https://github.com/example"
    },
    {
      id: 4,
      title: "Orama Rest API",
      category: "Rest API",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.",
      image: "💼",
      technologies: ["React", "Framer Motion", "CSS3", "Netlify"],
      features: ["Responsive Design", "Smooth Animations", "Contact Form", "Project Gallery", "SEO Optimized"],
      demo: "https://example.com",
      github: "https://github.com/example"
    },
    {
      id: 5,
      title: "Orama Rest API",
      category: "Rest API",
      description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.",
      image: "💼",
      technologies: ["React", "Framer Motion", "CSS3", "Netlify"],
      features: ["Responsive Design", "Smooth Animations", "Contact Form", "Project Gallery", "SEO Optimized"],
      demo: "https://example.com",
      github: "https://github.com/example"
    }
  ]


  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="projects-title">
            My <span className="projects-highlight">Projects</span>
          </h2>
        </motion.div>

        {/* Project Selection */}
        <motion.div 
          className="projects-selection"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.button
              key={project.id}
              className={`project-select-btn ${selectedProject === projects.indexOf(project) ? 'active' : ''}`}
              onClick={() => setSelectedProject(selectedProject === projects.indexOf(project) ? null : projects.indexOf(project))}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              <span className="project-title-small">{project.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Selected Project Display */}
        <AnimatePresence mode="wait">
          {selectedProject !== null && projects[selectedProject] && (
            <motion.div
              key={projects[selectedProject].id}
              className="selected-project"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              layout
            >
              <motion.div 
                className="project-image-large"
                layoutId={`project-image-${projects[selectedProject].id}`}
              >
                {projects[selectedProject].image.startsWith('/') ? (
                  <img 
                    src={projects[selectedProject].image} 
                    alt={projects[selectedProject].title}
                    className="project-image-large"
                  />
                ) : (
                  <span className="project-emoji-large">{projects[selectedProject].image}</span>
                )}
              </motion.div>

              <motion.div 
                className="project-content-large"
                layoutId={`project-content-${projects[selectedProject].id}`}
              >
                <div className="project-category">{projects[selectedProject].category}</div>
                <h3 className="project-title">{projects[selectedProject].title}</h3>
                <p className="project-description">{projects[selectedProject].description}</p>
                
                <div className="project-technologies">
                  {projects[selectedProject].technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {projects[selectedProject].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  <motion.a
                    href={projects[selectedProject].demo}
                    className="project-link demo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={projects[selectedProject].github}
                    className="project-link github"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
