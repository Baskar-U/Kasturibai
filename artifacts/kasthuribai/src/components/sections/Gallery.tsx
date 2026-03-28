import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Shuffle } from "lucide-react";

const GALLERY_BASE = [
  { id: 1, label: "Women's Collection", color: "from-rose-300 to-pink-500", emoji: "👗" },
  { id: 2, label: "Men's Formals", color: "from-blue-300 to-indigo-500", emoji: "👔" },
  { id: 3, label: "Silk Sarees", color: "from-amber-300 to-orange-500", emoji: "✨" },
  { id: 4, label: "Kids Wear", color: "from-green-300 to-emerald-500", emoji: "🧸" },
  { id: 5, label: "Festive Wear", color: "from-purple-300 to-indigo-600", emoji: "🎉" },
  { id: 6, label: "Traditional", color: "from-red-300 to-rose-600", emoji: "🪷" },
  { id: 7, label: "New Arrivals", color: "from-cyan-300 to-blue-500", emoji: "💎" },
  { id: 8, label: "Accessories", color: "from-yellow-300 to-amber-500", emoji: "👒" },
  { id: 9, label: "Bridal Wear", color: "from-fuchsia-300 to-pink-600", emoji: "💍" },
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1610189014603-81b4b1a437c9?w=800&q=80",
  "https://images.unsplash.com/photo-1583391733958-d65105e45a27?w=800&q=80",
  "https://images.unsplash.com/photo-1620012253295-c15ce3e24342?w=800&q=80",
  "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800&q=80",
  "https://images.unsplash.com/photo-1596455607563-ad6193f78b5c?w=800&q=80",
  "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80",
  "/images/store-1.png",
  "/images/store-2.png",
  "https://images.unsplash.com/photo-1622380590408-5ce0b22a00bd?w=800&q=80",
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function Gallery() {
  const [items, setItems] = useState(GALLERY_BASE);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  const handleShuffle = () => {
    setIsShuffling(true);
    setTimeout(() => {
      setItems(shuffleArray(GALLERY_BASE));
      setIsShuffling(false);
    }, 300);
  };

  // Auto-slide the lightbox
  useEffect(() => {
    if (!autoPlay || lightboxIdx === null) return;
    const interval = setInterval(() => {
      setLightboxIdx((prev) => (prev === null ? null : (prev + 1) % GALLERY_IMAGES.length));
    }, 3000);
    return () => clearInterval(interval);
  }, [autoPlay, lightboxIdx]);

  const prevImg = () => setLightboxIdx((prev) => prev === null ? null : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  const nextImg = () => setLightboxIdx((prev) => prev === null ? null : (prev + 1) % GALLERY_IMAGES.length);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "ArrowRight") nextImg();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [lightboxIdx]);

  return (
    <section id="gallery" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-primary font-body font-semibold text-sm uppercase tracking-wider">Our Story in Pictures</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-3">Gallery</h2>
            <div className="w-20 h-1 bg-gold rounded-full"></div>
          </div>
          <button
            onClick={handleShuffle}
            className="mt-4 md:mt-0 flex items-center gap-2 border border-border px-4 py-2 rounded-full text-sm font-body font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            <Shuffle className="w-4 h-4" /> Shuffle
          </button>
        </div>

        {/* Masonry-like grid */}
        <motion.div
          layout
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px] transition-opacity ${isShuffling ? "opacity-0" : "opacity-100"}`}
        >
          {items.map((item, i) => {
            const isLarge = i === 0 || i === 4;
            return (
              <motion.div
                layout
                key={item.id}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${isLarge ? "row-span-2" : "row-span-1"}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                onClick={() => setLightboxIdx(i % GALLERY_IMAGES.length)}
              >
                {i < GALLERY_IMAGES.length ? (
                  <img
                    src={GALLERY_IMAGES[i]}
                    alt={item.label}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <span className={`${isLarge ? "text-7xl" : "text-5xl"}`}>{item.emoji}</span>
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-sm font-body font-semibold">{item.label}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
          >
            {/* Close */}
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10" onClick={() => setLightboxIdx(null)}>
              <X className="w-5 h-5" />
            </button>

            {/* Auto-play toggle */}
            <button
              className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-colors z-10 ${autoPlay ? "bg-gold text-black" : "bg-white/20 text-white hover:bg-white/30"}`}
              onClick={(e) => { e.stopPropagation(); setAutoPlay(!autoPlay); }}
            >
              {autoPlay ? "⏸ Stop" : "▶ Auto"}
            </button>

            {/* Prev */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10" onClick={(e) => { e.stopPropagation(); prevImg(); }}>
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIdx}
              className="max-w-4xl w-full mx-16 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxIdx < GALLERY_IMAGES.length ? (
                <img src={GALLERY_IMAGES[lightboxIdx]} alt="" className="max-h-[80vh] w-full object-contain rounded-2xl shadow-2xl" />
              ) : (
                <div className={`w-full aspect-video rounded-2xl bg-gradient-to-br ${items[lightboxIdx].color} flex items-center justify-center`}>
                  <span className="text-8xl">{items[lightboxIdx].emoji}</span>
                </div>
              )}
            </motion.div>

            {/* Next */}
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10" onClick={(e) => { e.stopPropagation(); nextImg(); }}>
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {GALLERY_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIdx(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === lightboxIdx ? "bg-gold w-6" : "bg-white/40"}`}
                />
              ))}
            </div>

            {/* Caption */}
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 text-center">
              <span className="text-white font-body font-semibold text-sm bg-black/40 px-4 py-1.5 rounded-full">
                {items[lightboxIdx % items.length]?.label} · {lightboxIdx + 1} / {GALLERY_IMAGES.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
