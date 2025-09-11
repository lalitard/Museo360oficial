import { useEffect } from "react";
import "./VisitUs.css";

export default function Visitanos() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const q = encodeURIComponent("Complejo Cultural Real Alto");
  const embed = `https://www.google.com/maps?q=${q}&output=embed`;
  const open = `https://www.google.com/maps/search/?api=1&query=${q}`;
  const dir  = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

  return (
    <main className="page-visit">
      {/* HERO compacto */}
      <header className="visit-hero">
        <div className="hero-inner">
          <span className="chip">Camina la historia • Siente el origen</span>
          <h1>Visítanos</h1>
          <p className="hero-sub">
            En el Complejo Cultural Real Alto la historia no se mira desde lejos: se camina.
            Recorre el museo con guías locales y descubre cómo el pasado sigue latiendo en cada rincón.
          </p>
        </div>
      </header>

      {/* INFO + MAPA */}
      <section className="visit-info">
        <div className="container">
          <div className="visit-grid">
            <div className="card">
              <h2>Qué encontrarás</h2>
              <ul className="list">
                <li>Guías locales que cuentan la historia con cercanía y rigor.</li>
                <li>Áreas del complejo pensadas para explorar y aprender.</li>
                <li>Relatos arqueológicos que conectan pasado y presente.</li>
              </ul>
              <p className="note">*Consulta en nuestros canales oficiales la programación y horarios.</p>
            </div>

            <div className="card">
              <h2>Ubicación</h2>
              <div className="map-wrap">
                <iframe
                  title="Mapa: Complejo Cultural Real Alto"
                  src={embed}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="map-actions">
                <a className="btn solid sm" href={open} target="_blank" rel="noreferrer">Abrir en Maps</a>
                <a className="btn outline sm" href={dir}  target="_blank" rel="noreferrer">Cómo llegar</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
