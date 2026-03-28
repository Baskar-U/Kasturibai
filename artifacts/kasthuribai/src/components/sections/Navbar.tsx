import { useState, useEffect } from "react";
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { getCartCount, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-white text-xs font-body font-medium py-2 overflow-hidden relative z-50">
        <div className="flex w-[200%] animate-marquee whitespace-nowrap">
          <span className="w-full text-center">
            ✨ Free shipping on orders above ₹999&nbsp;&nbsp;|&nbsp;&nbsp;New arrivals every week&nbsp;&nbsp;|&nbsp;&nbsp;Visit us in Chidambaram, Tamil Nadu&nbsp;&nbsp;|&nbsp;&nbsp;Serving since the 1930s – NMP Group ✨&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="w-full text-center">
            ✨ Free shipping on orders above ₹999&nbsp;&nbsp;|&nbsp;&nbsp;New arrivals every week&nbsp;&nbsp;|&nbsp;&nbsp;Visit us in Chidambaram, Tamil Nadu&nbsp;&nbsp;|&nbsp;&nbsp;Serving since the 1930s – NMP Group ✨&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 border-b",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-gray-100 shadow-sm py-3"
            : "bg-white border-gray-100 py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -ml-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors flex-shrink-0"
          >
            Kasthuribai<span className="text-gold">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-xs font-body font-semibold uppercase tracking-widest text-gray-600 hover:text-primary transition-colors relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold rounded-full transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Action icons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-secondary"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="relative w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary transition-colors rounded-full hover:bg-secondary"
            >
              <ShoppingBag className="w-4 h-4" />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[9px] font-bold flex items-center justify-center rounded-full translate-x-1 -translate-y-1">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-gray-100 bg-white px-4 py-3">
            <div className="max-w-7xl mx-auto relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                autoFocus
                type="text"
                placeholder="Search for sarees, kurtis, shirts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary border border-border rounded-full py-2 pl-9 pr-4 text-sm font-body focus:ring-2 focus:ring-primary/30 outline-none"
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96 py-4" : "max-h-0"
        )}>
          <div className="flex flex-col px-4 gap-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-left text-base font-body font-medium text-foreground hover:text-primary transition-colors py-1"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
