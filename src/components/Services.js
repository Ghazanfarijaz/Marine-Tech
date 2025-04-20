import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive digital solutions to power your business growth</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        <div className="services-approach">
          <div className="section-title">
            <h3>Our Approach</h3>
          </div>
          
          <div className="approach-timeline">
            <div className="approach-item">
              <div className="approach-number">01</div>
              <div className="approach-content">
                <h4>Discovery</h4>
                <p>We dive deep to understand your business, goals, users, and market to establish a solid foundation.</p>
              </div>
            </div>
            
            <div className="approach-item">
              <div className="approach-number">02</div>
              <div className="approach-content">
                <h4>Strategy</h4>
                <p>We develop a tailored roadmap aligning technology solutions with your specific business objectives.</p>
              </div>
            </div>
            
            <div className="approach-item">
              <div className="approach-number">03</div>
              <div className="approach-content">
                <h4>Design</h4>
                <p>Our designers create intuitive, engaging experiences that resonate with your users and brand.</p>
              </div>
            </div>
            
            <div className="approach-item">
              <div className="approach-number">04</div>
              <div className="approach-content">
                <h4>Development</h4>
                <p>Our engineers build robust, scalable solutions using cutting-edge technologies and best practices.</p>
              </div>
            </div>
            
            <div className="approach-item">
              <div className="approach-number">05</div>
              <div className="approach-content">
                <h4>Testing</h4>
                <p>Rigorous testing ensures quality, performance, and security across all platforms.</p>
              </div>
            </div>
            
            <div className="approach-item">
              <div className="approach-number">06</div>
              <div className="approach-content">
                <h4>Launch & Support</h4>
                <p>We ensure smooth deployment and provide ongoing maintenance to keep your digital assets performing optimally.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx="true">{`
        .services {
          background-color: var(--gray-light);
          position: relative;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 5rem;
        }
        
        .section-title p {
          text-align: center;
          max-width: 700px;
          margin: -1rem auto 3rem auto;
          color: var(--gray);
        }
        
        .services-approach {
          margin-top: 5rem;
        }
        
        .approach-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 50px;
        }
        
        .approach-timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          height: 100%;
          width: 2px;
          background-color: var(--primary-light);
        }
        
        .approach-item {
          position: relative;
          padding-bottom: 2.5rem;
          display: flex;
          align-items: flex-start;
        }
        
        .approach-number {
          position: absolute;
          left: -50px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--primary);
          color: var(--white);
          border-radius: 50%;
          font-weight: 700;
          z-index: 1;
        }
        
        .approach-content {
          background-color: var(--white);
          padding: 1.5rem;
          border-radius: var(--border-radius-md);
          box-shadow: var(--box-shadow);
          margin-left: 1rem;
          flex: 1;
        }
        
        .approach-content h4 {
          margin-bottom: 0.5rem;
          color: var(--primary);
        }
        
        .approach-content p {
          margin-bottom: 0;
        }
        
        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .approach-timeline {
            padding-left: 40px;
          }
          
          .approach-timeline::before {
            left: 15px;
          }
          
          .approach-number {
            left: -40px;
            width: 30px;
            height: 30px;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
