import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  // Animation variants - all elements animate together
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Hello, I'm <span className="hero-name">Asif Abbas</span>
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            MOBILE APP DEVELOPER
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            I design and develop high-performance, user-centric mobile applications that combine 
            elegant UI with seamless functionality. My focus is on delivering reliable, scalable,
             and visually engaging mobile experiences across cross and native mobile platforms like iOS and Android.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button 
              className="hero-btn primary"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(0, 123, 255, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            
            <motion.button 
              className="hero-btn secondary"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#2c2c2c"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
