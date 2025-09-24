import React from 'react'
import './Project.css'

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "ROLEX LEARNING CENTER",
      location: "LAUSANNE - SWITZERLAND",
      year: "2020-2023",
      category: "ARCHITECTURE",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      description: "Modern learning facility with innovative design"
    },
    {
      id: 2,
      title: "BOCCONI CAMPUS",
      location: "MILANO - ITALY",
      year: "2020-2023",
      category: "EDUCATION",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
      description: "University campus with sustainable architecture"
    },
    {
      id: 3,
      title: "NAGASHIMA FERRY TERMINAL",
      location: "NAGASHIMA - JAPAN",
      year: "2020-2022",
      category: "TRANSPORT",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Futuristic ferry terminal design"
    },
    {
      id: 4,
      title: "RESIDENTIAL COMPLEX",
      location: "BERLIN - GERMANY",
      year: "2021-2023",
      category: "RESIDENTIAL",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      description: "Modern residential development"
    },
    {
      id: 5,
      title: "CULTURAL CENTER",
      location: "BARCELONA - SPAIN",
      year: "2019-2022",
      category: "CULTURAL",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=400&h=300&fit=crop",
      description: "Contemporary cultural space"
    },
    {
      id: 6,
      title: "OFFICE TOWER",
      location: "SINGAPORE",
      year: "2021-2024",
      category: "COMMERCIAL",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      description: "Sustainable office building"
    }
  ]

  return (
    <section id="projects" className="project">
      <div className="project-container">
        <h2 className="section-title">PROJECTS</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-category">{project.category}</div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-year">{project.year}</div>
                </div>
                
                <p className="project-location">{project.location}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-footer">
                  <a href="#" className="project-link">READ</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
