import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' }
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com/yourusername' },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
      { name: 'Twitter', href: 'https://twitter.com/yourusername' }
    ],
    contact: [
      { icon: 'fas fa-envelope', value: '14asifcr7@gmail.com' },
      { icon: 'fas fa-phone', value: '+91 (844) 594-1678' }
    ]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            variants={itemVariants}
          >
            <h3 className="footer-title">Portfolio</h3>
            <p className="footer-description">
              A modern portfolio showcasing my work and skills in web development.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-section"
            variants={itemVariants}
          >
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="footer-section"
            variants={itemVariants}
          >
            <h4 className="footer-section-title">Social</h4>
            <ul className="footer-links">
              {footerLinks.social.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-section"
            variants={itemVariants}
          >
            <h4 className="footer-section-title">Contact</h4>
            <ul className="footer-links">
              {footerLinks.contact.map((contact, index) => (
                <li key={index} className="footer-contact-item">
                  <i className={`footer-contact-icon ${contact.icon}`}></i>
                  <span className="footer-contact-value">{contact.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-copyright">
            <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
