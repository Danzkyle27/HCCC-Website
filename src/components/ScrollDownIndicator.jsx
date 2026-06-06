import "./ScrollDownIndicator.css";

function ScrollDownIndicator() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="scroll-down-indicator" onClick={scrollToNext}>
      <div className="scroll-down-mouse">
        <div className="scroll-down-wheel"></div>
      </div>
      <div className="scroll-down-text">Scroll Down</div>
      <div className="scroll-down-arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default ScrollDownIndicator;
