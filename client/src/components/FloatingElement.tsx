import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface FloatingElementProps {
  children: ReactNode;
  position: string;
  animationDelay?: number;
  className?: string;
}

export default function FloatingElement({
  children,
  position,
  animationDelay = 0,
  className = "",
}: FloatingElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay, duration: 0.6 }}
      className={`absolute ${position} ${className}`}
    >
      {children}
    </motion.div>
  );
}
