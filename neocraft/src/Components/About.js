import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './About.css'

export default function About() {
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  return (
    <motion.div 
      id="about"
      className="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-container">
        <div className="about-content">
          {/* Left side - Text content */}
          <motion.div 
            className="about-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="about-title"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            
            <motion.p 
              className="about-description"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm a passionate mobile app developer with over 5 years of experience 
              creating innovative cross-platform solutions. I specialize in React Native, 
              Flutter, and native iOS/Android development, crafting apps that users love.
            </motion.p>
            
            <motion.p 
              className="about-description"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              My journey began with a simple idea: to build apps that make a difference. 
              Today, I've launched over 20 apps with millions of downloads, each one 
              pushing the boundaries of what's possible in mobile technology.
            </motion.p>
            
            <motion.div 
              className="about-stats"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Apps Launched</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5M+</span>
                <span className="stat-label">Downloads</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Album section */}
          <motion.div 
            className="about-right"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="album-container">
              <div className="album-grid">
                <motion.div 
                  className="album-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => setSelectedAlbum(0)}
                >
                  <div className="album-placeholder">
                    <span>App 1</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="album-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => setSelectedAlbum(1)}
                >
                  <div className="album-placeholder">
                    <span>App 2</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="album-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => setSelectedAlbum(2)}
                >
                  <div className="album-placeholder">
                    <span>App 3</span>
                  </div>
                </motion.div>
                <motion.div 
                  className="album-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => setSelectedAlbum(3)}
                >
                  <div className="album-placeholder">
                    <span>App 4</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Overlay for enlarged album item */}
              <AnimatePresence>
                {selectedAlbum !== null && (
                  <motion.div 
                    className="album-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedAlbum(null)}
                  >
                    <motion.div 
                      className="album-enlarged"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="album-placeholder">
                        <span>App {selectedAlbum + 1}</span>
                      </div>
                      <button 
                        className="close-button"
                        onClick={() => setSelectedAlbum(null)}
                      >
                        <span className="close-bar close-bar-1"></span>
                        <span className="close-bar close-bar-2"></span>
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}