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
          className="section-shell px-6 py-10 md:px-10 md:py-14"
        >
          <p className="eyebrow mb-4">Stay in the loop</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Your next night out should take less guessing.
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Get the App Store link as soon as Live is available.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button variant="hero" size="lg" onClick={() => scrollTo("waitlist")}>
              Get the App Store Link
            </Button>
            <p className="text-sm text-muted-foreground">Toronto first. More cities follow after rollout.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
