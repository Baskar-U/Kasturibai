import { useState, useEffect } from "react";
import { PRODUCTS, Category, Product } from "@/data/mock-data";
import { ProductCard } from "./ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

interface ProductsProps {
  onViewProduct?: (product: Product) => void;
  activeFilter?: Category | "All";
  onFilterChange?: (f: Category | "All") => void;
}

const FILTERS: (Category | "All")[] = ["All", "Men", "Women", "Kids", "Traditional", "Festive"];

const FILTER_ICONS: Record<string, string> = {
  All: "🛍️", Men: "👔", Women: "👗", Kids: "🧸", Traditional: "🪷", Festive: "🎉"
};

const SORT_OPTIONS = ["Default", "Price: Low to High", "Price: High to Low", "Rating: High to Low", "Most Reviewed"];

export function Products({ onViewProduct, activeFilter: externalFilter, onFilterChange }: ProductsProps) {
  const [internalFilter, setInternalFilter] = useState<Category | "All">("All");
  const [sortBy, setSortBy] = useState("Default");

  const activeFilter = externalFilter ?? internalFilter;
  const setActiveFilter = onFilterChange ?? setInternalFilter;

  useEffect(() => {
    if (externalFilter) setInternalFilter(externalFilter);
  }, [externalFilter]);

  let filtered = PRODUCTS.filter((p) => activeFilter === "All" || p.category === activeFilter);

  if (sortBy === "Price: Low to High") filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sortBy === "Price: High to Low") filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sortBy === "Rating: High to Low") filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  else if (sortBy === "Most Reviewed") filtered = [...filtered].sort((a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0));

  return (
    <section id="collections" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-primary font-body font-semibold text-sm uppercase tracking-wider">Explore</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-1 mb-3">Our Collections</h2>
            <div className="w-20 h-1 bg-gold rounded-full"></div>
          </div>

          <div className="flex items-center gap-3">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm font-body border border-border rounded-xl px-3 py-2 bg-white focus:ring-2 focus:ring-primary/30 outline-none cursor-pointer"
            >
              {SORT_OPTIONS.map((opt) => <option key={opt}>{opt}</option>)}
            </select>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-body font-semibold transition-all duration-250 ${
                activeFilter === filter
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-white border border-border text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              <span>{FILTER_ICONS[filter]}</span>
              {filter}
            </motion.button>
          ))}
          <span className="ml-auto text-sm text-muted-foreground font-body flex items-center">{filtered.length} products</span>
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence>
            {filtered.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} onView={onViewProduct} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground font-body">
            <span className="text-4xl block mb-3">🔍</span>
            No products found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
