import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroScreen from "@/assets/phone-mockup-hero.jpg";

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
            <div className="relative w-[260px] md:w-[300px] lg:w-[320px]">
              <div className="rounded-[2.5rem] border-[6px] border-[hsl(var(--border))] bg-card overflow-hidden shadow-2xl">
                <img
                  src={heroScreen}
                  alt="Live app showing nearby clubs with busyness indicators"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-card rounded-b-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
