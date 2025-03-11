import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingRealPhotoProps {
  position: string;  // "top-10 left-10" or similar Tailwind positioning
  imageSrc: string;  // URL to the dog image
  size?: string;     // Size class like "w-20 h-20" or default
  delay?: number;    // Animation delay
  zIndex?: number;   // Z-index for proper layering
  rotationRange?: number; // Range of rotation in degrees
}

export default function FloatingRealPhoto({
  position,
  imageSrc,
  size = "w-16 h-16",
  delay = 0,
  zIndex = 10,
  rotationRange = 5
}: FloatingRealPhotoProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Create smooth random rotation effect
    let timeoutId: NodeJS.Timeout;
    
    const animateRotation = () => {
      const newRotation = (Math.random() * rotationRange * 2) - rotationRange;
      setRotation(newRotation);
      
      // Schedule next rotation after random time
      const randomDelay = 2000 + Math.random() * 3000;
      timeoutId = setTimeout(animateRotation, randomDelay);
    };
    
    const initialDelay = delay * 1000;
    timeoutId = setTimeout(animateRotation, initialDelay);
    
    return () => clearTimeout(timeoutId);
  }, [rotationRange, delay]);

  return (
    <motion.div
      className={`absolute ${position} ${size} 
                z-[${zIndex}] overflow-hidden rounded-full shadow-lg
                filter hover:brightness-105 transition-all duration-300`}
      animate={{
        rotate: rotation,
        y: [0, -8, 0],
      }}
      transition={{
        rotate: { duration: 2, ease: "easeInOut" },
        y: { repeat: Infinity, duration: 3 + Math.random() * 2, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.1 }}
    >
      <img 
        src={imageSrc} 
        alt="Floating dog" 
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}