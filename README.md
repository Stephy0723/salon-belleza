# salon-belleza

Sitio React + Vite para Glow Petal, rehacido como MVP informativo en espanol.

## Scripts

- `npm run dev`: servidor local de desarrollo.
- `npm run build`: build de produccion.
- `npm run lint`: revision de codigo con ESLint.
- `npm run preview`: vista previa del build generado.

## Estructura

- `src/app`: App principal, layout global y rutas.
- `src/features/home`: pagina de inicio.
- `src/features/about`: pagina Nosotros.
- `src/features/services`: pagina Servicios, repositorio local y datos JSON.
- `src/features/contact`: pagina de contacto.
- `src/shared/styles`: estilos globales y tokens visuales.

## Editar servicios

1. Abre `src/features/services/data/services.json`.
2. Mantiene el contrato de cada objeto:
   - `id: string`
   - `nombre: string`
   - `descripcion: string`
   - `duracionMin: number`
   - `precioDesde: number`
   - `imagen: string`
   - `destacado: boolean`
3. Guarda cambios y valida en `/servicios`.

## Checklist de calidad aplicada

- Rutas publicas unificadas: `/`, `/nosotros`, `/servicios`, `/contacto`.
- Responsive mobile/desktop sin desbordes horizontales.
- Accesibilidad base: semantica HTML, labels, texto alternativo y focus visible.
- Fallback de imagen en tarjetas de servicios.
- Lint y build verificados.
