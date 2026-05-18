import { motion } from "framer-motion";
import mapScreen from "@/assets/phone-mockup-map.jpg";
import venueScreen from "@/assets/phone-mockup-venue.jpg";

const steps = [
  { num: "01", title: "Check what it looks like right now", desc: "Open Live to see live wait signals, busyness, and venue context before you commit." },
  { num: "02", title: "Pivot to a better nearby spot", desc: "If your first choice is too packed, Live helps you make a smarter call nearby." },
  { num: "03", title: "Sync up with friends", desc: "See where your crew is and make it easier to end up in the same place." },
];

const PhoneFrame = ({ src, alt, offsetScreen = false }: { src: string; alt: string; offsetScreen?: boolean }) => (
  <div className="relative w-[200px] md:w-[240px]">
    <div className="phone-screen-frame rounded-[2rem] border-[5px] border-[hsl(var(--border))] bg-card overflow-hidden shadow-xl shadow-black/40">
      <img src={src} alt={alt} className={`${offsetScreen ? "phone-screen-image" : ""} w-full h-auto`} />
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
        <p className="eyebrow mb-4">How it works</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">How Live works</h2>
      </motion.div>

      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
        <div className="section-shell p-6 md:p-8 space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex gap-5 items-start rounded-[1.25rem] border border-transparent bg-background/20 p-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                <span className="font-display text-lg font-bold text-primary">{s.num}</span>
              </div>
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
          className="relative flex justify-center gap-4 md:gap-6"
        >
          <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="mt-8">
            <PhoneFrame src={mapScreen} alt="Live app map view showing nearby venues and friends" />
          </div>
          <div className="-mt-4">
            <PhoneFrame src={venueScreen} alt="Live app venue detail with hours, vibe, and wait data" offsetScreen />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
