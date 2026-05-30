import { useState, useEffect } from "react";
import "./BibleVerses.css";

function BibleVerses() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % verses.length);
        setIsAnimating(false);
      }, 500);
    }, 8000); // Change verse every 8 seconds

    return () => clearInterval(interval);
  }, [verses.length]);

  const goToVerse = (index) => {
    if (index !== currentIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <section className="bible-verses-section">
      <div className="bible-verses-container">
        <h2 className="bible-verses-title">HOW TO SOUL-WIN?</h2>
        <p className="bible-verses-subtitle">The Path to Salvation</p>
        
        <div className={`verse-card ${isAnimating ? "fade-out" : "fade-in"}`}>
          <div className="verse-step">{verses[currentIndex].step}</div>
          <div className="verse-reference">{verses[currentIndex].reference}</div>
          <div className="verse-text">"{verses[currentIndex].text}"</div>
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
