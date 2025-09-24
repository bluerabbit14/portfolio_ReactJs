import React, { useState } from 'react'
import './Skill.css'

export default function Skill() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleSkillHover = (skillId) => {
    setHoveredSkill(skillId)
  }

  const handleSkillLeave = () => {
    setHoveredSkill(null)
  }
  const skills = [
    { id: '01', name: 'App Development', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop' },
    { id: '02', name: 'UI Design', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop' },
    { id: '03', name: 'Architecture Design', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
    { id: '04', name: 'Hosting and Deployment', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop' },
    { id: '05', name: 'API Integration', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' }
  ]

  return (
    <section id="skills" className="skill" onMouseMove={handleMouseMove}>
      <div className="skill-container">
        {/* Left Side - Process Heading */}
        <div className="skill-left">
          <h2 className="skill-heading">SKILLS</h2>
          <div className="skill-line"></div>
        </div>
        
        {/* Right Side - Skills List */}
        <div className="skill-right">
          <h3 className="skill-subheading">Things i can help you with:</h3>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div 
                key={skill.id} 
                className="skill-item"
                onMouseEnter={() => handleSkillHover(skill.id)}
                onMouseLeave={handleSkillLeave}
              >
                <div className="skill-item-content">
                  <span className="skill-number">{skill.id}</span>
                  <span className="skill-name">
                    {skill.name.split(' ').map((word, wordIndex) => (
                      <span key={wordIndex} className="skill-word">
                        {word}
                      </span>
                    ))}
                  </span>
                  <span className="skill-plus">+</span>
                </div>
                <div className="skill-item-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Global Image Overlay */}
      {hoveredSkill && (
        <div 
          className="skill-image-overlay"
          style={{
            left: mousePosition.x,
            top: mousePosition.y - 20
          }}
        >
          <div className="skill-image-frame">
            <img 
              src={skills.find(skill => skill.id === hoveredSkill)?.image} 
              alt={skills.find(skill => skill.id === hoveredSkill)?.name}
              className="skill-image"
            />
          </div>
        </div>
      )}
    </section>
  )
}
