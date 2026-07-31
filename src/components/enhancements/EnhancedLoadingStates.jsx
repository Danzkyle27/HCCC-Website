import { motion } from 'framer-motion';
import './EnhancedLoadingStates.css';

export function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image" />
      <div className="skeleton-content">
        <div className="skeleton-line skeleton-title" />
        <div className="skeleton-line skeleton-text" />
        <div className="skeleton-line skeleton-text short" />
      </div>
    </div>
  );
}

export function SkeletonText({ lines = 3 }) {
  return (
    <div className="skeleton-text-container">
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i} 
          className={`skeleton-line ${i === lines - 1 ? 'short' : ''}`}
        />
      ))}
    </div>
  );
}

export function LoadingSpinner({ size = 'medium' }) {
  return (
    <div className={`loading-spinner ${size}`}>
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}

export function LoadingDots() {
  return (
    <div className="loading-dots">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="dot"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  );
}

export function ProgressBar({ progress = 0 }) {
  return (
    <div className="progress-bar">
      <motion.div
        className="progress-fill"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
