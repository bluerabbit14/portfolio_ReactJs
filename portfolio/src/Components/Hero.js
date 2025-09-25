import React, { useRef, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const videoRef = useRef(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Array of video sources
  const videos = [
    
    { src: "/Assets/AppDevelopment.mp4", title: "App Development" },
    { src: "/Assets/UIDesign.mp4", title: "UI Design" },
    { src: "/Assets/WebDevelopment.mp4", title: "Web Development" }
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
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Side - Hero Content */}
        <div className="hero-content">
          <h2 className="hero-title">Building Modern Mobile Apps That Deliver</h2>
          <p className="hero-subtitle">Expert in cross-platform development using .NET MAUI & React.
          I design sleek UIs, craft powerful APIs, and launch scalable mobile apps.</p>
          
          {/* Customer Review/Project Count */}
          <div className="hero-stats">
            <div className="stats-number">18+</div>
            <div className="stats-circles">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="stats-text">customer review</div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="hero-buttons">
            <button className="hero-btn outline">View Portfolio</button>
            <button className="hero-btn filled">Let's Work Together</button>
          </div>
          
          {/* Tech Stack */}
          <div className="tech-stack-section">
            <div className="tech-stack-list">
              <img src="/Assets/React_logo.png" alt="React" className="tech-icon" />
              <img src="/Assets/Docker.png" alt="Docker" className="tech-icon" />
              <img src="/Assets/Figma.png" alt="Figma" className="tech-icon" />
              <img src="/Assets/firebase-studio.png" alt="Firebase" className="tech-icon" />
              <img src="/Assets/Visual_Studio.png" alt="Visual Studio" className="tech-icon" />
              <img src="/Assets/VMware.png" alt="VMware" className="tech-icon" />
            </div>
            <div className="tech-stack-list tech-stack-row-2">
              <img src="/Assets/React_logo.png" alt="React" className="tech-icon" />
              <img src="/Assets/Docker.png" alt="Docker" className="tech-icon" />
              <img src="/Assets/Figma.png" alt="Figma" className="tech-icon" />
            </div>
          </div>
          
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
        <a href="#" className="social-link">LinkedIn</a>
        <a href="#" className="social-link">Github</a>
        <a href="#" className="social-link">Instagram</a>
      </div>
    </section>
  )
}
