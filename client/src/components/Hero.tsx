import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingElement from "./FloatingElement";
import FloatingDog from "./FloatingDog";
import FloatingRealDog from "./FloatingRealDog";
import TextReveal from "./TextReveal";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="hero-blob top-0 left-0"></div>
      <div className="hero-blob bottom-0 right-0"></div>
      
      {/* Floating real dog SVGs with different z-indexes so they appear on top */}
      <FloatingRealDog 
        position="top-20 left-[10%]" 
        size="w-24 h-24" 
        delay={0.5} 
        zIndex={20} 
        imageSrc="/images/dogs/dog1.svg" 
      />
      <FloatingRealDog 
        position="top-40 right-[15%]" 
        size="w-20 h-20" 
        delay={0.2} 
        zIndex={20} 
        rotationRange={15} 
        imageSrc="/images/dogs/dog2.svg" 
      />
      <FloatingRealDog 
        position="bottom-28 right-[25%]" 
        size="w-28 h-28" 
        delay={0.8} 
        zIndex={20} 
        imageSrc="/images/dogs/dog3.svg" 
      />
      <FloatingRealDog 
        position="bottom-36 left-[18%]" 
        size="w-24 h-24" 
        delay={0.4} 
        zIndex={20} 
        rotationRange={12} 
        imageSrc="/images/dogs/dog4.svg" 
      />
      <FloatingRealDog 
        position="top-32 left-[30%]" 
        size="w-16 h-16" 
        delay={0.7} 
        zIndex={20} 
        imageSrc="/images/dogs/dog5.svg" 
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
                <div className="relative rounded-3xl shadow-2xl max-w-full z-10 bg-cyan-100 h-[400px] flex items-center justify-center overflow-hidden">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-24 h-24 text-primary"
                  >
                    <path
                      fill="currentColor"
                      d="M40.5,65.5c-3.3,5.5-4.1,12.4-9.8,15.3c-5.7,2.9-16.4,1.9-20.4-3.2C6.3,71.6,8.9,62.3,7.9,51.2S3.1,29.9,10.5,22.7c7.4-7.2,21.5-8.4,29.9-3.2c8.4,5.2,11.2,17,17.8,26.6C64.7,55.7,75.1,63.2,73,67.8C70.9,72.4,43.8,60,40.5,65.5z"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-56 h-56 text-secondary absolute -bottom-10 -right-10 opacity-40"
                  >
                    <path
                      fill="currentColor"
                      d="M47.5,-67.2C55.9,-59.3,53.2,-37.9,56.8,-20.1C60.5,-2.3,70.6,11.8,70.5,26C70.3,40.2,60,54.6,45.9,62.5C31.8,70.4,15.9,71.8,-0.2,72.2C-16.4,72.5,-32.7,71.7,-42.8,63.3C-52.9,54.9,-56.7,38.9,-63.8,22.7C-70.9,6.5,-81.4,-9.9,-78.1,-23C-74.9,-36,-57.9,-45.6,-42.2,-52.1C-26.6,-58.6,-13.3,-61.9,3.2,-66.4C19.6,-70.9,39.2,-75.1,47.5,-67.2Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-56 h-56 text-accent absolute -top-10 -left-10 opacity-40"
                  >
                    <path
                      fill="currentColor"
                      d="M42.8,-62.2C53.9,-53.3,60.5,-38.8,65.2,-23.7C69.9,-8.6,72.8,7,68.8,20.2C64.8,33.5,53.9,44.4,41.2,53.5C28.5,62.7,14.2,70,1.2,68.3C-11.8,66.6,-23.7,55.9,-36.6,46.2C-49.5,36.5,-63.5,27.9,-70.2,14.8C-76.8,1.8,-76.1,-15.7,-69.4,-30.5C-62.7,-45.2,-50,-57.3,-36.3,-65.2C-22.6,-73.1,-7.9,-76.9,4.5,-83.1C16.9,-89.3,31.8,-71.1,42.8,-62.2Z"
                      transform="translate(100 100)"
                    />
                  </svg>
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
