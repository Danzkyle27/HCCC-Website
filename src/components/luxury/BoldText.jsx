import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './BoldText.css';

function BoldText({ 
  children, 
  size = 'large',
  align = 'left',
  stagger = true,
  className = '' 
}) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const lines = children.split('\n').filter(line => line.trim());

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger ? 0.1 : 0
      }
    }
  };

  const lineVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -90
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`bold-text ${size} ${align} ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {lines.map((line, index) => (
        <div key={index} className="bold-text-line-wrapper">
          <motion.div
            className="bold-text-line"
            variants={lineVariants}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}

export default BoldText;
