import { useState } from 'react';

function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const estaVacio = nombre === '' || email === '' || mensaje === '';

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Datos del formulario:');
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);
  };

  return (
    <div className="contact-form-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escribe tu nombre"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tucorreo@ejemplo.com"
          />
        </div>

        <div className="form-group">
          <label>Mensaje:</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribe tu mensaje aquí..."
            rows="4"
          />
        </div>

        <button type="submit" disabled={estaVacio}>
          Enviar
        </button>
      </form>
      <div className="preview">
        <h3>Vista previa:</h3>
        <div className="preview-contenido">
          <p><strong>Nombre:</strong> {nombre || '(sin escribir)'}</p>
          <p><strong>Email:</strong> {email || '(sin escribir)'}</p>
          <p><strong>Mensaje:</strong> {mensaje || '(sin escribir)'}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;