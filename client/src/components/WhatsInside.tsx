import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Gamepad, Bone, Heart, FileText, Quote, Sparkles, Zap, Gift, Star, Rocket } from "lucide-react";
import FloatingRealPhoto from "./FloatingRealPhoto";

export default function WhatsInside() {
  const [sectionRef, sectionInView] = useScrollAnimation(0.1);
  const [titleRef, titleInView] = useScrollAnimation(0.1);
  const [testimonialRef, testimonialInView] = useScrollAnimation(0.1);
  const [buttonRef, buttonInView] = useScrollAnimation(0.1);

  const boxItems = [
    {
      icon: <Gamepad className="text-3xl text-primary" />,
      title: "2-3 Interactive Toys",
      description:
        "Matched to your dog's exact play style, jaw strength, and intelligence level",
      bgColor: "bg-gradient-to-br from-primary/20 to-primary/10",
      borderColor: "border-primary/30",
      shadowColor: "shadow-primary/10",
    },
    {
      icon: <Bone className="text-3xl text-secondary" />,
      title: "1-2 Gourmet Treats",
      description:
        "Premium treats aligned with their nutritional needs and flavor preferences",
      bgColor: "bg-gradient-to-br from-secondary/20 to-secondary/10",
      borderColor: "border-secondary/30",
      shadowColor: "shadow-secondary/10",
    },
    {
      icon: <Heart className="text-3xl text-accent" />,
      title: "Wellness Essentials",
      description:
        "Addressing current needs or preventing future health issues",
      bgColor: "bg-gradient-to-br from-accent/20 to-accent/10",
      borderColor: "border-accent/30",
      shadowColor: "shadow-accent/10",
    },
    {
      icon: <FileText className="text-3xl text-purple-500" />,
      title: "AI-Generated Guides",
      description:
        "Explaining why each item was selected for your unique dog",
      bgColor: "bg-gradient-to-br from-purple-200 to-purple-100",
      borderColor: "border-purple-300/30",
      shadowColor: "shadow-purple-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      } 
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    },
  };

  return (
    <section id="whats-inside" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50 to-white z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 z-0"></div>
      
      {/* Animated background blobs */}
      <div className="absolute -top-48 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-48 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Floating real dog photos */}
      <FloatingRealPhoto 
        position="top-28 left-[8%]" 
        size="w-28 h-28" 
        delay={0.7} 
        zIndex={20} 
        rotationRange={10} 
        imageSrc="/images/real-dogs/dog2.jpg"
      />
      <FloatingRealPhoto 
        position="bottom-40 right-[12%]" 
        size="w-32 h-32" 
        delay={0.3} 
        zIndex={20}
        rotationRange={8}
        imageSrc="/images/real-dogs/dog4.jpg"
      />
      <FloatingRealPhoto 
        position="top-1/2 right-[5%]" 
        size="w-24 h-24" 
        delay={1.1} 
        zIndex={20} 
        rotationRange={15}
        imageSrc="/images/real-dogs/dog5.jpg"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="text-center mb-16 relative"
        >
          <div className="inline-block">
            <div className="absolute -top-8 -left-8 text-primary/30">
              <Sparkles className="h-6 w-6 animate-pulse" />
            </div>
            <div className="absolute -top-4 -right-8 text-secondary/30">
              <Star className="h-5 w-5 animate-spin-slow" />
            </div>
            <div className="absolute -bottom-6 -right-10 text-accent/30">
              <Rocket className="h-6 w-6 animate-bounce-slow" />
            </div>
            <div className="absolute -bottom-8 -left-6 text-purple-400/30">
              <Zap className="h-7 w-7 animate-pulse animation-delay-2000" />
            </div>
          </div>
          
          <h2 className="font-bold text-3xl md:text-5xl mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">What's In Your Dog's</span> <span className="relative text-rose-500">
              Perfect 
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0,0 Q50,12 100,0" fill="none" stroke="currentColor" strokeWidth="3" className="text-accent/40" />
              </svg>
            </span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Box?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Every month, your furry friend receives a personalized selection of <span className="font-semibold">5-7 premium items</span> specifically chosen by our ML algorithm:
          </p>
        </motion.div>

        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {boxItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`backdrop-blur-sm bg-white/80 rounded-3xl ${item.shadowColor} shadow-xl p-8 border border-opacity-20 ${item.borderColor} group relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className={`absolute inset-0 ${item.bgColor} opacity-30`}></div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/20 mix-blend-overlay"></div>
              </div>
              
              <div
                className={`w-20 h-20 ${item.bgColor} rounded-2xl flex items-center justify-center mb-5 border ${item.borderColor} group-hover:scale-110 transition-transform duration-300 relative z-10`}
              >
                {item.icon}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="font-bold text-xl mb-3 relative z-10 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-base relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                {item.description}
              </p>

              <div className="absolute w-2 h-2 rounded-full bg-primary/40 top-2 right-2 group-hover:scale-[8] group-hover:opacity-10 transition-all duration-700"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={testimonialRef}
          initial={{ opacity: 0, y: 40 }}
          animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mt-24"
        >
          <div className="relative">
            <div className="scene">
              <div className="card-3d hover:scale-105 transition-transform duration-500">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-opacity-10 border-white p-10 max-w-3xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-b from-accent/10 to-transparent rounded-full filter blur-xl opacity-70 mix-blend-multiply"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-t from-secondary/10 to-transparent rounded-full filter blur-xl opacity-70 mix-blend-multiply"></div>
                  
                  <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                    <div className="md:w-1/3">
                      <div className="w-48 h-48 rounded-full border-4 border-primary/30 mx-auto bg-gradient-to-tr from-primary/10 to-primary/5 flex items-center justify-center overflow-hidden shadow-xl shadow-primary/10 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 mix-blend-overlay"></div>
                        <img 
                          src="/images/real-dogs/dog3.jpg" 
                          alt="Dalmatian dog" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // If image fails to load, set background color
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.parentElement) {
                              e.currentTarget.parentElement.classList.add('bg-gradient-to-r', 'from-purple-400', 'to-pink-300');
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <Quote className="h-10 w-10 text-primary/30 mb-4" />
                      <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                        "<span className="coni-logo font-bold">coni</span> always knows exactly what toys my active Dalmatian needs! 
                        The personalized treats and toys are perfect for his high energy 
                        level. It's like they really understand his personality!"
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-lg text-gray-800">Michael R., Dalmatian owner</p>
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6 text-yellow-400 drop-shadow"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </motion.div>

        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 30 }}
          animate={buttonInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <Button
            size="lg"
            className="inline-flex items-center gap-2 hover:shadow-lg transition transform hover:-translate-y-1 bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-6 text-lg shadow-xl shadow-primary/20"
          >
            <Gift className="h-5 w-5 mr-1" />
            Create Your Dog's Perfect Box
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 ml-1"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
