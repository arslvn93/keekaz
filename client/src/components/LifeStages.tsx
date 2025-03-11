import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Brain, Quote } from "lucide-react";

export default function LifeStages() {
  const [activeTab, setActiveTab] = useState("puppyhood");
  const [contentRef, contentInView] = useScrollAnimation(0.1);
  const [testimonialRef, testimonialInView] = useScrollAnimation(0.1);

  const tabs = [
    { id: "puppyhood", label: "Puppyhood" },
    { id: "adult", label: "Adult Enrichment" },
    { id: "senior", label: "Senior Comfort" },
  ];

  const tabContent = {
    puppyhood: {
      title: "Puppyhood Perfection",
      description:
        "Our algorithm sequences products to support critical developmental windows exactly when your puppy needs them:",
      image: (
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-primary opacity-20"
        >
          <path
            fill="currentColor"
            d="M47.3,-73.1C62.7,-68,77.5,-57.4,83.8,-43.2C90.1,-29,87.8,-11,82.1,3.3C76.4,17.5,67.2,28.1,58.1,39.5C49,51,39.9,63.3,27.9,69C15.9,74.8,0.9,73.8,-14,71.5C-29,69.2,-43.8,65.5,-54,56.5C-64.1,47.6,-69.6,33.3,-74.2,17.8C-78.8,2.4,-82.5,-14.1,-76.7,-26.3C-70.9,-38.5,-55.7,-46.4,-41.7,-52.5C-27.7,-58.5,-13.9,-62.6,0.9,-64C15.6,-65.4,31.9,-78.1,47.3,-73.1Z"
            transform="translate(100 100)"
          />
        </svg>
      ),
      features: [
        {
          icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="8" y1="10" x2="16" y2="10" />
            <line x1="8" y1="14" x2="16" y2="14" />
            <line x1="8" y1="18" x2="16" y2="18" />
          </svg>,
          title: "Teething Support",
          description: "Timed precisely to your puppy's development",
        },
        {
          icon: <Users className="text-primary" />,
          title: "Socialization Tools",
          description: "Based on breed-specific learning periods",
        },
        {
          icon: <Brain className="text-primary" />,
          title: "Cognitive Toys",
          description: "That grow in complexity as your puppy develops",
        },
      ],
    },
    adult: {
      title: "Adult Enrichment",
      description:
        "Keep your adult dog engaged, healthy, and happy with products matched to their:",
      image: (
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-secondary opacity-20"
        >
          <path
            fill="currentColor"
            d="M48.8,-76.5C63.5,-70.5,75.9,-58.5,80.8,-44.1C85.7,-29.6,83.2,-12.8,79.8,3C76.5,18.8,72.3,33.6,64.5,46.9C56.6,60.1,45.1,71.8,31.2,76.3C17.4,80.9,1.1,78.3,-13.5,74.6C-28.1,70.9,-41,66.1,-52.6,57.8C-64.2,49.5,-74.5,37.8,-80.3,23.8C-86.1,9.9,-87.3,-6.3,-82.2,-19.5C-77.1,-32.7,-65.7,-42.8,-53.4,-49.8C-41.1,-56.7,-27.9,-60.4,-14.1,-64.7C-0.4,-69,13.8,-73.8,28.7,-73.3C43.5,-72.8,59.1,-67,74,-57.2"
            transform="translate(100 100)"
          />
        </svg>
      ),
      features: [
        {
          icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
          </svg>,
          title: "Exact Energy Level",
          description: "And exercise requirements tailored to your dog",
        },
        {
          icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M19 7v4" />
            <path d="M5 7v4" />
            <path d="M19 11c0 4.42-3.58 8-8 8s-8-3.58-8-8" />
            <path d="M12 19v3" />
            <path d="M12 3C8.26 3 5.53 4.14 5.5 7" />
            <path d="M12 3c3.74 0 6.47 1.14 6.5 4" />
          </svg>,
          title: "Unique Play Style",
          description: "Matched to your dog's preferences",
        },
        {
          icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M2 12c0-3.5 2.5-6 6.5-6 5 0 4.5 6 10 6 3.5 0 5.5-2 5.5-6" />
            <path d="M8 18c0-2.2 1.8-4 4-4s4 1.8 4 4" />
          </svg>,
          title: "Specific Behavioral Patterns",
          description: "And tendencies addressed with targeted products",
        },
      ],
    },
    senior: {
      title: "Senior Comfort",
      description:
        "Support your aging companion with thoughtfully selected items for:",
      image: (
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-accent opacity-20"
        >
          <path
            fill="currentColor"
            d="M42.7,-76.4C53,-69.4,57.8,-54.1,64.8,-40.6C71.8,-27.1,81.1,-15.5,83.3,-2.7C85.5,10.1,80.8,23.2,73.5,34.3C66.2,45.4,56.3,54.5,44.8,62.8C33.3,71.2,20.1,78.7,5,81.1C-10.1,83.5,-26.1,81.1,-38.1,73.3C-50.1,65.4,-58.1,52.3,-64.9,39C-71.7,25.7,-77.4,12.8,-78.1,-0.4C-78.9,-13.6,-74.6,-27.2,-67.1,-38.6C-59.5,-50,-48.7,-59.2,-36.8,-65.6C-24.9,-72,-12.4,-75.6,1.7,-78.6C15.9,-81.6,32.4,-83.5,42.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      ),
      features: [
        {
          icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m4.9 4.9 14.2 14.2" />
          </svg>,
          title: "Joint Health",
          description: "Based on your dog's breed, size, and condition",
        },
        {
          icon: <Brain className="text-primary" />,
          title: "Cognitive Maintenance",
          description: "To keep their mind sharp",
        },
        {
          icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>,
          title: "Comfort Optimization",
          description: "For maximum quality of life",
        },
      ],
    },
  };

  return (
    <section id="life-stages" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">
            <span className="coni-logo font-bold">coni</span> For Every Life Stage
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our algorithm adapts to your dog's changing needs throughout their
            life journey.
          </p>
        </motion.div>

        <div className="relative">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center mb-8 gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={`relative px-6 py-3 font-medium rounded-full transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rotate-45"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-5 gap-6 items-center bg-gray-50 p-6 md:p-10 rounded-3xl shadow-lg"
              >
                <div className="md:col-span-2 relative h-[300px] overflow-hidden rounded-2xl shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center bg-white">
                    {tabContent[activeTab as keyof typeof tabContent].image}
                  </div>
                </div>

                <div className="md:col-span-3">
                  <h3 className="font-bold text-2xl mb-4 text-primary">
                    {tabContent[activeTab as keyof typeof tabContent].title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {tabContent[activeTab as keyof typeof tabContent].description}
                  </p>

                  <div className="space-y-4">
                    {tabContent[
                      activeTab as keyof typeof tabContent
                    ].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          {feature.icon}
                        </div>
                        <div>
                          <p className="font-medium">{feature.title}</p>
                          <p className="text-sm text-gray-600">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          ref={testimonialRef}
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="inline-block bg-white p-6 rounded-3xl shadow-lg"
          >
            <Quote className="h-6 w-6 text-primary/20 mb-2" />
            <p className="text-gray-700 mb-4">
              "I have a senior Beagle and a young Shepherd with completely
              different needs. <span className="coni-logo font-bold">coni</span> is the only service that truly
              understands both of them!"
            </p>
            <p className="font-bold">Michael T.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
