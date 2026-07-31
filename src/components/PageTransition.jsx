import { motion } from 'framer-motion';

function PageTransition({ children }) {
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.98,
      rotateX: -5,
      filter: 'blur(10px)'
    },
    in: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      filter: 'blur(0px)'
    },
    out: {
      opacity: 0,
      scale: 1.02,
      rotateX: 5,
      filter: 'blur(10px)'
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: [0.4, 0, 0.2, 1],
    duration: 0.8
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        width: '100%',
        perspective: '1200px',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
