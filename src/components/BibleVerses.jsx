import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./BibleVerses.css";

const verses = [
  {
    step: "Step 1: Recognize Our Sinful Nature",
    reference: "Romans 3:23",
    text: "for all have sinned and fall short of the glory of God,"
  },
  {
    step: "Step 2: Understand the Consequence of Sin",
    reference: "Revelation 21:8",
    text: "But for the cowardly, and unbelieving, and abominable, and murderers, and sexually immoral persons, and sorcerers, and idolaters, and all liars, their part will be in the lake that burns with fire and brimstone, which is the second death."
  },
  {
    step: "Step 3: Accept God's Love and Salvation",
    reference: "Romans 5:8-9",
    text: "But God demonstrates His own love toward us, in that while we were still sinners, Christ died for us. Much more then, having now been justified by His blood, we shall be saved from the wrath of God through Him."
  },
  {
    step: "Step 4: Receive Salvation by Grace Through Faith",
    reference: "Ephesians 2:8-9",
    text: "For by grace you have been saved through faith; and this is not of yourselves, it is the gift of God; not a result of works, so that no one may boast."
  },
  {
    step: "Step 5: Repent and Turn to God",
    reference: "2 Corinthians 7:10",
    text: "For the sorrow that is according to the will of God produces a repentance without regret, leading to salvation, but the sorrow of the world produces death."
  },
  {
    step: "Step 6: Confess and Believe",
    reference: "Romans 10:9",
    text: "that if you confess with your mouth Jesus as Lord, and believe in your heart that God raised Him from the dead, you will be saved;"
  }
];

// Card stacking variants:
// enter  → card comes from below, slightly scaled down
// center → card is front, full scale
// exit   → card shrinks back and fades, as if pushed behind the deck
const cardVariants = {
  enter: {
    y: 80,
    scale: 0.88,
    opacity: 0,
    rotateX: 8,
    zIndex: 1,
  },
  center: {
    y: 0,
    scale: 1,
    opacity: 1,
    rotateX: 0,
    zIndex: 2,
    transition: {
      duration: 0.55,
      ease: [0.32, 0.72, 0, 1],
    },
  },
  exit: {
    y: -30,
    scale: 0.92,
    opacity: 0,
    rotateX: -6,
    zIndex: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
};

function BibleVerses() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % verses.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goToVerse = (index) => {
    if (index !== currentIndex) setCurrentIndex(index);
  };

  return (
    <section className="bible-verses-section">
      <div className="bible-verses-container">
        <h2 className="bible-verses-title">HOW TO EVANGELIZE?</h2>
        <p className="bible-verses-subtitle">The Path to Salvation</p>

        {/* Card stack arena — fixed height so layout doesn't jump */}
        <div className="verse-card-arena">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              className="verse-card"
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ perspective: 1000 }}
              whileHover={{
                y: -10,
                boxShadow: "0 32px 80px rgba(0,0,0,0.38)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="verse-step">{verses[currentIndex].step}</div>
              <div className="verse-reference">{verses[currentIndex].reference}</div>
              <div className="verse-text">"{verses[currentIndex].text}"</div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="verse-indicators">
          {verses.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToVerse(index)}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        <div className="verse-navigation">
          <button
            className="nav-button prev"
            onClick={() => goToVerse((currentIndex - 1 + verses.length) % verses.length)}
            aria-label="Previous verse"
          >
            ‹
          </button>
          <span className="verse-counter">
            {currentIndex + 1} / {verses.length}
          </span>
          <button
            className="nav-button next"
            onClick={() => goToVerse((currentIndex + 1) % verses.length)}
            aria-label="Next verse"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default BibleVerses;
