import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email)
    setEmail('')
  }

  const footerLinks = {
    category1: [
      { name: 'Home', href: '#' },
      { name: 'Projects', href: '#' },
      { name: 'Skills', href: '#' }
    ],
    category2: [
      { name: 'List Item 1', href: '#' },
      { name: 'List Item 2', href: '#' },
      { name: 'List Item 3', href: '#' }
    ],
    social: [
      { name: 'LinkedIn', href: 'https://linkedin.com/in/asifabbas', icon: 'fab fa-linkedin' },
      { name: 'GitHub', href: 'https://github.com/asifabbas', icon: 'fab fa-github' },
      { name: 'Instagram', href: 'https://instagram.com/asifabbas', icon: 'fab fa-instagram' },
      { name: 'Twitter', href: 'https://twitter.com/asifabbas', icon: 'fab fa-twitter' }
    ]
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Scroll to Top Button */}
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
        >
          <i className="fas fa-arrow-up arrow-animated"></i>
        </button>
       {/* Website Name */}
        <div className="footer-container-WebsiteName">
          <h2 className="footer-website-name"></h2>
        </div>
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Description Block */}
          <div className="footer-section description-section">
            <h3 className="footer-section-title-Name">Portfolio</h3>
            <p className="footer-description">
              Here a sample text of description will be present. A short website description will be present here.
            </p>
          </div>

          {/* Category 1 Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Main Page</h4>
            <ul className="footer-links">
              {footerLinks.category1.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Category 2 Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Features</h4>
            <ul className="footer-links">
              {footerLinks.category2.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section newsletter-section">
            <h4 className="footer-section-title">Newsletter</h4>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-submit">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">

            {/* Salutation Text */}
            <div className="footer-salutation">
              <p>
                Powered by <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="footer-link-highlight">React</a> • 
                Developed by <a href="https://github.com/asifabbas" target="_blank" rel="noopener noreferrer" className="footer-link-highlight">Asif Abbas</a>
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="footer-social-icons">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`social-icon ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
