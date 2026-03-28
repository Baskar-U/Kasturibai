import { CATEGORIES, Category } from "@/data/mock-data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CategoriesProps {
  onCategoryFilter?: (category: Category) => void;
}

export function Categories({ onCategoryFilter }: CategoriesProps) {
  const scrollToCollections = (filter: Category) => {
    onCategoryFilter?.(filter);
    setTimeout(() => {
      document.querySelector('#collections')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-wider">Browse Collections</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">Shop by Category</h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => scrollToCollections(cat.filter)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ y: -6 }}
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.bg} transition-all duration-500`} />

              {/* Content */}
              <div className="relative h-52 md:h-64 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-400">
                  <span className="text-4xl">{cat.icon}</span>
                </div>
                <h3 className="text-base md:text-lg font-body font-bold text-gray-800 mb-1">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-600 font-body mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.desc}
                </p>
                <div className="flex items-center gap-1 text-xs font-body font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: cat.accent }}>
                  Explore <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" style={{ backgroundColor: cat.accent }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
