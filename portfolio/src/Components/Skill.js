import React from 'react'
import './Skill.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEnvelope,
  faStar,
  faDesktop,
  faNetworkWired,
  faChevronDown,
  faPalette,
  faMobileAlt
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebook, 
  faYoutube, 
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

export default function Skill() {
  return (
    <>
      {/* Horizontal Service Ribbon */}
      <div className="service-ribbon">
          <div className="ribbon-item">
            <FontAwesomeIcon icon={faStar} className="ribbon-icon" />
            <span className="ribbon-text">WEB DESIGN</span>
          </div>
          <div className="ribbon-divider"></div>
          <div className="ribbon-item">
            <FontAwesomeIcon icon={faStar} className="ribbon-icon" />
            <span className="ribbon-text">APP DESIGN</span>
          </div>
          <div className="ribbon-divider"></div>
          <div className="ribbon-item">
            <FontAwesomeIcon icon={faStar} className="ribbon-icon" />
            <span className="ribbon-text">DEVELOPMENT</span>
          </div>
          <div className="ribbon-divider"></div>
          <div className="ribbon-item">
            <FontAwesomeIcon icon={faStar} className="ribbon-icon" />
            <span className="ribbon-text">WEB FLOW</span>
          </div>
          <div className="ribbon-divider"></div>
          <div className="ribbon-item">
            <FontAwesomeIcon icon={faStar} className="ribbon-icon" />
            <span className="ribbon-text">BRANDING</span>
          </div>
        </div>
        <section id="skills" className="skill">
      {/* Header Area */}
      <div className="skill-header">
        <div className="social-links">
          <div className="social-item">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            <span className="social-text">FACEBOOK</span>
          </div>
          <div className="social-divider"></div>
          <div className="social-item">
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            <span className="social-text">YOUTUBE</span>
          </div>
          <div className="social-divider"></div>
          <div className="social-item">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            <span className="social-text">TWITTER</span>
          </div>
        </div>
        
        <div className="contact-info">
          <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
          <span className="email-text">14ASIFCR7@GMAIL.COM</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="skill-container">
        <div className="skill-main-row">
          {/* Left Side - Title and Description */}
          <div className="skill-left">
            <div className="skill-subtitle">
              <div className="subtitle-line"></div>
              <span className="subtitle-text">MY SERVICES?</span>
            </div>
            
            <div className="skill-title-section">
              <h2 className="skill-title">WHAT I'M OFFERING</h2>
              <p className="skill-description">
                Expert mobile app development services using modern technologies. 
                I specialize in creating cross-platform applications that deliver 
                exceptional user experiences.
              </p>
            </div>

  
          </div>

        </div>

        {/* Scroll Indicator and Service Cards Section */}
        <div className="skill-bottom-section">
          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <span className="scroll-text">SCROLL DOWN</span>
            <div className="scroll-line"></div>
            <button className="scroll-button">
              <FontAwesomeIcon icon={faChevronDown} className="scroll-arrow" />
            </button>
          </div>

          {/* Service Cards */}
          <div className="skill-cards">
            {/* Card 1 - Highlighted */}
            <div className="skill-card highlighted">
              <div className="card-icon">
                <FontAwesomeIcon icon={faMobileAlt} />
              </div>
              <h3 className="card-title">APP DEVELOPMENT</h3>
              <a href="#" className="read-more-link">
                READ MORE
                <span className="arrow">→</span>
              </a>
            </div>

            {/* Card 2 */}
            <div className="skill-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faDesktop} />
              </div>
              <h3 className="card-title">WEB DEVELOPMENT</h3>
              <a href="#" className="read-more-link">
                READ MORE
                <span className="arrow">→</span>
              </a>
            </div>

            {/* Card 3 */}
            <div className="skill-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faNetworkWired} />
              </div>
              <h3 className="card-title">API INTEGRATION</h3>
              <a href="#" className="read-more-link">
                READ MORE
                <span className="arrow">→</span>
              </a>
            </div>

               {/* Card 4 */}
               <div className="skill-card">
               <div className="card-icon">
                 <FontAwesomeIcon icon={faPalette} />
               </div>
               <h3 className="card-title">UI/UX DESIGN</h3>
              <a href="#" className="read-more-link">
                READ MORE
                <span className="arrow">→</span>
              </a>
            </div>
          </div> 
        </div>
      </div>
    </section>

    </>

  )
}
