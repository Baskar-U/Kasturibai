import { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/store/use-cart";
import { cn } from "@/lib/utils";
import { SpinWheel } from "@/components/SpinWheel";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Categories", href: "#categories" },
  { name: "New Arrivals", href: "#new-arrivals" },
  { name: "Collections", href: "#collections" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

function KasthuribaiLogo({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2.5 group flex-shrink-0 focus:outline-none"
      aria-label="Kasthuribai Ready Mades – Home"
    >
      {/* Logo image */}
      <img
        src="/favicon.png"
        alt="Kasthuribai Logo"
        width="38"
        height="38"
        className="flex-shrink-0"
      />

      {/* Brand text */}
      <div className="flex flex-col leading-none">
        <span
          className="font-logo text-[15px] font-semibold tracking-[0.18em] text-foreground group-hover:text-primary transition-colors uppercase"
        >
          Kasthuribai
        </span>
        <span className="font-body text-[7.5px] tracking-[0.25em] text-gold uppercase font-semibold -mt-0.5">
          Company · NMP Readymades
        </span>
      </div>
    </button>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const { getCartCount, setIsOpen, cartBounce } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 74;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/97 backdrop-blur-lg border-gray-100 shadow-sm py-0"
          : "bg-white border-gray-100 py-0"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ───── DESKTOP layout: 3-column grid ───── */}
        <div className="hidden md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6 h-[68px]">

          {/* LEFT – Logo */}
          <KasthuribaiLogo onClick={() => scrollTo("#home")} />

          {/* CENTER – Nav links */}
          <div className="flex items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="relative text-[10.5px] font-body font-semibold uppercase tracking-[0.12em] text-gray-500 hover:text-primary transition-colors duration-200 group whitespace-nowrap py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold rounded-full transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* RIGHT – Search + Spin + Cart */}
          <div className="flex items-center gap-2">
            {/* Search pill */}
            <div className={cn(
              "flex items-center gap-2 bg-secondary rounded-full border transition-all duration-300 overflow-hidden",
              searchFocused
                ? "border-primary/50 ring-2 ring-primary/10 w-48"
                : "border-border w-36"
            )}>
              <Search className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0 ml-3" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="bg-transparent py-2 pr-3 text-[11px] font-body text-foreground placeholder:text-muted-foreground outline-none w-full min-w-0"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="pr-2 flex-shrink-0">
                  <X className="w-3 h-3 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>

            {/* Spin Wheel button */}
            <SpinWheel />

            {/* Cart button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-1.5 bg-primary text-white pl-3.5 pr-4 py-2 rounded-full hover:bg-primary/90 transition-colors text-[11px] font-body font-semibold"
            >
              <ShoppingBag className={cn("w-3.5 h-3.5", cartBounce && "animate-cart-bounce")} />
              <span>Bag</span>
              {getCartCount() > 0 && (
                <span className="w-4 h-4 bg-gold text-black text-[9px] font-bold flex items-center justify-center rounded-full ml-0.5">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ───── MOBILE layout ───── */}
        <div className="md:hidden flex items-center h-14 gap-3">
          <button
            className="p-1 text-foreground hover:text-primary transition-colors flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Mobile logo – centered */}
          <div className="flex-1 flex justify-center">
            <KasthuribaiLogo onClick={() => scrollTo("#home")} />
          </div>

          {/* Mobile spin wheel */}
          <SpinWheel />

          {/* Mobile cart */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative w-9 h-9 flex items-center justify-center text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-secondary flex-shrink-0"
          >
            <ShoppingBag className={cn("w-5 h-5", cartBounce && "animate-cart-bounce")} />
            {getCartCount() > 0 && (
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-primary text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile search bar – always visible below nav on mobile */}
      <div className="md:hidden border-t border-gray-50 px-4 py-2 bg-white">
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-secondary border border-border rounded-full py-1.5 pl-8 pr-4 text-[11px] font-body focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 overflow-hidden z-50",
        mobileMenuOpen ? "max-h-96 py-2" : "max-h-0"
      )}>
        <div className="flex flex-col px-4">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className={cn(
                "text-left text-sm font-body font-medium text-foreground hover:text-primary transition-colors py-2.5",
                i < NAV_LINKS.length - 1 && "border-b border-gray-50"
              )}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
