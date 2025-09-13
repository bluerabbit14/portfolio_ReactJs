import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './Quote.css'

export default function Quote() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" })
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementTop = rect.top
        const elementHeight = rect.height
        
        // Calculate scroll progress through the element
        const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (elementHeight + windowHeight * 0.5)))
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.1
      }
    }
  }

  const getWordVariants = (index) => ({
    hidden: { 
      y: 100, 
      opacity: 0,
      scale: 0.3,
      rotateX: 45
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  })

  // Determine which words should be visible based on scroll progress
  const shouldShowWord = (index) => {
    const thresholds = [0.15, 0.30, 0.45, 0.60] // 15%, 30%, 45%, 60% - equal 15% difference
    return scrollProgress >= thresholds[index]
  }

  return (
    <motion.div 
      id="quote"
      className="quote-section"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="quote-container">
        <motion.h1 
          className="quote-text"
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            className="quote-word" 
            variants={getWordVariants(0)}
            animate={shouldShowWord(0) ? "visible" : "hidden"}
          >
            APP
          </motion.span>
          <motion.span 
            className="quote-word" 
            variants={getWordVariants(1)}
            animate={shouldShowWord(1) ? "visible" : "hidden"}
          >
            THAT
          </motion.span>
          <motion.span 
            className="quote-word" 
            variants={getWordVariants(2)}
            animate={shouldShowWord(2) ? "visible" : "hidden"}
          >
            BUILD
          </motion.span>
          <motion.span 
            className="quote-word" 
            variants={getWordVariants(3)}
            animate={shouldShowWord(3) ? "visible" : "hidden"}
          >
            FUTURE
          </motion.span>
        </motion.h1>
        
        {/* Footer-like section for images */}
        <div className="quote-footer">
          <div className="quote-footer-content">
            <div className="image-placeholder">
              <span>Your Image Element</span>
            </div>
            <div className="image-placeholder">
              <span>Your Image Element</span>
            </div>
            <div className="image-placeholder">
              <span>Your Image Element</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
