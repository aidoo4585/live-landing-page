const Footer = () => (
  <footer className="border-t border-border/50 py-10 px-5">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <span className="font-display font-bold text-primary text-lg">Live</span>
      <p>© {new Date().getFullYear()} Live. Built for better nights.</p>
    </div>
  </footer>
);

export default Footer;
