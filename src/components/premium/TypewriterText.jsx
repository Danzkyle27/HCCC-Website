import { TypeAnimation } from 'react-type-animation';
import './TypewriterText.css';

function TypewriterText({ 
  sequences = [], 
  speed = 50,
  className = '',
  wrapper = 'span',
  cursor = true,
  repeat = Infinity
}) {
  return (
    <TypeAnimation
      sequence={sequences}
      wrapper={wrapper}
      speed={speed}
      className={`typewriter-text ${className}`}
      cursor={cursor}
      repeat={repeat}
    />
  );
}

export default TypewriterText;
