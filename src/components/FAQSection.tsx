import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What is Live?",
    a: "Live is a nightlife app that helps you decide where to go out with real-time wait signals, nearby alternatives, and friend coordination.",
  },
  {
    q: "Is Live only for Toronto?",
    a: "Right now, Live is focused on Toronto. More cities are planned after early rollout.",
  },
  {
    q: "How is this different from Google Maps or Instagram?",
    a: "Those tools help with discovery and photos. Live is built for the same-night decision: where to go, what the line looks like, and when to pivot.",
  },
  {
    q: "Can I use Live with friends?",
    a: "Yes. Live is designed to make it easier to see where friends are and converge on the same spot.",
  },
  {
    q: "When can I get access?",
    a: "Request the launch alert and we'll send the App Store link as soon as Live is available.",
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
        <p className="eyebrow mb-4">FAQ</p>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold">Common questions</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          What Live does, where it's rolling out first, and how to get access.
        </p>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <AccordionItem
              value={`faq-${i}`}
              className="glass-surface rounded-[1.35rem] px-6 border-border/50 hover:border-border/80 transition-colors duration-200"
            >
              <AccordionTrigger className="font-display font-semibold text-left hover:no-underline py-5 text-[1rem]">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
