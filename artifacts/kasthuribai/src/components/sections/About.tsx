import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              A Legacy of <span className="italic font-light">Trust</span> & Style.
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Kasthuribai Ready Mades is built on decades of trust and experience from the renowned NMP group. Serving customers since the 1930s in Chidambaram, we have evolved from a humble textile store to a premier destination for ready-made fashion.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We offer stylish, affordable clothing for men, women, and kids with an unwavering focus on quality, comfort, and customer satisfaction.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Premium Quality Fabrics",
                "Wide Range of Collections",
                "Affordable Pricing",
                "Excellent Customer Service"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="text-gold w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats & Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-sm text-center">
                <span className="block text-4xl mb-2">🏆</span>
                <h4 className="text-3xl font-display font-bold text-foreground mb-1">90+</h4>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Years Legacy</p>
              </div>
              {/* stock image vintage fashion store */}
              <div className="h-48 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80" alt="Store interior" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="space-y-4">
              {/* stock image happy family shopping */}
              <div className="h-48 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80" alt="Happy customers" className="w-full h-full object-cover" />
              </div>
              <div className="bg-gold p-6 rounded-2xl shadow-lg text-center text-black">
                <span className="block text-4xl mb-2">❤️</span>
                <h4 className="text-3xl font-display font-bold mb-1">1000+</h4>
                <p className="text-sm font-semibold uppercase tracking-wider">Happy Customers</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
