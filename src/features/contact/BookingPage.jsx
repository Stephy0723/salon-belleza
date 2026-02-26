import "../../shared/styles/booking.css";

export function BookingPage() {
  return (
    <section className="section-block booking-page">
      <div className="container section-heading center">
        <p className="eyebrow">Agendar Cita</p>
        <h1>Reserva tu espacio en Glow Petal</h1>
        <p>
          Completa el formulario para solicitar tu cita. Nuestro equipo te
          confirmara por WhatsApp o llamada.
        </p>
      </div>

      <div className="container booking-layout">
        <article className="booking-info reveal-up">
          <h3>Que incluye tu reserva</h3>
          <ul>
            <li>Diagnostico capilar rapido</li>
            <li>Recomendacion personalizada de servicio</li>
            <li>Confirmacion de horario disponible</li>
          </ul>
          <p className="form-note">
            Nota: esta solicitud no cobra en linea. El pago se realiza en
            salon.
          </p>
        </article>

        <form className="booking-form reveal-up delay-1" aria-label="Formulario de agendar cita">
          <label htmlFor="booking-nombre">Nombre completo</label>
          <input id="booking-nombre" name="nombre" type="text" autoComplete="name" required />

          <label htmlFor="booking-telefono">Telefono</label>
          <input id="booking-telefono" name="telefono" type="tel" autoComplete="tel" required />

          <label htmlFor="booking-servicio">Servicio de interes</label>
          <select id="booking-servicio" name="servicio" required>
            <option value="">Selecciona un servicio</option>
            <option value="lavado-secado">Lavado y secado</option>
            <option value="queratina">Queratina</option>
            <option value="alisado">Alisado</option>
            <option value="unas">Manicure/Pedicure</option>
            <option value="maquillaje">Maquillaje</option>
          </select>

          <label htmlFor="booking-fecha">Fecha deseada</label>
          <input id="booking-fecha" name="fecha" type="date" required />

          <label htmlFor="booking-notas">Notas adicionales</label>
          <textarea id="booking-notas" name="notas" rows="4" />

          <button type="submit" className="btn btn-primary">
            Enviar solicitud de cita
          </button>
        </form>
      </div>
    </section>
  );
}
