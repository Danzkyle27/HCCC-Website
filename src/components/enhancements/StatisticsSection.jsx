import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from '../AnimatedCounter';
import './StatisticsSection.css';

function StatCard({ icon, number, suffix = '', label, description, delay = 0 }) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      className={`stat-card ${inView ? 'in-view' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div 
        className="stat-icon"
        animate={inView ? { 
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        } : {}}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        {icon}
      </motion.div>
      <div className="stat-number">
        {inView && (
          <AnimatedCounter 
            from={0} 
            to={number} 
            duration={0.8}
            suffix={suffix}
          />
        )}
      </div>
      <div className="stat-label">{label}</div>
      {description && <div className="stat-description">{description}</div>}
    </motion.div>
  );
}

function StatisticsSection() {
  // Calculate years since founding (August 6, 2023)
  const foundingDate = new Date('2023-08-06');
  const today = new Date();
  const yearsSinceFounding = today.getFullYear() - foundingDate.getFullYear();
  const monthsSinceFounding = Math.floor((today - foundingDate) / (1000 * 60 * 60 * 24 * 30));

  const stats = [
    {
      icon: '📅',
      number: yearsSinceFounding > 0 ? yearsSinceFounding : monthsSinceFounding,
      suffix: yearsSinceFounding > 0 ? '+' : '',
      label: yearsSinceFounding > 0 ? 'Years of Service' : 'Months Strong',
      description: 'Founded August 6, 2023'
    },
    {
      icon: '📖',
      number: 4,
      label: 'Bible Study Groups',
      description: 'Growing in faith together'
    },
    {
      icon: '⏰',
      number: 10,
      suffix: ':00 AM',
      label: 'Sunday Service',
      description: 'Join us every Sunday'
    }
  ];

  return (
    <section className="statistics-section">
      <div className="statistics-container">
        <motion.h2 
          className="statistics-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Church by the Numbers
        </motion.h2>
        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              {...stat} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
