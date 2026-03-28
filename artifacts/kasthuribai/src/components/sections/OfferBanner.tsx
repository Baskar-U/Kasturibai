import { LuxuryButton } from "../ui/luxury-button";

export function OfferBanner() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/offer-bg.png`}
          alt="Offer background"
          className="w-full h-full object-cover object-center opacity-40 dark:opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-primary/90 dark:bg-black/90 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <span className="inline-block px-4 py-1 border border-gold text-gold rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          Limited Time Offer
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Get Up To <span className="gold-gradient-text">50% OFF</span> On Festive Wear
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Celebrate this season with Kasthuribai's exclusive festive collection. Premium quality at unbeatable prices.
        </p>
        
        {/* Fake Countdown */}
        <div className="flex justify-center gap-4 mb-10">
          {[
            { label: 'Days', val: '03' },
            { label: 'Hours', val: '14' },
            { label: 'Mins', val: '45' },
            { label: 'Secs', val: '22' },
          ].map((time, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20 mb-2">
                <span className="text-2xl md:text-3xl font-bold font-display">{time.val}</span>
              </div>
              <span className="text-xs text-gray-400 uppercase tracking-wider">{time.label}</span>
            </div>
          ))}
        </div>

        <LuxuryButton size="lg" onClick={() => {
          document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          Shop The Sale
        </LuxuryButton>
      </div>
    </section>
  );
}
