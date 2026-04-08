"use client";

const stats = [
  {
    label: "ON TIME\nDELIVERY",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 mx-auto" fill="none">
        <circle cx="20" cy="20" r="17" stroke="#c0392b" strokeWidth="2" />
        <path d="M20 10v10l6 4" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "500+\nDESIGNS",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 mx-auto" fill="none">
        <rect x="6" y="8" width="28" height="24" rx="4" stroke="#c0392b" strokeWidth="2" />
        <path d="M12 18h16M12 24h10" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="28" cy="12" r="3" fill="#c0392b" />
      </svg>
    ),
  },
  {
    label: "2 Cr+\nORDERS",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 mx-auto" fill="none">
        <rect x="7" y="14" width="26" height="18" rx="3" stroke="#c0392b" strokeWidth="2" />
        <path d="M14 14v-2a6 6 0 0112 0v2" stroke="#c0392b" strokeWidth="2" />
        <circle cx="20" cy="23" r="3" fill="#c0392b" />
      </svg>
    ),
  },
  {
    label: "BAKED\nFRESH",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 mx-auto" fill="none">
        <path d="M8 30h24M10 30c0-10 20-10 20 0" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 24c0-4 8-4 8 0" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 14 Q16 10 18 14" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 12 Q22 8 24 12" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=400&h=280&fit=crop",
    label: "Rovalette",
  },
  {
    src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=280&fit=crop",
    label: "Roialette",
  },
  {
    src: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&h=280&fit=crop",
    label: "Why you want Perfection",
  },
  {
    src: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=280&fit=crop",
    label: "Cheesida Collection",
  },
  {
    src: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=400&h=280&fit=crop",
    label: "Custom Cake Celebrations",
  },
  {
    src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=280&fit=crop",
    label: "60th Anniversary Cakes",
  },
];

export default function OurPromise() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-8 border-t border-gray-100">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-1">Our Promise</h2>
      <p className="text-sm text-gray-500 mb-8">
        Therts no secret spell – only honest the wark!
      </p>

      <div className="flex gap-8 items-start pb-8">
        {/* Left column */}
        <div className="flex-1 max-w-[360px] flex flex-col gap-5">
          {/* Stats card */}
          <div className="bg-[#fdf6f0] rounded-2xl p-5">
            <p className="text-sm text-gray-600 mb-5 font-medium">
              A glimpes roa secret spell – only hocial world!
            </p>
            <div className="grid grid-cols-4 gap-2 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  {stat.icon}
                  <span className="text-[10px] font-bold text-gray-700 leading-tight whitespace-pre-line text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Magical ticket */}
          <div className="bg-[#fdf6f0] rounded-2xl p-5 flex items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
                  <rect x="4" y="14" width="40" height="20" rx="5" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M18 14v20M12 24h4M22 21h14M22 27h10" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="6" cy="8" r="2" fill="#ef4444" />
                  <circle cx="42" cy="10" r="2" fill="#3b82f6" />
                  <circle cx="10" cy="38" r="2" fill="#f59e0b" />
                  <circle cx="38" cy="40" r="2" fill="#10b981" />
                  <path d="M40 6 L42 8 L40 10" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-extrabold text-base text-gray-900 mb-0.5">THE MAGICAL TICKET</h3>
              <p className="text-xs text-gray-500 mb-3">
                Add 3 reminders in your account. Win offers worth Rs. 750
              </p>
              <button className="bg-[#c0392b] text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-[#a93226] transition-colors">
                UNLOCK NOW
              </button>
            </div>
          </div>

          {/* Social follow */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="user"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700">Follow us on social!</span>
          </div>
        </div>

        {/* Right – 2×3 gallery grid */}
        <div className="flex-1 grid grid-cols-2 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden h-36 group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute bottom-2 left-3 text-white text-[11px] font-bold drop-shadow">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}