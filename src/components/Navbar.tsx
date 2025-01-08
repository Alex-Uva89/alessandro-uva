import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const button = document.querySelector('.navbar-toggle');
    if (button) {
      button.innerHTML = isOpen ? '&#9776;' : '&#10006;';
    }
  };

  const isSelected = (path: string) => {
    return location.pathname === path ? 'selected' : '';
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-header">
        <h2>Alessandro Uva</h2>
        <button className="navbar-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
      </div>
      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <li className={isSelected('/')}><Link to="/" onClick={toggleMenu}>Mi presento...</Link></li>
        <li className={isSelected('/contact')}><Link to="/contact" onClick={toggleMenu}>Contatti</Link></li>
        <li className={isSelected('/experience')}><Link to="/experience" onClick={toggleMenu}>Esperienze Lavorative</Link></li>
        <li className={isSelected('/skills')}><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
        <li className={isSelected('/certifications')}><Link to="/certifications" onClick={toggleMenu}>Certificazioni e Riconoscimenti</Link></li>
        <li className={isSelected('/requests')}><Link to="/requests" onClick={toggleMenu}>Mie Richieste</Link></li>
        <li className={isSelected('/portfolio')}><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
