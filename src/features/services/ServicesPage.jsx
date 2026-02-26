import { ServiceCards } from "./ServiceCards";
import { ProductCards } from "./ProductCards";
import "../../shared/styles/services.css";
export function ServicesPage() {
  return (
    <section className="section-block salon-page">
      <div className="container salon-hero reveal-up">
        <p className="eyebrow">Salon & Spa</p>
        <h1>Mucho mas que cabello: una experiencia completa</h1>
        <p>
          En Glow Petal realizamos servicios de cabello, unas, maquillaje y
          rostro. Tambien contamos con area de ventas y snack bar con pinchos y
          bebidas para que tu visita sea comoda de principio a fin.
        </p>
      </div>

      <div className="container salon-highlights">
        <article className="highlight-card reveal-up delay-1">
          <h3>Servicios en cabina</h3>
          <p>Cabello, tratamientos, unas, maquillaje, cejas y pestanas.</p>
        </article>
        <article className="highlight-card reveal-up delay-2">
          <h3>Venta de productos</h3>
          <p>Lineas profesionales para continuar el cuidado en casa.</p>
        </article>
        <article className="highlight-card reveal-up delay-3">
          <h3>Snack bar</h3>
          <p>Pinchos y bebidas para disfrutar mientras esperas.</p>
        </article>
      </div>

      <div className="container section-heading">
        <p className="eyebrow">Servicios</p>
        <h2>Menu completo con precios en pesos dominicanos (RD$)</h2>
      </div>

      <div className="container">
        <ServiceCards />
      </div>

      <div className="container section-heading salon-shop-heading">
        <p className="eyebrow">Tienda y snack bar</p>
        <h2>Productos y consumibles disponibles en salon</h2>
      </div>

      <div className="container">
        <ProductCards />
      </div>
    </section>
  );
}
