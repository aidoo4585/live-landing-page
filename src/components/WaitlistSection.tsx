import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { toast } from "sonner";

const SUCCESS_MESSAGE = "You'll get the App Store link as soon as Live is available.";
const DUPLICATE_MESSAGE = "You're already on the launch list.";

const isDuplicateEmailError = (error: { code?: string; message?: string; details?: string }) => {
  const searchable = `${error.message ?? ""} ${error.details ?? ""}`.toLowerCase();

  return (
    error.code === "23505" ||
    searchable.includes("waitlist_signups_normalized_email_key") ||
    searchable.includes("duplicate key")
  );
};

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "duplicate">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail || !e.currentTarget.checkValidity()) {
      setErrorMessage("Enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const params = new URLSearchParams(window.location.search);
    const payload = {
      email: trimmedEmail,
      source: "landing_page_launch_alert",
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
      utm_content: params.get("utm_content"),
      referral_code: params.get("ref"),
      metadata: {
        path: window.location.pathname,
        referrer: document.referrer || null,
        intent: "app_store_launch_notification",
      },
    };

    try {
      const { error } = await supabase.from("waitlist_signups").insert(payload);

      if (!error) {
        setStatus("success");
        toast.success(SUCCESS_MESSAGE);
        return;
      }

      if (isDuplicateEmailError(error)) {
        setStatus("duplicate");
        toast.success(DUPLICATE_MESSAGE);
        return;
      }

      if (import.meta.env.DEV) {
        console.error("Launch alert signup failed", error);
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Launch alert signup failed", error);
      }
    } finally {
      setIsSubmitting(false);
    }

    setErrorMessage("Something went wrong. Please try again.");
  };

  const submitted = status !== "idle";
  const confirmationMessage = status === "duplicate" ? DUPLICATE_MESSAGE : SUCCESS_MESSAGE;

  return (
    <section id="waitlist" className="section-padding relative">
      {/* Ambient glow behind the form */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="h-[28rem] w-[44rem] rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="container max-w-3xl relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-surface-bright rounded-[2rem] p-8 md:p-10 glow-primary-strong"
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="text-center lg:text-left">
              <p className="eyebrow mb-4">Launch alert</p>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
                Make better calls before the line makes them for you.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Get the App Store link as soon as Live is available in Toronto.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-border/60 bg-background/30 p-4 md:p-5">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="py-6 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <p className="text-primary font-bold text-lg">
                    {status === "duplicate" ? "Already signed up." : "Launch alert set."}
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">{confirmationMessage}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-3">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrorMessage("");
                      }}
                      aria-invalid={Boolean(errorMessage)}
                      aria-describedby={errorMessage ? "launch-alert-error" : undefined}
                      className="flex-1 bg-secondary/60 border-border/50 h-12 text-sm"
                    />
                    <Button
                      variant="hero"
                      size="lg"
                      type="submit"
                      disabled={isSubmitting}
                      className="h-12 px-8 shrink-0"
                    >
                      {isSubmitting ? "Submitting..." : "Get Launch Alert"}
                    </Button>
                  </div>
                  {errorMessage && (
                    <p id="launch-alert-error" className="text-sm text-destructive text-center sm:text-left">
                      {errorMessage}
                    </p>
                  )}
                </form>
              )}

              {!submitted && (
                <p className="text-xs text-muted-foreground mt-3 text-center sm:text-left">
                  No spam. Just the launch notification and early access updates.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
