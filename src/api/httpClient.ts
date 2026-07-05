import { getFromCache, saveToCache } from './cache';

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ?? 'https://itx-frontend-test.onrender.com';

// GET con caché: si ya tenemos una respuesta guardada y no ha caducado, se usa
// esa en vez de volver a llamar al API.
export async function getJson<T>(path: string): Promise<T> {
  const url = `${API_BASE_URL}${path}`;
  const cached = getFromCache<T>(url);
  if (cached !== undefined) {
    return cached;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error ${response.status} al pedir ${path}`);
  }

  const data: T = await response.json();
  saveToCache(url, data);
  return data;
}

// POST sin caché: son operaciones que cambian estado en el servidor (añadir a la cesta),
// no tiene sentido cachear la respuesta.
export async function postJson<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Error ${response.status} al pedir ${path}`);
  }

  return response.json();
}
