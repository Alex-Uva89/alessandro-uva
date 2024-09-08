import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); 


  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <li><Link to="/" onClick={toggleMenu}>Mi presento...</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contatti</Link></li>
        <li><Link to="/experience" onClick={toggleMenu}>Esperienze Lavorative</Link></li>
        <li><Link to="/skills" onClick={toggleMenu}>Skills</Link></li>
        <li><Link to="/certifications" onClick={toggleMenu}>Certificazioni e Riconoscimenti</Link></li>
        <li><Link to="/requests" onClick={toggleMenu}>Mie Richieste</Link></li>
        <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
