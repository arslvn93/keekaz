import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingElement from "./FloatingElement";
import FloatingRealPhoto from "./FloatingRealPhoto";
import TextReveal from "./TextReveal";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="hero-blob top-0 left-0"></div>
      <div className="hero-blob bottom-0 right-0"></div>
      
      {/* Floating real dog photos with different z-indexes */}
      <FloatingRealPhoto 
        position="top-20 left-[10%]" 
        size="w-28 h-28" 
        delay={0.5} 
        zIndex={20} 
        imageSrc="/images/real-dogs/dog1.jpg" 
      />
      <FloatingRealPhoto 
        position="top-40 right-[15%]" 
        size="w-24 h-24" 
        delay={0.2} 
        zIndex={20} 
        rotationRange={15} 
        imageSrc="/images/real-dogs/dog2.jpg" 
      />
      <FloatingRealPhoto 
        position="bottom-28 right-[25%]" 
        size="w-32 h-32" 
        delay={0.8} 
        zIndex={20} 
        imageSrc="/images/real-dogs/dog3.jpg" 
      />
      <FloatingRealPhoto 
        position="bottom-36 left-[18%]" 
        size="w-28 h-28" 
        delay={0.4} 
        zIndex={20} 
        rotationRange={12} 
        imageSrc="/images/real-dogs/dog4.jpg" 
      />
      <FloatingRealPhoto 
        position="top-32 left-[30%]" 
        size="w-20 h-20" 
        delay={0.7} 
        zIndex={20} 
        imageSrc="/images/real-dogs/dog5.jpg" 
      />

      <div className="container mx-auto px-4 relative z-10">
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
                text="The world's first truly personalized dog subscription, powered by veterinary science and artificial intelligence."
                delay={0.4}
                highlightWords={["personalized", "artificial", "intelligence"]}
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="font-bold text-lg transition transform hover:-translate-y-1"
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
              className="scene relative"
            >
              <div className="card-3d relative">
                <div className="relative rounded-3xl shadow-2xl max-w-full z-10 bg-gradient-to-br from-cyan-100 via-cyan-50 to-blue-100 h-[400px] flex items-center justify-center overflow-hidden">
                  <img 
                    src="/images/real-dogs/dog6.jpg" 
                    alt="Happy dog with AI subscription box" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-primary/20"></div>
                  
                  <div className="relative z-10 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-[70%] text-center">
                    <h3 className="font-bold text-xl mb-2 text-primary">TAILWAG BOX</h3>
                    <p className="text-gray-700">Personalized monthly box with toys, treats, and wellness products</p>
                  </div>
                </div>

                <FloatingElement
                  position="-top-6 -right-6"
                  animationDelay={0}
                  className="bg-white rounded-2xl shadow-lg p-3 animate-float-slow"
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
                      <p className="text-gray-500">Learns preferences</p>
                    </div>
                  </div>
                </FloatingElement>

                <FloatingElement
                  position="-bottom-6 -left-6"
                  animationDelay={0.2}
                  className="bg-white rounded-2xl shadow-lg p-3 animate-float"
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
                      <p className="text-gray-500">5-7 unique items</p>
                    </div>
                  </div>
                </FloatingElement>
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
