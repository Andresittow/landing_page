"use client";

export default function HeroBanner() {
  return (
    <section className="bg-[#c0392b] relative overflow-hidden pb-16">
      {/* Decorative background circles */}
      <div className="absolute top-6 right-52 w-28 h-28 rounded-full bg-white/10" />
      <div className="absolute top-2 right-20 w-16 h-16 rounded-full bg-white/10" />
      <div className="absolute bottom-8 left-36 w-20 h-20 rounded-full bg-white/10" />
      <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-[#a93226]/50" />
      <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#a93226]/30" />

      <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between gap-6 min-h-[300px] relative z-10">
        {/* Left – large circular cake image */}
        <div className="flex-shrink-0">
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop"
              alt="Chocolate Cake"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Center – headline + offer */}
        <div className="text-white z-10 flex-1 text-center">
          <h1 className="text-5xl font-extrabold leading-tight uppercase tracking-wide drop-shadow-lg">
            Decadent<br />Chocolate<br />Bliss!
          </h1>
          {/* Cursive decoration */}
          <p className="mt-1 text-lg font-light tracking-wider opacity-95 italic" style={{ fontFamily: "Georgia, serif" }}>
            Satify Your Sweest Cravings
          </p>
          <div className="mt-5 inline-flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-widest text-white/80 block mb-1 font-medium">
              Special Offer!
            </span>
            <span className="bg-white text-[#c0392b] font-extrabold text-xl px-8 py-2 rounded-full shadow-lg">
              SAVE 20%
            </span>
          </div>
        </div>

        {/* Right – stacked images */}
        <div className="flex flex-col gap-3 flex-shrink-0">
          {/* Top – circle */}
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=200&h=200&fit=crop"
              alt="Cake 2"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Bottom – rounded square */}
          <div className="w-28 h-28 rounded-2xl overflow-hidden border-4 border-white/30 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200&h=200&fit=crop"
              alt="Cake 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}