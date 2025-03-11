import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";

interface ScrollingTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  duration?: number;
  multiLine?: boolean;
  staggerChildren?: number;
  threshold?: number; // Scroll threshold for animation
  sticky?: boolean; // Whether to use sticky positioning
}

export default function ScrollingTextReveal({
  text,
  className = "",
  delay = 0,
  highlightWords = [],
  duration = 0.7,
  multiLine = false,
  staggerChildren = 0.1,
  threshold = 0.2,
  sticky = false,
}: ScrollingTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: false, amount: threshold, margin: "0px 0px -100px 0px" });
  const [lines, setLines] = useState<string[]>([]);

  // For scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // More gradual fade and position change for better visibility
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [80, 0, 0, -80]);

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
    const cleanWord = word.replace(/[.,\\/#!$%\\^&\\*;:{}=\\-_`~()]/g, "");
    return highlightWords.includes(cleanWord);
  };

  // Container animation for staggered children
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      }
    }
  };

  // Line animation variant
  const lineVariants: Variants = {
    hidden: {
      y: 100,
      opacity: 0,
      scale: 0.95,
      rotate: -1
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1.0],
      }
    }
  };

  // Word animation variant
  const wordVariants: Variants = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * staggerChildren + delay,
        duration,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  const containerStyle = sticky ? 
    "sticky top-0 h-screen flex items-center justify-center" : 
    "";

  // For single line with scroll animation
  if (!multiLine) {
    return (
      <motion.div 
        ref={containerRef} 
        className={`${containerStyle} overflow-hidden relative ${className}`}
        style={sticky ? {} : { opacity, y }}
      >
        <motion.div
          ref={textRef}
          initial={{ y: "100%" }}
          animate={isInView ? { y: 0 } : { y: "100%" }}
          transition={{
            duration,
            delay,
            ease: "easeInOut"
          }}
        >
          <div className="inline-block">
            {words.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`${
                  shouldHighlight(word) ? "text-primary font-bold" : ""
                } inline-block mr-1`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // For multi-line text with staggered animation
  return (
    <motion.div 
      ref={containerRef}
      className={`${containerStyle} relative ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={sticky ? {} : { opacity, y }}
    >
      <div ref={textRef}>
        {lines.map((line, index) => {
          const lineWords = line.split(" ");
          
          return (
            <motion.div 
              key={index} 
              className="overflow-visible mb-6"
              variants={lineVariants}
            >
              <div className="flex flex-wrap">
                {lineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={wordVariants}
                    className={`${
                      shouldHighlight(word) ? "text-primary font-bold" : ""
                    } inline-block mr-3 mb-2`}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}