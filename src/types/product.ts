// Tipos del API real (verificado a mano contra https://itx-frontend-test.onrender.com).
// Algunos nombres de campo tienen erratas en la propia API ("secondaryCmera",
// "dimentions") y los mantenemos tal cual para que coincidan con la respuesta real.

export interface ProductOption {
  code: number;
  name: string;
}

export interface ProductOptions {
  colors: ProductOption[];
  storages: ProductOption[];
}

// Lo que devuelve el listado (GET /api/product).
export interface Product {
  id: string;
  brand: string;
  model: string;
  price: string; // puede venir como "" (vacío) para algunos productos
  imgUrl: string;
}

// Lo que devuelve el detalle (GET /api/product/:id): el listado más las specs
// que pide mostrar el enunciado y las opciones de color/almacenamiento.
export interface ProductDetail extends Product {
  cpu: string;
  ram: string;
  os: string;
  displayResolution: string;
  displaySize: string;
  battery: string;
  primaryCamera: string[];
  secondaryCmera: string[];
  dimentions: string;
  weight: string;
  options: ProductOptions;
}
