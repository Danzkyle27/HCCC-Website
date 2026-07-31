import { motion } from 'framer-motion';
import './FloatingBlob.css';

function FloatingBlob({ 
  color = '#5d7b8f', 
  size = 400, 
  top, 
  left, 
  right, 
  bottom,
  delay = 0 
}) {
  const position = {};
  if (top !== undefined) position.top = top;
  if (left !== undefined) position.left = left;
  if (right !== undefined) position.right = right;
  if (bottom !== undefined) position.bottom = bottom;

  return (
    <motion.div
      className="floating-blob"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        ...position
      }}
      animate={{
        x: [0, 30, 0, -30, 0],
        y: [0, -30, -60, -30, 0],
        scale: [1, 1.1, 1, 0.9, 1],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );
}

export default FloatingBlob;
