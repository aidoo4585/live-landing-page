import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroPhone from "@/assets/phone-mockup-hero.png";

const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-padding pt-28 md:pt-36 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Know where the night is worth it{" "}
              <span className="text-gradient-primary">before you get there.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Live shows real-time wait signals, smart nearby alternatives, and where your friends are — so you can stop guessing and start going.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" onClick={() => scrollTo("waitlist")}>
                Join the Waitlist
              </Button>
              <Button variant="hero-outline" size="lg" onClick={() => scrollTo("how-it-works")}>
                See How It Works
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src={heroPhone}
              alt="Live app showing nearby clubs with busyness indicators"
              width={420}
              height={420}
              className="w-[300px] md:w-[380px] lg:w-[420px] animate-float drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
