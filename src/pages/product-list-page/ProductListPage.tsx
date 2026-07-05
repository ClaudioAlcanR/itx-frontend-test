import { useEffect, useMemo, useState } from 'react';
import { getProducts } from '../../api/productApi';
import { Product } from '../../types/product';
import { SearchBar } from '../../components/search-bar/SearchBar';
import { ProductCard } from '../../components/product-card/ProductCard';
import './product-list-page.css';

// Compara el texto de búsqueda contra marca y modelo, ignorando mayúsculas/minúsculas.
function matchesSearch(product: Product, searchTerm: string): boolean {
  const term = searchTerm.trim().toLowerCase();
  if (!term) {
    return true;
  }
  return (
    product.brand.toLowerCase().includes(term) || product.model.toLowerCase().includes(term)
  );
}

export function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError('No se ha podido cargar el listado de productos.'))
      .finally(() => setIsLoading(false));
  }, []);

  // El filtrado es sobre la lista ya cargada, no hay endpoint de búsqueda en el API.
  const filteredProducts = useMemo(
    () => products.filter((product) => matchesSearch(product, searchTerm)),
    [products, searchTerm],
  );

  return (
    <main className="product-list-page">
      <div className="product-list-page__toolbar">
        <h1>Listado de productos</h1>
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>

      {isLoading && <p>Cargando productos...</p>}
      {error && <p role="alert">{error}</p>}

      {!isLoading && !error && (
        <div className="product-list-page__grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
