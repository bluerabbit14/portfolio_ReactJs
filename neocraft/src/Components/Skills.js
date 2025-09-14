import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Skills.css'

export default function Skills() {
  const [currentIndex, setCurrentIndex] = useState(2) // Start with center card

  const skillCategories = [
    {
      id: 1,
      title: "Frontend Development",
      category: "WEB DEVELOPMENT",
      icon: "💻",
      description: "Creating beautiful and responsive user interfaces with modern web technologies",
      color: "#FF6B6B"
    },
    {
      id: 2,
      title: "Backend Development",
      category: "SERVER DEVELOPMENT",
      icon: "⚙️",
      description: "Building robust server-side applications and APIs with scalable architectures",
      color: "#4ECDC4"
    },
    {
      id: 3,
      title: "Mobile Development",
      category: "MOBILE APPS",
      icon: "📱",
      description: "Developing cross-platform mobile applications with native performance",
      color: "#45B7D1"
    },
    {
      id: 4,
      title: "DevOps & Cloud",
      category: "CLOUD & DEVOPS",
      icon: "☁️",
      description: "Deploying and managing applications in cloud environments with CI/CD pipelines",
      color: "#96CEB4"
    },
    {
      id: 5,
      title: "Design & Tools",
      category: "DESIGN & TOOLS",
      icon: "🎨",
      description: "Creating stunning designs and using professional development tools",
      color: "#FFEAA7"
    },
    {
      id: 6,
      title: "Data Science",
      category: "DATA & AI",
      icon: "🤖",
      description: "Analyzing data and building intelligent systems with machine learning",
      color: "#A8E6CF"
    },
    {
      id: 7,
      title: "Blockchain",
      category: "WEB3 & CRYPTO",
      icon: "⛓️",
      description: "Building decentralized applications and smart contracts",
      color: "#FFB6C1"
    },
    {
      id: 8,
      title: "Game Development",
      category: "GAME ENGINE",
      icon: "🎮",
      description: "Creating immersive gaming experiences with modern game engines",
      color: "#DDA0DD"
    },
    {
      id: 9,
      title: "Cybersecurity",
      category: "SECURITY & ETHICS",
      icon: "🔒",
      description: "Protecting systems and data from cyber threats and vulnerabilities",
      color: "#F0E68C"
    },
    {
      id: 10,
      title: "Database Management",
      category: "DATA STORAGE",
      icon: "🗄️",
      description: "Designing and optimizing database systems for performance and scalability",
      color: "#98FB98"
    },
    {
      id: 11,
      title: "Testing & QA",
      category: "QUALITY ASSURANCE",
      icon: "🧪",
      description: "Ensuring software quality through comprehensive testing strategies",
      color: "#F5DEB3"
    }
  ]


  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % skillCategories.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [skillCategories.length])

  const getCardStyle = (index) => {
    const totalCards = skillCategories.length
    const distance = (index - currentIndex + totalCards) % totalCards
    
    // Pattern: 1 in front, 2 behind, 2 behind, 2 behind, 2 behind, 2 behind
    if (distance === 0) {
      // Center card (front)
      return {
        transform: 'translateX(0) scale(1)',
        zIndex: 11,
        opacity: 1,
        filter: 'none'
      }
    } else if (distance === 1 || distance === totalCards - 1) {
      // First layer behind (2 cards)
      const isLeft = distance === totalCards - 1
      return {
        transform: `translateX(${isLeft ? '-80px' : '80px'}) scale(0.9)`,
        zIndex: 10,
        opacity: 1,
        filter: 'grayscale(10%)'
      }
    } else if (distance === 2 || distance === totalCards - 2) {
      // Second layer behind (2 cards)
      const isLeft = distance === totalCards - 2
      return {
        transform: `translateX(${isLeft ? '-150px' : '150px'}) scale(0.8)`,
        zIndex: 9,
        opacity: 1,
        filter: 'grayscale(30%)'
      }
    } else if (distance === 3 || distance === totalCards - 3) {
      // Third layer behind (2 cards)
      const isLeft = distance === totalCards - 3
      return {
        transform: `translateX(${isLeft ? '-220px' : '220px'}) scale(0.7)`,
        zIndex: 8,
        opacity: 1,
        filter: 'grayscale(50%)'
      }
    } else if (distance === 4 || distance === totalCards - 4) {
      // Fourth layer behind (2 cards)
      const isLeft = distance === totalCards - 4
      return {
        transform: `translateX(${isLeft ? '-290px' : '290px'}) scale(0.6)`,
        zIndex: 7,
        opacity: 1,
        filter: 'grayscale(70%)'
      }
    } else if (distance === 5 || distance === totalCards - 5) {
      // Fifth layer behind (2 cards)
      const isLeft = distance === totalCards - 5
      return {
        transform: `translateX(${isLeft ? '-360px' : '360px'}) scale(0.5)`,
        zIndex: 6,
        opacity: 1,
        filter: 'grayscale(90%)'
      }
    } else {
      // Hidden cards
      return {
        transform: 'translateX(0) scale(0.3)',
        zIndex: 1,
        opacity: 1,
        filter: 'grayscale(100%)'
      }
    }
  }

  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="skills-container">
        {/* Header */}
        <motion.div 
          className="skills-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="header-line"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
          <motion.h2 
            className="skills-title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            SKILLS & EXPERTISE
          </motion.h2>
          <motion.div 
            className="header-line"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          />
        </motion.div>

        {/* Horizontal Carousel */}
        <motion.div 
          className="skills-carousel"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="carousel-container">
            {/* Cards Container */}
            <div className="cards-container">
              {skillCategories.map((category, index) => {
                const isActive = index === currentIndex
                const cardStyle = getCardStyle(index)
                
                return (
                  <motion.div
                    key={category.id}
                    className={`skill-card ${isActive ? 'active' : ''}`}
                    style={cardStyle}
                    initial={false}
                    animate={cardStyle}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div className="card-image">
                      <div className="image-placeholder" style={{ backgroundColor: category.color }}>
                        <span className="image-icon">{category.icon}</span>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-category">{category.category}</div>
                      <h3 className="card-title">{category.title}</h3>
                      {isActive && (
                        <motion.div 
                          className="active-indicator"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        />
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

          </div>

        </motion.div>
      </div>
    </motion.section>
  )
}
