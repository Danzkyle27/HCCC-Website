import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './FullScreenSection.css';

function FullScreenSection({ 
  children, 
  background,
  overlay = true,
  className = '' 
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className={`fullscreen-section ${className}`}>
      {background && (
        <motion.div 
          className="fullscreen-background"
          style={{ 
            opacity,
            scale,
            backgroundImage: `url(${background})`
          }}
        >
          {overlay && <div className="fullscreen-overlay" />}
        </motion.div>
      )}
      <div className="fullscreen-content">
        {children}
      </div>
    </section>
  );
}

export default FullScreenSection;
