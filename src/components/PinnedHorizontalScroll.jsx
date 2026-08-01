import { useEffect, useRef } from 'react';
import './PinnedHorizontalScroll.css';

/**
 * PinnedHorizontalScroll
 *
 * Pure CSS + JS implementation — no GSAP ScrollTrigger, no Lenis conflict.
 *
 * How it works:
 * - The outer wrapper has a tall height (= horizontal scroll distance)
 * - A sticky inner container stays fixed in the viewport
 * - A scroll listener converts vertical scroll progress → horizontal translateX
 */
function PinnedHorizontalScroll({ children, label, title, speed = 1 }) {
  const wrapperRef = useRef(null);
  const stickyRef  = useRef(null);
  const trackRef   = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky  = stickyRef.current;
    const track   = trackRef.current;
    if (!wrapper || !sticky || !track) return;

    if (window.innerWidth <= 768) return;

    const setHeight = () => {
      const trackWidth    = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const distance      = (trackWidth - viewportWidth) * speed;
      if (distance <= 0) return;
      // Wrapper height = sticky panel height + scroll distance
      const stickyHeight = window.innerHeight - 120;
      wrapper.style.height = `${stickyHeight + distance}px`;
    };

    const onScroll = () => {
      const rect     = wrapper.getBoundingClientRect();
      const stickyHeight = window.innerHeight - 120;
      const total    = wrapper.offsetHeight - stickyHeight;
      const scrolled = -rect.top;
      if (scrolled < 0 || scrolled > total) return;
      const progress = scrolled / total;
      const trackWidth    = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const distance      = (trackWidth - viewportWidth) * speed;
      track.style.transform = `translateX(${-progress * distance}px)`;
    };

    // Use Lenis scroll event if available, else native
    const lenisHandler = () => onScroll();

    setHeight();
    window.addEventListener('resize', setHeight);

    if (window.__lenis) {
      window.__lenis.on('scroll', lenisHandler);
    } else {
      window.addEventListener('scroll', onScroll);
    }

    return () => {
      window.removeEventListener('resize', setHeight);
      if (window.__lenis) {
        window.__lenis.off('scroll', lenisHandler);
      } else {
        window.removeEventListener('scroll', onScroll);
      }
      wrapper.style.height = '';
      track.style.transform = '';
    };
  }, [speed]);

  return (
    <div ref={wrapperRef} className="phs-wrapper">
      {/* Sticky container — stays fixed in viewport while wrapper scrolls */}
      <div ref={stickyRef} className="phs-sticky">
        {(label || title) && (
          <div className="phs-header">
            {label && <div className="phs-label">{label}</div>}
            {title && (
              <div className="phs-title">
                {title.split('\n').map((line, i) => (
                  <span key={i} style={{ display: 'block' }}>{line}</span>
                ))}
              </div>
            )}
            <div className="phs-hint">
              <span className="phs-hint-arrow">→</span>
              <span>Scroll to explore</span>
            </div>
          </div>
        )}

        <div className="phs-viewport">
          <div ref={trackRef} className="phs-track">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PinnedHorizontalScroll;
