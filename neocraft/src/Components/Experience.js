import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Experience.css'

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  const experiences = [
    {
      id: 1,
      company: "Inest Web",
      position: "Mobile App Developer",
      duration: "March 2025 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Developing cross-platform mobile applications using React Native and Flutter, focusing on creating seamless user experiences and implementing modern mobile development practices.",
      achievements: [
        "Developed 3+ mobile applications from concept to deployment",
        "Implemented responsive UI/UX designs across iOS and Android platforms",
        "Integrated RESTful APIs and third-party services",
        "Collaborated with design and backend teams for optimal app performance",
        "Maintained 95%+ app stability and user satisfaction ratings"
      ],
      techStack: [
        { name: "React Native", level: 90, color: "#61DAFB", category: "Mobile" },
        { name: "Flutter", level: 85, color: "#02569B", category: "Mobile" },
        { name: "JavaScript", level: 95, color: "#F7DF1E", category: "Language" },
        { name: "TypeScript", level: 88, color: "#3178C6", category: "Language" },
        { name: "Dart", level: 82, color: "#0175C2", category: "Language" },
        { name: "Firebase", level: 90, color: "#FFCA28", category: "Backend" },
        { name: "Redux", level: 85, color: "#764ABC", category: "State Management" },
        { name: "Git", level: 92, color: "#F05032", category: "Version Control" },
        { name: "Figma", level: 80, color: "#F24E1E", category: "Design" },
        { name: "VS Code", level: 95, color: "#007ACC", category: "Tools" }
      ],
      projects: [
        {
          name: "E-commerce Mobile App",
          description: "Built a cross-platform e-commerce application with real-time inventory management and payment integration",
          tech: ["React Native", "Redux", "Firebase", "Stripe API"]
        },
        {
          name: "Social Media Platform",
          description: "Developed a social networking app with real-time messaging, media sharing, and push notifications",
          tech: ["Flutter", "Firebase", "WebSocket", "Cloud Storage"]
        },
        {
          name: "Fitness Tracking App",
          description: "Created a comprehensive fitness app with workout tracking, progress analytics, and social features",
          tech: ["React Native", "HealthKit", "Google Fit", "Charts"]
        }
      ]
    }
  ]

  const tabs = [
    { id: 0, name: "Overview", icon: "📋" },
    { id: 1, name: "Tech Stack", icon: "⚙️" },
    { id: 2, name: "Projects", icon: "🚀" },
    { id: 3, name: "Achievements", icon: "🏆" }
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

  const cardVariants = {
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

  const techBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3
      }
    })
  }

  const renderOverview = () => (
    <div className="overview-content">
      <div className="company-info">
        <div className="company-header">
          <h3 className="company-name">{experiences[0].company}</h3>
          <div className="company-badges">
            <span className="badge type">{experiences[0].type}</span>
            <span className="badge location">{experiences[0].location}</span>
          </div>
        </div>
        <h2 className="position-title">{experiences[0].position}</h2>
        <p className="duration">{experiences[0].duration}</p>
        <p className="description">{experiences[0].description}</p>
      </div>
      
      <div className="experience-stats">
        <div className="stat-item">
          <span className="stat-number">6+</span>
          <span className="stat-label">Months Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">3+</span>
          <span className="stat-label">Apps Developed</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">95%</span>
          <span className="stat-label">App Stability</span>
        </div>
      </div>
    </div>
  )

  const renderTechStack = () => (
    <div className="tech-stack-content">
      <div className="tech-categories">
        {['Mobile', 'Language', 'Backend', 'State Management', 'Version Control', 'Design', 'Tools'].map(category => (
          <div key={category} className="tech-category">
            <h4 className="category-title">{category}</h4>
            <div className="category-skills">
              {experiences[0].techStack
                .filter(tech => tech.category === category)
                .map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="tech-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="tech-info">
                      <span className="tech-name">{tech.name}</span>
                      <span className="tech-level">{tech.level}%</span>
                    </div>
                    <div className="tech-bar-container">
                      <motion.div
                        className="tech-bar"
                        style={{ backgroundColor: tech.color }}
                        variants={techBarVariants}
                        custom={tech.level}
                        initial="hidden"
                        animate="visible"
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderProjects = () => (
    <div className="projects-content">
      {experiences[0].projects.map((project, index) => (
        <motion.div
          key={project.name}
          className="project-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          <div className="project-header">
            <h4 className="project-name">{project.name}</h4>
            <div className="project-tech">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          <p className="project-description">{project.description}</p>
        </motion.div>
      ))}
    </div>
  )

  const renderAchievements = () => (
    <div className="achievements-content">
      {experiences[0].achievements.map((achievement, index) => (
        <motion.div
          key={index}
          className="achievement-item"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          <div className="achievement-icon">✓</div>
          <p className="achievement-text">{achievement}</p>
        </motion.div>
      ))}
    </div>
  )

  return (
    <motion.section
      id="experience"
      className="experience-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
      variants={containerVariants}
    >
      <div className="experience-container">
        {/* Header */}
        <motion.div className="experience-header" variants={itemVariants}>
          <h2 className="experience-title">Professional Experience</h2>
          <p className="experience-subtitle">My journey as a Mobile App Developer</p>
        </motion.div>

        {/* Experience Card */}
        <motion.div className="experience-card" variants={itemVariants}>
          {/* Tab Navigation */}
          <div className="tab-navigation">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-name">{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="tab-panel"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {activeTab === 0 && renderOverview()}
                {activeTab === 1 && renderTechStack()}
                {activeTab === 2 && renderProjects()}
                {activeTab === 3 && renderAchievements()}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div className="experience-timeline" variants={itemVariants}>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4 className="timeline-title">Joined Inest Web</h4>
              <p className="timeline-date">March 2025</p>
              <p className="timeline-description">Started as Mobile App Developer, focusing on cross-platform development</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker current"></div>
            <div className="timeline-content">
              <h4 className="timeline-title">Current Role</h4>
              <p className="timeline-date">Present</p>
              <p className="timeline-description">Leading mobile app development projects and mentoring junior developers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}