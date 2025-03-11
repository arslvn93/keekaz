import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Check, QuoteIcon } from "lucide-react";

export default function Pricing() {
  const [plansRef, plansInView] = useScrollAnimation(0.1);
  const [testimonialRef, testimonialInView] = useScrollAnimation(0.1);

  const plans = [
    {
      name: "Monthly Discovery",
      price: "$49.99",
      period: "month",
      features: [
        "5-7 perfectly matched products",
        "Full AI Assistant access",
        "Comprehensive data cards",
      ],
      popular: false,
      bgClass: "bg-primary/10",
    },
    {
      name: "3-Month Precision",
      price: "$139.99",
      period: "($46.66/mo)",
      features: [
        "Enhanced algorithm training",
        "Priority shipping",
        "All Monthly benefits",
      ],
      popular: false,
      bgClass: "bg-primary/20",
    },
    {
      name: "6-Month Excellence",
      price: "$269.99",
      period: "($44.99/mo)",
      features: [
        "Advanced preference learning",
        "One free product replacement",
        "All 3-Month benefits",
      ],
      popular: true,
      bgClass: "bg-primary text-white",
    },
    {
      name: "12-Month Mastery",
      price: "$499.99",
      period: "($41.67/mo)",
      features: [
        "Exclusive limited-edition products",
        "Quarterly specialized assessment",
        "All 6-Month benefits",
      ],
      popular: false,
      bgClass: "bg-gradient-to-r from-primary/20 to-secondary/20",
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50 relative">
      <div className="hero-blob top-0 right-0 opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-3xl md:text-4xl mb-4">
            Plans Designed For Your Commitment to Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your canine companion's journey.
          </p>
        </motion.div>

        <motion.div
          ref={plansRef}
          variants={containerVariants}
          initial="hidden"
          animate={plansInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition ${
                plan.popular ? "transform lg:scale-105" : ""
              }`}
            >
              <div className={`p-6 relative ${plan.bgClass}`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                    POPULAR
                  </div>
                )}
                <h3 className="font-bold text-xl">{plan.name}</h3>
                <div className="flex items-end gap-1 mt-2">
                  <span className="text-3xl font-bold">{plan.price.split(".")[0]}</span>
                  <span
                    className={
                      plan.bgClass.includes("text-white")
                        ? "text-white/70"
                        : "text-gray-600"
                    }
                  >
                    {plan.price.includes(".") ? "." + plan.price.split(".")[1] : ""} {plan.period}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 h-5 w-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full mt-6"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Choose Plan
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8 text-gray-600">
          All plans include a 30-day money-back guarantee
        </div>

        <motion.div
          ref={testimonialRef}
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mt-16"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/4">
                <div className="w-24 h-24 rounded-full border-4 border-primary mx-auto bg-primary/10 flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-primary"
                  >
                    <path
                      fill="currentColor"
                      d="M48.8,-76.5C63.5,-70.5,75.9,-58.5,80.8,-44.1C85.7,-29.6,83.2,-12.8,79.8,3C76.5,18.8,72.3,33.6,64.5,46.9C56.6,60.1,45.1,71.8,31.2,76.3C17.4,80.9,1.1,78.3,-13.5,74.6C-28.1,70.9,-41,66.1,-52.6,57.8C-64.2,49.5,-74.5,37.8,-80.3,23.8C-86.1,9.9,-87.3,-6.3,-82.2,-19.5C-77.1,-32.7,-65.7,-42.8,-53.4,-49.8C-41.1,-56.7,-27.9,-60.4,-14.1,-64.7C-0.4,-69,13.8,-73.8,28.7,-73.3C43.5,-72.8,59.1,-67,74,-57.2"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>
              </div>
              <div className="md:w-3/4 text-center md:text-left">
                <QuoteIcon className="h-6 w-6 text-primary/20 mb-2" />
                <p className="text-gray-700 mb-3">
                  "The value goes beyond the products. The insights we've gained
                  about our dog through their algorithm have improved our
                  relationship with him."
                </p>
                <p className="font-bold">
                  David L., Software engineer & dog dad
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
