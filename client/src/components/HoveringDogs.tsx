import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FloatingDog from "./FloatingDog";

export default function HoveringDogs() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("hovering-dogs-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const dogImages = [
    "/images/dogs/dog1.svg",
    "/images/dogs/dog2.svg",
    "/images/dogs/dog3.svg",
    "/images/dogs/dog4.svg",
    "/images/dogs/dog5.svg"
  ];
  
  // Positions for the floating dogs
  const positions = [
    "top-10 left-10",
    "top-1/4 right-16",
    "bottom-12 left-20",
    "bottom-1/4 right-10",
    "top-1/3 left-1/4"
  ];
  
  return (
    <section id="hovering-dogs-section" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">every dog is unique</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            just like your furry friend, every <span className="coni-logo font-bold">coni</span> box is specially crafted to match 
            your dog's individual needs and preferences.
          </p>
        </motion.div>
        
        <div className="relative h-[600px] max-w-4xl mx-auto">
          {/* Main center image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full glass-card flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
                <svg 
                  width="220" 
                  height="220" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <path 
                    d="M10.5 12.5C10.5 11.12 9.38 10 8 10C6.62 10 5.5 11.12 5.5 12.5V13H10.5V12.5Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M18.5 12.5C18.5 11.12 17.38 10 16 10C14.62 10 13.5 11.12 13.5 12.5V13H18.5V12.5Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M19 5C17.5 6.5 17 7 12 7C7 7 6.5 6.5 5 5C3.83 6.17 3 7.83 3 9.6V10C3 13.1 5.1 16.5 9 17.5V19H8.5C8.22 19 8 19.22 8 19.5C8 19.78 8.22 20 8.5 20H15.5C15.78 20 16 19.78 16 19.5C16 19.22 15.78 19 15.5 19H15V17.5C18.9 16.5 21 13.1 21 10V9.6C21 7.83 20.17 6.17 19 5Z" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="glass-card px-6 py-3 rounded-full shadow-lg">
                  <p className="text-xl"><span className="coni-logo font-bold">coni</span> loves all dogs</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Floating dogs */}
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
            >
              <FloatingDog
                position={position}
                size="w-20 h-20 md:w-24 md:h-24"
                delay={index * 0.2}
                zIndex={10}
                rotationRange={10}
              />
            </motion.div>
          ))}
          
          {/* Background decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}