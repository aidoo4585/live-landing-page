import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Trash2, ShieldCheck, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How do I delete my account?",
    a: "Open the Live app, go to Profile → Settings → Delete Account. Deletion is immediate and permanent. All your data — saved venues, friends, check-ins, and reports — is removed within 30 days.",
  },
  {
    q: "Why does Live need my location?",
    a: "Location is used to show nearby venues, estimate walk times to alternatives, and verify check-ins. We only collect location while the app is open — never in the background. You can deny location permission and the app still works without distance features.",
  },
  {
    q: "Can my friends see where I am?",
    a: "Check-ins are visible only to your accepted friends, never to the public. A check-in shows the venue name and a timestamp — not GPS coordinates. Check-ins expire automatically by 4 AM or within ~5 hours, whichever comes first.",
  },
  {
    q: "How do I remove a friend?",
    a: "Go to Profile → Friends, tap the friend's name, and select Remove Friend. Once removed, they can no longer see your check-ins.",
  },
  {
    q: "Are wait times accurate?",
    a: "Live shows estimated busyness signals sourced from a mix of data inputs. We frame these as estimates, not guarantees. Freshness timestamps on each venue tell you when the signal was last updated.",
  },
  {
    q: "How do I report a problem with a venue listing?",
    a: "Email us at livesupport@gmail.com with the venue name and what looks wrong. We review venue data regularly and update it based on user feedback.",
  },
];

const Section = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
  <section className="mb-10">
    <div className="flex items-center gap-2 mb-5 pb-3 border-b border-border/40">
      <span className="text-primary">{icon}</span>
      <h2 className="font-display text-lg font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </section>
);

const Support = () => (
  <div className="relative min-h-screen bg-background overflow-x-clip">
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute right-[-10rem] top-20 h-[28rem] w-[28rem] rounded-full bg-primary/6 blur-[160px]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/40 to-transparent" />
    </div>

    <nav className="sticky top-0 z-50 px-3 py-3 md:px-5">
      <div className="container glass-surface flex items-center justify-between rounded-full px-4 md:px-6 h-14">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-extrabold text-primary tracking-tight">Live</span>
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
          </span>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={15} />
          Back to Live
        </Link>
      </div>
    </nav>

    <main className="relative container max-w-3xl px-5 pt-10 pb-24">
      <div className="mb-12">
        <p className="eyebrow mb-4">Support</p>
        <h1 className="font-display text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Help Center</h1>
        <p className="text-muted-foreground text-sm">
          Questions about Live? We're here.
        </p>
      </div>

      <div className="glass-surface rounded-[1.75rem] border-border/50 px-6 md:px-10 py-8 md:py-10 text-sm leading-relaxed">

        <Section title="Contact Us" icon={<Mail size={18} />}>
          <div className="glass-surface rounded-xl px-5 py-5 border-border/50 mb-4">
            <p className="text-muted-foreground leading-relaxed mb-3">
              For any question, issue, or feedback — email us directly. We respond within 1–2 business days.
            </p>
            <a
              href="mailto:livesupport@gmail.com"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <Mail size={15} />
              livesupport@gmail.com
            </a>
          </div>
          <p className="text-muted-foreground text-xs">
            For account deletion requests, privacy inquiries, or data access requests, please include "Account Request" in the subject line.
          </p>
        </Section>

        <Section title="Account Deletion" icon={<Trash2 size={18} />}>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You can delete your account directly inside the app without contacting us:
          </p>
          <ol className="list-decimal list-outside ml-4 space-y-2 text-muted-foreground mb-4">
            <li>Open Live and go to the <strong className="text-foreground/90">Profile</strong> tab.</li>
            <li>Tap <strong className="text-foreground/90">Settings</strong>.</li>
            <li>Scroll to the bottom and tap <strong className="text-foreground/90">Delete Account</strong>.</li>
            <li>Confirm when prompted. Deletion is immediate and permanent.</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed">
            All your data — profile, saved venues, friends, check-ins, and reports — is permanently removed within 30 days. We cannot recover an account after deletion. If you cannot access the app, email us and we will delete your account manually.
          </p>
        </Section>

        <Section title="Privacy and Data" icon={<ShieldCheck size={18} />}>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Read our full{" "}
            <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
            and{" "}
            <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            To request a copy of your data, correct inaccurate data, or exercise any other privacy rights under Canadian law (PIPEDA), email{" "}
            <a href="mailto:livesupport@gmail.com" className="text-primary hover:underline">livesupport@gmail.com</a>{" "}
            with "Privacy Request" in the subject line.
          </p>
        </Section>

        <Section title="Common Questions" icon={<HelpCircle size={18} />}>
          <div className="space-y-5">
            {faqs.map((item, i) => (
              <div key={i} className="pb-5 border-b border-border/30 last:border-0 last:pb-0">
                <p className="font-semibold text-foreground/90 mb-2">{item.q}</p>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </main>

    <footer className="py-8 px-5">
      <div className="container glass-surface rounded-[1.75rem] px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="font-display font-extrabold text-primary">Live</span>
          <span className="text-xs">Toronto, Ontario, Canada</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
          <a href="mailto:livesupport@gmail.com" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  </div>
);

export default Support;
