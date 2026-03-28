import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    image: "/images/kasturi2.png",
    overlayFrom: "from-black/80",
    overlayTo: "to-black/20",
  },
  {
    image: "/images/kasturi3.jpg",
    overlayFrom: "from-black/70",
    overlayTo: "to-black/10",
  },
  {
    image: "/images/store-2.png",
    overlayFrom: "from-black/75",
    overlayTo: "to-black/15",
  },
  {
    image: "/images/kasturi4.jpg",
    overlayFrom: "from-black/80",
    overlayTo: "to-black/20",
  },
  {
    image: "/images/kasturi5.jpeg",
    overlayFrom: "from-black/75",
    overlayTo: "to-black/25",
  },
];

const TYPING_WORDS = ["Comfort", "Elegance", "Affordability", "Legacy"];

function useTypingEffect(words: string[], speed = 80, pause = 2000) {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWord];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), speed);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), speed / 2);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, currentWord, words, speed, pause]);

  return displayed;
}

export function Hero() {
  const [current, setCurrent] = useState(0);
  const typedWord = useTypingEffect(TYPING_WORDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-[90vh] min-h-[620px] flex items-center justify-center overflow-hidden">
      {/* Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src={SLIDES[current].image}
            alt="Fashion"
            className="w-full h-full object-cover object-center"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${SLIDES[current].overlayFrom} ${SLIDES[current].overlayTo}`} />
        </motion.div>
      </AnimatePresence>

      {/* Slide dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "bg-gold w-8" : "bg-white/40 w-3"
            }`}
          />
        ))}
      </div>

      {/* Prev/Next Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-gold font-body font-semibold tracking-[0.25em] uppercase text-sm mb-5 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gold/30">
            Since 1930s · NMP Group · Chidambaram
          </span>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-3 leading-tight">
            Style Meets
          </h1>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="gold-gradient-text typing-cursor">{typedWord}</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl font-body font-light leading-relaxed">
            Trendy fashion for every occasion. Premium collections for Men, Women & Kids at unbeatable prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('#collections')}
              className="inline-flex items-center justify-center bg-gold text-black font-body font-bold px-8 py-4 rounded-full hover:bg-gold-light transition-all duration-300 text-sm uppercase tracking-wider shadow-lg hover:shadow-gold/30 hover:scale-105"
            >
              Shop Now
            </button>
            <button
              onClick={() => scrollTo('#about')}
              className="inline-flex items-center justify-center border-2 border-white/60 text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-foreground transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Our Legacy
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stats */}
      <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
          {["✨ 90+ Years Legacy", "🏆 1000+ Happy Customers", "💰 Affordable Prices", "👔 4 Collections"].map((item) => (
            <span key={item} className="text-white/80 text-xs font-body font-medium tracking-widest uppercase">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
