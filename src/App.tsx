import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './cart/CartContext';
import { Header } from './components/header/Header';
import { ProductListPage } from './pages/product-list-page/ProductListPage';
import { ProductDetailPage } from './pages/product-detail-page/ProductDetailPage';

// SPA con dos rutas: el listado (home) y el detalle de un producto.
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
