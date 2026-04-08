"use client";

const categories = [
  {
    label: "CLASSIC",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 mx-auto mb-1" fill="none">
        <circle cx="20" cy="28" r="10" stroke="#c0392b" strokeWidth="2" />
        <rect x="9" y="16" width="22" height="6" rx="3" stroke="#c0392b" strokeWidth="2" />
        <rect x="14" y="10" width="12" height="6" rx="3" stroke="#c0392b" strokeWidth="2" />
        <path d="M20 6 Q21 4 22 6" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="5" r="1.5" fill="#c0392b" />
      </svg>
    ),
  },
  {
    label: "GOURMET",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 mx-auto mb-1" fill="none">
        <rect x="6" y="6" width="28" height="28" rx="6" stroke="#c0392b" strokeWidth="2" />
        <path d="M13 20h14M20 13v14" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "DESSERTS",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 mx-auto mb-1" fill="none">
        <path d="M10 32h20M10 32c0-10 20-10 20 0" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 26c0-4 8-4 8 0" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 16 Q16 12 18 16" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 14 Q22 10 24 14" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "COOKIES",
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9 mx-auto mb-1" fill="none">
        <circle cx="20" cy="20" r="13" stroke="#c0392b" strokeWidth="2" />
        <circle cx="15" cy="16" r="2" fill="#c0392b" />
        <circle cx="24" cy="18" r="1.5" fill="#c0392b" />
        <circle cx="17" cy="24" r="1.5" fill="#c0392b" />
        <circle cx="25" cy="25" r="2" fill="#c0392b" />
      </svg>
    ),
  },
];

const menuIcons = [
  <svg key="a" viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="4" stroke="#c0392b" strokeWidth="1.5" />
    <path d="M7 12h10M7 8h10M7 16h6" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="b" viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#c0392b" strokeWidth="1.5" />
    <path d="M9 9l6 6M15 9l-6 6" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="c" viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#c0392b" strokeWidth="1.5" />
    <path d="M8 12h8M12 8v8" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
];

export default function MenuSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-8 pb-6">
      <div className="flex items-start justify-between gap-8">
        {/* Left: title + icons */}
        <div className="min-w-[180px]">
          <h2 className="text-2xl font-extrabold text-[#c0392b] mb-0.5">Menu</h2>
          <p className="text-sm text-gray-500 mb-4">What will you wish for?</p>
          <div className="flex gap-2">
            {menuIcons.map((icon, i) => (
              <button
                key={i}
                className="w-9 h-9 border border-gray-200 rounded-lg flex items-center justify-center hover:border-[#c0392b] hover:bg-[#fdf6f0] transition-colors"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Right: category cards */}
        <div className="flex gap-4 flex-1 justify-end">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className="flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl shadow-sm px-6 py-4 min-w-[100px] hover:shadow-md hover:border-[#c0392b] transition-all group"
            >
              <div className="mb-1">{cat.icon}</div>
              <span className="text-[11px] font-bold text-gray-700 tracking-wider group-hover:text-[#c0392b] transition-colors">
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}