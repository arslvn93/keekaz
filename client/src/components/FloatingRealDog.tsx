import { motion } from "framer-motion";

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
      <div className="relative">
        <img 
          src={imageSrc} 
          alt="Cute dog" 
          className={`${size} object-contain rounded-full shadow-xl`}
          style={{ filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.3))" }}
        />
      </div>
    </motion.div>
  );
}