import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.div 
      id="hero"
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navbar */}
      <motion.nav 
        className="navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="navbar-container">
          {/* Logo */}
          <motion.div className="navbar-logo">
            <a href="/">NeoCraft</a>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            className="menu-icon" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <motion.div 
                className="close-icon"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <span className="close-bar"></span>
                <span className="close-bar"></span>
              </motion.div>
            ) : (
              <motion.div 
                className="burger-icon"
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </motion.div>
            )}
          </motion.div>

          {/* Navigation Menu */}
          <motion.ul 
            className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}
            initial={{ x: -100, opacity: 0 }}
            animate={{ 
              x: isMenuOpen ? 0 : -100, 
              opacity: isMenuOpen ? 1 : 0 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            
            <motion.li className="nav-item">
              <a 
                href="#about" 
                className="nav-link" 
                onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </motion.li>
            <motion.li className="nav-item">
              <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </motion.li>
            <motion.li className="nav-item">
              <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
            </motion.li>
            <motion.li className="nav-item">
              <a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Experience
              </a>
            </motion.li>
            <motion.li className="nav-item">
              <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </motion.li>
          </motion.ul>
        </div>
      </motion.nav>
      {/* Hero Content */}
      <motion.div 
        className="hero"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="hero-container">
          {/* Left side - Text content */}
          <motion.div 
            className="hero-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="hero-content">
              <motion.div 
                className="hero-subtitle"
                initial={{ x: -100, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                <span className="subtitle-line"></span>
                <span className="subtitle-text">CROSS-PLATFORM INNOVATION & NATIVE PERFORMANCE</span>
              </motion.div>
              
              <motion.div 
                className="hero-title"
                initial={{ y: 50, opacity: 0, rotateX: 45 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ 
                  duration: 1.0, 
                  delay: 0.5,
                  type: "spring",
                  stiffness: 80,
                  damping: 12
                }}
              >
                <motion.div 
                  className="title-left"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <motion.span 
                    className="title-small"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    A.
                  </motion.span>
                  <motion.span 
                    className="title-small"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    Abbas
                  </motion.span>
                </motion.div>
                <motion.h1 
                  className="title-main"
                  initial={{ y: 60, opacity: 0, scale: 0.5 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.6,
                    type: "spring",
                    stiffness: 60,
                    damping: 10
                  }}
                >
                  Dreamer
                </motion.h1>
              </motion.div>
              
              <motion.div 
                className="hero-description"
                initial={{ y: 40, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.1,
                  type: "spring",
                  stiffness: 120,
                  damping: 20
                }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  CRAFTING APPS THAT SHAPE HOW PEOPLE CONNECT, MOVE, AND BUILD
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Greek Figure Image */}
          <motion.div 
            className="hero-right"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <motion.div 
              className="hero-image-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.8, ease: "easeOut" }}
            >
              <img 
                src="/Assets/greekfigure.png" 
                alt="Greek Figure" 
                className="hero-image"
              />
              <text className="hero-image-text">
                "hello world, I'm Abbas and I'm a software engineer and a dreamer
                I'm a software engineer and a dreamer"
              </text>
          
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
