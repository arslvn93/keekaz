import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import "@/styles/glass.css";

interface HeaderProps {
  onStartClick?: () => void;
}

export default function Header({ onStartClick }: HeaderProps = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#whats-inside", label: "What's Inside" },
    { href: "#life-stages", label: "Life Stages" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "top-4" : "top-8"
      }`}
    >
      <div className="container mx-auto px-4">
        <div 
          className={`glass-morphism rounded-full mx-auto max-w-4xl transition-all duration-300 ${
            isScrolled ? "py-2 scrolled" : "py-3"
          } px-6 flex justify-between items-center`}
        >
          <div className="flex items-center">
            <h1 className={`coni-logo ${isScrolled ? "text-xl" : "text-3xl"} transition-all duration-300 font-bold`}>
              <span className="coni-logo">coni</span>
            </h1>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`font-medium hover:text-primary transition-all duration-300
                      ${isScrolled ? "text-sm" : "text-base"}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button 
            className={`hidden md:flex transition-all duration-300 
              ${isScrolled ? "h-8 text-sm px-3" : "h-10"}`}
            onClick={onStartClick}
          >
            Get Started
          </Button>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu />
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass-morphism absolute rounded-3xl mx-auto max-w-4xl left-0 right-0 mt-2"
            >
              <div className="px-6 py-5">
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href={link.href}
                        className="block py-2 font-medium hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <Button 
                      className="w-full"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        if (onStartClick) onStartClick();
                      }}
                    >Get Started</Button>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
