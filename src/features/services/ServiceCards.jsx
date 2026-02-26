import { useMemo, useState } from "react";
import { getAllServices, getFeaturedServices } from "./servicesRepo";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80";

const money = new Intl.NumberFormat("es-DO");

function ServiceCard({ service }) {
  const imageSrc = service.imagen?.trim() || FALLBACK_IMAGE;

  return (
    <article key={service.id} className="service-card" role="listitem">
      <img
        src={imageSrc}
        alt={service.nombre}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.src = FALLBACK_IMAGE;
        }}
      />
      <div className="card-body">
        {service.categoria ? <span className="chip">{service.categoria}</span> : null}
        <h3>{service.nombre}</h3>
        <p>{service.descripcion}</p>
        <div className="meta-row">
          <span>{service.duracionMin} min</span>
          <strong>Desde RD$ {money.format(service.precioDesde)}</strong>
        </div>
      </div>
    </article>
  );
}

export function ServiceCards({ featuredOnly = false }) {
  const baseServices = featuredOnly ? getFeaturedServices() : getAllServices();
  const categories = useMemo(
    () => ["Todos", ...new Set(baseServices.map((item) => item.categoria || "General"))],
    [baseServices]
  );

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("popularidad");

  const services = useMemo(() => {
    let filtered = [...baseServices];

    if (category !== "Todos") {
      filtered = filtered.filter((item) => (item.categoria || "General") === category);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.nombre.toLowerCase().includes(q) || item.descripcion.toLowerCase().includes(q)
      );
    }

    if (sortBy === "precio-asc") {
      filtered.sort((a, b) => a.precioDesde - b.precioDesde);
    } else if (sortBy === "precio-desc") {
      filtered.sort((a, b) => b.precioDesde - a.precioDesde);
    } else if (sortBy === "duracion") {
      filtered.sort((a, b) => a.duracionMin - b.duracionMin);
    } else {
      filtered.sort((a, b) => Number(b.destacado) - Number(a.destacado));
    }

    return filtered;
  }, [baseServices, category, query, sortBy]);

  if (featuredOnly) {
    return (
      <div className="cards-grid" role="list" aria-label="Servicios destacados">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    );
  }

  return (
    <section className="service-catalog">
      <div className="service-toolbar">
        <input
          type="search"
          placeholder="Buscar servicio..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Buscar servicio"
        />

        <select value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
          <option value="popularidad">Ordenar: Destacados</option>
          <option value="precio-asc">Precio: menor a mayor</option>
          <option value="precio-desc">Precio: mayor a menor</option>
          <option value="duracion">Duracion: menor a mayor</option>
        </select>
      </div>

      <div className="category-pills">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={item === category ? "pill pill-active" : "pill"}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="result-counter">{services.length} servicio(s) encontrado(s)</p>

      <div className="cards-grid" role="list" aria-label="Catalogo de servicios">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
