import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard = ({ name, price, image, description }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/50 bg-gradient-card hover:border-primary/50 transition-all duration-300 hover:shadow-neon hover:scale-105">
      <CardContent className="p-0">
        <div className="relative overflow-hidden aspect-square">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-foreground font-['Orbitron'] group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 font-['Rajdhani']">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary font-['Orbitron']">
              ${price}
            </span>
            <span className="text-xs text-muted-foreground font-['Rajdhani']">
              Free Shipping
            </span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-bold shadow-neon hover:shadow-neon-strong transition-all font-['Rajdhani']"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
