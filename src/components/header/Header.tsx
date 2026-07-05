import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../cart/CartContext';
import './Header.css';

// Migas de pan sencillas: como solo hay dos vistas, basta con mirar la ruta
// actual para saber qué mostrar, sin necesidad de una librería de routing más compleja.
function useBreadcrumb(): string {
  const location = useLocation();
  return location.pathname === '/' ? 'Inicio' : 'Inicio / Detalle del producto';
}

export function Header() {
  const { count } = useCart();
  const breadcrumb = useBreadcrumb();

  return (
    <header className="header">
      <Link to="/" className="header__brand">
        ITX Store
      </Link>
      <nav className="header__breadcrumbs" aria-label="breadcrumb">
        <Link to="/" className="header__breadcrumb-link">
          {breadcrumb}
        </Link>
      </nav>
      <div className="header__cart" aria-label="productos en la cesta">
        🛒 {count}
      </div>
    </header>
  );
}
