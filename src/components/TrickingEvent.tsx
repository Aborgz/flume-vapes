import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import eventBanner from "@/assets/event-banner.jpg";
import mech1 from "@/assets/mech-1.jpg";
import mech2 from "@/assets/mech-2.jpg";
import mech3 from "@/assets/mech-3.jpg";
import juice1 from "@/assets/juice-1.jpg";

const TrickingEvent = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-6 md:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge 
            className="mb-4 bg-accent text-accent-foreground px-4 py-2 text-sm font-['Rajdhani'] font-bold cursor-pointer hover:bg-accent-glow transition-colors hover:scale-105"
            onClick={() => navigate("/event")}
          >
            LIMITED TIME EVENT
          </Badge>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-cyber bg-clip-text text-transparent font-['Orbitron'] animate-glow-pulse">
            Cloud Masters Championship
          </h2>
          <p className="text-xl text-muted-foreground font-['Rajdhani'] max-w-2xl mx-auto leading-relaxed">
            Exclusive Mech Mod Bundle for Serious Cloud Chasers & Trick Artists
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-6 mb-16">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="bg-gradient-card border border-primary/30 rounded-lg p-4 min-w-[80px] shadow-neon">
                <div className="text-3xl md:text-4xl font-bold text-primary font-['Orbitron']">
                  {value.toString().padStart(2, '0')}
                </div>
              </div>
              <div className="text-xs text-muted-foreground mt-2 uppercase font-['Rajdhani'] font-semibold">
                {unit}
              </div>
            </div>
          ))}
        </div>

        {/* Event Banner */}
        <div className="relative rounded-xl overflow-hidden mb-16 border border-primary/30 shadow-neon-strong">
          <img 
            src={eventBanner} 
            alt="Vape Tricking Event"
            className="w-full h-[300px] md:h-[400px] object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Bundle Deal */}
        <Card className="bg-gradient-card border-primary/50 shadow-neon-strong p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground font-['Rajdhani'] font-bold">
                EXCLUSIVE BUNDLE
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-['Orbitron'] text-foreground">
                Mech Mod Tricking Pack
              </h3>
              <p className="text-muted-foreground mb-6 font-['Rajdhani'] text-lg">
                Everything you need to dominate the cloud game. Three premium mechanical mods plus our signature high-VG juice for massive clouds.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span className="font-['Rajdhani']">3x Premium Mechanical Mods</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span className="font-['Rajdhani']">1x 60ml High-VG Competition Juice</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span className="font-['Rajdhani']">Free Cloud Chasing Guide</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span className="font-['Rajdhani']">Limited Edition Carry Case</span>
                </div>
              </div>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-primary font-['Orbitron']">
                  $299.99
                </span>
                <span className="text-2xl text-muted-foreground line-through font-['Orbitron']">
                  $459.99
                </span>
                <Badge className="bg-destructive text-destructive-foreground font-['Rajdhani'] font-bold">
                  SAVE 35%
                </Badge>
              </div>

              <Button 
                size="lg"
                className="w-full md:w-auto bg-primary hover:bg-primary-glow text-primary-foreground font-bold shadow-neon-strong hover:shadow-neon-strong hover:scale-105 transition-all font-['Rajdhani'] text-lg"
                onClick={() => navigate("/bundle")}
              >
                Get Bundle Now
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img 
                  src={mech1} 
                  alt="Copper Mech Mod"
                  className="w-full h-48 object-cover rounded-lg border border-primary/30 hover:border-primary transition-all hover:shadow-neon"
                />
              </div>
              <img 
                src={mech2} 
                alt="Steel Mech Mod"
                className="w-full h-32 object-cover rounded-lg border border-primary/30 hover:border-primary transition-all hover:shadow-neon"
              />
              <img 
                src={mech3} 
                alt="Titanium Mech Mod"
                className="w-full h-32 object-cover rounded-lg border border-primary/30 hover:border-primary transition-all hover:shadow-neon"
              />
              <div className="col-span-2">
                <img 
                  src={juice1} 
                  alt="Competition Juice"
                  className="w-full h-24 object-cover rounded-lg border border-primary/30 hover:border-primary transition-all hover:shadow-neon"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Event Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="bg-gradient-card border-border/50 p-6 text-center hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-primary mb-2 font-['Orbitron']">$5K</div>
            <p className="text-muted-foreground font-['Rajdhani']">Prize Pool</p>
          </Card>
          <Card className="bg-gradient-card border-border/50 p-6 text-center hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-secondary mb-2 font-['Orbitron']">50+</div>
            <p className="text-muted-foreground font-['Rajdhani']">Competitors</p>
          </Card>
          <Card className="bg-gradient-card border-border/50 p-6 text-center hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-accent mb-2 font-['Orbitron']">Live</div>
            <p className="text-muted-foreground font-['Rajdhani']">Streaming Event</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrickingEvent;
