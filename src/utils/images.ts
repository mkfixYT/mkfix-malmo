// src/utils/images.ts
import type { ImageMetadata } from 'astro';

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/img/**/*.{jpeg,jpg,png,gif,webp,JPG,PNG,WEBP}',
  { eager: true }
);

/**
 * Resolves a public-style image path like '/img/products/...' or '/img/2026/...'
 * to the corresponding Vite-imported ImageMetadata from src/assets/img/
 */
export function resolveImage(path: string | ImageMetadata): ImageMetadata | string {
  if (!path || typeof path !== 'string' || path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/src/assets')
    ? path
    : `/src/assets${path}`;
  return imageModules[cleanPath]?.default || path;
}

