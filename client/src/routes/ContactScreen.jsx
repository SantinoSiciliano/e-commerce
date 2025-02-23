import './ContactScreen.css'; 
import { useState } from 'react';

export const ContactScreen = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // URL de FormSubmit con tu correo
    const formSubmitURL = 'https://formsubmit.co/santinosiciliano05@gmail.com';

    const formDataToSend = new FormData();
    formDataToSend.append('nombre', formData.nombre);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('asunto', formData.asunto);
    formDataToSend.append('mensaje', formData.mensaje);
    formDataToSend.append('_captcha', 'false');

    try {
      const response = await fetch(formSubmitURL, {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          nombre: '',
          email: '',
          asunto: '',
          mensaje: ''
        });
      } else {
        alert('Hubo un problema al enviar el formulario.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error inesperado.');
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contáctanos</h1>

      {submitted ? (
        <p className="success-message">¡Gracias por tu mensaje! Te contactaremos pronto.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="nombre" className="contact-label">Nombre:</label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="contact-input"
          />

          <label htmlFor="email" className="contact-label">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />

          <label htmlFor="asunto" className="contact-label">Asunto:</label>
          <input
            type="text"
            name="asunto"
            id="asunto"
            value={formData.asunto}
            onChange={handleChange}
            required
            className="contact-input"
          />

          <label htmlFor="mensaje" className="contact-label">Mensaje:</label>
          <textarea
            name="mensaje"
            id="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            className="contact-textarea"
          ></textarea>

          <input type="submit" value="Enviar Mensaje" className="contact-submit" />
        </form>
      )}

      <div className="map-container">
        <iframe
          className="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.4878044866186!2d-58.45033003033808!3d-34.55479049379795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb432f759f4cf%3A0xc727b0c9824c893d!2sAv.%20Olaz%C3%A1bal%201515%2C%20C1428DGG%20CABA!5e0!3m2!1ses!2sar!4v1684987300590!5m2!1ses!2sar"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactScreen;

