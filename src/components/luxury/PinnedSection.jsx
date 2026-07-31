import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './PinnedSection.css';

function PinnedSection({ children, background }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  return (
    <div ref={ref} className="pinned-section-wrapper">
      <div className="pinned-section-spacer" />
      <motion.div 
        className="pinned-section-content"
        style={{ opacity, scale }}
      >
        {background && (
          <div 
            className="pinned-background"
            style={{ backgroundImage: `url(${background})` }}
          />
        )}
        <div className="pinned-inner">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default PinnedSection;
