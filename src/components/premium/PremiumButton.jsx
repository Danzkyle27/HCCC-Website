import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import './PremiumButton.css';

function PremiumButton({ 
  children, 
  variant = 'primary',
  size = 'medium',
  icon,
  className = '',
  ...props 
}) {
  const ref = useRef(null);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      x,
      y,
      id: Date.now()
    };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples(ripples => ripples.filter(r => r.id !== newRipple.id));
    }, 600);

    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <motion.button
      ref={ref}
      className={`premium-button ${variant} ${size} ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y
          }}
        />
      ))}
      <span className="premium-button-content">
        {icon && <span className="premium-button-icon">{icon}</span>}
        {children}
      </span>
      <span className="premium-button-shine" />
    </motion.button>
  );
}

export default PremiumButton;
