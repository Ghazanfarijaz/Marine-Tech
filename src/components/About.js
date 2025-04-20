import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="section-title">
          <h2>About TechWave Solutions</h2>
        </div>
        
        <div className="row">
          <div className="col-2">
            <div className="about-content">
              <h3>Our Story</h3>
              <p>
                Founded in 2008, TechWave Solutions has been at the forefront of digital innovation for over a decade. 
                What started as a small team of passionate developers has grown into a comprehensive technology 
                partner for businesses across industries worldwide.
              </p>
              <p>
                Over the years, we've helped hundreds of companies transform their digital presence, streamline 
                operations, and create exceptional user experiences that drive business growth.
              </p>
              
              <div className="about-vision">
                <h3>Our Vision</h3>
                <p>
                  To be the catalyst for technological advancement, empowering businesses to thrive in the 
                  digital age through innovative solutions and strategic partnership.
                </p>
              </div>
              
              <div className="about-mission">
                <h3>Our Mission</h3>
                <p>
                  We deliver cutting-edge technology solutions that solve complex business challenges, 
                  drive digital transformation, and create sustainable competitive advantages for our clients.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-2">
            <div className="about-values">
              <h3>Our Core Values</h3>
              
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div className="value-content">
                    <h4>Innovation</h4>
                    <p>We continuously explore new technologies and approaches to solve complex problems.</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <div className="value-content">
                    <h4>Partnership</h4>
                    <p>We build lasting relationships based on trust, transparency, and mutual success.</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="value-content">
                    <h4>Excellence</h4>
                    <p>We commit to delivering exceptional quality in everything we do.</p>
                  </div>
                </div>
                
                <div className="value-item">
                  <div className="value-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="value-content">
                    <h4>Collaboration</h4>
                    <p>We believe in the power of diverse perspectives and teamwork.</p>
                  </div>
                </div>
              </div>
              
              <div className="about-counter">
                <div className="counter-grid">
                  <div className="counter-item">
                    <h4 className="counter-number">10,000+</h4>
                    <p className="counter-text">Development Hours</p>
                  </div>
                  <div className="counter-item">
                    <h4 className="counter-number">98%</h4>
                    <p className="counter-text">Client Satisfaction</p>
                  </div>
                  <div className="counter-item">
                    <h4 className="counter-number">45+</h4>
                    <p className="counter-text">Expert Team Members</p>
                  </div>
                  <div className="counter-item">
                    <h4 className="counter-number">15</h4>
                    <p className="counter-text">Industry Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .about {
          position: relative;
          overflow: hidden;
        }
        
        .about-content {
          padding-right: 2rem;
        }
        
        .about-vision,
        .about-mission {
          margin-top: 2rem;
        }
        
        .about-values {
          padding-left: 1rem;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-top: 1.5rem;
        }
        
        .value-item {
          display: flex;
          align-items: flex-start;
          padding: 1.5rem;
          background-color: var(--white);
          border-radius: var(--border-radius-md);
          box-shadow: var(--box-shadow);
          transition: var(--transition);
        }
        
        .value-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 68, 102, 0.1);
        }
        
        .value-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          background-color: var(--primary-light);
          color: var(--white);
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        
        .value-content h4 {
          margin-bottom: 0.5rem;
          color: var(--primary-dark);
        }
        
        .value-content p {
          margin-bottom: 0;
          font-size: 0.95rem;
        }
        
        .about-counter {
          margin-top: 3rem;
        }
        
        .counter-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        
        .counter-item {
          text-align: center;
          padding: 1.5rem;
          background-color: var(--primary-dark);
          border-radius: var(--border-radius-md);
          color: var(--white);
        }
        
        .counter-number {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--accent);
        }
        
        .counter-text {
          margin-bottom: 0;
          font-size: 0.9rem;
        }
        
        @media (max-width: 992px) {
          .values-grid, .counter-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .about-content {
            padding-right: 0;
            margin-bottom: 3rem;
          }
          
          .about-values {
            padding-left: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
