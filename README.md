# ITX Front-End Test

Mini-tienda de móviles: listado de productos con búsqueda, detalle de producto y cesta. Prueba técnica de front-end, consumiendo la API pública en `https://itx-frontend-test.onrender.com`.

## Stack

- React + TypeScript
- Create React App (`react-scripts`) como tooling de build/dev/test
- CSS plano en cascada, metodología BEM (sin librerías de estilos)
- React Router para el enrutado cliente (SPA, sin SSR)

## Scripts

```
npm start       # modo desarrollo (http://localhost:3000)
npm run build   # build de producción
npm test        # tests
npm run lint    # comprobación de estilo de código (ESLint)
```

## Vistas

- **Listado de productos**: grid responsive (máx. 4 por fila) con búsqueda en tiempo real por marca/modelo.
- **Detalle de producto**: imagen + specs + selección de color/almacenamiento + añadir a la cesta.

El contador de la cesta se persiste en cliente y se muestra en la cabecera en cualquier vista.

(Las decisiones de diseño se irán documentando aquí a medida que se implementen las distintas partes.)
