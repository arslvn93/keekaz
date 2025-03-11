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
  const isInView = useInView(ref, { once: false, amount: 0.2, margin: "0px 0px -100px 0px" });
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

  // Animation variants with enhanced dramatic effect
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
      y: 100, // Larger y distance for more dramatic movement
      opacity: 0,
      scale: 0.95, // Slight scale effect for depth
      rotate: -1 // Slight rotation for dynamic feel
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration, // Uses the duration passed in props
        ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier curve for smoother animation
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
            ease: "easeInOut" // Custom easing for smooth reveal
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
            className="overflow-visible mb-6" // Changed to overflow-visible and increased margin-bottom
            variants={lineVariants}
          >
            <div className="flex flex-wrap"> {/* Flex layout for better word wrapping */}
              {lineWords.map((word, i) => (
                <span
                  key={i}
                  className={`${
                    shouldHighlight(word) ? "text-primary font-bold" : ""
                  } inline-block mr-3 mb-2`} // Increased spacing between words
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