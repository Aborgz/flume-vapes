import { ShoppingCart, Trash2, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative border-primary/30 hover:border-primary hover:shadow-neon">
          <ShoppingCart className="h-5 w-5 text-primary" />
          {getCartCount() > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-accent rounded-full text-[10px] flex items-center justify-center font-bold">
              {getCartCount()}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-80 bg-card border-border/50 shadow-neon z-50 max-h-[500px] overflow-y-auto"
      >
        {cart.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground font-['Rajdhani']">
            Your cart is empty
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <DropdownMenuItem 
                key={item.id} 
                className="p-4 focus:bg-muted/50"
                onSelect={(e) => e.preventDefault()}
              >
                <div className="flex gap-3 w-full">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded border border-border/50"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate font-['Orbitron']">
                      {item.name}
                    </h4>
                    <p className="text-xs text-muted-foreground font-['Rajdhani']">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-6 w-6 border-primary/30"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-['Rajdhani'] font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-6 w-6 border-primary/30"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-6 w-6 ml-auto text-destructive hover:text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
            
            <div className="p-4 border-t border-border/50 space-y-3">
              <div className="flex justify-between items-center font-['Orbitron'] font-bold text-lg">
                <span>Total:</span>
                <span className="text-primary">${getCartTotal().toFixed(2)}</span>
              </div>
              <Button 
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-bold shadow-neon hover:shadow-neon-strong font-['Rajdhani']"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CartDropdown;
