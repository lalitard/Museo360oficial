import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('�Gracias por contactarnos! Te responderemos pronto.');
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contactanos</h1>
          <p>Estamos aqui para responder tus preguntas sobre el Museo Real Alto 360</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Envianos un Mensaje</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Correo Electronico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Informacion del Museo</h2>
              
              <div className="contact-card">
                <div className="contact-icon">=�</div>
                <div className="contact-details">
                  <h3>Ubicacion</h3>
                  <p>Complejo Cultural Real Alto<br />
                     Peninsula de Santa Elena<br />
                     Ecuador</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">=�</div>
                <div className="contact-details">
                  <h3>Telefono</h3>
                  <p>+593 4 XXX-XXXX</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">	</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>info@museorealallo360.ec</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">=P</div>
                <div className="contact-details">
                  <h3>Horarios de Atencion</h3>
                  <p>Lunes - Viernes: 9:00am - 5:00pm<br />
                     Sabados: 10:00am - 4:00pm<br />
                     Domingos: Cerrado</p>
                </div>
              </div>

              <div className="social-links">
                <h3>Siguenos</h3>
                <div className="social-icons">
                  <a href="#" className="social-link">=�</a>
                  <a href="#" className="social-link">=�</a>
                  <a href="#" className="social-link">=&</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Contact;