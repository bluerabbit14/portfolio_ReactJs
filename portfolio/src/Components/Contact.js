import React, { useState } from 'react'
import GetInTouchForm from './GetInTouchForm'
import './Contact.css'

export default function Contact() {
  const [showGetInTouch, setShowGetInTouch] = useState(false)

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Left Section - Contact Details */}
        <div className="contact-details">
          <h2 className="contact-title">Let's Build Something Great Together</h2>
          <p className="contact-subtitle">Have a project in mind? Need help with mobile app development, UI/UX design, or APIs?  
          I'd love to hear about your idea and see how I can help.</p>
          <p className="contact-response-time">I usually reply within 24 hours.</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <span className="contact-value">14asifcr7@gmail.com</span>
            </div>
            <div className="contact-separator">|</div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <span className="contact-value">linkedin.com/in/yourusername</span>
            </div>
            <div className="contact-separator">|</div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <span className="contact-value">remote, worldwide</span>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="cta-section">
            <button className="cta-button" onClick={() => setShowGetInTouch(true)}>
              Let's Work Together
            </button>
          </div>

          {/* Future Animation/Image Placeholder */}
          <div className="contact-placeholder">
            <p>Future animation space</p>
          </div>
        </div>

      </div>

      {/* GetInTouch Form Modal */}
      <GetInTouchForm 
        isOpen={showGetInTouch} 
        onClose={() => setShowGetInTouch(false)} 
      />
    </section>
  )
}
