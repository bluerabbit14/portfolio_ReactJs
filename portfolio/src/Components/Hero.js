import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hero Section Main Title</h1>
          <h2 className="hero-subtitle">Hero Subtitle Heading</h2>
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
