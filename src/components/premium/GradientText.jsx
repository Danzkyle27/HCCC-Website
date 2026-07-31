import { motion } from 'framer-motion';
import './GradientText.css';

function GradientText({ 
  children, 
  gradient = 'linear-gradient(135deg, #5d7b8f, #7fa6b5, #c0d9dd)',
  animate = true,
  className = '' 
}) {
  return (
    <motion.span
      className={`gradient-text ${animate ? 'animated' : ''} ${className}`}
      style={{
        backgroundImage: gradient,
      }}
      initial={{ backgroundPosition: '0% 50%' }}
      animate={animate ? { 
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
      } : {}}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        ease: 'linear' 
      }}
    >
      {children}
    </motion.span>
  );
}

export default GradientText;
