import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './CircularProgress.css';

function CircularProgress({ 
  percentage, 
  size = 120, 
  strokeWidth = 8,
  label = '',
  color = '#5d7b8f'
}) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="circular-progress" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          className="circular-progress-bg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <motion.circle
          className="circular-progress-fg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: inView ? offset : circumference }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%'
          }}
        />
      </svg>
      <motion.div 
        className="circular-progress-label"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span className="circular-progress-percentage">{percentage}%</span>
        {label && <span className="circular-progress-text">{label}</span>}
      </motion.div>
    </div>
  );
}

export default CircularProgress;
