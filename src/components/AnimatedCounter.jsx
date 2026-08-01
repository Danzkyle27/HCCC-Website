import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useSpring, useTransform } from 'framer-motion';

function AnimatedCounter({ 
  from = 0, 
  to, 
  duration = 2, 
  suffix = '',
  prefix = '',
  className = ''
}) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const motionValue = useSpring(from, { 
    stiffness: 280,
    damping: 40,
    restDelta: 0.5
  });
  
  const display = useTransform(motionValue, (latest) => 
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (inView && !hasAnimated) {
      motionValue.set(to);
      setHasAnimated(true);
    }
  }, [inView, hasAnimated, motionValue, to]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
