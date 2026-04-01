import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SocialProofSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-padding">
      <div className="container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Coming soon</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Make better calls before the line makes them for you.
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We're building Live with early users in Toronto. Join the waitlist to be first in line.
          </p>
          <Button variant="hero" size="lg" onClick={() => scrollTo("waitlist")}>
            Join the Waitlist
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
