import React, { useState, useEffect } from 'react'
import emailLogo from '../assets/email.svg'
import linkedinLogo from '../assets/linkedin.svg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactInfo = {
    email: {
      name: "Email",
      url: "mailto:wfinnegan13@gmail.com",
      emailAddress: "wfinnegan13@gmail.com",
      logo: emailLogo
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/william-finnegan-4b64819a",
      logo: linkedinLogo
    }
  }

  useEffect(() => {
    if (submitStatus) {
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  }, [submitStatus]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch(import.meta.env.VITE_EMAILJS_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SEVICE_ID,
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAILJS_USER_ID,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: import.meta.env.VITE_EMAILJS_USER_EMAIL
          }
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">Get in touch for opportunities or just to say hello!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
             <div className="contact-item">
               <img src={contactInfo.email.logo} alt={contactInfo.email.name} className="social-icon" />
               <div className="contact-details">
                 <h4>Email</h4>
                 <p 
                   className="email-address"
                   onClick={() => window.open(contactInfo.email.url, '_self')}
                   title="Click to open email client or select to copy"
                 >
                   {contactInfo.email.emailAddress}
                 </p>
               </div>
             </div>

            <div className="contact-item">
              <img src={contactInfo.linkedin.logo} alt={contactInfo.linkedin.name} className="social-icon" />
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <p>
                  <a 
                    href={contactInfo.linkedin.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Connect with me
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="form-success">
                  <p>✅ Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-error">
                  <p>❌ There was an error sending your message. Please try again or email me directly.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact