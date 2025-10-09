import React from 'react'
import './SpecialistStack.css'

export default function SpecialistStack() {
  const specialistSkills = [
    {
      id: 1,
      name: "React",
      icon: "/Assets/react.png",
      description: "Frontend Development"
    },
    {
      id: 2,
      name: "Node.js",
      icon: "/Assets/Node.js.png"
    },
    {
      id: 3,
      name: "MySQL",
      icon: "/Assets/MySQL.png"
    },
    {
      id: 4,
      name: "Figma",
      icon: "/Assets/Figma.png"
    }
  ]

  return (
    <div className="specialist-stack-container">
      <div className="specialist-stack-content">
    
        <div className="skills-horizontal-strip">
          {specialistSkills.map((skill) => (
            <div key={skill.id} className="skill-item">
              <div className="skill-icon-container">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="skill-icon"
                />
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
