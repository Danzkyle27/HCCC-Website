import { motion } from 'framer-motion';
import './PremiumCard.css';

function PremiumCard({ 
  children, 
  variant = 'default',
  hoverable = true,
  className = '',
  onClick
}) {
  return (
    <motion.div
      className={`premium-card ${variant} ${hoverable ? 'hoverable' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={hoverable ? { 
        y: -8, 
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" 
      } : {}}
      onClick={onClick}
    >
      <div className="premium-card-glow" />
      <div className="premium-card-content">
        {children}
      </div>
    </motion.div>
  );
}

export default PremiumCard;
