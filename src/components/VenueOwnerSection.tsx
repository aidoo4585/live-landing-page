import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const VenueOwnerSection = () => (
  <section className="section-padding">
    <div className="container max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-surface rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Building2 className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold mb-2">Own a venue?</h3>
          <p className="text-muted-foreground mb-5 leading-relaxed">
            Live helps venues get discovered by people already nearby and ready to go out. Early venue partners get priority placement and direct access to our team.
          </p>
          <Button variant="hero-outline" size="sm" asChild>
            <a href="mailto:venues@getlive.app">Get in Touch</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default VenueOwnerSection;
