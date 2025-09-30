const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-4 mt-20">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent font-['Orbitron']">
          VapeVerse
        </h3>
        <p className="text-muted-foreground mb-4 font-['Rajdhani']">
          Premium vaping technology for the future
        </p>
        <div className="flex justify-center gap-6 text-sm text-muted-foreground font-['Rajdhani']">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground mt-6 font-['Rajdhani']">
          © 2025 VapeVerse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
