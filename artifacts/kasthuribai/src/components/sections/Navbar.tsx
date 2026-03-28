import { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu, X, Moon, Sun } from "lucide-react";
import { useCart } from "@/store/use-cart";
import { useTheme } from "@/hooks/use-theme";
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
  const { getCartCount, setIsOpen } = useCart();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gold text-black text-sm font-medium py-2 overflow-hidden relative z-50">
        <div className="flex w-[200%] animate-[marquee_20s_linear_infinite]">
          <span className="w-full text-center">✨ Free shipping on orders above ₹999 | New arrivals every week | Visit us in Chidambaram ✨</span>
          <span className="w-full text-center">✨ Free shipping on orders above ₹999 | New arrivals every week | Visit us in Chidambaram ✨</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 border-b",
          isScrolled 
            ? "bg-background/90 backdrop-blur-md border-border py-3 shadow-sm" 
            : "bg-background border-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -ml-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <div 
            className="font-display text-2xl md:text-3xl font-bold tracking-tight cursor-pointer"
            onClick={() => scrollTo('#home')}
          >
            Kasthuribai<span className="text-gold">.</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-foreground hover:text-gold transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button className="p-2 text-foreground hover:text-gold transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
            
            <button 
              className="p-2 text-foreground hover:text-gold transition-colors relative"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-gold text-black text-[10px] font-bold flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96 py-4" : "max-h-0"
        )}>
          <div className="flex flex-col px-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-left text-lg font-medium text-foreground hover:text-gold transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="relative mt-4">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full bg-secondary border-none rounded-md py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-gold outline-none"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
