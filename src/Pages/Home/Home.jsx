import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroImage from '../../assets/museo2.jpg';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src={heroImage} alt="Vista principal del museo" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <p className="hero-subtitle">INMERSIONATE EN LA SOCIEDAD VALDIVIA</p>
          <h1 className="hero-title">La más antigua Revolución Neolítica de América</h1>
          <p className="hero-description">
            Museo Real Alto 360 es una experiencia inmersiva que permite a los visitantes explorar la riqueza histórica y 
            arqueológica del Complejo Cultural Real Alto desde cualquier parte del mundo.
          </p>
          <Link to="/museum360" className="hero-button">¡Comenzar Tour!</Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Opening Hours</h3>
              <p>Mon - Fri: 10.00am to 05.00pm Sat: 12.00pm to 03.00 pm Sunday: Closed</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🚀</div>
              <h3>Ongoing Exhibitions</h3>
              <p>Mon - Fri: 10.00am to 05.00pm Sat: 12.00pm to 03.00 pm Sunday: Closed</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📅</div>
              <h3>Upcoming Events</h3>
              <p>Mon - Fri: 10.00am to 05.00pm Sat: 12.00pm to 03.00 pm Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Our Exhibition Gallery</h2>
          <p className="section-description">
            Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/img/foto1.JPG" alt="Galería 1" />
            </div>
            <div className="gallery-item">
              <img src="/img/foto2.JPG" alt="Galería 2" />
            </div>
            <div className="gallery-item">
              <img src="/img/foto3.JPG" alt="Galería 3" />
            </div>
            <div className="gallery-item">
              <img src="/img/foto4.JPG" alt="Galería 4" />
            </div>
            <div className="gallery-item">
              <img src="/img/foto5.JPG" alt="Galería 5" />
            </div>
            <div className="gallery-item">
              <img src="/img/panoramica3.JPG" alt="Galería 6" />
            </div>
            <div className="gallery-item">
              <img src="/img/panoramica4.JPG" alt="Galería 7" />
            </div>
            <div className="gallery-item">
              <img src="/img/panoramica5.JPG" alt="Galería 8" />
            </div>
            <div className="gallery-item">
              <img src="/img/panoramica6.JPG" alt="Galería 9" />
            </div>
            <div className="gallery-item">
              <img src="/img/panoramica7.JPG" alt="Galería 10" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-content">
            <h2>
              <span className="highlight">Music</span> gives soul to the universe, 
              wings to the <span className="highlight">mind</span>, flight 
              to the <span className="highlight">imagination</span>
            </h2>
            <p>
              Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;