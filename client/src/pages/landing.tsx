import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatsInside from "@/components/WhatsInside";
import LifeStages from "@/components/LifeStages";
import AIAssistant from "@/components/AIAssistant";
import Brands from "@/components/Brands";
import Pricing from "@/components/Pricing";
import WhoNeedsTailwag from "@/components/WhoNeedsTailwag";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HoveringDogs from "@/components/HoveringDogs";

export default function LandingPage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhatsInside />
        <HoveringDogs />
        <LifeStages />
        <AIAssistant />
        <Brands />
        <Pricing />
        <WhoNeedsTailwag />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
