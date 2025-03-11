import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
    age: "",
    weight: "",
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
    }
  };
  
  const goToPreviousQuestion = () => {
    const currentIndex = questionOrder.indexOf(currentQuestion);
    if (currentIndex > 0) {
      setCurrentQuestion(questionOrder[currentIndex - 1]);
    }
  };
  
  // Answer update functions
  const updateAnswer = (question: keyof typeof answers, value: string) => {
    setAnswers({
      ...answers,
      [question]: value
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

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to the server
    goToNextQuestion();
  };
  
  return (
    <motion.div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div 
        className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl relative"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 z-10"
        >
          <X size={24} />
        </button>
        
        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-800">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="p-8">
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
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What is your puppy's breed (or mix)?</h2>
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
                      className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
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
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How old is your puppy (in months)?</h2>
                  <p className="text-gray-600 dark:text-gray-300">Age helps us select age-appropriate items for your puppy.</p>
                  
                  <div className="mt-4">
                    <input
                      type="number"
                      value={answers.age}
                      onChange={(e) => updateAnswer("age", e.target.value)}
                      placeholder="E.g., 4"
                      min="1"
                      max="24"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={goToPreviousQuestion}
                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={goToNextQuestion}
                      disabled={!answers.age.trim()}
                      className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
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
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What is your puppy's current weight (in pounds)?</h2>
                  <p className="text-gray-600 dark:text-gray-300">Weight helps us choose appropriate sized toys and treats.</p>
                  
                  <div className="mt-4">
                    <input
                      type="number"
                      value={answers.weight}
                      onChange={(e) => updateAnswer("weight", e.target.value)}
                      placeholder="E.g., 15"
                      min="1"
                      max="150"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={goToPreviousQuestion}
                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={goToNextQuestion}
                      disabled={!answers.weight.trim()}
                      className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
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
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How would you describe your puppy's energy level and temperament?</h2>
                  <p className="text-gray-600 dark:text-gray-300">This helps us match toys and activities to your puppy's personality.</p>
                  
                  <div className="mt-4 space-y-3">
                    {[
                      { id: "high", label: "High energy & playful: Constantly active, loves to run and play." },
                      { id: "moderate", label: "Moderate energy & friendly: Enjoys playtime but also relaxes when needed." },
                      { id: "low", label: "Low energy & calm: Prefers lounging and is less active." },
                      { id: "sensitive", label: "Sensitive & cautious: Easily overwhelmed or shy; takes time to warm up." },
                      { id: "mixed", label: "Mixed/Not sure: A blend of the above or not clearly defined." }
                    ].map((option) => (
                      <div 
                        key={option.id}
                        onClick={() => updateAnswer("temperament", option.id)}
                        className={`p-4 border ${answers.temperament === option.id ? 'border-primary bg-primary/5' : 'border-gray-300 dark:border-gray-700'} rounded-xl cursor-pointer hover:border-primary transition-colors`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${answers.temperament === option.id ? 'border-primary' : 'border-gray-400'}`}>
                            {answers.temperament === option.id && (
                              <div className="w-3 h-3 rounded-full bg-primary"></div>
                            )}
                          </div>
                          <span className="text-gray-900 dark:text-white">{option.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={goToPreviousQuestion}
                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={goToNextQuestion}
                      disabled={!answers.temperament}
                      className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
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
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Does your puppy have any dietary restrictions, allergies, or health concerns?</h2>
                  <p className="text-gray-600 dark:text-gray-300">Select all that apply. This ensures we only include safe treats for your puppy.</p>
                  
                  <div className="mt-4 space-y-3">
                    {[
                      { id: "none", label: "No known restrictions or allergies." },
                      { id: "food-allergies", label: "Food allergies: For example, allergies to chicken, beef, wheat, or dairy." },
                      { id: "special-diet", label: "Special dietary needs: Requires grain-free, limited ingredient, or organic food." },
                      { id: "health-concerns", label: "Health concerns: Such as digestive issues, skin sensitivities, or joint problems." },
                      { id: "not-sure", label: "Not sure/Other: I'm uncertain or have additional considerations not listed." }
                    ].map((option) => (
                      <div 
                        key={option.id}
                        onClick={() => updateMultipleAnswer("dietary", option.id)}
                        className={`p-4 border ${answers.dietary.includes(option.id) ? 'border-primary bg-primary/5' : 'border-gray-300 dark:border-gray-700'} rounded-xl cursor-pointer hover:border-primary transition-colors`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${answers.dietary.includes(option.id) ? 'border-primary' : 'border-gray-400'}`}>
                            {answers.dietary.includes(option.id) && (
                              <div className="w-3 h-3 bg-primary"></div>
                            )}
                          </div>
                          <span className="text-gray-900 dark:text-white">{option.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={goToPreviousQuestion}
                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={goToNextQuestion}
                      disabled={answers.dietary.length === 0}
                      className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
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
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What are your main training or behavior goals/challenges with your puppy?</h2>
                  <p className="text-gray-600 dark:text-gray-300">This helps us include appropriate training tools and resources.</p>
                  
                  <div className="mt-4 space-y-3">
                    {[
                      { id: "potty", label: "Housebreaking/Potty Training: Establishing a consistent bathroom routine." },
                      { id: "chewing", label: "Chewing & Biting Control: Preventing destructive chewing or inappropriate biting." },
                      { id: "socialization", label: "Socialization: Helping the puppy interact confidently with people and other dogs." },
                      { id: "obedience", label: "Basic Obedience & Commands: Teaching foundational commands like sit, stay, and come." },
                      { id: "barking", label: "Excessive Barking/Anxiety: Managing anxiety-related behaviors or over-exuberant barking." },
                      { id: "other", label: "Other: I have a different primary training challenge or goal." }
                    ].map((option) => (
                      <div 
                        key={option.id}
                        onClick={() => updateAnswer("training", option.id)}
                        className={`p-4 border ${answers.training === option.id ? 'border-primary bg-primary/5' : 'border-gray-300 dark:border-gray-700'} rounded-xl cursor-pointer hover:border-primary transition-colors`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${answers.training === option.id ? 'border-primary' : 'border-gray-400'}`}>
                            {answers.training === option.id && (
                              <div className="w-3 h-3 rounded-full bg-primary"></div>
                            )}
                          </div>
                          <span className="text-gray-900 dark:text-white">{option.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={goToPreviousQuestion}
                      className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={goToNextQuestion}
                      disabled={!answers.training}
                      className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Submit
                    </button>
                  </div>
                </motion.div>
              )}
              
              {currentQuestion === "completed" && (
                <motion.div
                  key="completed"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="py-8 text-center space-y-6"
                >
                  <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Thank you!</h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    We've received your information and are creating a customized plan for your puppy. 
                    Your first <span className="coni-logo font-bold">coni</span> box will be tailored specifically to meet your puppy's needs.
                  </p>
                  
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}