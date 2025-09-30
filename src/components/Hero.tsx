import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-vape.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-slide-up">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-cyber bg-clip-text text-transparent font-['Orbitron'] animate-glow-pulse">
          The Future is Here
        </h2>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto font-['Rajdhani'] font-light">
          Experience next-generation vaping technology with our premium collection
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-bold shadow-neon-strong hover:shadow-neon-strong hover:scale-105 transition-all font-['Rajdhani'] text-lg"
            onClick={() => window.location.href = '/#shop'}
          >
            Shop Now
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-secondary hover:border-secondary-glow hover:bg-secondary/10 text-secondary-foreground shadow-purple hover:scale-105 transition-all font-['Rajdhani'] text-lg"
            onClick={() => window.location.href = '/#event'}
          >
            Explore Collection
          </Button>
        </div>
      </div>
      
      {/* Animated Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
};

export default Hero;
