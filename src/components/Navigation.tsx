import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.css'; 
import logo from '../assets/logo.jpeg'; 

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <NavLink to="/" end>
            <img src={logo} alt="Premium Sands Logo" className="logo-img" />
          </NavLink>
        </div>

        {/* Hamburger icon */}
        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""} onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""} onClick={toggleMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
