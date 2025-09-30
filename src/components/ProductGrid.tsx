import ProductCard from "./ProductCard";
import vape1 from "@/assets/vape-1.jpg";
import vape2 from "@/assets/vape-2.jpg";
import vape3 from "@/assets/vape-3.jpg";
import vape4 from "@/assets/vape-4.jpg";

const products = [
  {
    id: 1,
    name: "Quantum X1",
    price: 79.99,
    image: vape1,
    description: "Next-gen pod system with AI temperature control"
  },
  {
    id: 2,
    name: "Nebula Pro",
    price: 99.99,
    image: vape2,
    description: "Premium device with holographic display"
  },
  {
    id: 3,
    name: "Cyber Mod Elite",
    price: 149.99,
    image: vape3,
    description: "Advanced mod with customizable LED effects"
  },
  {
    id: 4,
    name: "Fusion Pen",
    price: 59.99,
    image: vape4,
    description: "Compact and powerful with gradient finish"
  },
];

const ProductGrid = () => {
  return (
    <section id="shop" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-cyber bg-clip-text text-transparent font-['Orbitron']">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg font-['Rajdhani']">
            Cutting-edge vaping technology for the modern enthusiast
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
