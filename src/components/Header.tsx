import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-cyber bg-clip-text text-transparent font-['Orbitron']">
            VapeVerse
          </h1>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#shop" className="text-foreground/80 hover:text-primary transition-colors font-['Rajdhani'] font-semibold">
              Shop
            </a>
            <a href="#featured" className="text-foreground/80 hover:text-primary transition-colors font-['Rajdhani'] font-semibold">
              Featured
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-['Rajdhani'] font-semibold">
              About
            </a>
          </nav>

          <Button variant="outline" size="icon" className="relative border-primary/30 hover:border-primary hover:shadow-neon">
            <ShoppingCart className="h-5 w-5 text-primary" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent rounded-full text-[10px] flex items-center justify-center font-bold">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
