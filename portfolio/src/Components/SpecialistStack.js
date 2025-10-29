import React from 'react'
import './SpecialistStack.css'

export default function SpecialistStack() {
  const specialistSkills = [
    {
      id: 1,
      name: ".NET MAUI",
      icon: "/Assets/dotnet_bot.png"
    },
    {
      id: 2,
      name: "React",
      icon: "/Assets/React.png"
    },
    {
      id: 3,
      name: "MS-SQL",
      icon: "/Assets/Microsoft SQL Server.png"
    },
    {
      id: 4,
      name: "Firebase",
      icon: "/Assets/Firebase.png"
    },
    {
      id: 5,
      name: "Docker",
      icon: "/Assets/Docker.png"
    },
    {
      id: 7,
      name: "Postman",
      icon: "/Assets/Postman.png"
    },
    {
      id: 6,
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
