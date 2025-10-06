import React, { useState } from 'react'
import './About.css'

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
          <div className="about-greeting">
            <h2 className="about-title">
              <span className="greeting-text">About</span> me<span className="name-text"></span>
            </h2>
          </div>
          
          <div className="about-role">
            <div className="role-line"></div>
            <span className="role-text">Mobile App Developer</span>
            <span className="role-icon">⭐</span>
          </div>
          
          <p className="about-description">
            Hi, I'm <strong>Asif Abbas</strong>, a passionate <strong>mobile app developer</strong>, 
            <strong> cross-platform specialist</strong>, and <strong>UI/UX designer</strong> with a strong 
            background in <strong>API development</strong>.  With a unique blend of technical and creative skills, I bridge the gap between 
            <em>functionality</em> and <em>visual appeal</em> — ensuring every product I build is not 
            only efficient under the hood but also engaging to use.
            <br /><br />
            I'm constantly exploring new tools, 
            trends, and technologies to stay ahead in the fast-moving mobile landscape. Whether you're 
            launching a startup or scaling a product, I'm here to help bring your vision to life.
          </p>
          
          {/* Three Square Boxes */}
          {/* <div className="about-boxes">
            <div className="about-box">
              <div className="box-content">
                <h3 className="box-title">Mobile Apps</h3>
                <p className="box-description">Cross-platform development</p>
              </div>
            </div>
            <div className="about-box">
              <div className="box-content">
                <h3 className="box-title">UI/UX Design</h3>
                <p className="box-description">User-centered design</p>
              </div>
            </div>
            <div className="about-box">
              <div className="box-content">
                <h3 className="box-title">API Development</h3>
                <p className="box-description">Backend integration</p>
              </div>
            </div>
          </div> */}
          
          {/* Call to Action Buttons */}
          <div className="about-buttons">
            <button onClick={onShowGetInTouch} className="about-btn get-in-touch-btn">Get in Touch</button>
            <a href="/Assets/ASIF ABBAS RESUME.pdf" download="Asif Abbas Resume.pdf" onClick={handleDownload} className="about-btn-link">Download CV</a>
          </div>
        </div>
        
        {/* Right Side - Visual Content */}
        <div className="about-visual">
          <div className="about-image-container">
            <img src="/Assets/asifimage.JPG" alt="Asif" className="about-image" />
          
          </div>
        </div>
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
