import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Bone, LucideFootprints, Dog, Leaf, Globe } from "lucide-react";

export default function Brands() {
  const [brandsRef, brandsInView] = useScrollAnimation(0.1);

  const brands = [
    {
      icon: <Bone className="text-3xl text-gray-400 mb-2" />,
      name: "KONG",
    },
    {
      icon: <LucideFootprints className="text-3xl text-gray-400 mb-2" />,
      name: "West Paw",
    },
    {
      icon: <Dog className="text-3xl text-gray-400 mb-2" />,
      name: "Outward Hound",
    },
    {
      icon: <Leaf className="text-3xl text-gray-400 mb-2" />,
      name: "Honest Kitchen",
    },
    {
      icon: <Globe className="text-3xl text-gray-400 mb-2" />,
      name: "Earth Animal",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-bold text-2xl md:text-3xl mb-2">
            Expertly Sourced, Rigorously Tested
          </h2>
          <p className="text-gray-600">
            TAILWAG partners with 180+ premium brands including:
          </p>
        </motion.div>

        <motion.div
          ref={brandsRef}
          initial={{ opacity: 0 }}
          animate={brandsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={brandsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, filter: "grayscale(0)" }}
              className="w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition"
            >
              <div className="text-center">
                {brand.icon}
                <p className="font-medium text-gray-500">{brand.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
