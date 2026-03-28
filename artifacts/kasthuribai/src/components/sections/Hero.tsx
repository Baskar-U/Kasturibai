import { motion } from "framer-motion";
import { LuxuryButton } from "../ui/luxury-button";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Luxury fashion background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-gold font-semibold tracking-[0.2em] uppercase text-sm mb-4 block">
            Since 1930s • NMP Group
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Style Meets <br/>
            <span className="gold-gradient-text italic pr-4">Comfort.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl font-light">
            Trendy fashion for every occasion. Discover our premium collections of Men's, Women's, and Kids' wear tailored for the modern lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <LuxuryButton size="lg" onClick={() => scrollTo('#collections')}>
              Shop Now
            </LuxuryButton>
            <LuxuryButton variant="outline" size="lg" onClick={() => scrollTo('#about')}>
              Our Legacy
            </LuxuryButton>
          </div>
        </motion.div>
      </div>

      {/* Stats Banner below Hero */}
      <div className="absolute bottom-0 w-full bg-background/5 backdrop-blur-md border-t border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between text-white/80 text-sm font-medium tracking-widest uppercase">
          <span>✨ 90+ Years Legacy</span>
          <span>✨ 1000+ Happy Customers</span>
          <span>✨ Affordable Luxury</span>
          <span>✨ Curated Collections</span>
        </div>
      </div>
    </section>
  );
}
