import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Section = ({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="mb-10">
    <h2 className="font-display text-lg font-bold text-foreground mb-4 pb-3 border-b border-border/40">{title}</h2>
    {children}
  </section>
);

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <div className="glass-surface rounded-xl px-5 py-4 border-border/50 mb-4 text-muted-foreground leading-relaxed text-sm">
    {children}
  </div>
);

const Terms = () => (
  <div className="relative min-h-screen bg-background overflow-x-clip">
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute right-[-14rem] top-20 h-[28rem] w-[28rem] rounded-full bg-primary/6 blur-[160px]" />
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
        <p className="eyebrow mb-4">Legal</p>
        <h1 className="font-display text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Terms of Service</h1>
        <p className="text-muted-foreground text-sm">
          Last updated: May 12, 2026 &nbsp;&middot;&nbsp; Effective: May 12, 2026
        </p>
      </div>

      <div className="glass-surface rounded-[1.75rem] border-border/50 px-6 md:px-10 py-8 md:py-10 text-sm leading-relaxed">
        <p className="text-muted-foreground mb-8 leading-relaxed">
          These Terms of Service ("Terms") govern your use of the Live mobile application ("Live," "the app," "we," "us"). By creating an account or using Live, you agree to these Terms. If you don't agree, don't use the app.
        </p>

        <Section id="eligibility" title="1. Eligibility">
          <p className="text-muted-foreground leading-relaxed">
            You must be at least 19 years old to use Live. That is the legal drinking age in Ontario, Canada, where Live operates. By using the app, you confirm you meet this age requirement. We reserve the right to terminate accounts where we have reason to believe this requirement is not met.
          </p>
        </Section>

        <Section id="your-account" title="2. Your Account">
          <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
            <li>You are responsible for maintaining the security of your account credentials.</li>
            <li>You must provide accurate information when creating an account.</li>
            <li>One account per person. Do not create accounts for others or use someone else's account.</li>
            <li>
              Notify us immediately at{" "}
              <a href="mailto:livesupport@gmail.com" className="text-primary hover:underline">
                livesupport@gmail.com
              </a>{" "}
              if you suspect unauthorized access.
            </li>
          </ul>
        </Section>

        <Section id="what-live-provides" title="3. What Live Provides">
          <p className="text-muted-foreground leading-relaxed mb-3">
            Live is a nightlife discovery tool. The current version provides:
          </p>
          <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground mb-4">
            <li>Venue discovery and browse for Toronto nightlife</li>
            <li>Estimated busyness status (crowdsourced + third-party data)</li>
            <li>Smart venue suggestions when a spot is busy</li>
            <li>Manual check-in with friends-only visibility</li>
            <li>Saved venues and vibe-based preferences</li>
            <li>A friends layer for seeing where your crew is going out</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Live does not process payments, book tables, or guarantee entry to any venue. Features may change over time.
          </p>
        </Section>

        <Section id="accuracy" title="4. Venue Information and Accuracy">
          <Highlight>
            <p>
              <strong className="text-foreground/90">Venue status on Live is an estimate, not a guarantee.</strong> Busyness levels, wait signals, and crowd estimates are derived from user reports and third-party data sources. They may be inaccurate, outdated, or unavailable. Always verify with the venue directly when it matters.
            </p>
          </Highlight>
          <p className="text-muted-foreground leading-relaxed">
            Live is not responsible for incorrect venue information, venue closures, changes in hours or cover charges, or any costs you incur based on app data.
          </p>
        </Section>

        <Section id="user-content" title="5. User Content">
          <p className="text-muted-foreground leading-relaxed mb-3">
            When you submit content to Live (including wait reports, cover charge reports, and check-ins), you grant Live a non-exclusive, royalty-free, worldwide license to use, store, display, and distribute that content as part of the service.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You represent that your content is accurate to the best of your knowledge. Submitting intentionally false reports degrades the product for everyone and may result in account suspension.
          </p>
        </Section>

        <Section id="acceptable-use" title="6. Acceptable Use">
          <p className="text-muted-foreground leading-relaxed mb-3">You agree not to:</p>
          <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
            <li>Submit false or misleading venue reports</li>
            <li>Harass, impersonate, or harm other users</li>
            <li>Use the app to spam, scrape, or collect data about other users</li>
            <li>Attempt to reverse-engineer, decompile, or tamper with the app</li>
            <li>Use automated tools (bots, scripts) to interact with the app</li>
            <li>Attempt to gain unauthorized access to any system or data</li>
            <li>Use Live for any unlawful purpose</li>
            <li>Interfere with the security, integrity, or performance of the app</li>
            <li>Create accounts for purposes of manipulation or coordinated inauthentic behavior</li>
          </ul>
        </Section>

        <Section id="location-notifications" title="7. Location and Notifications">
          <p className="text-muted-foreground leading-relaxed mb-3">
            Location permission is optional but enables distance-based features and check-in verification. Live only accesses your location while the app is open (foreground). We do not track your location in the background.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Notification permission is optional. If granted, Live may send you alerts about venue status or friend activity. You can revoke notification permission at any time in your device settings.
          </p>
        </Section>

        <Section id="friends-checkins" title="8. Friends and Check-Ins">
          <p className="text-muted-foreground leading-relaxed">
            Check-ins are visible only to your accepted friends. You control your friends list and can remove connections at any time. Check-ins expire automatically. Do not use the friends or check-in features to stalk, harass, or track anyone without their knowledge and consent.
          </p>
        </Section>

        <Section id="ip" title="9. Intellectual Property">
          <p className="text-muted-foreground leading-relaxed">
            The Live app, its design, copy, and code are owned by Live. You are granted a limited, personal, non-transferable license to use the app for its intended purpose. You may not copy, reproduce, or distribute any part of Live without written permission.
          </p>
        </Section>

        <Section id="termination" title="10. Termination">
          <p className="text-muted-foreground leading-relaxed mb-3">
            <strong className="text-foreground/90">By you:</strong> You can delete your account at any time from <strong className="text-foreground/90">Settings → Delete Account</strong> inside the app. Deletion is immediate and permanent.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground/90">By us:</strong> We may suspend or terminate your account if you violate these Terms, engage in harmful behavior, or for any other reason at our discretion. We will attempt to notify you unless doing so is impractical or would cause harm.
          </p>
        </Section>

        <Section id="disclaimer" title="11. Disclaimer of Warranties">
          <p className="text-muted-foreground leading-relaxed">
            Live is provided "as is" and "as available." We make no warranties, express or implied, regarding uptime, accuracy, fitness for a particular purpose, or that the app will be error-free. We may modify, suspend, or discontinue any part of the service at any time without notice.
          </p>
        </Section>

        <Section id="liability" title="12. Limitation of Liability">
          <p className="text-muted-foreground leading-relaxed">
            To the maximum extent permitted by applicable law, Live and its operators shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the app. Our total liability to you for any claim shall not exceed CAD $100.
          </p>
        </Section>

        <Section id="governing-law" title="13. Governing Law">
          <p className="text-muted-foreground leading-relaxed">
            These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes shall be resolved in the courts of Toronto, Ontario.
          </p>
        </Section>

        <Section id="changes" title="14. Changes to These Terms">
          <p className="text-muted-foreground leading-relaxed">
            We may update these Terms as the product evolves. We will notify you through the app when material changes are made. Continued use after the effective date constitutes acceptance of the revised Terms.
          </p>
        </Section>

        <Section id="contact" title="15. Contact">
          <p className="text-muted-foreground leading-relaxed">
            Questions or concerns about these Terms:{" "}
            <a href="mailto:livesupport@gmail.com" className="text-primary hover:underline">
              livesupport@gmail.com
            </a>
          </p>
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
          <a href="mailto:livesupport@gmail.com" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  </div>
);

export default Terms;
