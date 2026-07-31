import './SectionDivider.css';

function SectionDivider({ 
  variant = 'wave', 
  position = 'bottom',
  size = 'medium',
  color = 'default',
  animated = false,
  className = ''
}) {
  const waves = {
    wave: (
      <path d="M0,50 Q250,30 500,50 T1000,50 T1500,50 V100 H0 Z" />
    ),
    curve: (
      <path d="M0,0 Q500,100 1000,0 V100 H0 Z" />
    ),
    triangle: (
      <path d="M0,0 L500,100 L1000,0 V100 H0 Z" />
    ),
    tilt: (
      <path d="M0,0 L1000,100 V100 H0 Z" />
    ),
    book: (
      <path d="M0,0 Q250,50 500,0 T1000,0 V100 H0 Z" />
    )
  };

  return (
    <div className={`section-divider ${position} ${size} ${animated ? 'animated' : ''} ${className}`}>
      <svg 
        viewBox="0 0 1000 100" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="divider-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#5d7b8f', stopOpacity: 0.3 }} />
            <stop offset="50%" style={{ stopColor: '#7fa6b5', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#c0d9dd', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        <g className={`divider-fill ${color}`}>
          {waves[variant]}
        </g>
      </svg>
    </div>
  );
}

export default SectionDivider;
