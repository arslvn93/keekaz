import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatsInside from "@/components/WhatsInside";
import LifeStages from "@/components/LifeStages";
import AIAssistant from "@/components/AIAssistant";
import Brands from "@/components/Brands";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HoveringDogs from "@/components/HoveringDogs";
import ScrollRevealSection from "@/components/ScrollRevealSection";
import StorytellingSection from "@/components/StorytellingSection";
import PuppyQuestionnaire from "../components/PuppyQuestionnaire";

export default function LandingPage() {
  const [isQuestionnaireOpen, setQuestionnaireOpen] = useState(false);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const openQuestionnaire = () => {
    setQuestionnaireOpen(true);
    // Prevent scrolling when questionnaire is open
    document.body.style.overflow = 'hidden';
  };

  const closeQuestionnaire = () => {
    setQuestionnaireOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Header onStartClick={openQuestionnaire} />
      <main>
        <Hero onStartClick={openQuestionnaire} />
        <ScrollRevealSection onStartClick={openQuestionnaire} />
        <StorytellingSection onStartClick={openQuestionnaire} />
        <WhatsInside />
        <HoveringDogs />
        <LifeStages />
        <AIAssistant />
        <Brands />
        <Pricing onStartClick={openQuestionnaire} />
        <CTASection onStartClick={openQuestionnaire} />
        
        {/* Questionnaire Modal */}
        {isQuestionnaireOpen && (
          <PuppyQuestionnaire onClose={closeQuestionnaire} />
        )}
      </main>
      <Footer />
    </div>
  );
}
