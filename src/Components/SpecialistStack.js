import React from 'react'
import './SpecialistStack.css'
import ScrollAnimation from './ScrollAnimation'

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
    // {
    //   id: 5,
    //   name: "Docker",
    //   icon: "/Assets/Docker.png"
    // },
    {
      id: 5,
      name: "Postman",
      icon: "/Assets/Postman.png"
    },
    // {
    //   id: 6,
    //   name: "Figma",
    //   icon: "/Assets/Figma.png"
    // },
    {
      id: 6,
      name: "Flutter",
      icon: "/Assets/Flutter.png"
    }
  ]

  return (
    <div className="specialist-stack-container">
      <div className="specialist-stack-content">
    
        <div className="skills-horizontal-strip">
          {specialistSkills.map((skill, index) => (
            <ScrollAnimation 
              key={skill.id} 
              direction="scale" 
              delay={index * 0.1} 
              duration={0.6}
            >
              <div className="skill-item">
                <div className="skill-icon-container">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="skill-icon"
                  />
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </div>
  )
}
