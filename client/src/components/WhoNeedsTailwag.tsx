import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Laptop, Heart, LucideFootprints, Users } from "lucide-react";

export default function WhoNeedsTailwag() {
  const [sectionRef, sectionInView] = useScrollAnimation(0.1);

  const personas = [
    {
      icon: <Laptop className="text-2xl text-primary" />,
      title: "Tech-Savvy Pet Parents",
      description: "Who value data-driven decisions in all aspects of life",
      bgClass: "bg-gradient-to-br from-primary/5 to-primary/10",
    },
    {
      icon: <Heart className="text-2xl text-secondary" />,
      title: "Dedicated Dog Enthusiasts",
      description:
        "Who are tired of wasting money on products their dog ignores",
      bgClass: "bg-gradient-to-br from-secondary/5 to-secondary/10",
    },
    {
      icon: <LucideFootprints className="text-2xl text-accent" />,
      title: "First-Time Dog Owners",
      description: "Seeking guidance through the journey of pet parenthood",
      bgClass: "bg-gradient-to-br from-accent/5 to-accent/10",
    },
    {
      icon: <Users className="text-2xl text-purple-500" />,
      title: "Multi-Dog Households",
      description: "Struggling with different needs across multiple dogs",
      bgClass: "bg-gradient-to-br from-purple-50 to-purple-100",
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">
            Who Needs TAILWAG?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our service is perfect for dog parents who want the very best for
            their unique companion.
          </p>
        </motion.div>

        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`rounded-3xl p-6 hover:shadow-lg transition ${persona.bgClass}`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-5">
                {persona.icon}
              </div>
              <h3 className="font-medium text-xl mb-2">{persona.title}</h3>
              <p className="text-gray-600">{persona.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
