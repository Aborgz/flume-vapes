import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import mech1 from "@/assets/mech-1.jpg";
import mech2 from "@/assets/mech-2.jpg";
import mech3 from "@/assets/mech-3.jpg";
import juice1 from "@/assets/juice-1.jpg";

const bundleProduct: Product = {
  id: 999,
  name: "Mech Mod Tricking Pack",
  price: 299.99,
  image: mech1,
  images: [mech1, mech2, mech3, juice1],
  description: "Complete cloud chasing bundle with 3 mech mods + premium juice",
  category: "Bundle",
  details: "The ultimate package for serious vape trickers and cloud chasers. This exclusive bundle includes three premium mechanical mods crafted from copper, stainless steel, and titanium, each offering unique performance characteristics. Paired with our competition-grade high-VG juice designed for maximum vapor production. Also includes a limited edition carry case and comprehensive cloud chasing guide with tips from professional trickers."
};

const bundleItems = [
  {
    name: "Copper Heritage Mech",
    image: mech1,
    description: "Hand-engraved copper mod with vintage steampunk aesthetics"
  },
  {
    name: "Tactical Steel Mod",
    image: mech2,
    description: "Minimalist black steel with precision machined components"
  },
  {
    name: "Titan Hexagon Mod",
    image: mech3,
    description: "Lightweight titanium with carbon fiber accents"
  },
  {
    name: "Cloud Competition Juice",
    image: juice1,
    description: "Max VG formula for massive cloud production"
  }
];

const BundleDetail = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 md:px-8 py-32">
        <Button 
          onClick={() => navigate("/")} 
          variant="ghost"
          className="mb-8 hover:text-primary font-['Rajdhani']"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Button>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <Badge className="mb-2 bg-accent text-accent-foreground font-['Rajdhani'] font-bold">
              LIMITED TIME BUNDLE
            </Badge>
            <div className="aspect-square overflow-hidden rounded-lg border-2 border-primary/50 bg-gradient-card shadow-neon-strong">
              <img 
                src={bundleProduct.images[selectedImage]} 
                alt={bundleProduct.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {bundleProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index 
                      ? "border-primary shadow-neon" 
                      : "border-border/50 hover:border-primary/50"
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Bundle item ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent font-['Orbitron']">
                {bundleProduct.name}
              </h1>
              <div className="flex items-baseline gap-4 mb-4">
                <p className="text-4xl font-bold text-primary font-['Orbitron']">
                  ${bundleProduct.price}
                </p>
                <p className="text-2xl text-muted-foreground line-through font-['Orbitron']">
                  $459.99
                </p>
                <Badge className="bg-destructive text-destructive-foreground font-['Rajdhani'] font-bold">
                  SAVE $160
                </Badge>
              </div>
              <p className="text-muted-foreground font-['Rajdhani'] text-lg">
                {bundleProduct.description}
              </p>
            </div>

            <div className="border-t border-b border-border/50 py-6">
              <h3 className="text-xl font-semibold mb-4 font-['Orbitron']">Bundle Includes:</h3>
              <div className="space-y-4">
                {bundleItems.map((item, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded border border-primary/30"
                    />
                    <div>
                      <h4 className="font-semibold font-['Orbitron'] text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground font-['Rajdhani']">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 font-['Orbitron']">About This Bundle</h3>
              <p className="text-muted-foreground font-['Rajdhani'] leading-relaxed">
                {bundleProduct.details}
              </p>
            </div>

            <Button 
              size="lg"
              className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-bold shadow-neon-strong hover:shadow-neon-strong hover:scale-105 transition-all font-['Rajdhani'] text-lg"
              onClick={() => addToCart(bundleProduct)}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add Bundle to Cart
            </Button>

            <div className="bg-gradient-card rounded-lg p-6 border border-primary/30 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                <span className="font-['Rajdhani']">Free Shipping & Premium Packaging</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                <span className="font-['Rajdhani']">Limited Edition Carry Case Included</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                <span className="font-['Rajdhani']">1 Year Warranty on All Mods</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
                <span className="font-['Rajdhani'] text-accent-foreground">Only 50 Bundles Available!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BundleDetail;
