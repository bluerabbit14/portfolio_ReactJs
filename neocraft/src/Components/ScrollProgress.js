import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ScrollProgress.css'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let scrollTimeout

    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      
      setScrollProgress(scrollPercent)
      setIsScrolling(true)
      setIsVisible(scrollPercent > 5)
      
      // Clear existing timeout
      clearTimeout(scrollTimeout)
      
      // Set new timeout to hide instantly when scrolling stops
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 100) // Very short delay to detect scroll end
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.6
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      x: 20,
      transition: { duration: 0.3 }
    }
  }

  const liquidVariants = {
    hidden: { 
      height: 0,
      opacity: 0,
      scaleY: 0,
      transformOrigin: "bottom"
    },
    visible: (progress) => ({
      height: `${progress}%`,
      opacity: 1,
      scaleY: 1,
      transformOrigin: "bottom",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    })
  }


  return (
    <AnimatePresence>
      {isVisible && (isScrolling || isHovered) && (
        <motion.div
          className="scroll-progress-widget"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={scrollToTop}
        >
          <div className="progress-container">
            <motion.div
              className="liquid-fill"
              variants={liquidVariants}
              custom={scrollProgress}
              initial="hidden"
              animate="visible"
            />
          </div>
          
          {/* Arrow that appears on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="scroll-arrow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4L12 20M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
