import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisInstance = lenis;
    window.__lenis = lenis;

    // ── Key fix: tell Lenis to emit scroll events that ScrollTrigger listens to.
    // Without this, GSAP ScrollTrigger never receives scroll position updates
    // from Lenis and the pin never fires.
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP's ticker to drive Lenis so both are in sync on the same rAF loop.
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
      lenisInstance = null;
      window.__lenis = null;
    };
  }, []);

  return children;
}

export default SmoothScroll;
