import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { toast } from "sonner";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    toast.success("You're on the list! We'll be in touch.");
  };

  return (
    <section id="waitlist" className="section-padding">
      <div className="container max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-surface rounded-2xl p-8 md:p-10 text-center glow-primary"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Make better calls before the line makes them for you.
          </h2>
          <p className="text-muted-foreground mb-8">
            Join the waitlist to get early access to Live as we expand the nightlife map.
          </p>

          {submitted ? (
            <div className="py-6">
              <p className="text-primary font-semibold text-lg">You're in! 🎉</p>
              <p className="text-muted-foreground text-sm mt-2">We'll reach out when it's your turn.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-secondary border-border/50 h-12"
              />
              <Button variant="hero" size="lg" type="submit" className="h-12 px-8">
                Join the Waitlist
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
