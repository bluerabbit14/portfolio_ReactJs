import React, { useState, useEffect } from 'react'
import './GetInTouchForm.css'

export default function GetInTouchForm({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('message')
  const [isWorkingWithUs, setIsWorkingWithUs] = useState(true)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [targetDate, setTargetDate] = useState('')
  const [projectBudget, setProjectBudget] = useState('')
  const [letRecommendBudget, setLetRecommendBudget] = useState(false)

  const targetDateOptions = [
    'Within the next few days',
    'Within the next few weeks',
    'In a month or more',
    'Not sure'
  ]

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'API Development',
    'Database Design',
    'Cloud Solutions',
    'E-commerce Development',
    'Custom Software Solutions'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', { 
      email, 
      message, 
      isWorkingWithUs, 
      targetDate, 
      projectBudget, 
      letRecommendBudget 
    })
    onClose()
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

        {/* Tabs */}
        <div className="tabs-section">
          <button 
            className={`tab-button ${activeTab === 'message' ? 'active' : ''}`}
            onClick={() => setActiveTab('message')}
          >
            <span className="tab-icon">💬</span>
            Message
          </button>
          <button 
            className={`tab-button ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            <span className="tab-icon">📋</span>
            Services
          </button>
        </div>

        {/* Content */}
        <div className="modal-body">
          <div className="toggle-section">
            <span className="toggle-label">I'm interested in working with Asif</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={isWorkingWithUs}
                onChange={(e) => setIsWorkingWithUs(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          {activeTab === 'message' ? (
            <form onSubmit={handleSubmit} className="contact-form">
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
                />
              </div>

              {isWorkingWithUs ? (
                <>
                  <div className="form-section">
                    <p className="section-subtitle"> Project Details <span className="section-subtitle-bold">*</span><span className="section-subtitle-italic">Minimum 50 characters</span></p>
                    <p className="section-description">
                      Describe your project 
                    </p>
                    
                    <div className="form-group">
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Include any project details, requirements, or goals..."
                        className="form-textarea project-details"
                        rows="4"
                        required
                        minLength="50"
                      />
                    </div>
                  </div>

                  <div className="form-section">
                    <div className="form-group">
                      <label htmlFor="targetDate" className="form-label">Target Date <span className="section-subtitle-bold">*</span></label>
                      <p className="field-description">Select when you need the project to be completed</p>
                      <select
                        id="targetDate"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        className="form-select"
                        required
                      >
                        <option value="">Please select...</option>
                        {targetDateOptions.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="projectBudget" className="form-label">Project Budget <span className="section-subtitle-bold">*</span></label>
                      <p className="field-description">Asif's minimum project rate is $2,000 (USD)</p>
                      <div className="budget-input-container">
                        <span className="currency-symbol">$</span>
                        <input
                          type="number"
                          id="projectBudget"
                          value={projectBudget}
                          onChange={(e) => setProjectBudget(e.target.value)}
                          placeholder="Enter amount"
                          className="form-input budget-input"
                          disabled={letRecommendBudget}
                          required={!letRecommendBudget}
                        />
                      </div>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={letRecommendBudget}
                          onChange={(e) => setLetRecommendBudget(e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        Let Asif recommend a budget
                      </label>
                    </div>
                  </div>
                </>
              ) : (
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
                  />
                </div>
              )}

              <button type="submit" className="send-button">
                Send Message
              </button>
            </form>
          ) : (
            <div className="services-content">
              <h3 className="services-title">Services I Provide</h3>
              <div className="services-grid">
                {services.map((service, index) => (
                  <div key={index} className="service-item">
                    <span className="service-icon">🔧</span>
                    <span className="service-name">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
