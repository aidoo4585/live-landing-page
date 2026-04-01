import { motion } from "framer-motion";
import featuresPhone from "@/assets/phone-mockup-features.png";

const steps = [
  { num: "01", title: "Open Live", desc: "See what's happening at nearby venues right now." },
  { num: "02", title: "Check the vibe", desc: "View wait signals and busyness before you leave the house." },
  { num: "03", title: "Find alternatives", desc: "Too packed? Get smart nearby suggestions instantly." },
  { num: "04", title: "Link up", desc: "See where your friends are and meet up effortlessly." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">How it works</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Four steps to a better night.</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex gap-5 items-start"
            >
              <span className="font-display text-2xl font-bold text-primary/40">{s.num}</span>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={featuresPhone}
            alt="Live app map and friends views"
            loading="lazy"
            width={500}
            height={384}
            className="w-full max-w-[500px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
