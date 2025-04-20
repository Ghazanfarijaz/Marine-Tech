import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, handle form submission to backend
    
    // For demo, simulate successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We\'ll get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with our team for any inquiries or collaborations</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h4>Visit Us</h4>
                <p>123 Tech Avenue, Suite 456<br />San Francisco, CA 94105</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h4>Email Us</h4>
                <p>info@techwavesolutions.com<br />careers@techwavesolutions.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="info-content">
                <h4>Call Us</h4>
                <p>+1 (415) 555-1234<br />Mon-Fri, 9am-6pm PST</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="info-content">
                <h4>Working Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Connect With Us</h4>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            
            {formStatus.submitted && (
              <div className={`form-alert ${formStatus.error ? 'error' : 'success'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-large">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact {
          position: relative;
        }
        
        .contact-container {
          display: flex;
          background-color: var(--white);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--box-shadow);
        }
        
        .contact-info {
          background: linear-gradient(135deg, var(--primary-dark), var(--primary));
          color: var(--white);
          padding: 3rem;
          width: 40%;
        }
        
        .info-item {
          display: flex;
          margin-bottom: 2rem;
        }
        
        .info-icon {
          width: 50px;
          height: 50px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          font-size: 1.25rem;
        }
        
        .info-content h4 {
          margin-bottom: 0.5rem;
          color: var(--white);
        }
        
        .info-content p {
          margin-bottom: 0;
          font-size: 0.95rem;
          opacity: 0.8;
        }
        
        .social-links {
          margin-top: 3rem;
        }
        
        .social-links h4 {
          margin-bottom: 1rem;
          color: var(--white);
        }
        
        .social-icons {
          display: flex;
          gap: 1rem;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-size: 1rem;
          transition: var(--transition);
        }
        
        .social-icon:hover {
          background-color: var(--white);
          color: var(--primary);
          transform: translateY(-3px);
        }
        
        .contact-form {
          padding: 3rem;
          width: 60%;
        }
        
        .contact-form h3 {
          margin-bottom: 1.5rem;
        }
        
        .form-alert {
          padding: 1rem;
          border-radius: var(--border-radius-sm);
          margin-bottom: 2rem;
        }
        
        .form-alert.success {
          background-color: rgba(25, 135, 84, 0.1);
          color: #198754;
          border: 1px solid rgba(25, 135, 84, 0.2);
        }
        
        .form-alert.error {
          background-color: rgba(220, 53, 69, 0.1);
          color: #dc3545;
          border: 1px solid rgba(220, 53, 69, 0.2);
        }
        
        @media (max-width: 992px) {
          .contact-container {
            flex-direction: column;
          }
          
          .contact-info,
          .contact-form {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
