import { useState } from "react";
import { PRODUCTS } from "@/data/mock-data";
import { ProductCard } from "./ProductCard";
import { motion } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export function NewArrivals() {
  const newProducts = PRODUCTS.slice(0, 6);
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 4;

  const prev = () => setStartIdx(Math.max(0, startIdx - 1));
  const next = () => setStartIdx(Math.min(newProducts.length - visibleCount, startIdx + 1));

  return (
    <section id="new-arrivals" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-gold text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> New Arrivals
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Fresh Collections</h2>
            <div className="w-24 h-1 bg-gold rounded-full"></div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={prev}
              disabled={startIdx === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors disabled:opacity-30"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={startIdx >= newProducts.length - visibleCount}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors disabled:opacity-30"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${startIdx * 25}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {newProducts.map((product) => (
              <div key={product.id} className="min-w-[calc(25%-18px)] flex-shrink-0 hidden md:block">
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10 bg-gold text-black text-xs font-bold px-2 py-1 rounded-full">NEW</div>
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
            {newProducts.slice(0, 4).map((product) => (
              <div key={product.id} className="relative">
                <div className="absolute top-3 left-3 z-10 bg-gold text-black text-xs font-bold px-2 py-1 rounded-full">NEW</div>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
