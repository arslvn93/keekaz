import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import TextReveal from "./TextReveal";

export default function ScrollRevealSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const multiLineText = `your dog is unique.
  their box should be too.
  personalized care
  for your best friend.
  intelligent selection
  just for them.`;

  const highlightWords = ["unique", "personalized", "intelligent"];

  return (
    <section 
      ref={ref} 
      className="py-24 relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side with text reveal */}
          <div className="relative">
            <TextReveal 
              text={multiLineText}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              highlightWords={highlightWords}
              multiLine={true}
              staggerChildren={0.15}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 1.5 }}
              className="mt-8"
            >
              <p className="text-lg text-gray-300 mb-6">
                coni uses advanced algorithms to understand exactly what your dog needs—right now.
              </p>
              <button className="glass-card px-8 py-3 rounded-full text-white bg-primary/30 hover:bg-primary/40 transition-all duration-300">
                Start Your Dog's Journey
              </button>
            </motion.div>
          </div>
          
          {/* Right side with floating elements */}
          <div className="relative h-[500px]">
            {/* Animated elements here */}
            <motion.div 
              className="absolute top-1/4 left-1/4 z-10"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -5 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="glass-card p-6 rounded-2xl shadow-lg w-64">
                <h3 className="text-xl font-bold mb-2">Smart Analysis</h3>
                <p className="text-gray-300">Our AI analyzes thousands of data points to create a perfect match.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/4 right-1/4 z-20"
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
              className="absolute top-1/2 right-1/3 z-30"
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