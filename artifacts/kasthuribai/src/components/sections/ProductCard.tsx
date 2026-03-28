import { ShoppingBag, MessageCircle, Star } from "lucide-react";
import { Product } from "@/data/mock-data";
import { useCart } from "@/store/use-cart";
import { formatPrice } from "@/lib/utils";
import { LuxuryButton } from "../ui/luxury-button";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ordering the ${product.name} priced at ${formatPrice(product.price)}.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <div className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:shadow-black/5 hover:border-gold/30 transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        {/* stock image fashion clothing */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          loading="lazy"
        />
        
        {/* Badges */}
        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.badges.map((badge) => (
              <span key={badge} className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-bold px-2.5 py-1 rounded-sm shadow-sm uppercase tracking-wider">
                {badge}
              </span>
            ))}
          </div>
        )}
        
        {/* Quick Actions (Hover) */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/80 to-transparent">
          <LuxuryButton 
            className="w-full gap-2 font-bold" 
            onClick={() => addItem(product)}
          >
            <ShoppingBag className="w-4 h-4" /> Add to Cart
          </LuxuryButton>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-gold mb-2 text-sm">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-current" : "opacity-30"}`} />
          ))}
          <span className="text-muted-foreground ml-1 text-xs">({product.rating})</span>
        </div>
        
        <h3 className="font-display font-semibold text-lg text-foreground mb-1 line-clamp-1 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">{product.category}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="font-bold text-xl text-foreground">{formatPrice(product.price)}</span>
          
          <button 
            onClick={handleWhatsApp}
            className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors tooltip-trigger relative group/btn"
            aria-label="Order on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="absolute bottom-full mb-2 bg-foreground text-background text-xs py-1 px-2 rounded opacity-0 group-hover/btn:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
              Order via WhatsApp
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
