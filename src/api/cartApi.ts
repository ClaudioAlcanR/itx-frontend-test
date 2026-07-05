import { postJson } from './httpClient';

export interface AddToCartRequest {
  id: string;
  colorCode: number;
  storageCode: number;
}

export interface AddToCartResponse {
  count: number;
}

export function addToCart(request: AddToCartRequest): Promise<AddToCartResponse> {
  return postJson<AddToCartResponse>('/api/cart', request);
}
