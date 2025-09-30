import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { getProductById } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4 font-['Orbitron']">Product Not Found</h2>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-24">
        <Button 
          onClick={() => navigate("/")} 
          variant="ghost"
          className="mb-8 hover:text-primary font-['Rajdhani']"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border border-border/50 bg-gradient-card">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
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
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-primary mb-2 font-['Rajdhani'] font-semibold">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent font-['Orbitron']">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-primary font-['Orbitron']">
                ${product.price}
              </p>
            </div>

            <div className="border-t border-b border-border/50 py-6">
              <h3 className="text-xl font-semibold mb-2 font-['Orbitron']">Description</h3>
              <p className="text-muted-foreground font-['Rajdhani'] leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 font-['Orbitron']">Product Details</h3>
              <p className="text-muted-foreground font-['Rajdhani'] leading-relaxed">
                {product.details}
              </p>
            </div>

            <Button 
              size="lg"
              className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-bold shadow-neon-strong hover:shadow-neon-strong hover:scale-105 transition-all font-['Rajdhani'] text-lg"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            <div className="bg-muted/30 rounded-lg p-4 space-y-2 border border-border/50">
              <div className="flex justify-between font-['Rajdhani']">
                <span className="text-muted-foreground">Free Shipping</span>
                <span className="text-foreground font-semibold">Yes</span>
              </div>
              <div className="flex justify-between font-['Rajdhani']">
                <span className="text-muted-foreground">Warranty</span>
                <span className="text-foreground font-semibold">1 Year</span>
              </div>
              <div className="flex justify-between font-['Rajdhani']">
                <span className="text-muted-foreground">In Stock</span>
                <span className="text-primary font-semibold">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
