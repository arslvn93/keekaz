import { motion } from "framer-motion";

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
  return (
    <div className={`absolute ${position} z-${zIndex}`}>
      <motion.div
        className={`${size} glass-card rounded-full overflow-hidden border-2 border-white shadow-lg`}
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
          src={imageSrc}
          alt="Real dog photo"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}