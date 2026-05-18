const Footer = () => (
  <footer className="py-10 px-5">
    <div className="container glass-surface rounded-[1.75rem] px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="text-center md:text-left">
        <span className="font-display font-extrabold text-primary text-lg">Live</span>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">Currently live in Toronto</p>
      </div>
      <p className="text-center">Real-time nightlife signals, smarter pivots, and faster meetups.</p>
      <div className="flex items-center gap-4">
        <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
        <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
        <a href="/support" className="hover:text-foreground transition-colors">Support</a>
        <a href="mailto:livesupport@gmail.com" className="hover:text-foreground transition-colors">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
