import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-padding">
      <div className="container max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Your next night out should take less guessing.
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get on the list for early access, product updates, and launch drops in your city.
          </p>
          <Button variant="hero" size="lg" onClick={() => scrollTo("waitlist")}>
            Join the Waitlist
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
