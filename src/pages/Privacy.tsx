import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const tableRows = {
  collection: [
    ["Account info", "Email address, hashed password or Apple Sign-In token, display name, username, city, profile photo", "When you create an account"],
    ["Location", "Device GPS coordinates (foreground only, while the app is open and you grant permission)", "When you use Nearby, Check In, or venue distance features"],
    ["User content", "Wait reports, cover charge reports, venue check-ins, saved venues, vibe preferences", "When you submit content in-app"],
    ["Friends & check-ins", "Friend connections and active check-in location (venue name and timestamp only)", "When you add friends or check in"],
    ["Usage & analytics", "Screens viewed, taps, session events, and feature interactions (tied to your user ID)", "Automatically via PostHog while using the app"],
    ["Crash & diagnostics", "Stack traces, device model, OS version, app version. No account data included.", "Automatically via Sentry when errors occur"],
    ["Device tokens", "Push notification token (if you grant permission)", "When you grant notification permission"],
  ],
  sharing: [
    ["Supabase", "All account, profile, and app data stored in our database", "Database, auth, and storage infrastructure"],
    ["PostHog", "Usage events and screen views tied to your user ID", "Product analytics"],
    ["Sentry", "Crash reports (device info and stack traces only, no account data)", "Error monitoring"],
    ["Apple", "Your Apple ID token (if you use Apple Sign-In)", "Authentication"],
  ],
};

