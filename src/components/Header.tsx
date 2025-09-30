import { Button } from "@/components/ui/button";
import CartDropdown from "./CartDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-cyber bg-clip-text text-transparent font-['Orbitron'] cursor-pointer">
              VapeVerse
            </h1>
          </Link>
          
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

          <CartDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
