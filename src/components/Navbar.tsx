import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import liveLogo from "@/assets/live-logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 py-3 md:px-5">
      <div
        className={`container glass-surface flex items-center justify-between rounded-full px-4 md:px-6 h-14 transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-black/30" : ""
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          aria-label="Live home"
        >
          <img src={liveLogo} alt="" className="h-8 w-8 rounded-[0.45rem] shadow-sm shadow-primary/20" />
          <span className="font-display text-xl font-extrabold text-primary tracking-tight">Live</span>
        </button>

        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <button onClick={() => scrollTo("benefits")} className="hover:text-foreground transition-colors duration-200">Benefits</button>
          <button onClick={() => scrollTo("how-it-works")} className="hover:text-foreground transition-colors duration-200">How It Works</button>
          <button onClick={() => scrollTo("faq")} className="hover:text-foreground transition-colors duration-200">FAQ</button>
          <button onClick={() => scrollTo("venue-partners")} className="hover:text-foreground transition-colors duration-200">For Venues</button>
          <a href="/support" className="hover:text-foreground transition-colors duration-200">Support</a>
          <Button variant="hero" size="sm" onClick={() => scrollTo("waitlist")}>Get Launch Alert</Button>
        </div>

        <button className="md:hidden text-foreground p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="container md:hidden mt-2">
          <div className="glass-surface rounded-[1.75rem] border-border/50 px-5 pb-5 pt-4 flex flex-col gap-4">
            <button onClick={() => scrollTo("benefits")} className="text-sm text-muted-foreground text-left hover:text-foreground transition-colors">Benefits</button>
            <button onClick={() => scrollTo("how-it-works")} className="text-sm text-muted-foreground text-left hover:text-foreground transition-colors">How It Works</button>
            <button onClick={() => scrollTo("faq")} className="text-sm text-muted-foreground text-left hover:text-foreground transition-colors">FAQ</button>
            <button onClick={() => scrollTo("venue-partners")} className="text-sm text-muted-foreground text-left hover:text-foreground transition-colors">For Venues</button>
            <a href="/support" className="text-sm text-muted-foreground text-left hover:text-foreground transition-colors">Support</a>
            <Button variant="hero" size="sm" onClick={() => scrollTo("waitlist")}>Get Launch Alert</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
