
import React, { useRef, useState } from 'react'
import './AfterFooter.css'

export default function AfterFooter() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

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
    <div className="after-footer">
      <video 
        ref={videoRef}
        className="after-footer-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Assets/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Play/Pause Button - Top Right Corner */}
      <button 
        className="after-footer-play-pause-btn"
        onClick={togglePlayPause}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>
      
      <div className="after-footer-content">
        {/* Content can be added here */}
      </div>
    </div>
  )
}
