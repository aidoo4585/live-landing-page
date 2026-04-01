import { motion } from "framer-motion";
import { MapPin, Compass, Globe } from "lucide-react";

const points = [
  { icon: MapPin, text: "Currently live in Toronto" },
  { icon: Compass, text: "Built for real nightlife decisions" },
  { icon: Globe, text: "More cities coming soon" },
];

const SocialProofSection = () => (
  <section className="section-padding">
    <div className="container max-w-3xl">
      <div className="grid sm:grid-cols-3 gap-5">
        {points.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-surface rounded-xl p-6 text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <p.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-foreground font-medium text-sm">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
