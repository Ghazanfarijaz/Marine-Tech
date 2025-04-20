import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <i className={service.icon}></i>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul className="service-features">
        {service.features.map((feature, index) => (
          <li key={index}>
            <i className="fas fa-check"></i> {feature}
          </li>
        ))}
      </ul>
      <a href="#contact" className="service-link">
        Learn More <i className="fas fa-arrow-right"></i>
      </a>
      
      <style jsx="true">{`
        .service-card {
          background-color: var(--white);
          padding: 2.5rem;
          border-radius: var(--border-radius-lg);
          box-shadow: var(--box-shadow);
          transition: var(--transition);
          height: 100%;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, var(--primary), var(--primary-light));
          z-index: -1;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 68, 102, 0.15);
        }
        
        .service-icon {
          width: 70px;
          height: 70px;
          background-color: var(--gray-light);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
          color: var(--primary);
          transition: var(--transition);
        }
        
        .service-card:hover .service-icon {
          background-color: var(--primary);
          color: var(--white);
          transform: rotateY(180deg);
        }
        
        .service-card h3 {
          margin-bottom: 1rem;
          transition: var(--transition);
        }
        
        .service-card p {
          color: var(--gray);
          margin-bottom: 1.5rem;
        }
        
        .service-features {
          list-style: none;
          padding: 0;
          margin-bottom: 1.5rem;
        }
        
        .service-features li {
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
        }
        
        .service-features i {
          color: var(--primary);
          margin-right: 0.75rem;
          font-size: 0.8rem;
        }
        
        .service-link {
          display: inline-flex;
          align-items: center;
          font-weight: 600;
          transition: var(--transition);
        }
        
        .service-link i {
          margin-left: 0.5rem;
          transition: var(--transition);
        }
        
        .service-link:hover {
          color: var(--primary-dark);
        }
        
        .service-link:hover i {
          transform: translateX(5px);
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
