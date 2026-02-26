import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export function ContactPage() {
  return (
    <section className="section-block contact-classic">
      <div className="container contact-box-grid">
        <article className="contact-box reveal-up">
          <span className="contact-box-icon">
            <FaMapMarkerAlt />
          </span>
          <h3>Direccion</h3>
          <p>7 Green Lake Street, Crawfordsville</p>
          <p>IN 47933</p>
        </article>

        <article className="contact-box reveal-up delay-1">
          <span className="contact-box-icon">
            <FaEnvelope />
          </span>
          <h3>Escribenos</h3>
          <p>hello@glowpetal.com</p>
          <p>reservas@glowpetal.com</p>
        </article>

        <article className="contact-box reveal-up delay-2">
          <span className="contact-box-icon">
            <FaPhoneAlt />
          </span>
          <h3>Llamanos</h3>
          <p>+1 (809) 555-1234</p>
          <p>+1 (809) 123-4567</p>
        </article>
      </div>

      <div className="container contact-title-block reveal-up">
        <p className="contact-script">Tienes alguna pregunta?</p>
        <p className="contact-subtitle">
          Estamos listas para iniciar tu proxima sesion de belleza.
        </p>
      </div>

      <div className="container contact-form-shell reveal-up delay-1">
        <form className="contact-classic-form" aria-label="Formulario de contacto">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <input type="tel" placeholder="Tu telefono" />
          <select defaultValue="">
            <option value="" disabled>
              Categoria
            </option>
            <option value="servicios">Servicios</option>
            <option value="productos">Productos</option>
            <option value="citas">Citas</option>
          </select>
          <textarea rows="5" placeholder="Mensaje" required />
          <button type="submit" className="btn btn-primary">
            ENVIAR AHORA
          </button>
        </form>
      </div>

      <div className="contact-map-wrap">
        <iframe
          title="Mapa de ubicacion Glow Petal"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-69.95%2C18.45%2C-69.85%2C18.55&layer=mapnik"
          loading="lazy"
        />
      </div>
    </section>
  );
}
