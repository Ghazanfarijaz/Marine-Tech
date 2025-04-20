import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import logodark from "../assets/logo-black.png";
import logowhite from "../assets/logo-white.png";

const Navbar = ({ scrollToSection, scrollPosition }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Change navbar styling on scroll
    if (scrollPosition > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollPosition]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${isScrolled ? "navbar-scrolled" : "navbar-top"}`}
    >
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img
            src={isScrolled ? logowhite : logodark}
            alt="TechWave Solutions"
            onClick={() => handleNavClick("home")}
          />
          <h1>Marine Tech</h1>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`toggle-icon ${isMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <nav className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={() => handleNavClick("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => handleNavClick("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => handleNavClick("services")}>
                Services
              </a>
            </li>
            <li>
              <a href="#team" onClick={() => handleNavClick("team")}>
                Team
              </a>
            </li>
            <li>
              <a href="#blog" onClick={() => handleNavClick("blog")}>
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => handleNavClick("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx="true">{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 0;
          z-index: 1000;
          transition: all 0.3s ease;
          background-color: transparent;
        }

        /* Non-scrolled state styles */
        .navbar-top .navbar-logo h1 {
          color: -primary; /* Dark blue color */
        }

        .navbar-top .navbar-menu a {
          color: -primary; /* Dark blue color */
        }

        .navbar-top .toggle-icon span {
          background: -primary; /* Dark blue color for hamburger icon */
        }

        /* Scrolled state styles */
        .navbar-scrolled {
          background-color: var(--primary-dark);
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .navbar-scrolled .navbar-logo h1 {
          color: var(--white);
        }

        .navbar-scrolled .navbar-menu a {
          color: var(--white);
        }

        .navbar-scrolled .toggle-icon span {
          background: var(--white);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .navbar-logo img {
          height: 40px;
          margin-right: 10px;
        }

        .navbar-logo h1 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
          transition: color 0.3s ease;
        }

        .navbar-menu ul {
          display: flex;
          list-style: none;
        }

        .navbar-menu li {
          margin-left: 2rem;
        }

        .navbar-menu a {
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }

        .navbar-menu a::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--accent);
          transition: width 0.3s ease;
        }

        .navbar-menu a:hover::after,
        .navbar-menu a.active::after {
          width: 100%;
        }

        .navbar-toggle {
          display: none;
          cursor: pointer;
        }

        .toggle-icon {
          width: 30px;
          height: 24px;
          position: relative;
        }

        .toggle-icon span {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          border-radius: 3px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: 0.25s ease-in-out;
        }

        .toggle-icon span:nth-child(1) {
          top: 0px;
        }

        .toggle-icon span:nth-child(2) {
          top: 10px;
        }

        .toggle-icon span:nth-child(3) {
          top: 20px;
        }

        .toggle-icon.open span:nth-child(1) {
          top: 10px;
          transform: rotate(135deg);
        }

        .toggle-icon.open span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        .toggle-icon.open span:nth-child(3) {
          top: 10px;
          transform: rotate(-135deg);
        }

        @media (max-width: 992px) {
          .navbar-toggle {
            display: block;
          }

          .navbar-menu {
            position: fixed;
            top: 80px;
            right: -100%;
            width: 280px;
            height: calc(100vh - 80px);
            background-color: var(--primary-dark);
            transition: right 0.3s ease;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
          }

          .navbar-menu.open {
            right: 0;
          }

          .navbar-menu ul {
            flex-direction: column;
            padding: 2rem;
          }

          .navbar-menu li {
            margin: 0 0 1.5rem 0;
          }

          .navbar-menu a {
            display: block;
            font-size: 1.1rem;
            color: var(--white) !important;
          }

          .navbar-top .navbar-menu {
            background-color: var(--white);
            border: 1px solid rgba(0, 0, 0, 0.1);
          }

          .navbar-top .navbar-menu a {
            color: #1a237e !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
