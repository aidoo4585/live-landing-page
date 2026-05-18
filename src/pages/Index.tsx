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
  <div className="relative min-h-screen overflow-x-clip bg-background">
    {/* Ambient background orbs */}
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-[-14rem] top-20 h-[28rem] w-[28rem] rounded-full bg-primary/8 blur-[160px]" />
      <div className="absolute right-[-12rem] top-[32rem] h-[22rem] w-[22rem] rounded-full bg-primary/6 blur-[140px]" />
      <div className="absolute left-1/2 top-[70%] -translate-x-1/2 h-[18rem] w-[36rem] rounded-full bg-amber-800/6 blur-[120px]" />
      {/* Subtle top vignette */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/40 to-transparent" />
    </div>
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
