import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for your purchase. Your order is being processed.",
    });

    clearCart();
    setIsProcessing(false);
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-24">
          <Breadcrumb className="mb-8">
            <BreadcrumbList className="font-['Rajdhani']">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Cart Empty</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 font-['Orbitron']">Your Cart is Empty</h2>
            <p className="text-muted-foreground mb-8 font-['Rajdhani']">
              Add some products to your cart before checking out
            </p>
            <Button onClick={() => navigate("/")} className="bg-primary hover:bg-primary-glow font-['Rajdhani']">
              Continue Shopping
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-24">
        <div className="mb-8 flex items-center justify-between">
          <Button 
            onClick={() => navigate("/")} 
            variant="ghost"
            className="hover:text-primary font-['Rajdhani']"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
          
          <Breadcrumb>
            <BreadcrumbList className="font-['Rajdhani']">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Checkout</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-cyber bg-clip-text text-transparent font-['Orbitron'] text-center">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Order Summary */}
          <div className="bg-gradient-card border border-border/50 rounded-lg p-6 h-fit">
            <h2 className="text-2xl font-bold mb-6 font-['Orbitron']">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded border border-border/50"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold font-['Orbitron']">{item.name}</h3>
                    <p className="text-sm text-muted-foreground font-['Rajdhani']">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-primary font-bold font-['Orbitron']">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border/50 pt-4 space-y-2">
              <div className="flex justify-between font-['Rajdhani']">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-['Rajdhani']">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-semibold text-primary">FREE</span>
              </div>
              <div className="flex justify-between text-xl font-bold font-['Orbitron'] pt-2 border-t border-border/50">
                <span>Total</span>
                <span className="text-primary">${getCartTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-gradient-card border border-border/50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6 font-['Orbitron']">Payment Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-['Rajdhani']">Full Name</Label>
                <Input 
                  id="name" 
                  required 
                  className="bg-input border-border/50 font-['Rajdhani']"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-['Rajdhani']">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  className="bg-input border-border/50 font-['Rajdhani']"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="font-['Rajdhani']">Shipping Address</Label>
                <Input 
                  id="address" 
                  required 
                  className="bg-input border-border/50 font-['Rajdhani']"
                  placeholder="123 Main St"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="font-['Rajdhani']">City</Label>
                  <Input 
                    id="city" 
                    required 
                    className="bg-input border-border/50 font-['Rajdhani']"
                    placeholder="New York"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip" className="font-['Rajdhani']">ZIP Code</Label>
                  <Input 
                    id="zip" 
                    required 
                    className="bg-input border-border/50 font-['Rajdhani']"
                    placeholder="10001"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="card" className="font-['Rajdhani']">Card Number</Label>
                <Input 
                  id="card" 
                  required 
                  className="bg-input border-border/50 font-['Rajdhani']"
                  placeholder="4242 4242 4242 4242"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry" className="font-['Rajdhani']">Expiry Date</Label>
                  <Input 
                    id="expiry" 
                    required 
                    className="bg-input border-border/50 font-['Rajdhani']"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv" className="font-['Rajdhani']">CVV</Label>
                  <Input 
                    id="cvv" 
                    required 
                    className="bg-input border-border/50 font-['Rajdhani']"
                    placeholder="123"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-bold shadow-neon-strong hover:shadow-neon-strong font-['Rajdhani'] text-lg mt-6"
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : `Pay $${getCartTotal().toFixed(2)}`}
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
