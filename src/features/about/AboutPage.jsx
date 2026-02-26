import { Link } from "react-router-dom";
import "../../shared/styles/about.css";
const values = [
  {
    title: "Atencion Personalizada",
    text: "Cada clienta recibe diagnostico capilar y una recomendacion clara segun su estilo de vida."
  },
  {
    title: "Tecnica Profesional",
    text: "Nuestro equipo trabaja con protocolos de salon para proteger la fibra capilar en cada servicio."
  },
  {
    title: "Productos Premium",
    text: "Seleccionamos lineas profesionales para garantizar brillo, suavidad y resultado de larga duracion."
  }
];

const metrics = [
  { value: "+7", label: "Anios de experiencia" },
  { value: "+2,500", label: "Servicios realizados" },
  { value: "4.9/5", label: "Satisfaccion promedio" }
];

export function AboutPage() {
  return (
    <section className="section-block about-page">
      <div className="container about-hero">
        <div className="about-copy reveal-up">
          <p className="eyebrow">Nosotros</p>
          <h1>Nuestra esencia</h1>
          <p>
            Glow Petal nacio con la vision de crear una experiencia boutique
            donde cada detalle refleje elegancia, cuidado y feminidad.
          </p>
          <p>
            Nuestra mision es ofrecer servicios exclusivos para realzar tu
            belleza natural, con atencion personalizada y un estandar premium.
          </p>
        </div>

        <div className="about-image-wrap reveal-up delay-1">
          <img
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80"
            alt="Cliente recibiendo atencion en Glow Petal"
            loading="lazy"
          />
        </div>
      </div>

      <div className="container metric-grid">
        {metrics.map((metric, index) => (
          <article key={metric.label} className={`metric-card reveal-up delay-${index + 1}`}>
            <strong>{metric.value}</strong>
            <p>{metric.label}</p>
          </article>
        ))}
      </div>

      <div className="container section-heading about-values-heading reveal-up">
        <p className="eyebrow">Por que elegirnos</p>
        <h2>Un salon pensado para hacerte sentir segura y espectacular</h2>
      </div>

      <div className="container value-grid">
        {values.map((value, index) => (
          <article key={value.title} className={`value-card reveal-up delay-${index + 1}`}>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </div>

      <div className="container about-cta reveal-up">
        <div>
          <p className="eyebrow">Reserva tu cita</p>
          <h3>Lista para tu proxima transformacion?</h3>
          <p>
            Agenda con nuestro equipo y recibe una asesoria para elegir el
            servicio ideal para tu cabello.
          </p>
        </div>
        <Link className="btn btn-primary" to="/contacto">
          Agendar ahora
        </Link>
      </div>
    </section>
  );
}
