import { useEffect } from 'react';
import './SmoothThemeTransition.css';

function SmoothThemeTransition() {
  useEffect(() => {
    // Add smooth transition class to body
    document.body.classList.add('smooth-theme-transition');

    // Observe dark mode changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          // Add transition class when theme changes
          document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

export default SmoothThemeTransition;
