import "./Blog.css";

export default function Blog() {
  return (
    <main className="blog-coming">
      <section className="blog-hero">
        <div className="hero-inner">
          <h1>Blog · Próximamente</h1>
          <p>
            Pronto compartiremos notas breves y bien explicadas sobre el Complejo Cultural Real Alto:
            hallazgos, contexto histórico y curiosidades que valen oro (arqueológico 😉).
          </p>
          <div className="hero-cta">
            <a className="btn solid" href="#/Museum360">Ir al Tour 360</a>
            <a className="btn outline" href="#/Contact">Avísenme cuando salga</a>
          </div>
        </div>
      </section>

      <section className="blog-note">
        <div className="container">
          <p className="note">
            ¿Quieres colaborar con notas o fotografías? Escríbenos en <a href="#/Contact">Contacto</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
