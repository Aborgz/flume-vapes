import { Button } from "@/components/ui/button";
import CartDropdown from "./CartDropdown";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Flume" className="h-8 md:h-10 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#shop" className="text-foreground/80 hover:text-primary transition-colors font-['Rajdhani'] font-semibold">
              Shop
            </a>
            <a href="/#event" className="text-foreground/80 hover:text-primary transition-colors font-['Rajdhani'] font-semibold">
              Event
            </a>
            <Link to="/bundle" className="text-accent hover:text-accent-glow transition-colors font-['Rajdhani'] font-bold">
              Bundle Deal
            </Link>
          </nav>

          <CartDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
