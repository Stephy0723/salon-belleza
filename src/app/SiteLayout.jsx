import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import "../shared/styles/siteLayout.css";
const navItems = [
  { to: "/", label: "Inicio", end: true },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Salon" },
  { to: "/contacto", label: "Contacto" }
];

export function SiteLayout({ children }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido-principal">
        Saltar al contenido
      </a>

      <header className="site-header" aria-label="Encabezado principal">
        <div className="container header-inner">
          <NavLink to="/" className="brand" end>
            <span className="brand-name">GLOW PETAL</span>
            <span className="brand-subtitle">Hair. Beauty. Spa</span>
          </NavLink>

          <nav className="site-nav" aria-label="Navegacion principal">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/agendar" className="header-cta">
            Reservar
          </NavLink>
        </div>
      </header>

      <main id="contenido-principal">{children}</main>

      <footer className="site-footer">
        <div className="container footer-card">
          <div className="footer-grid">
            <div className="footer-brand">
              <p className="footer-logo">Glow Petal</p>
              <p>
                Tu espacio boutique de belleza en Santo Domingo. Servicios
                premium, atencion personalizada y resultados elegantes.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="TikTok">
                  <FaTiktok />
                </a>
                <a href="#" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div>
              <h4>Quick Links</h4>
              <div className="footer-links">
                <Link to="/">Inicio</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/servicios">Salon</Link>
                <Link to="/agendar">Reservar</Link>
              </div>
            </div>

            <div>
              <h4>Customer Service</h4>
              <div className="footer-links">
                <Link to="/contacto">Contacto</Link>
                <Link to="/agendar">Agendar Cita</Link>
                <a href="tel:+18095551234">Llamar al salon</a>
                <a href="mailto:hola@glowpetal.com">Soporte por email</a>
              </div>
            </div>

            <div>
              <h4>Stay Connected</h4>
              <p className="footer-small">
                Suscribete para recibir novedades y promociones exclusivas.
              </p>
              <form className="footer-newsletter">
                <input type="email" placeholder="Tu correo" aria-label="Correo newsletter" />
                <button type="submit">Suscribirme</button>
              </form>
              <a className="footer-email" href="mailto:hola@glowpetal.com">
                hola@glowpetal.com
              </a>
            </div>
          </div>

          <div className="footer-bottom-row">
            <p>Copyright 2026 Glow Petal. Todos los derechos reservados.</p>
            <div className="footer-legal">
              <a href="#">Privacidad</a>
              <a href="#">Terminos</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
