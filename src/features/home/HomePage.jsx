import { Link } from "react-router-dom";
import { ServiceCards } from "../services/ServiceCards";
import "../../shared/styles/home.css";

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <img
          className="hero-bg"
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=2000&q=80"
          alt="Recepcion de salon elegante"
          loading="lazy"
        />
        <div className="hero-overlay">
          <p className="hero-kicker">Hair. Beauty. Spa</p>
          <h1>EUPHORIA STYLE, AHORA EN GLOW PETAL</h1>
          <p className="hero-copy">
            Ambiente boutique, productos premium y resultados que resaltan tu
            belleza natural.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-light" to="/agendar">
              Agendar cita
            </Link>
            <Link className="btn btn-outline-light" to="/servicios">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container split-showcase">
          <div className="floating-card">
            <p className="eyebrow">Our Finest Care</p>
            <h2>Cuidado profesional en cada cita</h2>
            <p>
              Trabajamos con protocolos de salon para lavado, secado, queratina
              y alisado, cuidando la salud del cabello desde la raiz.
            </p>
            <Link className="btn btn-dark" to="/nosotros">
              Conocenos
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80"
            alt="Tratamiento capilar en camilla"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section-block">
        <div className="container section-heading center">
          <p className="eyebrow">Servicios destacados</p>
          <h2>Tu ritual de belleza empieza aqui</h2>
        </div>
        <div className="container">
          <ServiceCards featuredOnly />
        </div>
      </section>
    </>
  );
}
