import React from 'react'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">
            About <span className="about-highlight">Me</span>
          </h2>
          <p className="about-subtitle">
          CROSS-PLATFORM MOBILE & DESKTOP DEVELOPER | API ARCHITECT | TECH ENTHUSIAST
          </p>
          <div className="about-description">
            <p className="about-text">
              I'm a results-driven mobile app developer specializing in building seamless 
              cross-platform applications for mobile and desktop using .NET MAUI. 
              With a passion for clean architecture and efficient code, I craft responsive 
              and intuitive user experiences that perform flawlessly across devices.
            </p>
            <p className="about-text">
              My expertise extends beyond app development—I also work with API integration, 
              backend services, and app hosting solutions, ensuring that every app I build is 
              both scalable and production-ready. Whether it's optimizing API response times or 
              deploying cloud-hosted solutions, I take a full-stack approach to mobile and desktop development.
           </p>
           <p className="about-text">
              Driven by innovation and a commitment to excellence, I focus on solving 
              real-world problems through technology, delivering solutions that are not only 
              functional but impactful.  
           </p>
          </div>
        </div>
      </div>
    </section>
  )
}
