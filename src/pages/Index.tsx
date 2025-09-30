import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrickingEvent from "@/components/TrickingEvent";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div id="event">
        <TrickingEvent />
      </div>
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Index;
