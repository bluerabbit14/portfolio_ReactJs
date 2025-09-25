import React from 'react'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* Main Title */}
        <h2 className="title">About me</h2>
        
        {/* Grid Container */}
        <div className="grid">
          {/* Row 1 - 2 columns */}
          <div className="row">
            <div className="box intro">
              <p>I'm a cross-platform mobile app developer specializing in .NET MAUI. I build high-performance apps with clean architecture, seamless UI, and efficient backend integration. With experience in API development and Firebase services, I create scalable and secure mobile solutions from concept to launch.</p>
            </div>
            <div className="box profile">
              <div className="image-placeholder">
                <img src="/Assets/asifimage.jpg" alt="Asif" />
              </div>
            </div>
          </div>

          {/* Row 2 - 2 columns bento box */}
          <div className="row">
            <div className="box box1">
              <div className="inner-row">
                <div className="inner-box inner-box1">
                  <p>Inner box 1</p>
                </div>
                <div className="inner-box inner-box2">
                  <p>Inner box 2</p>
                </div>
              </div>
              <div className="inner-second-row">
                <div className="inner-second-box inner-second-box1">
                  <p>Inner box 1</p>
                </div>
                <div className="inner-second-box inner-second-box2">
                  <p>Inner box 2</p>
                </div>
              </div>
            </div>
            <div className="box box2">
              <p>Second bento box content</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
