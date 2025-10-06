import React from 'react'
import './Project.css'

export default function Project() {
  return (
    <section id="projects" className="project">
      {/* Header Section */}
      <div className="project-header">
        <div className="project-pattern">
          <div className="pattern-dots"></div>
        </div>
        
        <div className="project-title-section">
          <div className="project-icon">
            <div className="sun-icon">
              <div className="sun-center"></div>
              <div className="sun-rays"></div>
            </div>
          </div>
          <h1 className="project-main-title">CASE STUDY</h1>
          <p className="project-description">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-container">
        {/* Project 1  */}
        <div className="project-card">
          <div className="card-content">
            <div className="content-right">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/sampleImage.JPG" alt="Asif" />
                </div>
              </div>
            </div>
            
            <div className="content-left">
              <h3 className="card-subtitle">Project category</h3>
              <h2 className="card-title">
                proejct name or short description <span className="highlight-text">highlight text of a description</span>
              </h2>
              <p className="card-description">
                this is a description of the project.
              </p>
              <button className="cta-button">action button</button>
            </div>
          </div>
        </div>

        {/* Project 2*/}
        <div className="project-card">
          <div className="card-content">
            <div className="content-left text-left">
            <h3 className="card-subtitle">Project category</h3>
              <h2 className="card-title">
                proejct name or short description <span className="highlight-text">highlight text of a description</span>
              </h2>
              <p className="card-description">
                this is a description of the project.
              </p>
              <button className="cta-button">action button</button>
            </div>
            
            <div className="content-right">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/sampleImage.JPG" alt="Project" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3*/}
        <div className="project-card">
          <div className="card-content">
          <div className="content-left">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/sampleImage.JPG" alt="Project" />
                </div>
              </div>
          </div>
            
            <div className="content-right">
              <h3 className="card-subtitle">Project category</h3>
              <h2 className="card-title">
                proejct name or short description <span className="highlight-text">highlight text of a description</span>
              </h2>
              <p className="card-description">
                this is a description of the project.
              </p>
              <button className="cta-button">action button</button>
            </div>
            
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <div className="card-content">
            <div className="content-left text-left">
            <h3 className="card-subtitle">Project category</h3>
              <h2 className="card-title">
                proejct name or short description <span className="highlight-text">highlight text of a description</span>
              </h2>
              <p className="card-description">
                this is a description of the project.
              </p>
              <button className="cta-button">action button</button>
            </div>
            
            <div className="content-right">
              <div className="media-section">
                <div className="project-image-1">
                  <img src="/Assets/sampleImage.JPG" alt="Project" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}