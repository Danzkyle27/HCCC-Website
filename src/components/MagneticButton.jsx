import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './MagneticButton.css';

function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const x = (clientX - centerX) * 0.3;
    const y = (clientY - centerY) * 0.3;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ 
        type: "spring", 
        stiffness: 150, 
        damping: 15,
        mass: 0.1
      }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <motion.span
        className="magnetic-button-content"
        animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {children}
      </motion.span>
      <motion.span 
        className="magnetic-button-glow"
        animate={{ 
          x: position.x * 0.3, 
          y: position.y * 0.3,
          scale: position.x !== 0 || position.y !== 0 ? 1.2 : 1
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      />
    </motion.button>
  );
}

export default MagneticButton;
