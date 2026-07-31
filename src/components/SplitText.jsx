import { motion } from 'framer-motion';
import './SplitText.css';

function SplitText({ 
  children, 
  type = 'chars', // 'chars', 'words', or 'lines'
  className = '',
  delay = 0,
  staggerDelay = 0.03
}) {
  const text = children;
  let elements = [];

  const charVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { opacity: 1, y: 0, rotateX: 0 }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  if (type === 'chars') {
    elements = text.split('').map((char, i) => (
      <motion.span
        key={i}
        className="split-text-char"
        variants={charVariants}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ));
  } else if (type === 'words') {
    elements = text.split(' ').map((word, i) => (
      <motion.span
        key={i}
        className="split-text-word"
        variants={wordVariants}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        {word}
        {i < text.split(' ').length - 1 ? '\u00A0' : ''}
      </motion.span>
    ));
  }

  return (
    <motion.div
      className={`split-text ${className}`}
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: staggerDelay,
        delayChildren: delay
      }}
    >
      {elements}
    </motion.div>
  );
}

export default SplitText;
