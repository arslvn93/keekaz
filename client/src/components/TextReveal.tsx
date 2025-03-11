import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  duration?: number;
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  highlightWords = [],
  duration = 0.7,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Split text into words
  const words = text.split(" ");

  // Check if a word should be highlighted
  const shouldHighlight = (word: string) => {
    // Remove punctuation for comparison
    const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    return highlightWords.includes(cleanWord);
  };

  return (
    <motion.div ref={ref} className={`${className} overflow-hidden`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: 0 } : { y: "100%" }}
        transition={{
          duration,
          delay,
          ease: [0.6, 0.05, -0.01, 0.9], // Custom easing for smooth reveal
        }}
      >
        <span className="inline-block">
          {words.map((word, i) => (
            <span
              key={i}
              className={`${
                shouldHighlight(word) ? "text-primary font-bold" : ""
              } inline-block mr-1`}
            >
              {word}
            </span>
          ))}
        </span>
      </motion.div>
    </motion.div>
  );
}