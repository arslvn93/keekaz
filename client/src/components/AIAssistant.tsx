import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import NetworkAnimation from "./NetworkAnimation";
import { MessageSquare, Camera, GraduationCap, Headphones, CircuitBoard, Quote } from "lucide-react";

export default function AIAssistant() {
  const [featuresRef, featuresInView] = useScrollAnimation(0.1);
  const [chatRef, chatInView] = useScrollAnimation(0.1);
  const [testimonialRef, testimonialInView] = useScrollAnimation(0.1);

  const features = [
    {
      icon: <MessageSquare className="text-primary text-xl" />,
      title: "Instant Answers",
      description: "To health, behavior, and training questions",
    },
    {
      icon: <Camera className="text-primary text-xl" />,
      title: "Photo Analysis",
      description: "To identify potential issues before they become problems",
    },
    {
      icon: <GraduationCap className="text-primary text-xl" />,
      title: "Personalized Training",
      description: "Guidance based on your dog's learning style",
    },
    {
      icon: <Headphones className="text-primary text-xl" />,
      title: "24/7 Support",
      description: "Whenever concerns arise",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            ref={featuresRef}
            initial={{ opacity: 0, x: 50 }}
            animate={featuresInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 lg:order-2"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-4">
              Meet Your Dog's AI Companion
            </h2>
            <div className="inline-block bg-accent text-white text-sm font-bold px-4 py-1 rounded-full mb-6">
              FREE WITH EVERY SUBSCRIPTION
            </div>

            <p className="text-gray-700 mb-8">
              Your TAILWAG box includes unlimited access to our AI Dog
              Assistant:
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-medium text-lg">{feature.title}</p>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, x: -50 }}
            animate={chatInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 lg:order-1"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="scene">
                <div className="card-3d">
                  <div className="bg-white rounded-3xl shadow-xl p-5 relative border-8 border-white">
                    <div className="bg-primary/10 rounded-2xl p-4 mb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <CircuitBoard className="text-white" />
                        </div>
                        <div>
                          <p className="font-medium">TAILWAG Assistant</p>
                          <p className="text-xs text-gray-500">
                            Always here to help
                          </p>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-3 shadow-sm mb-2">
                        <p className="text-sm">
                          My puppy keeps chewing my shoes. What should I do?
                        </p>
                      </div>

                      <div className="bg-primary rounded-xl p-3 text-white mb-2 animate-pulse">
                        <p className="text-sm">
                          I'd be happy to help with your puppy's chewing
                          behavior! This is actually very normal for puppies
                          during teething. Based on your Labrador's profile, I
                          recommend:
                        </p>
                      </div>

                      <div className="bg-primary rounded-xl p-3 text-white mb-2">
                        <p className="text-sm">
                          1. Provide appropriate chew toys (we've included a
                          cooling teether in this month's box!)
                        </p>
                      </div>

                      <div className="bg-primary rounded-xl p-3 text-white">
                        <p className="text-sm">
                          2. Use a bitter apple spray on shoes
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Ask me anything about your dog..."
                        className="w-full bg-gray-100 rounded-full py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="m22 2-7 20-4-9-9-4Z" />
                          <path d="M22 2 11 13" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 -top-5 -right-5 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 -bottom-5 -left-5 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>

              <NetworkAnimation />
            </div>
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
              "As a first-time dog owner, having the AI assistant is like
              having a vet and trainer on call. It's saved me countless worried
              Google searches at 2 AM."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/20"></div>
              <p className="font-bold">Jessica K.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
