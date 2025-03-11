import { Link } from "wouter";
import { motion } from "framer-motion";
import { LucideFootprints, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const companyLinks = [
    { href: "#", label: "About Us" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ];

  const resourceLinks = [
    { href: "#", label: "Dog Care Blog" },
    { href: "#", label: "Breed Guides" },
    { href: "#", label: "Training Resources" },
    { href: "#", label: "FAQs" },
  ];

  const contactInfo = [
    {
      icon: <Mail className="text-gray-400" />,
      text: "support@coni.ai",
    },
    {
      icon: <Phone className="text-gray-400" />,
      text: "1-800-CONI-PET",
    },
    {
      icon: <MapPin className="text-gray-400" />,
      text: "123 AI Boulevard\nSilicon Valley, CA 94123",
    },
  ];

  const socialLinks = [
    { icon: <Instagram />, href: "#" },
    { icon: <Facebook />, href: "#" },
    { icon: <Twitter />, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <LucideFootprints className="text-primary" />
              </div>
              <h3 className="font-medium text-xl font-['Comic_Sans_MS','Bubblegum_Sans',cursive]">coni</h3>
            </div>
            <p className="text-gray-400 mb-6">
              The world's first truly personalized dog subscription, powered by
              veterinary science and artificial intelligence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-white transition"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1">{item.icon}</span>
                  <span className="text-gray-400 whitespace-pre-line">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} coni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
