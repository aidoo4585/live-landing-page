import { motion } from "framer-motion";
import { Clock, MapPinOff, Users } from "lucide-react";

const problems = [
  { icon: Clock, label: "01", text: "Long lines you didn't expect" },
  { icon: MapPinOff, label: "02", text: "Bad venue picks you can't take back" },
  { icon: Users, label: "03", text: "Scattered group plans that go nowhere" },
];

const ProblemSection = () => (
  <section className="section-padding">
    <div className="container text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow mb-4">The problem</p>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
          Going out shouldn't feel like a gamble.
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-muted-foreground leading-relaxed">
          Long lines, bad venue picks, and scattered plans kill momentum fast. Live cuts the friction before the night stalls out.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-3">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-surface rounded-[1.5rem] p-6 text-left relative overflow-hidden group hover:border-border/90 transition-colors duration-300"
          >
            {/* Large decorative numeral */}
            <span className="absolute -top-3 -right-1 font-display font-extrabold text-[7rem] leading-none text-primary/5 pointer-events-none select-none group-hover:text-primary/8 transition-colors duration-500">
              {p.label}
            </span>
            <div className="relative">
              <div className="mb-5 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/8">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground text-base md:text-lg leading-snug font-medium">{p.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
