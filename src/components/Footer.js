import React from 'react';
import logo from '../assets/logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="footer-logo">
                <img src={logo} alt="TechWave Solutions" />
                <h3>TechWave Solutions</h3>
              </div>
              <p className="footer-about">
                We provide cutting-edge technology solutions to help businesses 
                thrive in the digital era. Our expertise spans across web development, 
                mobile applications, cloud services, and digital transformation.
              </p>
              <div className="footer-social">
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
              </div>
            </div>
            
            <div className="col-3">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="col-3">
              <h4 className="footer-title">Our Services</h4>
              <ul className="footer-links">
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Mobile App Development</a></li>
                <li><a href="#services">Cloud Solutions</a></li>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">Digital Marketing</a></li>
                <li><a href="#services">IT Consulting</a></li>
              </ul>
            </div>
            
            <div className="col-3">
              <h4 className="footer-title">Newsletter</h4>
              <p>Subscribe to our newsletter to receive the latest updates and news.</p>
              <form className="footer-newsletter">
                <input type="email" placeholder="Your Email Address" required />
                <button type="submit" className="btn">Subscribe</button>
              </form>
              <div className="footer-contact">
                <p><i className="fas fa-phone-alt"></i> +1 (415) 555-1234</p>
                <p><i className="fas fa-envelope"></i> info@techwavesolutions.com</p>
                <p><i className="fas fa-map-marker-alt"></i> 123 Tech Avenue, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-copyright">
            <p>&copy; {currentYear} TechWave Solutions. All Rights Reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background-color: var(--primary-dark);
          color: var(--text-light);
          position: relative;
        }
        
        .footer-top {
          padding: 5rem 0 3rem;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .footer-logo img {
          height: 40px;
          margin-right: 1rem;
        }
        
        .footer-logo h3 {
          margin: 0;
          color: var(--white);
          font-size: 1.5rem;
        }
        
        .footer-about {
          margin-bottom: 1.5rem;
          opacity: 0.8;
          font-size: 0.95rem;
        }
        
        .footer-social {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .footer-social a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: var(--white);
          transition: var(--transition);
        }
        
        .footer-social a:hover {
          background-color: var(--primary-light);
          transform: translateY(-3px);
        }
        
        .footer-title {
          color: var(--white);
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
          position: relative;
          padding-bottom: 0.75rem;
        }
        
        .footer-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 2px;
          background-color: var(--primary-light);
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.75rem;
        }
        
        .footer-links a {
          color: var(--text-light);
          transition: var(--transition);
          opacity: 0.8;
          display: inline-block;
        }
        
        .footer-links a:hover {
          color: var(--accent);
          opacity: 1;
          transform: translateX(5px);
        }
        
        .footer-newsletter {
          display: flex;
          margin-bottom: 1.5rem;
        }
        
        .footer-newsletter input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: none;
          border-radius: var(--border-radius-md) 0 0 var(--border-radius-md);
          font-size: 0.9rem;
        }
        
        .footer-newsletter .btn {
          border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;
          padding: 0 1rem;
          background-color: var(--primary-light);
        }
        
        .footer-contact p {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          opacity: 0.8;
          font-size: 0.9rem;
        }
        
        .footer-contact i {
          margin-right: 0.75rem;
          color: var(--primary-light);
        }
        
        .footer-bottom {
          padding: 1.5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-bottom .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .footer-copyright p {
          margin: 0;
          opacity: 0.7;
          font-size: 0.9rem;
        }
        
        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }
        
        .footer-legal a {
          color: var(--text-light);
          opacity: 0.7;
          font-size: 0.9rem;
          transition: var(--transition);
        }
        
        .footer-legal a:hover {
          color: var(--accent);
          opacity: 1;
        }
        
        @media (max-width: 992px) {
          .footer-bottom .container {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          
          .footer-legal {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
