import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const VenueOwnerSection = () => (
  <section id="venue-partners" className="section-padding">
    <div className="container max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-surface rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Building2 className="w-6 h-6 text-primary" />
        </div>
        <div>
          <p className="eyebrow mb-4">For venues</p>
          <h3 className="font-display text-xl font-semibold mb-2">Own or run a venue?</h3>
          <p className="text-muted-foreground mb-5 leading-relaxed">
            We&apos;re exploring future tools for venues that want to show up in better nightlife decisions. If you&apos;re interested in partner access, we&apos;d like to hear from you.
          </p>
          <Button variant="hero-outline" size="sm" asChild>
            <a href="mailto:venues@getlive.app">Join as a venue partner</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default VenueOwnerSection;
