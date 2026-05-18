import { motion } from "framer-motion";
import { Eye, ArrowRightLeft, Users } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    kicker: "Read the room first",
    title: "Skip the bad call",
    desc: "Check live wait and busyness signals before you commit to a venue.",
    accent: "from-primary/8 to-transparent",
  },
  {
    icon: ArrowRightLeft,
    kicker: "Keep the night moving",
    title: "Pivot fast",
    desc: "If your spot is too packed, Live points you to a nearby alternative instead of killing the night.",
    accent: "from-amber-700/6 to-transparent",
  },
  {
    icon: Users,
    kicker: "Stop splitting the crew",
    title: "Find your crew",
    desc: "See where friends are out and make it easier to end up in the same place.",
    accent: "from-amber-900/8 to-transparent",
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
        <p className="eyebrow mb-4">Why Live</p>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold">
          Make smarter moves,{" "}
          <span className="text-gradient-primary">not more moves.</span>
        </h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-3">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="glass-surface rounded-[1.75rem] p-7 group transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${b.accent} pointer-events-none rounded-[1.75rem]`} />
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-primary/12 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors border border-primary/10">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="mb-2 text-[0.66rem] font-bold uppercase tracking-[0.26em] text-primary/75">{b.kicker}</p>
              <h3 className="font-display text-xl font-bold mb-3 leading-snug">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[0.95rem]">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
