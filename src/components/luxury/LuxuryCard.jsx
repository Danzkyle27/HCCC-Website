import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './LuxuryCard.css';

function LuxuryCard({ 
  image, 
  title, 
  description, 
  link, 
  linkText = "Learn More",
  delay = 0 
}) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      className="luxury-card"
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      {image && (
        <div className="luxury-card-image">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
      <div className="luxury-card-content">
        <h3 className="luxury-card-title">{title}</h3>
        <p className="luxury-card-description">{description}</p>
        {link && (
          <a href={link} className="luxury-card-link">
            {linkText} →
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default LuxuryCard;
