import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-body font-semibold tracking-widest uppercase text-sm mb-3 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-5 text-foreground leading-tight">
              A Legacy of <span className="italic font-medium text-gold">Trust</span> & Style.
            </h2>
            <p className="text-gray-600 text-base font-body mb-4 leading-relaxed">
              Kasthuribai Ready Mades is built on decades of trust and experience from the renowned NMP group. Serving customers since the <strong>1930s</strong> in Chidambaram, we have evolved from a humble textile store to a premier destination for ready-made fashion.
            </p>
            <p className="text-gray-600 text-base font-body mb-8 leading-relaxed">
              We offer stylish, affordable clothing for men, women, and kids with an unwavering focus on quality, comfort, and customer satisfaction.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "Premium Quality Fabrics at Affordable Prices",
                "Wide Range of Men, Women & Kids Collections",
                "Free Alteration Service at Store",
                "90+ Years of Community Trust",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-body font-medium">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="text-primary w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-7 py-3.5 rounded-full hover:bg-primary/90 transition-colors text-sm uppercase tracking-wider"
            >
              Visit Our Store
            </a>
          </motion.div>

          {/* Stats & Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <span className="block text-4xl mb-2">🏆</span>
                <h4 className="text-3xl font-display font-bold text-foreground mb-1">90+</h4>
                <p className="text-sm font-body text-muted-foreground uppercase tracking-wider">Years Legacy</p>
              </div>
              <div className="h-48 rounded-2xl overflow-hidden">
                <img src="/images/kasturi5.jpeg" alt="Our store" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-48 rounded-2xl overflow-hidden">
                <img src="/images/store-2.png" alt="Store inside" className="w-full h-full object-cover" />
              </div>
              <div className="bg-primary p-6 rounded-2xl shadow-lg text-center text-white">
                <span className="block text-4xl mb-2">❤️</span>
                <h4 className="text-3xl font-display font-bold mb-1">1000+</h4>
                <p className="text-sm font-body font-semibold uppercase tracking-wider">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
