import { motion } from "framer-motion";
import mapScreen from "@/assets/phone-mockup-map.jpg";
import venueScreen from "@/assets/phone-mockup-venue.jpg";

const steps = [
  { num: "01", title: "Open Live", desc: "Check what nearby venues look like right now — busyness, wait signals, and vibe." },
  { num: "02", title: "Compare options", desc: "Pivot to a better nearby spot if your first pick is too packed." },
  { num: "03", title: "Sync with friends", desc: "See where your crew is out and meet up without the group chat chaos." },
];

const PhoneFrame = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-[200px] md:w-[240px]">
    <div className="rounded-[2rem] border-[5px] border-[hsl(var(--border))] bg-card overflow-hidden shadow-xl">
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-card rounded-b-xl" />
  </div>
);

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
        <h2 className="font-display text-3xl md:text-4xl font-bold">Three steps to a better night.</h2>
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
          className="flex justify-center gap-6"
        >
          <div className="mt-8">
            <PhoneFrame src={mapScreen} alt="Live app map view showing nearby venues and friends" />
          </div>
          <div className="-mt-4">
            <PhoneFrame src={venueScreen} alt="Live app venue detail with hours, vibe, and wait data" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
