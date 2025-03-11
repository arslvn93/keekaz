import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingDogProps {
  position: string;  // "top-10 left-10" or similar Tailwind positioning
  size?: string;     // Size class like "w-20 h-20" or default
  delay?: number;    // Animation delay
  zIndex?: number;   // Z-index for proper layering
  rotationRange?: number; // Range of rotation in degrees
}

export default function FloatingDog({
  position,
  size = "w-16 h-16",
  delay = 0,
  zIndex = 10,
  rotationRange = 5
}: FloatingDogProps) {
  const [dogSvg, setDogSvg] = useState(1);
  
  useEffect(() => {
    // Randomly select one of the dogs (1-5)
    setDogSvg(Math.floor(Math.random() * 5) + 1);
  }, []);

  return (
    <div className={`absolute ${position} z-${zIndex}`}>
      <motion.div
        className={`${size} glass-card flex items-center justify-center p-2 rounded-full overflow-hidden`}
        initial={{ y: 0, rotate: 0 }}
        animate={{ 
          y: [0, -10, 0, -5, 0],
          rotate: [-rotationRange/2, rotationRange/2, -rotationRange/2]
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay
          },
          rotate: {
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: delay + 0.5
          }
        }}
      >
        <img 
          src={`/images/dogs/dog${dogSvg}.svg`}
          alt="Floating dog"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
}