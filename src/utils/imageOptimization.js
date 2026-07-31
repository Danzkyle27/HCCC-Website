/**
 * Generate srcSet for responsive images
 */
export function generateSrcSet(baseSrc, sizes = [320, 640, 960, 1280, 1920]) {
  return sizes
    .map(size => {
      const src = baseSrc.replace(/\.(jpg|png|webp)/, `-${size}.$1`);
      return `${src} ${size}w`;
    })
    .join(', ');
}

/**
 * Get optimal image size based on viewport
 */
export function getOptimalImageSize() {
  const width = window.innerWidth;
  if (width <= 480) return 'small';
  if (width <= 768) return 'medium';
  if (width <= 1024) return 'large';
  return 'xlarge';
}

/**
 * Preload critical images
 */
export function preloadCriticalImages(images) {
  images.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

/**
 * Convert image to WebP if supported
 */
export function getWebPImage(src) {
  const supportsWebP = document.createElement('canvas')
    .toDataURL('image/webp')
    .indexOf('data:image/webp') === 0;
  
  if (supportsWebP) {
    return src.replace(/\.(jpg|png)$/, '.webp');
  }
  return src;
}
