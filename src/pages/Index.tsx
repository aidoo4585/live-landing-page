import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SocialProofSection from "@/components/SocialProofSection";
import WaitlistSection from "@/components/WaitlistSection";
import VenueOwnerSection from "@/components/VenueOwnerSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <BenefitsSection />
    <HowItWorksSection />
    <SocialProofSection />
    <WaitlistSection />
    <VenueOwnerSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
  </div>
);

export default Index;
