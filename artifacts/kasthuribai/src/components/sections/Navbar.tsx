import { useState, useEffect, useRef } from "react";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useCart } from "@/store/use-cart";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Categories", href: "#categories" },
  { name: "New Arrivals", href: "#new-arrivals" },
  { name: "Collections", href: "#collections" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
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
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/96 backdrop-blur-md border-gray-100 shadow-sm"
          : "bg-white border-gray-100"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 h-16">
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1.5 -ml-1.5 text-foreground hover:text-primary transition-colors flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="font-display text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors flex-shrink-0 mr-2"
          >
            Kasthuribai<span className="text-gold">.</span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-[11px] font-body font-semibold uppercase tracking-widest text-gray-600 hover:text-primary transition-colors relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gold rounded-full transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Search bar — always visible, grows to fill space */}
          <div className="flex-1 max-w-xs lg:max-w-sm mx-2 md:mx-4">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary border border-border rounded-full py-2 pl-8 pr-3 text-xs font-body focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>

          {/* Cart */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative w-9 h-9 flex items-center justify-center text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-secondary flex-shrink-0"
          >
            <ShoppingBag className={cn("w-5 h-5 transition-transform", cartBounce && "animate-cart-bounce")} />
            {getCartCount() > 0 && (
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-primary text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-80 py-3" : "max-h-0"
      )}>
        <div className="flex flex-col px-4 gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-left text-sm font-body font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-gray-50 last:border-0"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
