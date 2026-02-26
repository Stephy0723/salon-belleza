import { useMemo, useState } from "react";
import products from "./data/products.json";
import "../../shared/styles/products.css";
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80";

const money = new Intl.NumberFormat("es-DO");

function formatPrice(value) {
  return `RD$ ${money.format(value)}`;
}

export function ProductCards() {
  const [activeType, setActiveType] = useState("Todos");
  const [selectedId, setSelectedId] = useState(products[0]?.id || "");
  const [quantity, setQuantity] = useState(1);

  const types = useMemo(() => ["Todos", ...new Set(products.map((p) => p.tipo))], []);

  const visibleProducts = useMemo(() => {
    if (activeType === "Todos") return products;
    return products.filter((product) => product.tipo === activeType);
  }, [activeType]);

  const selectedProduct =
    visibleProducts.find((item) => item.id === selectedId) || visibleProducts[0] || null;

  const featuredImage = selectedProduct?.imagen?.trim() || FALLBACK_IMAGE;

  const handleTypeChange = (type) => {
    setActiveType(type);
    const next = type === "Todos" ? products : products.filter((p) => p.tipo === type);
    setSelectedId(next[0]?.id || "");
    setQuantity(1);
  };

  return (
    <section className="product-collection" aria-label="Coleccion de productos">
      <div className="category-pills">
        {types.map((type) => (
          <button
            key={type}
            type="button"
            className={type === activeType ? "pill pill-active" : "pill"}
            onClick={() => handleTypeChange(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {selectedProduct ? (
        <article className="product-showcase reveal-up">
          <div className="product-visual">
            <img
              src={featuredImage}
              alt={selectedProduct.nombre}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src = FALLBACK_IMAGE;
              }}
            />
          </div>

          <div className="product-info">
            <span className="chip">{selectedProduct.tipo}</span>
            <h3>{selectedProduct.nombre}</h3>
            <p>{selectedProduct.descripcion}</p>

            <div className="price-stack">
              <strong>{formatPrice(selectedProduct.precio)}</strong>
              {selectedProduct.precioAnterior ? (
                <span className="price-old">{formatPrice(selectedProduct.precioAnterior)}</span>
              ) : null}
            </div>

            <div className="product-meta">
              <span>SKU: GP-{selectedProduct.id.toUpperCase()}</span>
              <span>Disponible en salon</span>
            </div>

            <div className="qty-row">
              <label htmlFor="cantidad-producto">Cantidad</label>
              <input
                id="cantidad-producto"
                type="number"
                min="1"
                value={quantity}
                onChange={(event) =>
                  setQuantity(Math.max(1, Number.parseInt(event.target.value || "1", 10)))
                }
              />
              <strong>Total: {formatPrice(selectedProduct.precio * quantity)}</strong>
            </div>

            <button type="button" className="btn btn-primary">
              Agregar a pedido
            </button>
          </div>
        </article>
      ) : (
        <p>No hay productos para esta categoria.</p>
      )}

      <div className="section-heading center product-heading">
        <p className="eyebrow">Related Products</p>
        <h3>Productos recomendados</h3>
      </div>

      <div className="product-grid" role="list" aria-label="Productos relacionados">
        {visibleProducts.map((product, index) => {
          const imageSrc = product.imagen?.trim() || FALLBACK_IMAGE;

          return (
            <article
              key={product.id}
              className={`product-tile reveal-up delay-${(index % 3) + 1} ${
                selectedProduct?.id === product.id ? "product-tile-selected" : ""
              }`}
              role="listitem"
            >
              <img
                src={imageSrc}
                alt={product.nombre}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = FALLBACK_IMAGE;
                }}
              />
              <div className="product-tile-body">
                <span className="product-type">{product.tipo}</span>
                <h4>{product.nombre}</h4>
                <p>{product.descripcion}</p>
                <div className="product-price-row">
                  <strong>{formatPrice(product.precio)}</strong>
                  <button type="button" onClick={() => setSelectedId(product.id)}>
                    Ver arriba
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
