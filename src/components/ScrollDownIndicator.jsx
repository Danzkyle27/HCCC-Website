import { motion } from "framer-motion";
import "./ScrollDownIndicator.css";

function ScrollDownIndicator() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <motion.div 
      className="scroll-down-indicator" 
      onClick={scrollToNext}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1, 
        delay: 2,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div 
        className="scroll-down-mouse"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div 
          className="scroll-down-wheel"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      <motion.div 
        className="scroll-down-text"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Scroll Down
      </motion.div>
      <div className="scroll-down-arrow">
        <motion.span
          animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            delay: 0
          }}
        />
        <motion.span
          animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            delay: 0.2
          }}
        />
        <motion.span
          animate={{ y: [0, 5, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            delay: 0.4
          }}
        />
      </div>
    </motion.div>
  );
}

export default ScrollDownIndicator;
