import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const GALLERY_ITEMS = [
  { id: 1, label: "Women's Collection", color: "from-rose-400 to-pink-600", emoji: "👗", span: "col-span-1 row-span-2" },
  { id: 2, label: "Men's Formals", color: "from-slate-600 to-slate-800", emoji: "👔", span: "col-span-1 row-span-1" },
  { id: 3, label: "Silk Sarees", color: "from-amber-400 to-orange-600", emoji: "✨", span: "col-span-1 row-span-1" },
  { id: 4, label: "Kids Wear", color: "from-emerald-400 to-teal-600", emoji: "🧸", span: "col-span-1 row-span-1" },
  { id: 5, label: "Festive Wear", color: "from-purple-500 to-indigo-700", emoji: "🎉", span: "col-span-1 row-span-2" },
  { id: 6, label: "Traditional", color: "from-red-500 to-rose-700", emoji: "🪷", span: "col-span-1 row-span-1" },
  { id: 7, label: "New Arrivals", color: "from-cyan-400 to-blue-600", emoji: "💎", span: "col-span-1 row-span-1" },
  { id: 8, label: "Accessories", color: "from-yellow-400 to-amber-600", emoji: "👒", span: "col-span-1 row-span-1" },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Our Story in Pictures</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-gold rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${item.span}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setLightbox(item)}
            >
              <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <span className="text-6xl">{item.emoji}</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-2">
                <ZoomIn className="w-8 h-8 text-white" />
                <span className="text-white font-semibold text-sm">{item.label}</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-gold/90 text-black text-xs font-bold px-3 py-1 rounded-full">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className={`relative w-full max-w-2xl aspect-video rounded-2xl bg-gradient-to-br ${lightbox.color} flex items-center justify-center`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <span className="text-8xl">{lightbox.emoji}</span>
                <p className="text-white font-bold text-2xl mt-4">{lightbox.label}</p>
                <p className="text-white/70 text-sm mt-1">Kasthuribai Ready Mades</p>
              </div>
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                onClick={() => setLightbox(null)}
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
