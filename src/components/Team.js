import React, { useState } from 'react';
import TeamCard from './TeamCard';
import { team } from '../data/team';

const Team = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' }
  ];
  
  const filteredTeam = activeCategory === 'all' 
    ? team 
    : team.filter(member => member.category === activeCategory);
  
  return (
    <div className="team">
      <div className="container">
        <div className="section-title">
          <h2>Our Team</h2>
          <p>Meet the talented professionals behind our innovative solutions</p>
        </div>
        
        <div className="team-filter">
          {categories.map(category => (
            <button 
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="team-grid">
          {filteredTeam.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
        
        <div className="team-join">
          <div className="join-content">
            <h3>Join Our Team</h3>
            <p>
              We're always looking for talented individuals to join our growing team. 
              If you're passionate about technology and innovation, check out our current openings.
            </p>
            <button className="btn">View Career Opportunities</button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .team {
          position: relative;
        }
        
        .team-filter {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .filter-btn {
          padding: 0.75rem 1.5rem;
          background-color: transparent;
          border: 1px solid var(--primary);
          color: var(--primary);
          border-radius: var(--border-radius-md);
          cursor: pointer;
          font-weight: 500;
          transition: var(--transition);
        }
        
        .filter-btn:hover, .filter-btn.active {
          background-color: var(--primary);
          color: var(--white);
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .team-join {
          padding: 3rem;
          background: linear-gradient(135deg, var(--primary-dark), var(--primary));
          border-radius: var(--border-radius-lg);
          margin-top: 3rem;
          text-align: center;
          color: var(--white);
          position: relative;
          overflow: hidden;
        }
        
        .team-join::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='%23ffffff' fill-opacity='0.1' d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'%3E%3C/path%3E%3C/svg%3E");
          z-index: 0;
        }
        
        .join-content {
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .join-content h3 {
          color: var(--white);
          margin-bottom: 1rem;
          font-size: 2rem;
        }
        
        .join-content p {
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }
        
        .join-content .btn {
          background-color: var(--white);
          color: var(--primary-dark);
          border: none;
        }
        
        .join-content .btn:hover {
          background-color: var(--accent);
          color: var(--primary-dark);
        }
        
        @media (max-width: 1200px) {
          .team-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 992px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 576px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
          
          .team-filter {
            flex-direction: column;
            align-items: center;
          }
          
          .filter-btn {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default Team;
