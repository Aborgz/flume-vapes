import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import jellyfishTrick from "@/assets/jellyfish-trick.jpg";
import competitionStage from "@/assets/competition-stage.jpg";
import cloudTricks from "@/assets/cloud-tricks.jpg";
import tornadoTrick from "@/assets/tornado-trick.jpg";

const Event = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src={jellyfishTrick} 
            alt="Jellyfish Vape Trick"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-6 md:px-8 text-center">
              <Badge className="mb-4 bg-accent text-accent-foreground px-6 py-2 text-lg font-['Rajdhani'] font-bold animate-glow-pulse">
                LIMITED TIME EVENT
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-cyber bg-clip-text text-transparent font-['Orbitron'] animate-slide-up">
                Cloud Masters Championship
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 font-['Rajdhani'] max-w-3xl mx-auto mb-8">
                The ultimate vape tricking competition where cloud chasers and trick artists battle for glory
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-bold shadow-neon-strong hover:shadow-neon-strong hover:scale-105 transition-all font-['Rajdhani'] text-lg"
                onClick={() => navigate("/bundle")}
              >
                Get Competition Bundle
              </Button>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="container mx-auto px-6 md:px-8 py-20">
          <Button 
            onClick={() => navigate("/")} 
            variant="ghost"
            className="mb-8 hover:text-primary font-['Rajdhani']"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          {/* Key Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
            <Card className="bg-gradient-card border-primary/50 p-6 text-center hover:shadow-neon transition-all">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold font-['Orbitron'] mb-2">Date</h3>
              <p className="text-muted-foreground font-['Rajdhani']">March 15, 2025</p>
            </Card>
            
            <Card className="bg-gradient-card border-secondary/50 p-6 text-center hover:shadow-neon transition-all">
              <MapPin className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-bold font-['Orbitron'] mb-2">Location</h3>
              <p className="text-muted-foreground font-['Rajdhani']">Virtual & Live</p>
            </Card>
            
            <Card className="bg-gradient-card border-accent/50 p-6 text-center hover:shadow-neon transition-all">
              <Trophy className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold font-['Orbitron'] mb-2">Prize Pool</h3>
              <p className="text-muted-foreground font-['Rajdhani']">$5,000</p>
            </Card>
            
            <Card className="bg-gradient-card border-primary/50 p-6 text-center hover:shadow-neon transition-all">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-bold font-['Orbitron'] mb-2">Competitors</h3>
              <p className="text-muted-foreground font-['Rajdhani']">50+ Artists</p>
            </Card>
          </div>

          {/* About the Event */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-cyber bg-clip-text text-transparent font-['Orbitron'] text-center">
              About the Championship
            </h2>
            <Card className="bg-gradient-card border-border/50 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-foreground/90 mb-6 font-['Rajdhani'] leading-relaxed">
                    The Cloud Masters Championship brings together the world's most talented vape trick artists for an unforgettable competition. Watch as competitors perform mind-blowing tricks including jellyfish, tornadoes, O-rings, and more.
                  </p>
                  <p className="text-lg text-foreground/90 mb-6 font-['Rajdhani'] leading-relaxed">
                    This year's event features three main categories: Cloud Density, Trick Creativity, and Overall Performance. Competitors will use premium mech mods optimized for massive cloud production.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                      <span className="font-['Rajdhani'] text-lg">Live judging by industry experts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                      <span className="font-['Rajdhani'] text-lg">Streamed live on YouTube & Twitch</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                      <span className="font-['Rajdhani'] text-lg">Exclusive gear reveals & giveaways</span>
                    </div>
                  </div>
                </div>
                <img 
                  src={competitionStage} 
                  alt="Competition Stage"
                  className="w-full h-full object-cover rounded-lg border border-primary/30 shadow-neon"
                />
              </div>
            </Card>
          </div>

          {/* Trick Gallery */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-cyber bg-clip-text text-transparent font-['Orbitron'] text-center">
              Featured Tricks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-card border-border/50 overflow-hidden hover:border-primary/50 transition-all group">
                <img 
                  src={cloudTricks} 
                  alt="Cloud Tricks"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 font-['Orbitron']">Jellyfish Formation</h3>
                  <p className="text-muted-foreground font-['Rajdhani']">
                    The most iconic trick in cloud chasing. Create a large O-ring, then push a second smaller cloud through it to form the jellyfish shape.
                  </p>
                </div>
              </Card>

              <Card className="bg-gradient-card border-border/50 overflow-hidden hover:border-primary/50 transition-all group">
                <img 
                  src={tornadoTrick} 
                  alt="Tornado Trick"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 font-['Orbitron']">Tornado & O-Rings</h3>
                  <p className="text-muted-foreground font-['Rajdhani']">
                    Master the art of creating perfect O-rings and spinning tornado effects that leave the audience mesmerized.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* YouTube Video Section */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-cyber bg-clip-text text-transparent font-['Orbitron'] text-center">
              Learn the Tricks
            </h2>
            <Card className="bg-gradient-card border-primary/30 p-4 shadow-neon-strong">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/kKCVjBF_tTA"
                  title="Vape Tricks Tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-muted-foreground font-['Rajdhani'] text-lg">
                  Watch professional vape tricksters showcase their skills and learn the techniques
                </p>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="bg-gradient-card border-primary/50 shadow-neon-strong p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Orbitron']">
              Ready to Compete?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-['Rajdhani'] max-w-2xl mx-auto">
              Get our exclusive Mech Mod Tricking Pack and prepare yourself for the championship. Everything you need to dominate the cloud game.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-bold shadow-neon-strong hover:shadow-neon-strong hover:scale-105 transition-all font-['Rajdhani'] text-lg"
                onClick={() => navigate("/bundle")}
              >
                Get Competition Bundle
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-secondary hover:border-secondary-glow hover:bg-secondary/10 font-['Rajdhani'] text-lg"
                onClick={() => navigate("/")}
              >
                Browse Products
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Event;
