import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'
import './GetInTouchForm.css'

export default function GetInTouchForm({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Owner email template parameters (sent to you)
      const ownerTemplateParams = {
        name: name,
        email: email,
        message: message,
        to_email: '14asifcr7@gmail.com',
        reply_to: email
      }

      // User confirmation email template parameters (sent to user)
      const userTemplateParams = {
        name: name,
        email: email,
        to_email: email
      }

      // Send both emails using EmailJS
      const ownerEmailPromise = emailjs.send(
        EMAILJS_CONFIG.serviceId, 
        EMAILJS_CONFIG.templates.owner, 
        ownerTemplateParams, 
        EMAILJS_CONFIG.publicKey
      )

      const userEmailPromise = emailjs.send(
        EMAILJS_CONFIG.serviceId, 
        EMAILJS_CONFIG.templates.user, 
        userTemplateParams, 
        EMAILJS_CONFIG.publicKey
      )

      // Wait for both emails to be sent
      await Promise.all([ownerEmailPromise, userEmailPromise])
      
      setSubmitStatus('success')
      // Reset form
      setName('')
      setEmail('')
      setMessage('')
      // Close modal after 3 seconds
      setTimeout(() => {
        onClose()
        setSubmitStatus(null)
      }, 3000)
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Disable body scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Re-enable body scroll
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="profile-section">
            <div className="profile-photo">
              <img src="/Assets/asifimage.jpg" alt="Asif" />
            </div>
            <div className="profile-info">
              <h2 className="modal-title">Connect with Asif</h2>
              <p className="response-time">Responds in about 24 hours</p>
            </div>
          </div>
          <button className="close-button" onClick={onClose}>
            <span>×</span>
          </button>
        </div>


        {/* Content */}
        <div className="modal-body">
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="status-message success">
              <div className="status-icon">✓</div>
              <div className="status-text">
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out! Your message has been sent and a confirmation email has been sent to your inbox. I'll get back to you within 24 hours.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="status-message error">
              <div className="status-icon">✗</div>
              <div className="status-text">
                <h3>Error Sending Message</h3>
                <p>Sorry, there was an error sending your message. Please try again.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name <span className="section-subtitle-bold">*</span></label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="form-input"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email <span className="section-subtitle-bold">*</span></label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="form-input"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message <span className="section-subtitle-bold">*</span></label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="form-textarea simple-message"
                rows="6"
                required
                disabled={isSubmitting}
              />
            </div>

            <button 
              type="submit" 
              className={`send-button ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
