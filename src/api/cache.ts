// Caché en localStorage con expiración de 1 hora. Cada entrada se guarda
// junto con la fecha en la que caduca, y se revalida (se vuelve a pedir al API)
// pasado ese tiempo.

const TTL_MS = 60 * 60 * 1000; // 1 hora

interface CacheEntry<T> {
  data: T;
  expiresAt: number;
}

export function getFromCache<T>(key: string): T | undefined {
  const raw = localStorage.getItem(key);
  if (!raw) {
    return undefined;
  }

  try {
    const entry: CacheEntry<T> = JSON.parse(raw);
    if (Date.now() > entry.expiresAt) {
      localStorage.removeItem(key);
      return undefined;
    }
    return entry.data;
  } catch {
    // Si lo guardado no es un JSON válido, lo tratamos como si no hubiera caché.
    return undefined;
  }
}

export function saveToCache<T>(key: string, data: T): void {
  const entry: CacheEntry<T> = { data, expiresAt: Date.now() + TTL_MS };
  localStorage.setItem(key, JSON.stringify(entry));
}
