import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web App",
      description: "Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
      image: "https://via.placeholder.com/600x400/667eea/ffffff?text=E-commerce+Platform",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Social Media App",
      category: "Mobile App",
      description: "Cross-platform social networking app with real-time messaging and media sharing capabilities.",
      image: "https://via.placeholder.com/600x400/764ba2/ffffff?text=Social+Media+App",
      tech: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "AI Chatbot",
      category: "Web App",
      description: "Intelligent customer support chatbot with natural language processing and machine learning.",
      image: "https://via.placeholder.com/600x400/11998e/ffffff?text=AI+Chatbot",
      tech: ["Python", "Flask", "OpenAI", "NLP"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Fitness Tracker",
      category: "Mobile App",
      description: "Comprehensive fitness tracking app with workout plans, progress analytics, and social features.",
      image: "https://via.placeholder.com/600x400/ff6b6b/ffffff?text=Fitness+Tracker",
      tech: ["Flutter", "Dart", "REST API"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.section
      id="projects"
      className="projects-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
      variants={containerVariants}
    >
      <div className="projects-container">
        {/* Header */}
        <motion.div className="projects-header" variants={itemVariants}>
          <h2 className="projects-title">Selected Work</h2>
          <p className="projects-subtitle">A showcase of my recent projects and creative solutions</p>
        </motion.div>

        {/* Project Navigation */}
        <motion.div className="project-nav" variants={itemVariants}>
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`nav-item ${activeProject === index ? 'active' : ''}`}
              onClick={() => setActiveProject(index)}
            >
              <span className="nav-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="nav-title">{project.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Project Display */}
        <motion.div className="project-display" variants={itemVariants}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              className="project-content"
              variants={projectVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="project-image-container">
                <img 
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={projects[activeProject].liveUrl}
                      className="project-link live-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={projects[activeProject].githubUrl}
                      className="project-link github-link"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77a5.07 5.07 0 0 0-1.35-3.07S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.14 1.67 5.14 1.67A5.07 5.07 0 0 0 3.79 4.77a5.44 5.44 0 0 0-1.5 6.65 5.07 5.07 0 0 0-1.35 3.07S.73 18.65 3 20.48a13.38 13.38 0 0 0 7 0c2.27-1.83 3.14-3.07 3.14-3.07a5.07 5.07 0 0 0-1.35-3.07 5.44 5.44 0 0 0-1.5-6.65A5.07 5.07 0 0 0 9 4.77a5.44 5.44 0 0 0 6.44 7 3.37 3.37 0 0 0-.94 2.61V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">{projects[activeProject].category}</span>
                  <span className="project-year">2024</span>
                </div>
                <h3 className="project-title">{projects[activeProject].title}</h3>
                <p className="project-description">{projects[activeProject].description}</p>
                <div className="project-tech">
                  {projects[activeProject].tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Project Counter */}
        <motion.div className="project-counter" variants={itemVariants}>
          <span className="current-project">{String(activeProject + 1).padStart(2, '0')}</span>
          <span className="divider">/</span>
          <span className="total-projects">{String(projects.length).padStart(2, '0')}</span>
        </motion.div>
      </div>
    </motion.section>
  )
}
