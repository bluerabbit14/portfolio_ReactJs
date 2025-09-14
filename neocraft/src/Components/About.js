import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './About.css'

export default function About() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  
  const cards = [
    {
      id: 1,
      title: "WATER",
      description: "A period of retreat, where stillness, contracting and coolness.",
      image: "🌊",
      color: "#1e40af"
    },
    {
      id: 2,
      title: "WOOD",
      description: "A period of growth, where expansion, creativity and new beginnings.",
      image: "🌳",
      color: "#16a34a"
    },
    {
      id: 3,
      title: "FIRE",
      description: "A period of peak activity, where energy, passion and transformation.",
      image: "🔥",
      color: "#dc2626"
    },
    {
      id: 4,
      title: "EARTH",
      description: "A period of stability, where grounding, nurturing and balance.",
      image: "🏔️",
      color: "#a16207"
    },
    {
      id: 5,
      title: "METAL",
      description: "A period of refinement, where precision, clarity and letting go.",
      image: "⚡",
      color: "#6b7280"
    }
  ]

  // Auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % cards.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [cards.length])

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
              Wuxing (Chinese philosophy)
            </motion.h2>
            
            <motion.p 
              className="about-description"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Wuxing (Chinese: 五行; pinyin: wŭxíng), usually translated as Five Phases, 
              is a fivefold conceptual scheme that many traditional Chinese fields used to 
              explain a wide array of phenomena, from cosmic cycles to the interaction 
              between internal organs, and from the succession of political regimes to 
              the properties of medicinal drugs.
            </motion.p>
            
            <motion.p 
              className="about-description"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              The "Five Phases" are Fire (火; huǒ), Water (水; shuǐ), Wood (木; mù), 
              Metal or Gold (金; jīn), and Earth or Soil (土; tù). This order of 
              presentation is known as the "Days of the Week" sequence.
            </motion.p>
          </motion.div>

          {/* Right side - 3D Card Carousel */}
          <motion.div 
            className="about-right"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="card-carousel-container">
              <div className="cards-stack">
                <AnimatePresence mode="wait">
                  {cards.map((card, index) => {
                    const isActive = index === currentCardIndex
                    const isNext = index === (currentCardIndex + 1) % cards.length
                    const isPrev = index === (currentCardIndex - 1 + cards.length) % cards.length
                    
                    let zIndex = 1
                    let transform = "translateX(0) translateZ(0) scale(0.8)"
                    
                    if (isActive) {
                      zIndex = 5
                      transform = "translateX(0) translateZ(0) scale(1)"
                    } else if (isNext) {
                      zIndex = 4
                      transform = "translateX(20px) translateZ(-20px) scale(0.9)"
                    } else if (isPrev) {
                      zIndex = 3
                      transform = "translateX(-20px) translateZ(-40px) scale(0.7)"
                    } else {
                      zIndex = 2
                      transform = "translateX(0) translateZ(-60px) scale(0.6)"
                    }

                    return (
                      <motion.div
                        key={card.id}
                        className="philosophy-card"
                        style={{ 
                          zIndex,
                          background: `linear-gradient(135deg, ${card.color}20, ${card.color}40)`,
                          borderColor: card.color
                        }}
                        initial={{ 
                          opacity: 0,
                          scale: 0.8,
                          x: 100,
                          rotateY: 45
                        }}
                        animate={{ 
                          opacity: 1,
                          scale: isActive ? 1 : 0.8,
                          x: 0,
                          rotateY: 0,
                          transform
                        }}
                        exit={{ 
                          opacity: 0,
                          scale: 0.6,
                          x: -100,
                          rotateY: -45
                        }}
                        transition={{ 
                          duration: 0.8,
                          ease: "easeInOut",
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          scale: isActive ? 1.05 : 0.85,
                          rotateY: isActive ? 5 : 0
                        }}
                      >
                        <div className="card-image">
                          <div className="image-placeholder" style={{ backgroundColor: card.color }}>
                            <span className="image-icon">{card.image}</span>
                          </div>
                        </div>
                        <div className="card-content">
                          <h3 className="card-title">{card.title}</h3>
                          <p className="card-description">{card.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}