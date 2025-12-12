import React from 'react'
import { motion } from 'framer-motion'

/**
 * ScrollAnimation - A reusable wrapper component for scroll-to-view animations
 * @param {React.ReactNode} children - Content to animate
 * @param {string} direction - Animation direction: 'up', 'down', 'left', 'right', 'fade'
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @param {string} className - Additional CSS classes
 * @param {number} distance - Distance to animate from (in pixels)
 */
export default function ScrollAnimation({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = '',
  distance = 50
}) {
  // Define animation variants based on direction
  const getVariants = () => {
    const baseVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing curve
        },
      },
    }

    switch (direction) {
      case 'up':
        return {
          hidden: {
            ...baseVariants.hidden,
            y: distance,
          },
          visible: {
            ...baseVariants.visible,
            y: 0,
          },
        }
      case 'down':
        return {
          hidden: {
            ...baseVariants.hidden,
            y: -distance,
          },
          visible: {
            ...baseVariants.visible,
            y: 0,
          },
        }
      case 'left':
        return {
          hidden: {
            ...baseVariants.hidden,
            x: distance,
          },
          visible: {
            ...baseVariants.visible,
            x: 0,
          },
        }
      case 'right':
        return {
          hidden: {
            ...baseVariants.hidden,
            x: -distance,
          },
          visible: {
            ...baseVariants.visible,
            x: 0,
          },
        }
      case 'fade':
        return {
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }
      case 'scale':
        return {
          hidden: {
            ...baseVariants.hidden,
            scale: 0.8,
          },
          visible: {
            ...baseVariants.visible,
            scale: 1,
          },
        }
      default:
        return baseVariants
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }} // Trigger when element is 100px before viewport
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  )
}

