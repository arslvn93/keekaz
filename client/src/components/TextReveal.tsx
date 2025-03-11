import { useRef, useEffect, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  duration?: number;
  multiLine?: boolean;
  staggerChildren?: number;
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  highlightWords = [],
  duration = 0.7,
  multiLine = false,
  staggerChildren = 0.1,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    if (multiLine) {
      // Split text into lines (if it includes line breaks)
      setLines(text.split('\n').filter(line => line.trim() !== ''));
    }
  }, [text, multiLine]);

  // For single-line text
  const words = multiLine ? [] : text.split(" ");

  // Check if a word should be highlighted
  const shouldHighlight = (word: string) => {
    // Remove punctuation for comparison
    const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    return highlightWords.includes(cleanWord);
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      }
    }
  };

  const lineVariants: Variants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  // For single line
  if (!multiLine) {
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

  // For multi-line text with staggered animation
  return (
    <motion.div 
      ref={ref} 
      className={`${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {lines.map((line, index) => {
        const lineWords = line.split(" ");
        
        return (
          <motion.div 
            key={index} 
            className="overflow-hidden mb-4"
            variants={lineVariants}
          >
            <div>
              {lineWords.map((word, i) => (
                <span
                  key={i}
                  className={`${
                    shouldHighlight(word) ? "text-primary font-bold" : ""
                  } inline-block mr-1`}
                >
                  {word}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}