import { motion } from "framer-motion";
import { Eye, ArrowRightLeft, Users } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Skip the bad call",
    desc: "Check live wait and busyness signals before you commit to a venue.",
  },
  {
    icon: ArrowRightLeft,
    title: "Pivot fast",
    desc: "If your spot is too packed, Live points you to a nearby alternative instead of killing the night.",
  },
  {
    icon: Users,
    title: "Find your crew",
    desc: "See where friends are out and make it easier to end up in the same place.",
  },
];

const BenefitsSection = () => (
  <section id="benefits" className="section-padding">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">Why Live</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Real-time info for real nightlife decisions.</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-surface rounded-2xl p-7 group hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{b.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
