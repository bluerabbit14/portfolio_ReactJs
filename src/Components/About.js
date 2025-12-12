import React, { useState } from 'react'
import './About.css'
import ScrollAnimation from './ScrollAnimation'

export default function About({ onShowGetInTouch }) {
  const [showDownloadNotification, setShowDownloadNotification] = useState(false)

  const handleDownload = () => {
    setShowDownloadNotification(true)
    setTimeout(() => {
      setShowDownloadNotification(false)
    }, 3000) // Hide notification after 3 seconds
  }
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left Side - About Content */}
        <div className="about-content">
          <ScrollAnimation direction="right" delay={0.1} duration={0.8}>
            <div className="about-greeting">
              <h2 className="about-title">
                <span className="greeting-text">About</span> me<span className="name-text"></span>
              </h2>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="right" delay={0.2} duration={0.8}>
            <div className="about-role">
              <div className="role-line"></div>
              <span className="role-text">Mobile App Developer</span>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="right" delay={0.3} duration={0.8}>
            <p className="about-description">
              Hi, I'm <strong>Asif Abbas</strong>, a passionate <strong>mobile app developer</strong> specializing in 
              <strong> .NET MAUI</strong>, <strong>Flutter</strong>, and <strong>ASP.NET API</strong> development. 
              I focus on developing cross-platform mobile applications using <strong>.NET MAUI</strong> with an emphasis on 
              <strong> clean architecture</strong>, <strong>performance</strong>, and <strong>scalability</strong>. 
              I integrate <strong>ASP.NET Core Web APIs</strong> and <strong>Firebase</strong> for secure backend services, 
              including <strong>authentication</strong>, <strong>real-time data</strong>, and <strong>cloud hosting</strong>. 
              Skilled in building responsive UI with <strong>React.js</strong> and delivering optimized, production-ready applications.
              <br /> <br />
              Actively involved in the full <strong>SDLC</strong>: planning, development, testing, deployment, and optimization. 
              Whether you're launching a startup or scaling a product, I'm here to help bring your vision to life.
            </p>
          </ScrollAnimation>
          
          {/* Stats Section */}
          <ScrollAnimation direction="right" delay={0.4} duration={0.8}>
            <div className="about-stats">
              <ScrollAnimation direction="up" delay={0.5} duration={0.6}>
                <div className="stats-item">
                  <div className="stats-number">9</div>
                  <div className="stats-label">Completed<br />Projects</div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.6} duration={0.6}>
                <div className="stats-item">
                  <div className="stats-number">9+</div>
                  <div className="stats-label">Months in<br />Development</div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.7} duration={0.6}>
                <div className="stats-item">
                  <div className="stats-number">13+</div>
                  <div className="stats-label">Technology<br />Used</div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.8} duration={0.6}>
                <div className="stats-item">
                  <div className="stats-number">3</div>
                  <div className="stats-label">Projects<br />In Production</div>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
          
          
          {/* Call to Action Buttons */}
          {/* <div className="about-buttons">
            <button onClick={onShowGetInTouch} className="about-btn get-in-touch-btn">Get in Touch</button>
            <a href="/Assets/ASIF ABBAS RESUME.pdf" download="Asif Abbas Resume.pdf" onClick={handleDownload} className="about-btn-link">Download Resume</a>
          </div> */}
        </div>
        
        {/* Right Side - Visual Content */}
        <ScrollAnimation direction="left" delay={0.3} duration={0.8}>
          <div className="about-visual">
            <div className="about-image-container">
              <img src="/Assets/asifimage.JPG" alt="Asif" className="about-image" />
            
            </div>
          </div>
        </ScrollAnimation>
      </div>
      
      {/* Download Success Notification */}
      {showDownloadNotification && (
        <div className="download-notification">
          <div className="notification-content">
            <div className="notification-icon">✓</div>
            <span className="notification-text">Resume Downloaded!</span>
          </div>
        </div>
      )}
    </section>
  )
}
