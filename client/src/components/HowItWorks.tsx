import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { X, Brain, BarChart, TrendingUp, RefreshCw } from "lucide-react";
import TextReveal from "./TextReveal";
import FloatingRealPhoto from "./FloatingRealPhoto";

export default function HowItWorks() {
  const [solutionsRef, solutionsInView] = useScrollAnimation(0.1);
  const [buttonRef, buttonInView] = useScrollAnimation(0.1);

  const solutionItems = [
    {
      icon: <Brain className="text-white" />,
      title: "Personalization Technology",
      description: "Our algorithm creates a unique profile for your dog's needs",
    },
    {
      icon: <BarChart className="text-white" />,
      title: "Quality Guaranteed",
      description: "Premium products selected specifically for your dog's requirements",
    },
    {
      icon: <TrendingUp className="text-white" />,
      title: "Adaptive Learning",
      description: "We refine your dog's profile with every box and feedback",
    },
    {
      icon: <RefreshCw className="text-white" />,
      title: "Exclusive Products",
      description: "Access to items not available in retail stores or other boxes",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Add floating real dog photos to this section too */}
      <FloatingRealPhoto 
        position="top-32 right-[7%]" 
        size="w-28 h-28" 
        delay={0.9} 
        zIndex={20} 
        imageSrc="/images/real-dogs/dog3.jpg" 
      />
      <FloatingRealPhoto 
        position="bottom-20 left-[9%]" 
        size="w-32 h-32" 
        delay={0.4} 
        zIndex={20} 
        rotationRange={15}
        imageSrc="/images/real-dogs/dog2.jpg" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative max-w-sm w-full"
            >
              <div className="rounded-2xl shadow-xl h-[300px] bg-primary/10 flex items-center justify-center overflow-hidden">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-40 h-40 text-primary"
                >
                  <path
                    fill="currentColor"
                    d="M44.3,-76.2C55.9,-69.7,63,-55.1,72.1,-41C81.2,-26.9,92.3,-13.5,94.7,1.4C97.1,16.2,90.8,32.5,80.3,45.1C69.9,57.7,55.3,66.6,40.4,72.4C25.6,78.2,10.3,80.8,-4.1,76.8C-18.5,72.8,-32,62.1,-43.1,50.9C-54.1,39.7,-62.8,28,-71.1,13.6C-79.4,-0.8,-87.4,-17.9,-84.4,-32.9C-81.4,-47.9,-67.4,-60.8,-52.1,-65.9C-36.8,-71,-18.4,-68.2,-0.5,-67.4C17.4,-66.5,32.7,-82.7,44.3,-76.2Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center max-w-[150px]">
                    <div className="text-5xl mb-2">🐾</div>
                    <p className="font-medium text-primary"><span className="coni-logo font-bold">coni</span> Box</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-3 animate-float z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white h-4 w-4"
                    >
                      <path d="M12 2a7 7 0 0 1 9 6.5c0 7-10 11.5-9 16.5" />
                      <path d="M12 2a7 7 0 0 0-9 6.5c0 7 10 11.5 9 16.5" />
                    </svg>
                  </div>
                  <div className="text-xs">
                    <p className="font-bold">AI-Powered</p>
                    <p className="text-gray-400">Learns preferences</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -top-6 -left-6 glass-card rounded-2xl p-3 animate-float z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white h-4 w-4"
                    >
                      <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                      <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                      <path d="M2 22h20" />
                    </svg>
                  </div>
                  <div className="text-xs">
                    <p className="font-bold">Personalized</p>
                    <p className="text-gray-400">5-7 unique items</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-0 left-[40%] -translate-x-1/2 bg-primary rounded-xl shadow-md p-3 animate-float text-white"
              >
                <p className="text-xs font-medium text-center">
                  <span className="coni-logo font-bold">coni</span> Box 🐾
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div>
            <motion.div
              ref={solutionsRef}
              initial={{ opacity: 0, x: 50 }}
              animate={solutionsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-3xl shadow-lg border border-gray-100"
            >
              <h3 className="font-bold text-2xl mb-6 text-primary">
                The <span className="coni-logo font-bold">coni</span> Difference
              </h3>
              <ul className="space-y-6">
                {solutionItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white/80 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-102"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex-shrink-0 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{item.title}</p>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 20 }}
          animate={buttonInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="inline-flex items-center gap-2 hover:shadow-lg transition transform hover:-translate-y-1"
          >
            See the Science Behind <span className="coni-logo font-bold">coni</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
