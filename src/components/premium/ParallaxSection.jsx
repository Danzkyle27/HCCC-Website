import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ParallaxSection.css';

function ParallaxSection({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = '' 
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const directionMultiplier = direction === 'down' ? 1 : -1;
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0, directionMultiplier * speed * 100]
  );

  return (
    <motion.div 
      ref={ref}
      className={`parallax-section ${className}`}
      style={{ y }}
    >
      {children}
    </motion.div>
  );
}

export default ParallaxSection;
