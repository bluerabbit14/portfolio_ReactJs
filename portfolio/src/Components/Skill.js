import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Skill.css'

export default function Skill() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3 // 3 columns × 1 row

  const skills = [
    // Mobile Development
    {
      id: 1,
      name: 'React Native',
      category: 'mobile',
      level: 95,
      icon: '⚛️',
      description: 'Cross-platform mobile app development',
      color: '#61DAFB',
    },
    {
      id: 2,
      name: 'Android Development',
      category: 'mobile',
      level: 80,
      icon: '🤖',
      description: 'Native Android apps with Kotlin',
      color: '#3DDC84',
    },

    // Web Development
    {
      id: 3,
      name: 'React.js',
      category: 'web',
      level: 95,
      icon: '⚛️',
      description: 'Modern web applications',
      color: '#61DAFB',
    },
    {
      id: 4,
      name: 'Vue.js',
      category: 'web',
      level: 85,
      icon: '💚',
      description: 'Progressive web framework',
      color: '#4FC08D',
    },

    // Tools & Technologies
    {
      id: 5,
      name: 'Firebase',
      category: 'tools',
      level: 85,
      icon: '🔥',
      description: 'Backend-as-a-Service',
      color: '#FFCA28',
    },
    {
      id: 6,
      name: 'Git',
      category: 'tools',
      level: 90,
      icon: '📚',
      description: 'Version control system',
      color: '#F05032',
    },

    // Design & UI/UX
    {
      id:6,
      name: 'Figma',
      category: 'design',
      level: 88,
      icon: '🎨',
      description: 'UI/UX design tool',
      color: '#F24E1E',
    },
    {
      id: 7,
      name: 'CSS3',
      category: 'design',
      level: 95,
      icon: '🎨',
      description: 'Styling and animations',
      color: '#1572B6',
    },
    {
      id: 8,
      name: 'Framer Motion',
      category: 'design',
      level: 90,
      icon: '🎭',
      description: 'Animation library for React',
      color: '#0055FF',
    }
  ]

  // Calculate pagination
  const totalPages = Math.ceil(skills.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentSkills = skills.slice(startIndex, endIndex)

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const skillCardVariants = {
    hidden: { 
      opacity: 0, 
      x: -20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
  }

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        {/* Header */}
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="skills-title">
            My <span className="skills-highlight">Skills</span>
          </h2>
          <p className="skills-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>


        {/* Skills Grid */}
        <motion.div 
          key={currentPage}
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {currentSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="skill-card"
              variants={skillCardVariants}
              initial="hidden"
              animate="visible"
              layout
            >
              <div className="skill-card-header">
                <div className="skill-icon" style={{ backgroundColor: skill.color }}>
                  <span className="skill-emoji">{skill.icon}</span>
                </div>
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <p className="skill-description">{skill.description}</p>
                  <div className="skill-category">{skill.category}</div>
                </div>
              </div>
              
              <div className="skill-level">
                <div className="level-bar">
                  <motion.div 
                    className="level-fill"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className="level-percentage">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <motion.div 
            className="skills-pagination"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Left Arrow - Only show if not on first page */}
            {currentPage > 0 && (
              <motion.button
                className="pagination-btn prev-btn"
                onClick={handlePrevPage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="arrow-left">‹</span>
              </motion.button>
            )}
            
            <div className="pagination-info">
              <span className="page-indicator">
                {currentPage + 1} / {totalPages}
              </span>
            </div>
            
            {/* Right Arrow - Only show if not on last page */}
            {currentPage < totalPages - 1 && (
              <motion.button
                className="pagination-btn next-btn"
                onClick={handleNextPage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="arrow-right">›</span>
              </motion.button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
