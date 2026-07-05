import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import './product-card.css';

interface ProductCardProps {
  product: Product;
}

// Tarjeta del listado: imagen, marca, modelo y precio. Todo el card es
// clicable y navega al detalle del producto.
export function ProductCard({ product }: ProductCardProps) {
  // El precio puede venir vacío ("") desde el API, en ese caso no fingimos un número.
  const priceLabel = product.price ? `${product.price} €` : 'Precio no disponible';

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img src={product.imgUrl} alt={`${product.brand} ${product.model}`} className="product-card__image" />
      <span className="product-card__brand">{product.brand}</span>
      <span className="product-card__model">{product.model}</span>
      <span className="product-card__price">{priceLabel}</span>
    </Link>
  );
}
