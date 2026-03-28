import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { NewArrivals } from "@/components/sections/NewArrivals";
import { OfferBanner } from "@/components/sections/OfferBanner";
import { Products } from "@/components/sections/Products";
import { BestSellers } from "@/components/sections/BestSellers";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ShieldCheck, Truck, RotateCcw, CreditCard } from "lucide-react";

function FeatureStrip() {
  const features = [
    { icon: <Truck className="w-6 h-6" />, title: "Free Shipping", desc: "On orders above ₹999" },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Best Quality", desc: "100% Genuine Fabrics" },
    { icon: <RotateCcw className="w-6 h-6" />, title: "Easy Returns", desc: "7-Day Return Policy" },
    { icon: <CreditCard className="w-6 h-6" />, title: "Secure Payment", desc: "100% Safe Checkout" },
  ];

  return (
    <div className="border-y border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-3 group">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">{f.title}</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureStrip />
        <Categories />
        <NewArrivals />
        <OfferBanner />
        <Products />
        <BestSellers />
        <About />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      
      <CartDrawer />
      <FloatingWhatsApp />
    </div>
  );
}
