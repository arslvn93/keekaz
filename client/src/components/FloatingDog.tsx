import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingDogProps {
  position: string;  // "top-10 left-10" or similar Tailwind positioning
  size?: string;     // Size class like "w-20 h-20" or default
  delay?: number;    // Animation delay
  zIndex?: number;   // Z-index for proper layering
  rotationRange?: number; // Range of rotation in degrees
}

export default function FloatingDog({
  position,
  size = "w-20 h-20",
  delay = 0,
  zIndex = 10,
  rotationRange = 10
}: FloatingDogProps) {
  // Random dog silhouette - could be expanded with more varieties
  const dogSilhouette = (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={`${size} text-primary opacity-70`}
    >
      <path
        fill="currentColor"
        d="M61.4,-55.7C78.9,-36.1,92.1,-11,90.1,13.6C88,38.2,70.8,62.3,48.2,74.9C25.5,87.6,-2.5,88.7,-25.7,79.3C-48.9,69.9,-67.3,49.9,-76.2,25.6C-85.1,1.3,-84.4,-27.4,-71.1,-48.8C-57.7,-70.2,-31.5,-84.3,-4.8,-80.2C21.8,-76.1,43.8,-75.3,61.4,-55.7Z"
        transform="translate(100 100)"
      />
    </svg>
  );

  // Text reveal animation for ears
  const ears = (
    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
      <div className="relative">
        <motion.div 
          className="w-4 h-8 bg-primary rounded-full absolute -left-5 -rotate-12"
          animate={{ 
            rotateZ: ["-12deg", "-8deg", "-12deg"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: delay + 0.3
          }}
        />
        <motion.div 
          className="w-4 h-8 bg-primary rounded-full absolute left-1 rotate-12"
          animate={{ 
            rotateZ: ["12deg", "8deg", "12deg"],
          }}
          transition={{
            duration: 2.2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: delay + 0.5
          }}
        />
      </div>
    </div>
  );

  // Special Framer Motion effects inspired from the attachment
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
        {dogSilhouette}
        {ears}
        <motion.div 
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-primary rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            delay: delay + 0.1
          }}
        />
      </div>
    </motion.div>
  );
}