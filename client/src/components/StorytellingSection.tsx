import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollingTextReveal from "./ScrollingTextReveal";
import FloatingRealPhoto from "./FloatingRealPhoto";
import FloatingElement from "./FloatingElement";
import { Button } from "./ui/button";

interface StorytelingSectionProps {
  onStartClick?: () => void;
}

export default function StorytellingSection({ onStartClick }: StorytelingSectionProps = {}) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // For parallax effect on images
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values for parallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const middlegroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-[200vh] py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Content container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-24 py-12">
              {/* First text reveal */}
              <div>
                <ScrollingTextReveal
                  text="Every dog is unique."
                  className="text-5xl sm:text-6xl font-bold mb-8"
                  highlightWords={["unique"]}
                  multiLine={false}
                  threshold={0.5}
                  staggerChildren={0.08}
                  duration={0.8}
                />
                
                <ScrollingTextReveal
                  text="Their needs change over time."
                  className="text-3xl sm:text-4xl font-medium text-gray-300 mb-12"
                  delay={0.3}
                  duration={0.8}
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <p className="text-xl text-gray-400 max-w-lg">
                    <span className="coni-logo font-bold">coni</span> understands your dog's 
                    unique personality, preferences, and developmental stage to create a truly 
                    personalized experience.
                  </p>
                </motion.div>
              </div>
              
              {/* Second text reveal */}
              <div>
                <ScrollingTextReveal
                  text="A subscription that evolves"
                  className="text-4xl sm:text-5xl font-bold mb-8"
                  highlightWords={["evolves"]}
                  multiLine={false}
                  threshold={0.5}
                  staggerChildren={0.08}
                  duration={0.8}
                />
                
                <ScrollingTextReveal
                  text="as your best friend grows."
                  className="text-3xl sm:text-4xl font-medium text-gray-300 mb-12"
                  delay={0.3}
                  duration={0.8}
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <p className="text-xl text-gray-400 max-w-lg mb-8">
                    Our algorithm learns and adapts with each interaction, ensuring that each box 
                    is more tailored than the last.
                  </p>
                  
                  <Button 
                    onClick={onStartClick}
                    className="glass-card px-10 py-6 rounded-full text-lg font-semibold text-white bg-primary/30 hover:bg-primary/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow"
                  >
                    Create Your Dog's Profile
                  </Button>
                </motion.div>
              </div>
            </div>
            
            {/* Right side - Floating images with parallax effect */}
            <div className="relative h-[600px] hidden lg:block">
              {/* Background layer */}
              <motion.div style={{ y: backgroundY }} className="absolute inset-0">
                <FloatingRealPhoto
                  position="top-10 right-10"
                  imageSrc="/images/puppy-sleeping.jpg"
                  size="w-64 h-64"
                  delay={0.2}
                  zIndex={10}
                  rotationRange={3}
                />
                
                <FloatingElement
                  position="bottom-20 left-0"
                  animationDelay={0.5}
                  className="glass-card p-6 rounded-xl w-56"
                >
                  <h3 className="text-lg font-bold mb-2">Tailored Experience</h3>
                  <p className="text-sm text-gray-300">Products selected specifically for your dog's unique personality</p>
                </FloatingElement>
              </motion.div>
              
              {/* Middle layer */}
              <motion.div style={{ y: middlegroundY }} className="absolute inset-0">
                <FloatingRealPhoto
                  position="top-40 left-10"
                  imageSrc="/images/dog-playing.jpg"
                  size="w-48 h-48"
                  delay={0.4}
                  zIndex={20}
                  rotationRange={4}
                />
                
                <FloatingElement
                  position="bottom-40 right-10"
                  animationDelay={0.7}
                  className="glass-card p-6 rounded-xl w-56"
                >
                  <h3 className="text-lg font-bold mb-2">AI-Powered Selection</h3>
                  <p className="text-sm text-gray-300">Advanced algorithms match your dog with perfect products</p>
                </FloatingElement>
              </motion.div>
              
              {/* Foreground layer */}
              <motion.div style={{ y: foregroundY }} className="absolute inset-0">
                <FloatingRealPhoto
                  position="top-80 left-48"
                  imageSrc="/images/happy-dog.jpg"
                  size="w-56 h-56"
                  delay={0.6}
                  zIndex={30}
                  rotationRange={5}
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}