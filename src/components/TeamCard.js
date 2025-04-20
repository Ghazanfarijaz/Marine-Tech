import React from 'react';

const TeamCard = ({ member }) => {
  return (
    <div className="team-card">
      <div className="member-avatar" style={{ backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16) }}>
        <span>{member.name.charAt(0)}</span>
      </div>
      <div className="member-info">
        <h4>{member.name}</h4>
        <p className="member-position">{member.position}</p>
        <p className="member-bio">{member.bio}</p>
        <div className="member-social">
          {member.social.linkedin && (
            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {member.social.twitter && (
            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {member.social.github && (
            <a href={member.social.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>
      
      <style jsx>{`
        .team-card {
          background-color: var(--white);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--box-shadow);
          transition: var(--transition);
          height: 100%;
        }
        
        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 68, 102, 0.15);
        }
        
        .member-avatar {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          font-weight: 700;
          color: var(--white);
        }
        
        .member-info {
          padding: 1.5rem;
          text-align: center;
        }
        
        .member-info h4 {
          margin-bottom: 0.5rem;
        }
        
        .member-position {
          color: var(--primary);
          font-weight: 500;
          margin-bottom: 1rem;
        }
        
        .member-bio {
          font-size: 0.9rem;
          color: var(--gray);
          margin-bottom: 1.5rem;
        }
        
        .member-social {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
        
        .member-social a {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: var(--gray-light);
          color: var(--primary);
          transition: var(--transition);
        }
        
        .member-social a:hover {
          background-color: var(--primary);
          color: var(--white);
          transform: translateY(-3px);
        }
      `}</style>
    </div>
  );
};

export default TeamCard;
