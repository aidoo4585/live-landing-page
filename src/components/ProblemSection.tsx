import { motion } from "framer-motion";

const problems = [
  { emoji: "😤", text: "You drive 30 minutes to a bar that's dead" },
  { emoji: "📱", text: "You check Instagram stories but they're 3 hours old" },
  { emoji: "🤷", text: "Your group can't agree on where to go so nobody goes" },
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
          Nights out shouldn't feel like gambling.
        </h2>
      </motion.div>

      <div className="grid gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-surface rounded-xl p-5 flex items-center gap-4 text-left"
          >
            <span className="text-2xl">{p.emoji}</span>
            <p className="text-foreground text-base md:text-lg">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
