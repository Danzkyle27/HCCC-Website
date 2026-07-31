import { motion } from 'framer-motion';
import './CurtainTransition.css';

function CurtainTransition({ isActive }) {
  const curtainVariants = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1 },
    exit: { scaleY: 0 }
  };

  return (
    <motion.div
      className="curtain-transition"
      variants={curtainVariants}
      initial="initial"
      animate={isActive ? "animate" : "exit"}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="curtain-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
          transition={{ delay: 0.3 }}
          className="curtain-text"
        >
          Loading...
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CurtainTransition;
