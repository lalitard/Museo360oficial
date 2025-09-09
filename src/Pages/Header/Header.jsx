import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoIcon from '../../assets/museo-icono.png';


function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo y nombre del museo */}
        <div className="logo-section">
          <div className="logo-circle">
            <img src={logoIcon} alt="Museo" className="logo-icon" />
          </div>
          <h1 className="museum-name">Complejo Cultural Real Alto</h1>
        </div>

        {/* Navegación principal */}
        <nav className="main-nav">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/museum360" className="nav-link">Museo 360</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contacto</Link>
        </nav>

        {/* Sección adicional */}
        <div className="header-actions">
          <Link to="/visitus" className="visit-link">¡Visítanos!</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;