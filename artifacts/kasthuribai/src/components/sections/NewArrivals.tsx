import { useState, useRef } from "react";
import { PRODUCTS, Product } from "@/data/mock-data";
import { ProductCard } from "./ProductCard";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

interface NewArrivalsProps {
  onViewProduct?: (product: Product) => void;
}

export function NewArrivals({ onViewProduct }: NewArrivalsProps) {
  const newProducts = PRODUCTS.slice(0, 6);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="new-arrivals" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-rose-500 text-white text-xs font-body font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase">
                <Sparkles className="w-3 h-3" /> New Arrivals
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Fresh Collections</h2>
            <div className="w-20 h-1 bg-gold rounded-full"></div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll for mobile, grid layout on desktop */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible"
          style={{ scrollbarWidth: "none" }}
        >
          {newProducts.map((product, idx) => (
            <div key={product.id} className="min-w-[260px] md:min-w-0 flex-shrink-0 snap-start relative">
              <div className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-xs font-body font-bold px-2.5 py-0.5 rounded-full">NEW</div>
              <ProductCard product={product} onView={onViewProduct} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
