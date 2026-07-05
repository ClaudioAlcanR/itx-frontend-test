import './SearchBar.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

// Input controlado: el filtrado en tiempo real lo hace quien use este
// componente (ProductListPage), aquí solo se notifica cada cambio.
export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="search"
      className="search-bar"
      placeholder="Buscar por marca o modelo..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
      aria-label="Buscar productos"
    />
  );
}
