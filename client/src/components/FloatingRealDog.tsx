import { motion } from "framer-motion";
import { useState } from "react";

interface FloatingRealDogProps {
  position: string;  // "top-10 left-10" or similar Tailwind positioning
  imageSrc: string;  // URL to the dog image
  size?: string;     // Size class like "w-20 h-20" or default
  delay?: number;    // Animation delay
  zIndex?: number;   // Z-index for proper layering
  rotationRange?: number; // Range of rotation in degrees
}

export default function FloatingRealDog({
  position,
  imageSrc,
  size = "w-20 h-20",
  delay = 0,
  zIndex = 10,
  rotationRange = 10
}: FloatingRealDogProps) {
  const [imageError, setImageError] = useState(false);
  
  // Use a default placeholder color when image fails to load
  const bgColors = ["bg-purple-300", "bg-pink-300", "bg-blue-300", "bg-teal-300", "bg-amber-300"];
  const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
  
  return (
    <motion.div
      className={`absolute ${position} flex items-center justify-center`}
      style={{ zIndex }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: [0, -10, 0], 
        rotateZ: [-rotationRange/2, rotationRange/2, -rotationRange/2],
      }}
      transition={{
        y: {
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          delay
        },
        rotateZ: {
          duration: 5,
          ease: "easeInOut", 
          repeat: Infinity,
          delay: delay + 0.5
        },
        opacity: {
          duration: 0.8,
          delay
        }
      }}
      whileHover={{ 
        scale: 1.1,
        filter: "brightness(1.2)",
        transition: { duration: 0.3 }
      }}
    >
      <div className={`relative ${size} rounded-full shadow-xl overflow-hidden ${imageError ? randomColor : ''}`}>
        {!imageError && (
          <img 
            src={imageSrc} 
            alt="Cute dog" 
            className="w-full h-full object-cover"
            style={{ filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.3))" }}
            onError={() => setImageError(true)}
          />
        )}
        {imageError && (
          <div className="w-full h-full flex items-center justify-center text-white font-bold">
            coni
          </div>
        )}
      </div>
    </motion.div>
  );
}