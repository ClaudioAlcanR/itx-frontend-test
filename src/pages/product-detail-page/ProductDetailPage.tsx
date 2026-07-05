import { useParams } from 'react-router-dom';

// Detalle de producto: de momento solo el esqueleto de la página.
// La imagen, las specs y el selector de color/almacenamiento se añaden
// en el siguiente paso.
export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <main className="product-detail-page">
      <h1>Detalle del producto {id}</h1>
    </main>
  );
}
