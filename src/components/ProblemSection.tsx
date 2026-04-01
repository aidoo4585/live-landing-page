import { motion } from "framer-motion";
import { Clock, MapPinOff, Users } from "lucide-react";

const problems = [
  { icon: Clock, text: "Long lines you didn't expect" },
  { icon: MapPinOff, text: "Bad venue picks you can't take back" },
  { icon: Users, text: "Scattered group plans that go nowhere" },
];

const ProblemSection = () => (
  <section className="section-padding">
    <div className="container max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">The problem</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
          Going out shouldn't feel like a gamble.
        </h2>
      </motion.div>

      <div className="grid gap-5">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-surface rounded-xl p-5 flex items-center gap-4 text-left"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <p.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-foreground text-base md:text-lg">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
