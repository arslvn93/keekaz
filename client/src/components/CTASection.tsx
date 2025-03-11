import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CTASectionProps {
  onStartClick?: () => void;
}

export default function CTASection({ onStartClick }: CTASectionProps = {}) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold text-3xl md:text-5xl text-white mb-6"
        >
          Experience the Future of Pet Care
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 text-lg mb-10 max-w-2xl mx-auto"
        >
          Where data science creates a truly personalized experience for your
          one-of-a-kind dog!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-white p-1 rounded-full shadow-xl flex">
            <Input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent border-none rounded-full focus:outline-none focus:ring-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="bg-secondary text-white font-medium px-6 py-3 rounded-full hover:bg-opacity-90 transition whitespace-nowrap"
            >
              30-Day Risk-Free Trial
            </Button>
          </form>
          <p className="text-white/60 text-sm mt-3">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
