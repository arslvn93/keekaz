import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingElement from "./FloatingElement";
import FloatingRealPhoto from "./FloatingRealPhoto";
import TextReveal from "./TextReveal";

interface HeroProps {
  onStartClick?: () => void;
}

export default function Hero({ onStartClick }: HeroProps = {}) {
  return (
    <section className="pt-44 pb-20 relative overflow-hidden">
      <div className="hero-blob top-0 left-0"></div>
      <div className="hero-blob bottom-0 right-0"></div>
      
      {/* Floating real dog photos with different z-indexes */}
      <FloatingRealPhoto 
        position="top-20 left-[10%]" 
        size="w-32 h-32" 
        delay={0.5} 
        zIndex={20} 
        rotationRange={8}
        imageSrc="/images/real-dogs/dog2.jpg" 
      />
      <FloatingRealPhoto 
        position="top-40 right-[15%]" 
        size="w-36 h-36" 
        delay={0.2} 
        zIndex={20} 
        rotationRange={12} 
        imageSrc="/images/real-dogs/dog3.jpg" 
      />
      <FloatingRealPhoto 
        position="bottom-28 right-[25%]" 
        size="w-32 h-32" 
        delay={0.8} 
        zIndex={20} 
        imageSrc="/images/real-dogs/dog4.jpg" 
      />
      <FloatingRealPhoto 
        position="bottom-36 left-[18%]" 
        size="w-28 h-28" 
        delay={0.4} 
        zIndex={20} 
        rotationRange={10} 
        imageSrc="/images/real-dogs/dog5.jpg" 
      />
      <FloatingRealPhoto 
        position="top-32 left-[5%]" 
        size="w-24 h-24" 
        delay={0.7} 
        zIndex={20}
        rotationRange={15}
        imageSrc="/images/real-dogs/dog1.jpg" 
      />

      <div className="container mx-auto px-4 relative z-30">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left pb-10 lg:pb-0"
          >
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Where <span className="gradient-text">AI</span> Meets <br />
              Canine Care
            </h1>
            <div className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0 overflow-hidden">
              <TextReveal 
                text="WHERE MACHINE LEARNING MEETS CUSTOMIZED DOGGY BAGS"
                delay={0.4}
                highlightWords={["MACHINE LEARNING", "CUSTOMIZED"]}
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="font-bold text-lg transition transform hover:-translate-y-1"
                onClick={onStartClick}
              >
                Start Your Dog's Journey
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-bold text-lg text-primary border-primary hover:bg-primary hover:text-white transition"
              >
                Learn More
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary/20 overflow-hidden"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-secondary/20 overflow-hidden"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-accent/20 overflow-hidden"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold">
                  2k+
                </div>
              </div>
              <p className="ml-3 text-gray-600">
                Joined by <span className="font-bold">2,000+</span> happy dogs
              </p>
            </div>
          </motion.div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="scene relative flex items-center justify-center"
            >
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img 
                  src="/images/fluffy-dog.png" 
                  alt="Fluffy happy dog" 
                  className="max-w-full h-auto max-h-[500px] object-contain"
                />
              </motion.div>

              {/* Pills repositioned to work with the dog image */}
              <div className="absolute -left-4 bottom-32 z-20">
                <div className="bg-gray-700 rounded-full py-1.5 pl-1.5 pr-5 flex items-center">
                  <div className="w-8 h-8 bg-rose-500 rounded-full flex-shrink-0 flex items-center justify-center">
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
                  <div className="ml-2">
                    <p className="font-bold text-white text-sm">Personalized</p>
                    <p className="text-gray-300 text-xs">5-7 unique items</p>
                  </div>
                </div>
              </div>

              <div className="absolute right-6 bottom-12 z-20">
                <div className="bg-gray-700 rounded-full py-1.5 pl-1.5 pr-5 flex items-center">
                  <div className="w-8 h-8 bg-teal-400 rounded-full flex-shrink-0 flex items-center justify-center">
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
                  <div className="ml-2">
                    <p className="font-bold text-white text-sm">AI-Powered</p>
                    <p className="text-gray-300 text-xs">Learns preferences</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute top-1/2 -right-16 w-32 h-32 bg-accent rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 -left-16 w-24 h-24 bg-secondary rounded-full opacity-20 animate-pulse-slow"></div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="scroll-indicator text-center mt-16"
        >
          <div className="inline-block animate-bounce">
            <ChevronDown className="text-primary h-6 w-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
