import { getJson } from './httpClient';
import { Product, ProductDetail } from '../types/product';

export function getProducts(): Promise<Product[]> {
  return getJson<Product[]>('/api/product');
}

export function getProductById(id: string): Promise<ProductDetail> {
  return getJson<ProductDetail>(`/api/product/${id}`);
}
