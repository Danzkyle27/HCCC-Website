import Marquee from 'react-fast-marquee';
import './AnimatedMarquee.css';

function AnimatedMarquee({ 
  children, 
  speed = 50, 
  direction = 'left',
  gradient = true,
  gradientColor = '#fefae0',
  pauseOnHover = true,
  className = ''
}) {
  return (
    <div className={`animated-marquee-container ${className}`}>
      <Marquee
        speed={speed}
        direction={direction}
        gradient={gradient}
        gradientColor={gradientColor}
        pauseOnHover={pauseOnHover}
        className="animated-marquee"
      >
        {children}
      </Marquee>
    </div>
  );
}

export default AnimatedMarquee;
