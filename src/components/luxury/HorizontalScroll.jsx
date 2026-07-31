import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './HorizontalScroll.css';

function HorizontalScroll({ children, speed = 1 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -300 * speed]);

  return (
    <div ref={ref} className="horizontal-scroll-container">
      <motion.div className="horizontal-scroll-content" style={{ x }}>
        {children}
      </motion.div>
    </div>
  );
}

export default HorizontalScroll;
