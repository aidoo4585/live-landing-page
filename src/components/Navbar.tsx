import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-surface">
      <div className="container flex items-center justify-between h-16">
        <span className="font-display text-xl font-bold text-primary tracking-tight">Live</span>

        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <button onClick={() => scrollTo("benefits")} className="hover:text-foreground transition-colors">Benefits</button>
          <button onClick={() => scrollTo("how-it-works")} className="hover:text-foreground transition-colors">How It Works</button>
          <button onClick={() => scrollTo("faq")} className="hover:text-foreground transition-colors">FAQ</button>
          <Button variant="hero" size="sm" onClick={() => scrollTo("waitlist")}>Join the Waitlist</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-surface border-t border-border/50 px-5 pb-6 pt-4 flex flex-col gap-4">
          <button onClick={() => scrollTo("benefits")} className="text-sm text-muted-foreground text-left hover:text-foreground">Benefits</button>
          <button onClick={() => scrollTo("how-it-works")} className="text-sm text-muted-foreground text-left hover:text-foreground">How It Works</button>
          <button onClick={() => scrollTo("faq")} className="text-sm text-muted-foreground text-left hover:text-foreground">FAQ</button>
          <Button variant="hero" size="sm" onClick={() => scrollTo("waitlist")}>Join the Waitlist</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
