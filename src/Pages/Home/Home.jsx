import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './Home.css';
import heroImage from '../../assets/museo2.jpg';

// Importa las imágenes de la galería
import galeria1 from '../../assets/gallery/foto1.JPG';
import galeria2 from '../../assets/gallery/foto2.JPG';
import galeria3 from '../../assets/gallery/foto3.JPG';
import galeria4 from '../../assets/gallery/foto4.JPG';
import galeria5 from '../../assets/gallery/foto5.JPG';
import galeria6 from '../../assets/gallery/panoramica3.JPG';
import galeria7 from '../../assets/gallery/panoramica4.JPG';
import galeria8 from '../../assets/gallery/panoramica5.JPG';
import galeria9 from '../../assets/gallery/panoramica6.JPG';
import galeria10 from '../../assets/gallery/panoramica7.JPG';

const slides = [
  { src: galeria1 }, { src: galeria2 }, { src: galeria3 },
  { src: galeria4 }, { src: galeria5 }, { src: galeria6 },
  { src: galeria7 }, { src: galeria8 }, { src: galeria9 },
  { src: galeria10 }
];

function Home() {
  const [index, setIndex] = useState(-1);

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
          <h2 className="section-title">Galería de Exhibiciones</h2>
          <p className="section-description">
            Explora nuestra colección de artefactos arqueológicos y espacios del complejo cultural Real Alto. 
            Cada imagen te transportará a la vida cotidiana de la cultura Valdivia.
          </p>
          
          <div className="gallery-grid">
            {slides.map((slide, i) => (
              <div key={i} className="gallery-item" onClick={() => setIndex(i)}>
                <img src={slide.src} alt={`Galería ${i + 1}`} />
              </div>
            ))}
          </div>

          <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={slides}
          />
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="container">
          <div className="quote-content">
            <h2>
              La <span className="highlight">arqueología</span> nos conecta con nuestro pasado, 
              la <span className="highlight">tecnología</span> nos acerca al conocimiento, 
              y la <span className="highlight">cultura</span> nos define como sociedad
            </h2>
            <p>
              El Museo Real Alto 360 representa un hito en la preservación del patrimonio cultural ecuatoriano. 
              A través de la tecnología inmersiva, ofrecemos una ventana única hacia la civilización Valdivia, 
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