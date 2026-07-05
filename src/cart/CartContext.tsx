import { createContext, useContext, useState, ReactNode } from 'react';

const CART_COUNT_KEY = 'cart-count';

interface CartContextValue {
  count: number;
  setCount: (count: number) => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

// El contador arranca leyendo lo que hubiera guardado de una visita anterior,
// así sobrevive a un refresco de página.
function readStoredCount(): number {
  const stored = localStorage.getItem(CART_COUNT_KEY);
  return stored ? Number(stored) : 0;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCountState] = useState<number>(readStoredCount);

  // Cada vez que se actualiza el contador (tras añadir algo a la cesta),
  // se guarda también en localStorage para que persista entre recargas.
  function setCount(newCount: number) {
    setCountState(newCount);
    localStorage.setItem(CART_COUNT_KEY, String(newCount));
  }

  return <CartContext.Provider value={{ count, setCount }}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
}
