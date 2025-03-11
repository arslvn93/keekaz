import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Gamepad, Bone, Heart, FileText, Quote } from "lucide-react";
import FloatingRealPhoto from "./FloatingRealPhoto";

export default function WhatsInside() {
  const [sectionRef, sectionInView] = useScrollAnimation(0.1);
  const [testimonialRef, testimonialInView] = useScrollAnimation(0.1);
  const [buttonRef, buttonInView] = useScrollAnimation(0.1);

  const boxItems = [
    {
      icon: <Gamepad className="text-2xl text-primary" />,
      title: "2-3 Toys",
      description:
        "Matched to your dog's exact play style, jaw strength, and intelligence level",
      bgColor: "bg-primary/10",
    },
    {
      icon: <Bone className="text-2xl text-secondary" />,
      title: "1-2 Treats",
      description:
        "Premium treats aligned with their nutritional needs and flavor preferences",
      bgColor: "bg-secondary/10",
    },
    {
      icon: <Heart className="text-2xl text-accent" />,
      title: "Wellness Product",
      description:
        "Addressing current needs or preventing future health issues",
      bgColor: "bg-accent/10",
    },
    {
      icon: <FileText className="text-2xl text-purple-500" />,
      title: "Detailed Cards",
      description:
        "Explaining why each item was selected for your unique dog",
      bgColor: "bg-purple-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="whats-inside" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Floating real dog photos */}
      <FloatingRealPhoto 
        position="top-28 left-[8%]" 
        size="w-28 h-28" 
        delay={0.7} 
        zIndex={50} 
        rotationRange={10} 
        imageSrc="/images/real-dogs/dog2.jpg"
      />
      <FloatingRealPhoto 
        position="bottom-40 right-[12%]" 
        size="w-32 h-32" 
        delay={0.3} 
        zIndex={50}
        rotationRange={8}
        imageSrc="/images/real-dogs/dog4.jpg"
      />
      <FloatingRealPhoto 
        position="top-1/2 right-[5%]" 
        size="w-24 h-24" 
        delay={1.1} 
        zIndex={50} 
        rotationRange={15}
        imageSrc="/images/real-dogs/dog5.jpg"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">
            What's In Your Dog's Perfect Box?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every month, your dog receives 5-7 items specifically chosen for
            them:
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
              className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-5`}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={testimonialRef}
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center mt-16"
        >
          <div className="relative">
            <div className="scene">
              <div className="card-3d">
                <div className="bg-white rounded-3xl shadow-xl p-10 max-w-3xl">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="w-48 h-48 rounded-full border-4 border-primary mx-auto bg-primary/10 flex items-center justify-center overflow-hidden">
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
                      <Quote className="h-8 w-8 text-primary/20 mb-4" />
                      <p className="text-lg text-gray-700 mb-4">
                        "Coni always knows exactly what toys my active Dalmatian needs! 
                        The personalized treats and toys are perfect for his high energy 
                        level. It's like they really understand his personality!"
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="font-bold">Michael R., Dalmatian owner</p>
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5 text-yellow-400"
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
          initial={{ opacity: 0, y: 20 }}
          animate={buttonInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="inline-flex items-center gap-2 hover:shadow-lg transition transform hover:-translate-y-1"
          >
            Create Your Dog's Profile
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
              <path d="M19.14 5.69a2 2 0 0 0-2.83 0l-.17.17L16 5.75A2.8 2.8 0 0 0 15 6H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-7a2.8 2.8 0 0 0 .25-1z" />
              <path d="M19 5.5a2.5 2.5 0 0 1 0 5" />
              <path d="M16 8.5a2.5 2.5 0 0 0 0-5" />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
