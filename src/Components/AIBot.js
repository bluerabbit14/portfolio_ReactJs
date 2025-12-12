import React from 'react'
import './AIBot.css'
import ScrollAnimation from './ScrollAnimation'

export default function AIBot({ onBack }) {
  const handleBackClick = () => {
    if (onBack) {
      onBack()
    }
  }

  return (
    <div className="ai-bot">
      {/* Header */}
      <div className="ai-bot-header">
        <button onClick={handleBackClick} className="back-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 18l-8-8 8-8 1.41 1.41L4.83 9H18v2H4.83l6.58 6.59L10 18z"/>
          </svg>
          Back
        </button>
      </div>

      {/* Hero Section */}
      <div className="ai-bot-hero">
        <ScrollAnimation direction="up" delay={0.1} duration={0.8}>
          <div className="service-icon">🤖</div>
          <h1 className="service-title">AI Bot Development</h1>
          <p className="service-description">Creating intelligent chatbots and AI-powered solutions that enhance user engagement and automate business processes.</p>
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
          <div className="service-overview">
          <h2>Service Overview</h2>
          <div className="service-text">
            <p>AI bot development represents the future of customer interaction and business automation. I create intelligent chatbots and AI-powered solutions that can understand natural language, provide instant responses, and learn from user interactions.</p>
            
            <p>My expertise includes integrating with various AI platforms like OpenAI's GPT models, Google's Gemini, and custom machine learning solutions. I build bots that can handle complex conversations, provide personalized responses, and integrate seamlessly with your existing systems.</p>
            
            <p>I specialize in creating conversational AI that can handle customer support, lead generation, appointment scheduling, and other business processes. Every bot I develop includes natural language processing, context awareness, and fallback mechanisms for handling unexpected queries.</p>
            
            <p>From simple FAQ bots to complex conversational AI systems, I create solutions that improve user experience while reducing operational costs. I also provide analytics and monitoring to track bot performance and user satisfaction.</p>
          </div>
        </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.3} duration={0.8}>
          <div className="service-technologies">
          <h2>Technologies Used</h2>
          <div className="technologies-grid">
            <span className="tech-tag">OpenAI GPT</span>
            <span className="tech-tag">Google Gemini</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">Machine Learning</span>
            <span className="tech-tag">NLP</span>
            <span className="tech-tag">TensorFlow</span>
          </div>
        </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.4} duration={0.8}>
          <div className="service-features">
          <h2>Key Features</h2>
          <ul className="features-list">
            <li>Natural language processing</li>
            <li>Context-aware conversations</li>
            <li>Multi-platform integration</li>
            <li>Custom training and fine-tuning</li>
            <li>Analytics and performance monitoring</li>
            <li>Fallback and error handling</li>
            <li>Voice and text capabilities</li>
            <li>Scalable deployment</li>
          </ul>
        </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.5} duration={0.8}>
          <div className="service-process">
          <h2>Our Process</h2>
          <ul className="process-list">
            <li>
              <span className="process-number">1</span>
              <span className="process-text">Use case analysis and planning</span>
            </li>
            <li>
              <span className="process-number">2</span>
              <span className="process-text">AI model selection and training</span>
            </li>
            <li>
              <span className="process-number">3</span>
              <span className="process-text">Conversation flow design</span>
            </li>
            <li>
              <span className="process-number">4</span>
              <span className="process-text">Integration and testing</span>
            </li>
            <li>
              <span className="process-number">5</span>
              <span className="process-text">Deployment and monitoring</span>
            </li>
            <li>
              <span className="process-number">6</span>
              <span className="process-text">Continuous improvement</span>
            </li>
          </ul>
        </div>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.6} duration={0.8}>
          <div className="service-projects">
            <h2>Recent AI Bot Projects</h2>
            <div className="projects-grid">
              <ScrollAnimation direction="right" delay={0.7} duration={0.8}>
                <div className="project-card">
                  <h3>Gemini AI Chat</h3>
                  <p>Modern, interactive web application with real-time AI conversations powered by Google's Gemini model.</p>
                  <div className="project-tech">
                    <span className="tech-badge">Google Gemini</span>
                    <span className="tech-badge">JavaScript</span>
                    <span className="tech-badge">OpenRouter API</span>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="left" delay={0.8} duration={0.8}>
                <div className="project-card">
                  <h3>Customer Support Bot</h3>
                  <p>Intelligent chatbot for handling customer inquiries with natural language understanding and context awareness.</p>
                  <div className="project-tech">
                    <span className="tech-badge">OpenAI GPT</span>
                    <span className="tech-badge">Python</span>
                    <span className="tech-badge">NLP</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}





