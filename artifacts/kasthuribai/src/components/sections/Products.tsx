import { useState } from "react";
import { PRODUCTS, Category } from "@/data/mock-data";
import { ProductCard } from "./ProductCard";
import { motion, AnimatePresence } from "framer-motion";

const FILTERS: (Category | "All")[] = ["All", "Men", "Women", "Kids", "Traditional", "Festive"];

export function Products() {
  const [activeFilter, setActiveFilter] = useState<Category | "All">("All");

  const filteredProducts = PRODUCTS.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section id="collections" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Collections</h2>
            <div className="w-24 h-1 bg-gold rounded-full"></div>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gold text-black shadow-md"
                    : "bg-secondary text-foreground hover:bg-secondary-foreground/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
