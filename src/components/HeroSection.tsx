import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroScreen from "@/assets/phone-mockup-hero.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-padding pt-28 md:pt-36 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-8 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            {/* Live eyebrow with pulsing dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="eyebrow">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                  <span className="live-dot relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                Live · Toronto
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display text-[2.6rem] md:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.08] tracking-tight mb-6"
            >
              Know where the night{" "}
              <br className="hidden sm:block" />
              is worth it{" "}
              <span className="text-gradient-primary">before you get there.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Live shows real-time wait signals, smart nearby alternatives, and where your friends are so you can stop guessing and start going.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="lg" onClick={() => scrollTo("waitlist")}>
                Get Launch Alert
              </Button>
              <Button variant="hero-outline" size="lg" onClick={() => scrollTo("how-it-works")}>
                See How It Works
              </Button>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col gap-4 border-t border-border/50 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 lg:max-w-xl"
            >
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.26em] text-muted-foreground">Built for</p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">Same-night decisions</p>
              </div>
              <div className="hidden sm:block h-6 w-px bg-border/60" />
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.26em] text-muted-foreground">Core signal</p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">Waits · busyness · pivots</p>
              </div>
              <div className="hidden sm:block h-6 w-px bg-border/60" />
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.26em] text-muted-foreground">Rollout</p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">Toronto first</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-[260px] md:w-[300px] lg:w-[330px]">
              {/* Ambient glow layers */}
              <div className="absolute inset-0 -translate-x-4 translate-y-6 rounded-[2.75rem] bg-primary/30 blur-[90px]" />
              <div className="absolute inset-0 translate-x-8 translate-y-12 rounded-[2.75rem] bg-amber-700/15 blur-[110px]" />

              {/* Phone frame */}
              <div className="phone-screen-frame relative rounded-[2.7rem] border-[5px] border-[hsl(var(--border))] bg-card overflow-hidden shadow-2xl shadow-black/60">
                <div className="absolute inset-0 z-10 pointer-events-none rounded-[2.4rem] ring-1 ring-inset ring-white/5" />
                <img
                  src={heroScreen}
                  alt="Live app showing nearby venues with busyness indicators"
                  className="phone-screen-image w-full h-auto"
                />
              </div>

              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-card rounded-b-2xl z-10" />

              {/* Floating badge — wait signal */}
              <div className="badge-float absolute -right-6 top-12 glass-surface-bright rounded-2xl px-4 py-3 text-left shadow-2xl max-sm:hidden min-w-[9rem]">
                <p className="text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" style={{ animation: "live-pulse 2s ease-in-out infinite" }} />
                  Busy tonight
                </p>
                <p className="mt-1 text-sm font-bold text-foreground">~15 min wait</p>
              </div>

              {/* Floating badge — pivot */}
              <div className="badge-float-reverse absolute -left-8 bottom-14 glass-surface-bright rounded-2xl px-4 py-3 text-left shadow-2xl max-sm:hidden min-w-[10rem]">
                <p className="text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">Nearby pivot</p>
                <p className="mt-1 text-sm font-bold text-foreground">Better spot · 0.4 km</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
        >
          {["Currently live in Toronto", "Built for real nightlife decisions", "More cities coming soon"].map((t) => (
            <span key={t} className="glass-surface rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground tracking-wide">
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
