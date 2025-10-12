import React, { useState, useEffect } from 'react'
import './GetInTouchForm.css'

export default function GetInTouchForm({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Create mailto link with pre-filled content
      const subject = encodeURIComponent(`Contact from ${name}`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
      const mailtoLink = `mailto:asifabbas.dev@gmail.com?subject=${subject}&body=${body}`
      
      // Open default email client
      window.location.href = mailtoLink
      
      setSubmitStatus('success')
      // Reset form
      setName('')
      setEmail('')
      setMessage('')
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose()
        setSubmitStatus(null)
      }, 2000)
    } catch (error) {
      console.error('Error opening email client:', error)
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
                <h3>Email Client Opened!</h3>
                <p>Your default email client has opened with a pre-filled message. Please send the email to complete your contact request.</p>
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
