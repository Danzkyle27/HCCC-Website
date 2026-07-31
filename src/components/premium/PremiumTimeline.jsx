import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './PremiumTimeline.css';

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="timeline-marker">
        <motion.div 
          className="timeline-dot"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
        />
      </div>
      <motion.div 
        className="timeline-content"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {item.icon && <div className="timeline-icon">{item.icon}</div>}
        {item.date && <span className="timeline-date">{item.date}</span>}
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </motion.div>
    </motion.div>
  );
}

function PremiumTimeline({ items = [], className = '' }) {
  return (
    <div className={`premium-timeline ${className}`}>
      <div className="timeline-line" />
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  );
}

export default PremiumTimeline;
