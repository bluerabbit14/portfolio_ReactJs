import React, { useRef, useState } from 'react'
import './Hero.css'
import SpecialistStack from './SpecialistStack'

export default function Hero({ onShowGetInTouch }) {
  const videoRef = useRef(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showDownloadNotification, setShowDownloadNotification] = useState(false)

  // Array of video sources
  const videos = [
    { src: "/Assets/AppDevelopment.mp4", title: "App Development" },
    { src: "/Assets/UIDesign.mp4", title: "UI Design" },
    { src: "/Assets/WebDevelopment.mp4", title: "Web Development" },
    { src: "/Assets/APIDevelopment.mp4", title: "API Development" },
    { src: "/Assets/AIchatandBot.mp4", title: "AI Bot" }
  ]

  const switchVideo = (index) => {
    setCurrentVideoIndex(index)
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownload = () => {
    setShowDownloadNotification(true)
    setTimeout(() => {
      setShowDownloadNotification(false)
    }, 3000) // Hide notification after 3 seconds
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Side - Hero Content */}
        <div className="hero-content">
          <h2 className="hero-title">Building Modern Mobile Apps That Deliver</h2>
          <p className="hero-subtitle">Expert in cross-platform development using .NET MAUI & React.
          I design sleek UIs, craft powerful APIs, and launch scalable mobile apps.</p>
          
          {/* Call to Action Buttons */}
          <div className="hero-buttons">
            <button onClick={scrollToProjects} className="hero-btn outline">View Work</button>
            <a href="/Assets/ASIF ABBAS RESUME.pdf" download="Asif Abbas Resume.pdf" onClick={handleDownload} className="hero-btn filled">Download Resume</a>
          </div>

          <SpecialistStack />
          
          {/* Video Section */}
          <div className="hero-video-section">
            <div className="hero-video-container">
              <video 
                ref={videoRef}
                className="hero-video-player" 
                muted 
                loop
                autoPlay
              >
                <source src={videos[currentVideoIndex].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play/Pause Button Overlay */}
              <button 
                className="video-play-pause-overlay"
                onClick={togglePlayPause}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
              
              {/* Video Selection Bar */}
              <div className="video-selection-bar">
                {videos.map((video, index) => (
                  <button
                    key={index}
                    className={`video-selection-btn ${currentVideoIndex === index ? 'active' : ''}`}
                    onClick={() => switchVideo(index)}
                  >
                    {video.title}
                  </button>
                ))}
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Side Social Media Links */}
      <div className="social-sidebar">
        <a href="https://www.linkedin.com/in/asif-abbas-10260a213/" className="social-link">LinkedIn</a>
        <a href="https://github.com/bluerabbit14/" className="social-link">Github</a>
        <a href="https://www.instagram.com/being.sif/" className="social-link">Instagram</a>
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
