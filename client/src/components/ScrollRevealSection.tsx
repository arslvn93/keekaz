import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import TextReveal from "./TextReveal";

interface ScrollRevealSectionProps {
  onStartClick?: () => void;
}

export default function ScrollRevealSection({ onStartClick }: ScrollRevealSectionProps = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15, margin: "0px 0px -100px 0px" }); // Improved threshold with margin
  
  // Simplified text for larger reveal with more impact
  const multiLineText = `your dog is unique.
  their box should be too.`;

  const highlightWords = ["unique"];

  return (
    <section 
      ref={ref} 
      className="py-40 relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side with text reveal */}
          <div className="relative z-30"> {/* Increased z-index */}
            <TextReveal 
              text={multiLineText}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight uppercase tracking-tight"
              highlightWords={highlightWords}
              multiLine={true}
              staggerChildren={0.3}
              duration={1.2} // Longer animation duration
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 2.0 }} // Longer delay for after the text reveals
              className="mt-16" // More space after the much larger text
            >
              <p className="text-2xl text-gray-300 mb-8 max-w-xl"> {/* Larger text to match */}
                <span className="coni-logo font-bold">coni</span> uses advanced algorithms to understand exactly what your dog needs—right now.
              </p>
              <button 
                onClick={onStartClick}
                className="glass-card px-10 py-4 rounded-full text-xl font-semibold text-white bg-primary/30 hover:bg-primary/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow"
              >
                Start Your Dog's Journey
              </button>
            </motion.div>
          </div>
          
          {/* Right side with floating elements */}
          <div className="relative h-[500px] md:h-[600px] mt-16 md:mt-0"> {/* Increased height and added top margin on mobile */}
            {/* Animated elements here */}
            <motion.div 
              className="absolute top-[5%] left-[3%] z-10 hidden md:block" /* Hidden on mobile */
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="glass-card p-6 rounded-2xl shadow-lg w-64">
                <h3 className="text-xl font-bold mb-2">Smart Analysis</h3>
                <p className="text-gray-100">Our AI analyzes thousands of data points to create a perfect match.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-[5%] right-[5%] z-20"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: 5 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="glass-card p-6 rounded-2xl shadow-lg w-64">
                <h3 className="text-xl font-bold mb-2">Tailored Selection</h3>
                <p className="text-gray-300">Every product is chosen specifically for your unique dog.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute top-[40%] left-[25%] md:left-[45%] z-20" /* Adjusted position */
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -3 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <div className="glass-card p-6 rounded-2xl shadow-lg w-64">
                <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                <p className="text-gray-300">Our system adapts with your dog's changing needs over time.</p>
              </div>
            </motion.div>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}