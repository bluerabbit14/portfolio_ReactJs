import React from 'react'
import './PrivacyPolicy.css'

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="legal-page">
      {/* Header */}
      <div className="legal-header">
        <button className="back-button" onClick={onBack}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
        </button>
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-subtitle">Last updated: January 2025</p>
      </div>

      {/* Content */}
      <div className="legal-content">
          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>
              This portfolio website is designed to showcase my work and skills. We may collect the following types of information:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> When you use the contact form, we collect your name, email address, and message content.</li>
              <li><strong>Usage Data:</strong> We may collect information about how you interact with our website, including pages visited and time spent.</li>
              <li><strong>Technical Data:</strong> We may collect your IP address, browser type, and device information for analytics purposes.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our website and services</li>
              <li>To analyze website usage and performance</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul>
              <li>When required by law or to protect our rights</li>
              <li>With trusted service providers who assist in operating our website</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. We may use:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Performance Cookies:</strong> Collect information about website performance</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Third-Party Services</h2>
            <p>
              Our website may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li>Right to access your personal data</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to delete your personal data</li>
              <li>Right to restrict processing of your data</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> asif.abbas@example.com</p>
              <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/asif-abbas-10260a213/" target="_blank" rel="noopener noreferrer">linkedin.com/in/asif-abbas-10260a213/</a></p>
              <p><strong>Address:</strong> [Your Address], [City], [Country]</p>
            </div>
          </section>
        </div>
      </div>
   
  )
}
