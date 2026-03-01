import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Carousel({
  slides = [],
  visibleCount = 3,
  autoPlay = true,
  interval = 4000,
  showArrows = true,
  showDots = true,
}) {
  const slideCount = slides.length;
  const extendedSlides = [
    ...slides.slice(-visibleCount),
    ...slides,
    ...slides.slice(0, visibleCount),
  ];

  const [currentIndex, setCurrentIndex] = useState(visibleCount);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  const itemWidth = 100 / visibleCount;

  const next = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Autoplay
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, isPaused, interval]);

  // Handle seamless jump
  useEffect(() => {
    if (currentIndex === slideCount + visibleCount) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(visibleCount);
      }, 600);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(slideCount);
      }, 600);
    }
  }, [currentIndex, slideCount, visibleCount]);

  useEffect(() => {
    if (!isAnimating) {
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    }
  }, [isAnimating]);

  if (!slides.length) return null;

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex"
        animate={{
          x: `-${currentIndex * itemWidth}%`,
        }}
        transition={isAnimating ? { duration: 0.6 } : { duration: 0 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, { offset }) => {
          if (offset.x > 100) prev();
          if (offset.x < -100) next();
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            key={index}
            style={{ flex: `0 0 ${itemWidth}%` }}
            className="p-2"
          >
            {typeof slide === "string" ? (
              <img
                src={slide}
                alt=""
                className="w-full h-64 object-cover rounded"
              />
            ) : (
              slide
            )}
          </div>
        ))}
      </motion.div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded"
          >
            Prev
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded"
          >
            Next
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i + visibleCount)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === i + visibleCount ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
