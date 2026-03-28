import { REVIEWS } from "@/data/mock-data";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-4 h-4 ${s <= rating ? "fill-gold text-gold" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

const avatarColors = [
  "bg-rose-400",
  "bg-amber-400",
  "bg-emerald-400",
  "bg-blue-400",
  "bg-purple-400",
  "bg-orange-400",
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Trusted by Thousands</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-gold rounded-full mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9 / 5</span>
            <span>based on 100+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-gold/40 transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-gold/30 absolute top-4 right-4" />
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-lg`}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">Verified Customer · Chidambaram</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="mt-3 text-muted-foreground leading-relaxed italic">"{review.text}"</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border border-gold/30 rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-display font-bold mb-3">Share Your Experience</h3>
          <p className="text-muted-foreground mb-6">Visited our store or ordered online? We'd love to hear from you!</p>
          <a
            href="https://wa.me/919876543210?text=Hi!%20I%20want%20to%20share%20my%20experience%20with%20Kasthuribai%20Ready%20Mades"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-black font-bold px-8 py-3 rounded-full hover:bg-gold/90 transition-colors"
          >
            Write a Review on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
