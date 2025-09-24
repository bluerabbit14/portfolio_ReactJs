import React from 'react'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Top Row */}
        <div className="about-row top-row">
          <div className="bento-box intro-text">
            <p>I am Asif Abbas.</p>
            <p>A mobile app developer with a passion for building seamless and powerful cross-platform experiences using .NET MAUI. From UI design to backend APIs and hosting, I handle every aspect of the development process.</p>
            <p>Clean interfaces, smooth performance, and scalable architecture are at the heart of every app I create.</p>
          </div>
          <div className="bento-box profile-image-box">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
        </div>

        {/* Middle Row */}
        <div className="about-row middle-row">
          <div className="stats-container">
            <div className="bento-box stat-box">
              <p>Stats box with text</p>
            </div>
            <div className="bento-box stat-box">
              <p>Stats box with text</p>
            </div>
          </div>
          <div className="bento-box description-text">
            <p>Here a sample text will be present like an introduction. Find readable font size and color</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="about-row bottom-row">
          <div className="bento-box title-tag">
            <h3>Title Tag</h3>
          </div>
          <div className="bento-box tech-stack">
            <h3>My Stack</h3>
            <div className="tech-logos">
              <div className="tech-logo">N</div>
              <div className="tech-logo">A</div>
              <div className="tech-logo">W</div>
              <div className="tech-logo">F</div>
              <div className="tech-logo">F</div>
            </div>
          </div>
          <div className="bento-box twitter-link">
            <div className="social-logo">X</div>
          </div>
        </div>
      </div>
    </section>
  )
}
