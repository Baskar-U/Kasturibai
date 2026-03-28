import { X, Minus, Plus, ShoppingBag, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/store/use-cart";
import { formatPrice } from "@/lib/utils";
import { LuxuryButton } from "./ui/luxury-button";

export function CartDrawer() {
  const { isOpen, setIsOpen, items, removeItem, updateQuantity, getCartTotal } = useCart();

  const handleWhatsAppOrder = () => {
    const total = formatPrice(getCartTotal());
    let message = `Hello Kasthuribai Ready Mades! I would like to place an order:\n\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (Qty: ${item.quantity}) - ${formatPrice(item.price * item.quantity)}\n`;
    });
    
    message += `\n*Total Estimate: ${total}*\n\nPlease confirm availability.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-background border-l border-border shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2 text-gold">
                <ShoppingBag className="w-5 h-5" />
                <h2 className="font-display text-xl font-bold text-foreground">Your Cart</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
                  <ShoppingBag className="w-16 h-16" />
                  <p>Your cart is empty.</p>
                  <LuxuryButton variant="outline" onClick={() => setIsOpen(false)}>
                    Continue Shopping
                  </LuxuryButton>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-24 rounded-md overflow-hidden bg-secondary flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors ml-2"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-gold font-semibold mt-1">{formatPrice(item.price)}</p>
                      
                      <div className="mt-auto flex items-center gap-3">
                        <div className="flex items-center border border-border rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-secondary transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-secondary transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-border bg-secondary/30 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold font-display">
                  <span>Subtotal</span>
                  <span>{formatPrice(getCartTotal())}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Shipping & taxes calculated at checkout.
                </p>
                <LuxuryButton className="w-full gap-2" onClick={handleWhatsAppOrder}>
                  <Send className="w-4 h-4" />
                  Order via WhatsApp
                </LuxuryButton>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
