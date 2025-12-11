import React from 'react'
import './Testimonial.css'

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      quote: "Asif delivered an exceptional mobile app that exceeded our expectations. His attention to detail and technical expertise made our investment tracking platform both powerful and user-friendly.",
      name: "Sarah Johnson",
      role: "Product Manager, TechStart Inc."
    },
    {
      id: 2,
      quote: "Working with Asif was a game-changer for our project. His React and API development skills helped us build a scalable solution that our users love. Highly recommended!",
      name: "Michael Chen",
      role: "CTO, InnovateLab"
    },
    {
      id: 3,
      quote: "Asif's UI/UX design skills combined with his development expertise created a seamless user experience. Our app's interface is intuitive and visually appealing thanks to his work.",
      name: "Emily Rodriguez",
      role: "Design Director, Creative Solutions"
    }
  ]

  return (
    <section id="testimonials" className="testimonial">
      <div className="testimonial-container">
        {/* Header Section */}
        <div className="testimonial-header">
          <div className="testimonial-pattern">
            <div className="pattern-dots"></div>
          </div>
          
          <div className="testimonial-title-section">
            <h1 className="testimonial-main-title">TESTIMONIALS</h1>
            <p className="testimonial-description">
              What clients and colleagues say about working with me. Their feedback drives my commitment to delivering exceptional results.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="#333"/>
                  </svg>
                </div>
                <blockquote className="testimonial-quote">
                  {testimonial.quote}
                </blockquote>
                <div className="testimonial-author">
                  <h3 className="author-name">{testimonial.name}</h3>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
