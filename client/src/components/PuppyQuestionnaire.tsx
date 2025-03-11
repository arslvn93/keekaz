import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Check, Dog, Heart, Star, User, Zap, Shield } from "lucide-react";

// Animation variants
const itemVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 20,
    transition: {
      delay: i * 0.1
    }
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut" 
    }
  })
};

// Question types
type QuestionType = 
  | "breedQuestion" 
  | "ageQuestion" 
  | "weightQuestion" 
  | "temperamentQuestion" 
  | "dietaryQuestion" 
  | "trainingQuestion"
  | "completed";

interface PuppyQuestionnaireProps {
  onClose: () => void;
}

export default function PuppyQuestionnaire({ onClose }: PuppyQuestionnaireProps) {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionType>("breedQuestion");
  const [answers, setAnswers] = useState({
    breed: "",
    age: {
      value: 0,
      unit: "years"
    },
    weight: {
      value: 0,
      unit: "lbs"
    },
    temperament: "",
    dietary: [] as string[],
    training: ""
  });
  
  // Progress calculation
  const questionOrder: QuestionType[] = [
    "breedQuestion", 
    "ageQuestion", 
    "weightQuestion", 
    "temperamentQuestion", 
    "dietaryQuestion", 
    "trainingQuestion",
    "completed"
  ];
  
  const progress = questionOrder.indexOf(currentQuestion) / (questionOrder.length - 1) * 100;
  
  // Navigation functions
  const goToNextQuestion = () => {
    const currentIndex = questionOrder.indexOf(currentQuestion);
    if (currentIndex < questionOrder.length - 1) {
      setCurrentQuestion(questionOrder[currentIndex + 1]);
      window.scrollTo(0, 0);
    }
  };
  
  const goToPreviousQuestion = () => {
    const currentIndex = questionOrder.indexOf(currentQuestion);
    if (currentIndex > 0) {
      setCurrentQuestion(questionOrder[currentIndex - 1]);
      window.scrollTo(0, 0);
    }
  };
  
  // Answer update functions
  const updateAnswer = (question: keyof typeof answers, value: string | number | object) => {
    setAnswers({
      ...answers,
      [question]: value
    });
  };
  
  const updateAgeUnit = (unit: string) => {
    setAnswers({
      ...answers,
      age: {
        ...answers.age,
        unit
      }
    });
  };
  
  const updateAgeValue = (value: number) => {
    setAnswers({
      ...answers,
      age: {
        ...answers.age,
        value
      }
    });
  };
  
  const updateWeightUnit = (unit: string) => {
    setAnswers({
      ...answers,
      weight: {
        ...answers.weight,
        unit
      }
    });
  };
  
  const updateWeightValue = (value: number) => {
    setAnswers({
      ...answers,
      weight: {
        ...answers.weight,
        value
      }
    });
  };
  
  const updateMultipleAnswer = (question: keyof typeof answers, value: string) => {
    if (Array.isArray(answers[question])) {
      const currentAnswers = answers[question] as string[];
      
      // Toggle selection
      if (currentAnswers.includes(value)) {
        setAnswers({
          ...answers,
          [question]: currentAnswers.filter(item => item !== value)
        });
      } else {
        setAnswers({
          ...answers,
          [question]: [...currentAnswers, value]
        });
      }
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.2, duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  // We're using the item variants defined at the top of the file

  const icons = {
    breedQuestion: Dog,
    ageQuestion: Heart,
    weightQuestion: Star,
    temperamentQuestion: Zap,
    dietaryQuestion: Shield,
    trainingQuestion: User
  };

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to the server
    goToNextQuestion();
  };
  
  return (
    <motion.div 
      className="fixed inset-0 bg-gradient-to-br from-primary/80 to-blue-500/80 backdrop-blur-md flex flex-col z-50 min-h-screen overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-gray-200 z-50 rounded-full bg-black/20 p-2 backdrop-blur-md"
        aria-label="Close questionnaire"
      >
        <X size={24} />
      </button>
      
      {/* Progress indicator */}
      <div className="w-full px-8 pt-6 pb-4 flex items-center justify-between bg-black/10 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <div className="text-white font-semibold">
            {currentQuestion !== "completed" ? `Step ${questionOrder.indexOf(currentQuestion) + 1} of ${questionOrder.length - 1}` : 'Complete!'}
          </div>
        </div>
        <div className="w-1/2 h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-white"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6 }}
          ></motion.div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-8 px-4 md:px-12">
        <motion.div 
          className="bg-white/95 dark:bg-gray-900/95 rounded-3xl shadow-2xl max-w-4xl mx-auto overflow-hidden"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="md:flex">
            {/* Left image panel on larger screens */}
            <div className="hidden md:block md:w-1/3 bg-gradient-to-b from-primary/90 to-blue-600/90 p-8 text-white relative">
              <div className="sticky top-8">
                <h3 className="text-2xl font-bold mb-4 coni-logo">coni</h3>
                <p className="mb-6">Creating the perfect subscription box for your dog's unique needs and personality.</p>
                
                {currentQuestion !== "completed" && Object.entries(icons).map(([key, Icon], index) => (
                  <div 
                    key={key} 
                    className={`flex items-center mb-4 ${questionOrder.indexOf(currentQuestion) >= index ? 'opacity-100' : 'opacity-60'}`}
                  >
                    <div className={`w-8 h-8 rounded-full ${questionOrder.indexOf(currentQuestion) >= index ? 'bg-white text-primary' : 'bg-white/30 text-white/90'} flex items-center justify-center mr-3`}>
                      <Icon size={18} />
                    </div>
                    <span className={questionOrder.indexOf(currentQuestion) >= index ? 'font-medium' : 'text-white/70'}>
                      {key === "breedQuestion" && "Dog Breed"}
                      {key === "ageQuestion" && "Age Information"}
                      {key === "weightQuestion" && "Weight Details"}
                      {key === "temperamentQuestion" && "Temperament"}
                      {key === "dietaryQuestion" && "Dietary Needs"}
                      {key === "trainingQuestion" && "Training Goals"}
                    </span>
                  </div>
                ))}
                
                {/* Abstract decoration */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                  <div className="w-full h-32 bg-gradient-to-t from-purple-200/20 to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Form content */}
            <div className="md:w-2/3 p-8 md:p-12">
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {currentQuestion === "breedQuestion" && (
                    <motion.div
                      key="breedQuestion"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What is your dog's breed (or mix)?</h2>
                      <p className="text-gray-600 dark:text-gray-300">Let us know what kind of dog we're customizing for.</p>
                      
                      <div className="mt-4">
                        <input
                          type="text"
                          value={answers.breed}
                          onChange={(e) => updateAnswer("breed", e.target.value)}
                          placeholder="E.g., Labrador Retriever, Poodle mix, etc."
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div className="flex justify-end mt-8">
                        <button
                          type="button"
                          onClick={goToNextQuestion}
                          disabled={!answers.breed.trim()}
                          className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          Next <ChevronRight size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                  
                  {currentQuestion === "ageQuestion" && (
                    <motion.div
                      key="ageQuestion"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How old is your dog?</h2>
                      <p className="text-gray-600 dark:text-gray-300">Age helps us select age-appropriate items for your dog.</p>
                      
                      <div className="mt-6 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl">
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                          <div className="w-full sm:w-2/3 flex items-center">
                            <input
                              type="number"
                              min="0"
                              max="30"
                              value={answers.age.value}
                              onChange={(e) => updateAgeValue(parseInt(e.target.value) || 0)}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary text-center text-xl"
                            />
                          </div>
                          
                          <div className="w-full sm:w-1/3">
                            <div className="flex rounded-xl overflow-hidden">
                              <button 
                                type="button"
                                onClick={() => updateAgeUnit("months")}
                                className={`flex-1 py-3 px-4 text-center transition-colors ${answers.age.unit === 'months' 
                                  ? 'bg-primary text-white' 
                                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                              >
                                Months
                              </button>
                              <button 
                                type="button"
                                onClick={() => updateAgeUnit("years")}
                                className={`flex-1 py-3 px-4 text-center transition-colors ${answers.age.unit === 'years' 
                                  ? 'bg-primary text-white' 
                                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                              >
                                Years
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                          Your dog is {answers.age.value} {answers.age.unit}
                          {answers.age.value !== 1 ? '' : answers.age.unit === 'years' ? ' old' : ' old'}
                        </div>
                      </div>
                      
                      <div className="flex justify-between mt-8">
                        <button
                          type="button"
                          onClick={goToPreviousQuestion}
                          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                        >
                          <ChevronLeft size={18} /> Back
                        </button>
                        <button
                          type="button"
                          onClick={goToNextQuestion}
                          disabled={answers.age.value === 0}
                          className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          Next <ChevronRight size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                  
                  {currentQuestion === "weightQuestion" && (
                    <motion.div
                      key="weightQuestion"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What is your dog's weight?</h2>
                      <p className="text-gray-600 dark:text-gray-300">Weight helps us select appropriate sized toys and treats.</p>
                      
                      <div className="mt-6 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl">
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                          <div className="w-full sm:w-2/3 flex items-center">
                            <input
                              type="number"
                              min="0"
                              max="200"
                              value={answers.weight.value}
                              onChange={(e) => updateWeightValue(parseInt(e.target.value) || 0)}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary text-center text-xl"
                            />
                          </div>
                          
                          <div className="w-full sm:w-1/3">
                            <div className="flex rounded-xl overflow-hidden">
                              <button 
                                type="button"
                                onClick={() => updateWeightUnit("lbs")}
                                className={`flex-1 py-3 px-4 text-center transition-colors ${answers.weight.unit === 'lbs' 
                                  ? 'bg-primary text-white' 
                                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                              >
                                lbs
                              </button>
                              <button 
                                type="button"
                                onClick={() => updateWeightUnit("kg")}
                                className={`flex-1 py-3 px-4 text-center transition-colors ${answers.weight.unit === 'kg' 
                                  ? 'bg-primary text-white' 
                                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                              >
                                kg
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                          Your dog weighs {answers.weight.value} {answers.weight.unit}
                        </div>
                        
                        <div className="mt-6 bg-primary/5 rounded-xl p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700 dark:text-gray-300 text-sm">Small</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm">Large</span>
                          </div>
                          <div 
                            className="relative h-8 cursor-pointer" 
                            onClick={(e) => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              const x = e.clientX - rect.left;
                              const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
                              
                              // Convert percentage back to weight value
                              const maxWeight = answers.weight.unit === 'lbs' ? 100 : 45;
                              const newValue = Math.round((percentage / 100) * maxWeight);
                              updateWeightValue(newValue);
                            }}
                          >
                            <div className="absolute top-3 left-0 right-0 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                              <motion.div 
                                className="absolute top-0 left-0 bottom-0 bg-primary rounded-full"
                                style={{ 
                                  width: `${Math.min(100, (answers.weight.unit === 'lbs' 
                                    ? Math.max(0, answers.weight.value / 100) * 100 
                                    : Math.max(0, answers.weight.value / 45) * 100))}%` 
                                }}
                              />
                            </div>
                            <motion.div 
                              className="absolute w-6 h-6 bg-white border-2 border-primary rounded-full top-1 -ml-3 shadow-md cursor-grab active:cursor-grabbing"
                              style={{ 
                                left: `${Math.min(100, (answers.weight.unit === 'lbs' 
                                  ? Math.max(0, answers.weight.value / 100) * 100 
                                  : Math.max(0, answers.weight.value / 45) * 100))}%` 
                              }}
                              drag="x"
                              dragConstraints={{ left: 0, right: 0 }}
                              dragElastic={0}
                              dragMomentum={false}
                              onDrag={(e, info) => {
                                const element = e.currentTarget as HTMLElement;
                                const parentElement = element.parentElement;
                                if (!parentElement) return;
                                
                                const rect = parentElement.getBoundingClientRect();
                                const x = info.point.x - rect.left;
                                const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
                                
                                // Convert percentage back to weight value
                                const maxWeight = answers.weight.unit === 'lbs' ? 100 : 45;
                                const newValue = Math.round((percentage / 100) * maxWeight);
                                updateWeightValue(newValue);
                              }}
                            />
                          </div>
                          <div className="flex justify-between mt-4">
                            <span className="text-xs text-gray-600 dark:text-gray-400">0</span>
                            <span className="text-xs text-gray-600 dark:text-gray-400">
                              {answers.weight.unit === 'lbs' ? '100+ lbs' : '45+ kg'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between mt-8">
                        <button
                          type="button"
                          onClick={goToPreviousQuestion}
                          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                        >
                          <ChevronLeft size={18} /> Back
                        </button>
                        <button
                          type="button"
                          onClick={goToNextQuestion}
                          disabled={answers.weight.value === 0}
                          className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          Next <ChevronRight size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                  
                  {currentQuestion === "temperamentQuestion" && (
                    <motion.div
                      key="temperamentQuestion"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How would you describe your dog's energy level and temperament?</h2>
                      <p className="text-gray-600 dark:text-gray-300">This helps us match toys and activities to your dog's personality.</p>
                      
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { 
                            id: "high", 
                            label: "High Energy", 
                            emoji: "🏃‍♂️", 
                            description: "Constantly active, loves to run and play.",
                            color: "from-red-500/10 to-red-400/5",
                            hover: "group-hover:text-red-500"
                          },
                          { 
                            id: "moderate", 
                            label: "Moderate Energy", 
                            emoji: "🐕", 
                            description: "Enjoys playtime but also relaxes when needed.",
                            color: "from-amber-500/10 to-yellow-400/5",
                            hover: "group-hover:text-amber-500"
                          },
                          { 
                            id: "low", 
                            label: "Low Energy", 
                            emoji: "😴", 
                            description: "Prefers lounging and is less active.",
                            color: "from-blue-500/10 to-blue-400/5",
                            hover: "group-hover:text-blue-500"
                          },
                          { 
                            id: "sensitive", 
                            label: "Sensitive", 
                            emoji: "🤔", 
                            description: "Easily overwhelmed or shy; takes time to warm up.",
                            color: "from-purple-500/10 to-purple-400/5",
                            hover: "group-hover:text-purple-500"
                          },
                          { 
                            id: "mixed", 
                            label: "Mixed/Not Sure", 
                            emoji: "❓", 
                            description: "A blend of the above or not clearly defined.",
                            color: "from-gray-500/10 to-gray-400/5",
                            hover: "group-hover:text-gray-500"
                          }
                        ].map((option, index) => (
                          <motion.div 
                            key={option.id}
                            onClick={() => updateAnswer("temperament", option.id)}
                            className={`p-5 cursor-pointer group hover:shadow-lg transition-all duration-300 
                              ${answers.temperament === option.id 
                                ? 'bg-gradient-to-br border-2 border-primary/50 shadow-lg' 
                                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'} 
                              rounded-2xl ${option.id === 'mixed' ? 'md:col-span-2' : ''}`}
                            variants={itemVariants}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ y: -5 }}
                            style={{
                              background: answers.temperament === option.id 
                                ? `linear-gradient(to bottom right, var(--primary-color-10), var(--primary-color-5))` 
                                : undefined
                            }}
                          >
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                  <span className="text-2xl mr-3">{option.emoji}</span>
                                  <h3 className={`font-bold text-lg ${answers.temperament === option.id ? 'text-primary' : `${option.hover}`}`}>
                                    {option.label}
                                  </h3>
                                </div>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center 
                                  ${answers.temperament === option.id 
                                    ? 'border-primary bg-primary/10' 
                                    : 'border-gray-300 group-hover:border-primary/50'}`}>
                                  {answers.temperament === option.id && (
                                    <motion.div 
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="w-3 h-3 rounded-full bg-primary"
                                    />
                                  )}
                                </div>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400">{option.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between mt-8">
                        <button
                          type="button"
                          onClick={goToPreviousQuestion}
                          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                        >
                          <ChevronLeft size={18} /> Back
                        </button>
                        <button
                          type="button"
                          onClick={goToNextQuestion}
                          disabled={!answers.temperament}
                          className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          Next <ChevronRight size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                  
                  {currentQuestion === "dietaryQuestion" && (
                    <motion.div
                      key="dietaryQuestion"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Does your dog have any dietary restrictions, allergies, or health concerns?</h2>
                      <p className="text-gray-600 dark:text-gray-300">Select all that apply. This ensures we only include safe treats for your dog.</p>
                      
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { 
                            id: "none", 
                            label: "No Restrictions", 
                            emoji: "✅", 
                            description: "No known restrictions or allergies.",
                            color: "from-green-500/10 to-green-400/5"
                          },
                          { 
                            id: "food-allergies", 
                            label: "Food Allergies", 
                            emoji: "🍗", 
                            description: "Allergies to chicken, beef, wheat, or dairy.",
                            color: "from-rose-500/10 to-rose-400/5"
                          },
                          { 
                            id: "special-diet", 
                            label: "Special Diet", 
                            emoji: "🥦", 
                            description: "Requires grain-free, limited ingredient, or organic food.",
                            color: "from-blue-500/10 to-blue-400/5"
                          },
                          { 
                            id: "health-concerns", 
                            label: "Health Concerns", 
                            emoji: "🩺", 
                            description: "Digestive issues, skin sensitivities, or joint problems.",
                            color: "from-amber-500/10 to-amber-400/5"
                          },
                          { 
                            id: "not-sure", 
                            label: "Not Sure/Other", 
                            emoji: "❓", 
                            description: "I'm uncertain or have additional considerations not listed.",
                            color: "from-gray-500/10 to-gray-400/5"
                          }
                        ].map((option, index) => (
                          <motion.div 
                            key={option.id}
                            onClick={() => updateMultipleAnswer("dietary", option.id)}
                            className={`p-5 cursor-pointer group hover:shadow-lg transition-all duration-300
                              ${answers.dietary.includes(option.id) 
                                ? 'bg-gradient-to-br border-2 border-primary/50 shadow-lg' 
                                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'} 
                              rounded-2xl ${option.id === 'not-sure' ? 'md:col-span-2' : ''}`}
                            variants={itemVariants}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ y: -3 }}
                            style={{
                              background: answers.dietary.includes(option.id) 
                                ? `linear-gradient(to bottom right, var(--primary-color-10), var(--primary-color-5))` 
                                : undefined
                            }}
                          >
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                  <span className="text-2xl mr-3">{option.emoji}</span>
                                  <h3 className={`font-bold text-lg ${answers.dietary.includes(option.id) ? 'text-primary' : 'group-hover:text-primary'}`}>
                                    {option.label}
                                  </h3>
                                </div>
                                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center 
                                  ${answers.dietary.includes(option.id) 
                                    ? 'border-primary bg-primary/10' 
                                    : 'border-gray-300 group-hover:border-primary/50'}`}>
                                  {answers.dietary.includes(option.id) && (
                                    <motion.div 
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="w-3 h-3 bg-primary"
                                    />
                                  )}
                                </div>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400">{option.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between mt-8">
                        <button
                          type="button"
                          onClick={goToPreviousQuestion}
                          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                        >
                          <ChevronLeft size={18} /> Back
                        </button>
                        <button
                          type="button"
                          onClick={goToNextQuestion}
                          disabled={answers.dietary.length === 0}
                          className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          Next <ChevronRight size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                  
                  {currentQuestion === "trainingQuestion" && (
                    <motion.div
                      key="trainingQuestion"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What are your main training or behavior goals/challenges with your dog?</h2>
                      <p className="text-gray-600 dark:text-gray-300">This helps us include appropriate training tools and resources.</p>
                      
                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { 
                            id: "potty", 
                            label: "Potty Training", 
                            emoji: "🚽", 
                            description: "Establishing a consistent bathroom routine.",
                            color: "from-cyan-500/10 to-cyan-400/5"
                          },
                          { 
                            id: "chewing", 
                            label: "Chewing & Biting", 
                            emoji: "🦷", 
                            description: "Preventing destructive chewing or inappropriate biting.",
                            color: "from-orange-500/10 to-orange-400/5"
                          },
                          { 
                            id: "socialization", 
                            label: "Socialization", 
                            emoji: "🐶", 
                            description: "Helping your dog interact confidently with people and other dogs.",
                            color: "from-indigo-500/10 to-indigo-400/5"
                          },
                          { 
                            id: "obedience", 
                            label: "Basic Obedience", 
                            emoji: "👆", 
                            description: "Teaching foundational commands like sit, stay, and come.",
                            color: "from-green-500/10 to-green-400/5"
                          },
                          { 
                            id: "barking", 
                            label: "Barking & Anxiety", 
                            emoji: "😨", 
                            description: "Managing anxiety-related behaviors or over-exuberant barking.",
                            color: "from-purple-500/10 to-purple-400/5"
                          },
                          { 
                            id: "other", 
                            label: "Other Goals", 
                            emoji: "🎯", 
                            description: "I have a different primary training challenge or goal.",
                            color: "from-gray-500/10 to-gray-400/5"
                          }
                        ].map((option, index) => (
                          <motion.div 
                            key={option.id}
                            onClick={() => updateAnswer("training", option.id)}
                            className={`p-5 cursor-pointer group hover:shadow-lg transition-all duration-300
                              ${answers.training === option.id 
                                ? 'bg-gradient-to-br border-2 border-primary/50 shadow-lg' 
                                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'} 
                              rounded-2xl`}
                            variants={itemVariants}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ y: -3 }}
                            style={{
                              background: answers.training === option.id 
                                ? `linear-gradient(to bottom right, var(--primary-color-10), var(--primary-color-5))` 
                                : undefined
                            }}
                          >
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center">
                                  <span className="text-2xl mr-3">{option.emoji}</span>
                                  <h3 className={`font-bold text-lg ${answers.training === option.id ? 'text-primary' : 'group-hover:text-primary'}`}>
                                    {option.label}
                                  </h3>
                                </div>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center 
                                  ${answers.training === option.id 
                                    ? 'border-primary bg-primary/10' 
                                    : 'border-gray-300 group-hover:border-primary/50'}`}>
                                  {answers.training === option.id && (
                                    <motion.div 
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="w-3 h-3 rounded-full bg-primary"
                                    />
                                  )}
                                </div>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400">{option.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between mt-8">
                        <button
                          type="button"
                          onClick={goToPreviousQuestion}
                          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                        >
                          <ChevronLeft size={18} /> Back
                        </button>
                        <button
                          type="button"
                          onClick={goToNextQuestion}
                          disabled={!answers.training}
                          className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                          Submit <Check size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                  
                  {currentQuestion === "completed" && (
                    <motion.div
                      key="completed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-8 text-center py-10"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                        className="w-24 h-24 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto"
                      >
                        <Check size={50} />
                      </motion.div>
                      
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Perfect! We've got all we need</h2>
                      <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                        Thank you for providing information about your dog! We'll use this to customize the perfect subscription box.
                      </p>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8"
                      >
                        <button
                          type="button"
                          onClick={onClose}
                          className="px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
                        >
                          Get Started
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}