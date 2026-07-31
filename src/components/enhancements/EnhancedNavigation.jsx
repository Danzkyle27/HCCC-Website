import { motion } from 'framer-motion';
import './EnhancedNavigation.css';

export function AnimatedNavLink({ to, children, isActive, onClick }) {
  return (
    <motion.a
      href={to}
      className={`enhanced-nav-link ${isActive ? 'active' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="nav-link-text">{children}</span>
      {isActive && (
        <motion.div
          className="nav-link-indicator"
          layoutId="nav-indicator"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.a>
  );
}

export function DropdownMenu({ items, isOpen }) {
  return (
    <motion.div
      className="enhanced-dropdown"
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={isOpen ? { 
        opacity: 1, 
        y: 0, 
        scale: 1 
      } : { 
        opacity: 0, 
        y: -10, 
        scale: 0.95 
      }}
      transition={{ duration: 0.2 }}
    >
      {items.map((item, index) => (
        <motion.a
          key={index}
          href={item.to}
          className="dropdown-item"
          initial={{ opacity: 0, x: -10 }}
          animate={isOpen ? { 
            opacity: 1, 
            x: 0 
          } : { 
            opacity: 0, 
            x: -10 
          }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ x: 5, backgroundColor: 'rgba(93, 123, 143, 0.1)' }}
        >
          {item.label}
        </motion.a>
      ))}
    </motion.div>
  );
}
