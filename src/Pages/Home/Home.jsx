import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroImage from '../../assets/museo2.jpg';
const pub = (p) =>
  new URL(
    String(p).replace(/^\/+/, ""),
    window.location.origin + (import.meta.env.BASE_URL || "/")
  ).href;



function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      console.log(import.meta.env.BASE_URL);

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
              <h3>Horarios de Visita</h3>
              <p>Lunes a Viernes: 9:00am - 5:00pm<br/>Sabados: 10:00am - 4:00pm<br/>Domingos: Cerrado</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🏺</div>
              <h3>Cultura Valdivia</h3>
              <p>Descubre la cultura mas antigua de America con mas de 5000 anos de historia. Explora ceramicas, figurinas y herramientas ancestrales.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🌎</div>
              <h3>Experiencia Virtual</h3>
              <p>Recorre el museo desde cualquier lugar del mundo con nuestra tecnologia de realidad virtual 360 grados completamente inmersiva.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Galeria de Exhibiciones</h2>
          <p className="section-description">
            Explora nuestra coleccion de artefactos arqueologicos y espacios del complejo cultural Real Alto. 
            Cada imagen te transportara a la vida cotidiana de la cultura Valdivia.
          </p>
          
         <div className="gallery-grid">
          <div className="gallery-item"><img src={pub('img/foto1.JPG')} alt="Galería 1" /></div>
          <div className="gallery-item"><img src={pub('img/foto2.JPG')} alt="Galería 2" /></div>
          <div className="gallery-item"><img src={pub('img/foto3.JPG')} alt="Galería 3" /></div>
          <div className="gallery-item"><img src={pub('img/foto4.JPG')} alt="Galería 4" /></div>
          <div className="gallery-item"><img src={pub('img/foto5.JPG')} alt="Galería 5" /></div>
          <div className="gallery-item"><img src={pub('img/panoramica3.JPG')} alt="Galería 6" /></div>
          <div className="gallery-item"><img src={pub('img/panoramica4.JPG')} alt="Galería 7" /></div>
          <div className="gallery-item"><img src={pub('img/panoramica5.JPG')} alt="Galería 8" /></div>
          <div className="gallery-item"><img src={pub('img/panoramica6.JPG')} alt="Galería 9" /></div>
          <div className="gallery-item"><img src={pub('img/panoramica7.JPG')} alt="Galería 10" /></div>
        </div>


        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-content">
            <h2>
              La <span className="highlight">arqueologia</span> nos conecta con nuestro pasado, 
              la <span className="highlight">tecnologia</span> nos acerca al conocimiento, 
              y la <span className="highlight">cultura</span> nos define como sociedad
            </h2>
            <p>
              El Museo Real Alto 360 representa un hito en la preservacion del patrimonio cultural ecuatoriano. 
              A traves de la tecnologia inmersiva, ofrecemos una ventana unica hacia la civilizacion Valdivia, 
              permitiendo que las futuras generaciones comprendan y valoren nuestro rico legado ancestral 
              desde una perspectiva completamente nueva e interactiva.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;