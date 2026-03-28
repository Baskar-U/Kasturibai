import { CATEGORIES } from "@/data/mock-data";
import { motion } from "framer-motion";

export function Categories() {
  return (
    <section id="categories" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Shop by Category</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Category Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background border border-border group-hover:border-gold/50 transition-colors duration-500 rounded-xl"></div>
              
              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 text-center transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="text-5xl mb-4 filter drop-shadow-md group-hover:scale-110 transition-transform duration-500">
                  {cat.icon}
                </span>
                <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  {cat.desc}
                </p>
              </div>

              {/* Decorative Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/0 group-hover:border-gold/40 transition-colors duration-500 rounded-tl-xl m-2"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/0 group-hover:border-gold/40 transition-colors duration-500 rounded-br-xl m-2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
