import React from 'react'
import './TermsOfUse.css'

export default function TermsOfUse({ onBack }) {
  return (
    <div className="legal-page">
      {/* Header */}
      <div className="legal-header">
        <button className="back-button" onClick={onBack}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
        </button>
        <h1 className="legal-title">Terms of Use</h1>
        <p className="legal-subtitle">Last updated: January 2025</p>
      </div>

      {/* Content */}
      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this portfolio website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials on Asif Abbas's portfolio website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials</li>
            <li>use the materials for any commercial purpose or for any public display</li>
            <li>attempt to reverse engineer any software contained on the website</li>
            <li>remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Disclaimer</h2>
          <p>
            The materials on Asif Abbas's portfolio website are provided on an 'as is' basis. Asif Abbas makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Limitations</h2>
          <p>
            In no event shall Asif Abbas or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if Asif Abbas or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Accuracy of Materials</h2>
          <p>
            The materials appearing on this website could include technical, typographical, or photographic errors. Asif Abbas does not warrant that any of the materials on its website are accurate, complete, or current. Asif Abbas may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Links</h2>
          <p>
            Asif Abbas has not reviewed all of the sites linked to this website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Asif Abbas of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Modifications</h2>
          <p>
            Asif Abbas may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Use, please contact me at:
          </p>
          <div className="contact-info">
            <p><strong>Email:</strong> asif.abbas@example.com</p>
            <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/asif-abbas-10260a213/" target="_blank" rel="noopener noreferrer">linkedin.com/in/asif-abbas-10260a213/</a></p>
          </div>
        </section>
      </div>
    </div>
  )
}
