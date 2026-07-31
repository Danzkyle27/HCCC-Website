import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './LazyImage.css';

function LazyImage({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = '16/9',
  objectFit = 'cover',
  blur = true 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '50px' }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={imgRef}
      className={`lazy-image-wrapper ${className}`}
      style={{ aspectRatio }}
    >
      {!isLoaded && (
        <div className="lazy-image-skeleton">
          <div className="lazy-image-shimmer" />
        </div>
      )}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
          style={{ objectFit }}
          onLoad={handleLoad}
          initial={{ opacity: 0, scale: 1.1, filter: blur ? 'blur(20px)' : 'none' }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            scale: isLoaded ? 1 : 1.1,
            filter: isLoaded ? 'blur(0px)' : (blur ? 'blur(20px)' : 'none')
          }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          loading="lazy"
        />
      )}
    </div>
  );
}

export default LazyImage;
