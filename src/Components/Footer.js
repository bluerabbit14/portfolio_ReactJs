import React from 'react'
import './Footer.css'
import ScrollAnimation from './ScrollAnimation'

export default function Footer({ onServiceClick, onShowGetInTouch }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Column 1 - Platforms */}
          <ScrollAnimation direction="up" delay={0.1} duration={0.8}>
            <div className="footer-column">
              <div className="footer-section">
                <h3 className="footer-section-title">Contents</h3>
                <ul className="footer-links">
                  <li><a href="#home" className="footer-link">Home</a></li>
                  <li><a href="#projects" className="footer-link">Projects</a></li>
                  <li><a href="#about" className="footer-link">About</a></li>
                  <li><button className="footer-link" onClick={() => onShowGetInTouch && onShowGetInTouch()}>Contact</button></li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>

          {/* Column 2 - Technologies */}
          <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
            <div className="footer-column">
              <div className="footer-section">
                <h3 className="footer-section-title">Technologies</h3>
                <ul className="footer-links">
                <li><a href="https://dotnet.microsoft.com/en-us/apps/maui" className="footer-link">.NET MAUI</a></li>
                  <li><a href="https://react.dev/" className="footer-link">React</a></li>
                  
                  <li><a href="https://firebase.google.com/?_gl=1*1acyu1f*_up*MQ..&gclid=Cj0KCQjwl5jHBhDHARIsAB0YqjxO14dvvLVVN48jwhv3jTqenpmI3_QbDTP0xjJGa5yJyi_60q9WFtYaAhaVEALw_wcB&gclsrc=aw.ds&gbraid=0AAAAADpUDOjWpRCjOJ3XI4egR6U_4Dlvh" className="footer-link">Firebase</a></li>
                  <li><a href="https://www.figma.com/make/?gclsrc=aw.ds&&utm_source=google&utm_medium=cpc&utm_campaign=22570738050&utm_term=figma&utm_content=753197128699&utm_adgroup=182267200240&gad_source=1&gad_campaignid=22570738050&gbraid=0AAAAACTf0kMq6feR_9b2TBj9yaIJ1Vak5&gclid=Cj0KCQjwl5jHBhDHARIsAB0Yqjx141BBg-0y_EmrVzpfhOtvDp893PnYtECPcw6OZaDrq0H07eGuRncaAkZUEALw_wcB" className="footer-link">Figma</a></li>                
                  <li><a href="https://www.microsoft.com/en-in/sql-server" className="footer-link">Microsoft SQL Server</a></li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>

          {/* Column 3 - Services */}
          <ScrollAnimation direction="up" delay={0.3} duration={0.8}>
            <div className="footer-column">
              <div className="footer-section">
                <h3 className="footer-section-title">Services</h3>
                <ul className="footer-links">
                  <li><button className="footer-link" onClick={() => onServiceClick && onServiceClick('')}>Mobile App Development</button></li>
                  <li><button className="footer-link" onClick={() => onServiceClick && onServiceClick('')}>Web Development</button></li>
                  <li><button className="footer-link" onClick={() => onServiceClick && onServiceClick('')}>UI/UX Design</button></li>
                  <li><button className="footer-link" onClick={() => onServiceClick && onServiceClick('')}>API Development</button></li>
                  <li><button className="footer-link" onClick={() => onServiceClick && onServiceClick('')}>AI Bot</button></li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>

          {/* Column 4 - Connect */}
          <ScrollAnimation direction="up" delay={0.4} duration={0.8}>
            <div className="footer-column">
              <div className="footer-section">
                <h3 className="footer-section-title">Connect</h3>
                <ul className="footer-links">
                  <li><a href="https://linkedin.com/in/asif-abbas-10260a213/" className="footer-link">LinkedIn</a></li>
                  <li><a href="https://github.com/bluerabbit14/" className="footer-link">GitHub</a></li>
                  <li><a href="https://www.instagram.com/being.sif/" className="footer-link">Instagram</a></li>
                  <li><a href="https://x.com/14asifcr7" className="footer-link">X</a></li>
                </ul>
              </div>
            </div>
          </ScrollAnimation>

            {/* Scroll to Top Button */}
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg width="20" height="26" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 4l-4 4h3v4h2V8h3l-4-4z"/>
          </svg>
        </button>
        </div>

        {/* Divider */}
        <ScrollAnimation direction="fade" delay={0.5} duration={0.8}>
          <div className="footer-divider"></div>
        </ScrollAnimation>

        {/* Bottom Bar */}
        <ScrollAnimation direction="up" delay={0.6} duration={0.8}>
          <div className="footer-bottom">
          <div className="footer-bottom-content">
            {/* Left Side */}
            <div className="footer-bottom-left">
              <p className="footer-copyright">
                Copyright © 2025 Asif Abbas. All rights reserved.
              </p>
              {/* will apply later */}
              {/* <div className="footer-legal-links">
                <button className="footer-legal-link" onClick={() => onServiceClick && onServiceClick('terms-of-use')}>Terms of Use</button>
                <span className="footer-separator">•</span>
                <button className="footer-legal-link" onClick={() => onServiceClick && onServiceClick('privacy-policy')}>Privacy Policy</button>
              </div> */}
            </div>

            {/* Right Side */}
            <div className="footer-bottom-right">
              <div className="footer-controls">
                {/* Theme Switcher */}
                 <div className="theme-switcher">
                 
                </div>
                
                {/* Brand */}
                 <div className="footer-brand">
                   <div className="footer-brand-text">
                     Iris.Dev
                   </div>
                </div> 

              
              </div>
            </div>
          </div>
        </div>
        </ScrollAnimation>

        
      </div>
    </footer>
  )
}