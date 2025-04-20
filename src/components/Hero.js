import React from "react";
import Button from "./Button";

const Hero = ({ scrollToSection }) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Innovative Tech Solutions <br />
            for a <span className="text-highlight">Digital Future</span>
          </h1>
          <p className="hero-subtitle">
            We build cutting-edge digital products and services that transform
            businesses and drive growth in the digital era.
          </p>
          <div className="hero-buttons">
            <Button
              text="Our Services"
              onClick={() => scrollToSection("services")}
              className="btn-large"
            />
            <Button
              text="Contact Us"
              onClick={() => scrollToSection("contact")}
              className="btn-large btn-outline"
            />
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">250+</span>
            <span className="stat-text">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">120+</span>
            <span className="stat-text">Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-text">Years</span>
          </div>
        </div>
      </div>
      <div className="hero-wave"></div>

      <style jsx="true">{`
        .hero {
          margin-top: 1.5rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          background: linear-gradient(
            135deg,
            var(--primary-dark),
            var(--primary)
          );
          color: var(--white);
          padding-top: 80px;
          overflow: hidden;
        }

        .hero-content {
          max-width: 700px;
          margin-bottom: 4rem;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          color: var(--white);
          animation: fadeInUp 1s ease-out;
        }

        .text-highlight {
          color: var(--accent);
          position: relative;
          display: inline-block;
        }

        .text-highlight::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 10px;
          background-color: rgba(102, 255, 255, 0.3);
          bottom: 5px;
          left: 0;
          z-index: -1;
          border-radius: 10px;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          color: var(--text-light);
          max-width: 600px;
          animation: fadeInUp 1s ease-out 0.2s;
          animation-fill-mode: both;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          animation: fadeInUp 1s ease-out 0.4s;
          animation-fill-mode: both;
        }

        .hero-stats {
          display: flex;
          justify-content: flex-start;
          gap: 4rem;
          animation: fadeInUp 1s ease-out 0.6s;
          animation-fill-mode: both;
          margin-bottom: 4rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 0.25rem;
        }

        .stat-text {
          font-size: 1rem;
          color: var(--text-light);
        }

        .hero-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23e6f9ff' fill-opacity='1' d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
          background-size: cover;
          background-repeat: no-repeat;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.8rem;
          }

          .hero-stats {
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .hero-stats {
            flex-wrap: wrap;
            gap: 1.5rem;
          }

          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
