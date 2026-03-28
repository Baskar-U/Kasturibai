import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Plus, X, Check } from "lucide-react";
import { Review, REVIEWS as INITIAL_REVIEWS } from "@/data/mock-data";

const AVATAR_COLORS = [
  "bg-rose-100 text-rose-700",
  "bg-amber-100 text-amber-700",
  "bg-emerald-100 text-emerald-700",
  "bg-blue-100 text-blue-700",
  "bg-purple-100 text-purple-700",
  "bg-orange-100 text-orange-700",
];

function StarRating({ rating, interactive = false, onChange }: { rating: number; interactive?: boolean; onChange?: (r: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-5 h-5 transition-colors ${interactive ? "cursor-pointer" : ""} ${
            s <= (interactive ? (hovered || rating) : rating)
              ? "fill-amber-400 text-amber-400"
              : "text-gray-200 fill-gray-200"
          }`}
          onMouseEnter={() => interactive && setHovered(s)}
          onMouseLeave={() => interactive && setHovered(0)}
          onClick={() => interactive && onChange?.(s)}
        />
      ))}
    </div>
  );
}

function ReviewForm({ onSubmit, onClose }: { onSubmit: (r: Review) => void; onClose: () => void }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    const newReview: Review = {
      id: `r${Date.now()}`,
      name: name.trim(),
      rating,
      text: text.trim(),
      date: new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" }),
      avatar: name.trim().charAt(0).toUpperCase(),
    };
    setSubmitted(true);
    setTimeout(() => {
      onSubmit(newReview);
      onClose();
    }, 1500);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
          <X className="w-4 h-4 text-gray-600" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground font-body">Your review has been submitted successfully.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-display font-bold mb-1">Write a Review</h3>
            <p className="text-muted-foreground text-sm font-body mb-6">Share your experience with Kasthuribai Ready Mades</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-body font-semibold mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm font-body focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all bg-secondary/30"
                />
              </div>

              <div>
                <label className="block text-sm font-body font-semibold mb-2">Your Rating</label>
                <div className="flex items-center gap-3">
                  <StarRating rating={rating} interactive onChange={setRating} />
                  <span className="text-sm font-body text-muted-foreground">
                    {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][rating]}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-body font-semibold mb-1.5">Your Review</label>
                <textarea
                  required
                  rows={4}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Tell us about your experience..."
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm font-body focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all bg-secondary/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-body font-semibold py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm uppercase tracking-wider"
              >
                Submit Review
              </button>
            </form>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [showForm, setShowForm] = useState(false);

  const handleNewReview = (review: Review) => {
    setReviews((prev) => [review, ...prev]);
  };

  const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-primary font-body font-semibold text-sm uppercase tracking-wider">Trusted by Thousands</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-3">Customer Reviews</h2>
            <div className="w-20 h-1 bg-gold rounded-full mb-4"></div>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-2xl font-body font-bold">{avgRating}</span>
              <span className="text-muted-foreground font-body text-sm">({reviews.length} reviews)</span>
            </div>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="mt-6 md:mt-0 flex items-center gap-2 bg-primary text-white font-body font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm"
          >
            <Plus className="w-4 h-4" /> Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i < 6 ? i * 0.08 : 0 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center font-body font-bold text-lg flex-shrink-0 ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}>
                    {review.avatar}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-body font-bold text-foreground truncate">{review.name}</h4>
                    <p className="text-xs text-muted-foreground font-body">{review.date}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="mt-3 text-sm font-body text-gray-600 leading-relaxed">"{review.text}"</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {showForm && <ReviewForm onSubmit={handleNewReview} onClose={() => setShowForm(false)} />}
      </AnimatePresence>
    </section>
  );
}