const Section = ({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="mb-10">
    <h2 className="font-display text-lg font-bold text-foreground mb-4 pb-3 border-b border-border/40">{title}</h2>
    {children}
  </section>
);

const DataTable = ({ headers, rows }: { headers: string[]; rows: string[][] }) => (
  <div className="overflow-x-auto mb-4 rounded-xl border border-border/40">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-secondary/40">
          {headers.map((h) => (
            <th key={h} className="text-left px-4 py-3 text-muted-foreground font-semibold text-xs uppercase tracking-wide border-b border-border/40">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-border/20 last:border-0 hover:bg-secondary/20 transition-colors">
            {row.map((cell, j) => (
              <td key={j} className={`px-4 py-3 align-top text-muted-foreground leading-relaxed ${j === 0 ? "font-medium text-foreground/90 whitespace-nowrap" : ""}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <div className="glass-surface rounded-xl px-5 py-4 border-border/50 mb-4 text-muted-foreground leading-relaxed text-sm">
    {children}
  </div>
);

const Privacy = () => (
  <div className="relative min-h-screen bg-background overflow-x-clip">
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-[-14rem] top-20 h-[28rem] w-[28rem] rounded-full bg-primary/6 blur-[160px]" />
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
        <h1 className="font-display text-3xl md:text-4xl font-extrabold mb-3 leading-tight">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm">
          Last updated: May 12, 2026 &nbsp;&middot;&nbsp; Effective: May 12, 2026
        </p>
      </div>

      <div className="glass-surface rounded-[1.75rem] border-border/50 px-6 md:px-10 py-8 md:py-10 text-sm leading-relaxed">
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Live helps you decide where to go out tonight. This policy explains what data we collect, why, and how we protect it. Questions? Email us at{" "}
          <a href="mailto:livesupport@gmail.com" className="text-primary hover:underline">
            livesupport@gmail.com
          </a>.
        </p>

        <Section id="who-we-are" title="1. Who We Are">
          <p className="text-muted-foreground leading-relaxed">
            Live is a Toronto-based nightlife app. When this policy says "Live," "we," "us," or "our," it means us.
          </p>
        </Section>

        <Section id="what-we-collect" title="2. What We Collect">
          <DataTable
            headers={["Category", "What exactly", "When collected"]}
            rows={tableRows.collection}
          />
          <p className="text-muted-foreground leading-relaxed mt-2">
            We do not collect: background location, contacts, microphone, camera roll beyond your chosen profile photo, or any payment information.
          </p>
        </Section>

        <Section id="why-we-collect" title="3. Why We Collect It">
          <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
            <li><strong className="text-foreground/90">Account info:</strong> to identify you, let you sign in, and personalize your experience.</li>
            <li><strong className="text-foreground/90">Location:</strong> to show nearby venues, estimate walk times, and verify check-ins.</li>
            <li><strong className="text-foreground/90">User content:</strong> to power live venue status, smart suggestions, and the community data layer.</li>
            <li><strong className="text-foreground/90">Friends &amp; check-ins:</strong> to show you where your crew is going out tonight.</li>
            <li><strong className="text-foreground/90">Usage data:</strong> to understand how the app is used and improve features.</li>
            <li><strong className="text-foreground/90">Crash data:</strong> to find and fix bugs quickly.</li>
            <li><strong className="text-foreground/90">Device tokens:</strong> to send opt-in notifications when venues clear up or friends check in.</li>
          </ul>
        </Section>

        <Section id="sharing" title="4. Who We Share Data With">
          <DataTable
            headers={["Provider", "What they receive", "Why"]}
            rows={tableRows.sharing}
          />
          <p className="text-muted-foreground leading-relaxed mt-2">
            We do not sell your data. We do not share it with advertisers. We do not share it with any party not listed above.
          </p>
        </Section>

        <Section id="location" title="5. Location Data">
          <Highlight>
            <p>
              <strong className="text-foreground/90">We only collect location while the app is open (foreground).</strong> We never collect your location in the background. Location is used to show nearby venues, estimate walk times to alternatives, and verify that you are physically at a venue when you check in. If you deny location permission, the app still works without distance-based features.
            </p>
          </Highlight>
        </Section>

        <Section id="friends" title="6. Friends and Check-In Privacy">
          <p className="text-muted-foreground leading-relaxed mb-3">
            Check-ins are visible <strong className="text-foreground/90">only to your accepted friends</strong>, not to the public or other Live users you are not connected with. A check-in shows the venue name and a timestamp. It expires automatically (within ~5 hours or by 4 AM EST, whichever is sooner) or when you manually check out.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You control who sees your check-ins by managing your friends list. You can remove a friend at any time in the app.
          </p>
        </Section>

        <Section id="retention" title="7. Data Retention">
          <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground">
            <li>Account and profile data is retained while your account is active.</li>
            <li>Check-ins expire automatically and are purged from active surfaces within hours.</li>
            <li>Analytics events are retained per PostHog's default retention policy.</li>
            <li>Crash reports are retained per Sentry's default retention policy.</li>
            <li>When you delete your account, your profile and all associated data (saved venues, friends, check-ins, reports) are permanently removed from our database within 30 days.</li>
          </ul>
        </Section>

        <Section id="deletion" title="8. Account Deletion">
          <p className="text-muted-foreground leading-relaxed">
            You can delete your account at any time from <strong className="text-foreground/90">Settings → Delete Account</strong> inside the app. Deletion is immediate and permanent. We cannot recover your account after deletion.
          </p>
        </Section>

        <Section id="security" title="9. Security">
          <p className="text-muted-foreground leading-relaxed">
            Your session token is stored using iOS Keychain (via <code className="bg-secondary/60 px-1.5 py-0.5 rounded text-xs font-mono text-foreground/80">expo-secure-store</code>). All data is transmitted over HTTPS. Access to your data in our database is controlled by Supabase Row-Level Security policies, so you can only read and write your own data. Our service role key (used for account deletion) is never exposed client-side.
          </p>
        </Section>

        <Section id="rights" title="10. Your Rights">
          <p className="text-muted-foreground leading-relaxed mb-3">
            Under Canadian privacy law (PIPEDA) and applicable provincial law, you have the right to:
          </p>
          <ul className="list-disc list-outside ml-4 space-y-2 text-muted-foreground mb-4">
            <li>Know what personal data we hold about you</li>
            <li>Request a copy of your data</li>
            <li>Correct inaccurate data</li>
            <li>Delete your account and associated data</li>
            <li>Withdraw consent (which may limit some features)</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            To exercise any of these rights, email{" "}
            <a href="mailto:livesupport@gmail.com" className="text-primary hover:underline">
              livesupport@gmail.com
            </a>.
          </p>
        </Section>

        <Section id="age" title="11. Age Restriction">
          <p className="text-muted-foreground leading-relaxed">
            Live is intended for users aged 19 and older (the legal drinking age in Ontario). We do not knowingly collect data from anyone under 19. If you believe a minor has created an account, contact us and we will remove it.
          </p>
        </Section>

        <Section id="changes" title="12. Changes to This Policy">
          <p className="text-muted-foreground leading-relaxed">
            We may update this policy as the app evolves. We will notify you of material changes through the app. Continued use after changes take effect constitutes acceptance of the updated policy.
          </p>
        </Section>

        <Section id="contact" title="13. Contact">
          <p className="text-muted-foreground leading-relaxed">
            Questions, requests, or concerns:{" "}
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
          <a href="mailto:livesupport@gmail.com" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  </div>
);

export default Privacy;
