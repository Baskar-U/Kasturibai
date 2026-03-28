import { PRODUCTS } from "@/data/mock-data";
import { ProductCard } from "./ProductCard";
import { Trophy } from "lucide-react";

export function BestSellers() {
  const bestSellers = PRODUCTS.filter((p) => p.badges?.some((b) => ["Best Seller", "Premium", "Hot"].includes(b))).slice(0, 4);
  const fallback = PRODUCTS.slice(6, 10);
  const display = bestSellers.length >= 4 ? bestSellers : [...bestSellers, ...fallback].slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-5 h-5 text-gold" />
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">Customer Favorites</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Best Sellers</h2>
            <div className="w-24 h-1 bg-gold rounded-full"></div>
          </div>
          <a href="#collections" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
            View All Collections →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {display.map((product, i) => (
            <div key={product.id} className="relative">
              <div className="absolute -top-3 -left-3 z-10 w-8 h-8 bg-gold text-black text-xs font-bold flex items-center justify-center rounded-full shadow-md">
                #{i + 1}
              </div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
