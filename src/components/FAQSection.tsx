import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What is Live?",
    a: "Live is a nightlife app that shows you real-time busyness signals, wait information, smart nearby alternatives, and where your friends are — so you always know where the night is actually worth it.",
  },
  {
    q: "Is Live only for Toronto?",
    a: "We're launching in Toronto first to get things right. Other cities are on the roadmap — join the waitlist and tell us where you want Live next.",
  },
  {
    q: "How is this different from Google Maps or Instagram?",
    a: "Google Maps tells you a venue exists. Instagram shows you what happened hours ago. Live tells you what's happening right now — busyness, wait signals, and where your friends actually are tonight.",
  },
  {
    q: "Can I use Live with friends?",
    a: "Yes. Live makes it easy to see where your friends are out so you can coordinate without the group chat chaos.",
  },
  {
    q: "When can I get access?",
    a: "We're rolling out access to waitlist members first. Join the waitlist and you'll be among the first to know.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="container max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">FAQ</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Questions? We got you.</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-surface rounded-xl px-6 border-border/50">
            <AccordionTrigger className="font-display font-semibold text-left hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
