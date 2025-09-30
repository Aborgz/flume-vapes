import { Product } from "@/contexts/CartContext";
import vape1 from "@/assets/vape-1.jpg";
import vape2 from "@/assets/vape-2.jpg";
import vape3 from "@/assets/vape-3.jpg";
import vape4 from "@/assets/vape-4.jpg";
import vape5 from "@/assets/vape-5.jpg";
import vape6 from "@/assets/vape-6.jpg";
import vape7 from "@/assets/vape-7.jpg";
import vape8 from "@/assets/vape-8.jpg";
import vape9 from "@/assets/vape-9.jpg";
import vape10 from "@/assets/vape-10.jpg";
import vape11 from "@/assets/vape-11.jpg";
import vape12 from "@/assets/vape-12.jpg";
import juice1 from "@/assets/juice-1.jpg";
import juice2 from "@/assets/juice-2.jpg";
import juice3 from "@/assets/juice-3.jpg";
import juice4 from "@/assets/juice-4.jpg";

export const products: Product[] = [
  {
    id: 1,
    name: "Quantum X1",
    price: 79.99,
    image: vape1,
    images: [vape1, vape2, vape3, vape4],
    description: "Next-gen pod system with AI temperature control",
    category: "Vape Device",
    details: "Experience cutting-edge vaping technology with the Quantum X1. Featuring AI-powered temperature regulation, this device learns your preferences and adjusts automatically for the perfect hit every time. The sleek design houses a powerful 1200mAh battery and supports both nicotine salt and freebase e-liquids."
  },
  {
    id: 2,
    name: "Nebula Pro",
    price: 99.99,
    image: vape2,
    images: [vape2, vape1, vape3, vape4],
    description: "Premium device with holographic display",
    category: "Vape Device",
    details: "The Nebula Pro redefines premium vaping with its stunning holographic OLED display. Monitor your battery life, puff count, and power settings in real-time with crystal clarity. Built with aerospace-grade aluminum and equipped with a 1500mAh battery for all-day vaping."
  },
  {
    id: 3,
    name: "Cyber Mod Elite",
    price: 149.99,
    image: vape3,
    images: [vape3, vape4, vape1, vape2],
    description: "Advanced mod with customizable LED effects",
    category: "Vape Device",
    details: "Unleash your style with the Cyber Mod Elite's fully customizable RGB LED system. Choose from 16 million colors and multiple lighting patterns. This high-performance mod features variable wattage up to 200W, temperature control, and a massive 2500mAh dual-battery setup."
  },
  {
    id: 4,
    name: "Fusion Pen",
    price: 59.99,
    image: vape4,
    images: [vape4, vape1, vape2, vape3],
    description: "Compact and powerful with gradient finish",
    category: "Vape Device",
    details: "Perfect for on-the-go vaping, the Fusion Pen combines portability with power. Its unique holographic gradient finish catches the eye while the 950mAh battery delivers consistent performance throughout the day. Draw-activated firing makes it effortless to use."
  },
  {
    id: 5,
    name: "Apex Gold",
    price: 129.99,
    image: vape5,
    images: [vape5, vape6, vape7, vape8],
    description: "Luxury device with premium LED screen",
    category: "Vape Device",
    details: "Indulge in luxury with the Apex Gold. This premium device features a stunning black and gold finish with a high-resolution LED screen. Advanced chipset provides lightning-fast firing and precise power control. 1800mAh battery with USB-C fast charging."
  },
  {
    id: 6,
    name: "Echo Mini",
    price: 49.99,
    image: vape6,
    images: [vape6, vape5, vape7, vape8],
    description: "Ultra-compact pod with LED ring",
    category: "Vape Device",
    details: "The Echo Mini proves that good things come in small packages. Despite its compact size, it packs an 850mAh battery and features a mesmerizing LED ring that glows during use. Perfect for discreet vaping without compromising on vapor quality."
  },
  {
    id: 7,
    name: "Spectra Vision",
    price: 159.99,
    image: vape7,
    images: [vape7, vape8, vape9, vape10],
    description: "Transparent design with visible tech",
    category: "Vape Device",
    details: "See the future of vaping technology with the Spectra Vision's transparent chassis. Watch the advanced circuitry at work with every puff. Features include 2000mAh battery, smart coil recognition, and customizable LED pathways that illuminate based on power output."
  },
  {
    id: 8,
    name: "Obsidian Pro",
    price: 119.99,
    image: vape8,
    images: [vape8, vape7, vape9, vape10],
    description: "Matte black with rose gold details",
    category: "Vape Device",
    details: "Elegant and powerful, the Obsidian Pro features a sophisticated matte black finish accented with rose gold details. The purple LED display provides all essential information at a glance. Dual coil compatibility and 1600mAh battery ensure versatility and longevity."
  },
  {
    id: 9,
    name: "Aurora Chrome",
    price: 89.99,
    image: vape9,
    images: [vape9, vape10, vape11, vape12],
    description: "Holographic rainbow pen design",
    category: "Vape Device",
    details: "Stand out with the Aurora Chrome's stunning holographic rainbow finish that shifts colors in the light. This sleek pen-style device features auto-draw activation, 1100mAh battery, and leak-proof design. Perfect for users who want style and substance."
  },
  {
    id: 10,
    name: "Titan Tactical",
    price: 139.99,
    image: vape10,
    images: [vape10, vape9, vape11, vape12],
    description: "Rugged military-grade construction",
    category: "Vape Device",
    details: "Built for adventure, the Titan Tactical features military-grade construction with shock-resistant housing and textured grip. IP67 water and dust resistance makes it ideal for outdoor enthusiasts. 2200mAh battery and red LED indicators provide reliability in any condition."
  },
  {
    id: 11,
    name: "Crystal Clear",
    price: 94.99,
    image: vape11,
    images: [vape11, vape12, vape9, vape10],
    description: "See-through pod with RGB lighting",
    category: "Vape Device",
    details: "Marvel at your e-liquid with the Crystal Clear's transparent pod design. RGB LED lighting illuminates the liquid, creating a stunning visual effect. 1300mAh battery, adjustable airflow, and magnetic pod connection make this both beautiful and functional."
  },
  {
    id: 12,
    name: "Carbon Elite",
    price: 169.99,
    image: vape12,
    images: [vape12, vape11, vape10, vape9],
    description: "Carbon fiber with OLED display",
    category: "Vape Device",
    details: "The Carbon Elite represents the pinnacle of vaping technology. Real carbon fiber construction keeps weight minimal while maintaining durability. High-resolution OLED display, variable wattage up to 180W, and 2400mAh battery make this the choice of serious vapers."
  },
  {
    id: 13,
    name: "Cyber Blue Liquid",
    price: 24.99,
    image: juice1,
    images: [juice1, juice2, juice3, juice4],
    description: "Neon blue raspberry flavor - 60ml",
    category: "Vape Juice",
    details: "Experience the electrifying taste of Cyber Blue Liquid. This premium e-liquid combines sweet blue raspberry with a hint of citrus for a refreshing all-day vape. Available in 0mg, 3mg, and 6mg nicotine strengths. 70/30 VG/PG ratio for optimal cloud production and flavor."
  },
  {
    id: 14,
    name: "Purple Haze Elixir",
    price: 24.99,
    image: juice2,
    images: [juice2, juice1, juice3, juice4],
    description: "Grape fusion with menthol - 60ml",
    category: "Vape Juice",
    details: "Immerse yourself in the rich flavor of Purple Haze Elixir. A perfect blend of concord grape and blackcurrant with an icy menthol finish. This sophisticated flavor profile is complemented by smooth throat hit. Available in multiple nicotine options."
  },
  {
    id: 15,
    name: "Neon Mint Fusion",
    price: 24.99,
    image: juice3,
    images: [juice3, juice4, juice1, juice2],
    description: "Ultra-cool mint blend - 60ml",
    category: "Vape Juice",
    details: "Refresh your senses with Neon Mint Fusion. This ultra-cool blend combines peppermint, spearmint, and wintergreen for an intensely refreshing experience. Perfect for menthol lovers. Crystal-clear liquid with maximum purity. 60/40 VG/PG ratio."
  },
  {
    id: 16,
    name: "Solar Citrus Blast",
    price: 24.99,
    image: juice4,
    images: [juice4, juice3, juice2, juice1],
    description: "Tropical citrus explosion - 60ml",
    category: "Vape Juice",
    details: "Energize your day with Solar Citrus Blast. A vibrant mix of orange, grapefruit, and tangerine creates a tropical paradise in every puff. Sweet and tangy with a smooth finish. Perfect for citrus enthusiasts. Premium quality ingredients ensure consistent flavor."
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};
