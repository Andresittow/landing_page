"use client";
import { ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="text-[#c0392b] font-extrabold text-2xl tracking-tight flex-shrink-0">
          Dakingo
        </a>

        {/* Search */}
        <div className="flex-1 max-w-xs">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-200 rounded-full pl-9 pr-4 py-1.5 text-sm outline-none focus:border-[#c0392b] transition-colors bg-gray-50"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button className="flex items-center text-gray-600 hover:text-[#c0392b] transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <span className="text-sm text-gray-600 hover:text-[#c0392b] cursor-pointer transition-colors whitespace-nowrap">
            Login/Signup
          </span>
        </div>
      </div>

      {/* Nav links */}
      <nav className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center gap-5">
          {["Cakes", "Theme Cakes", "Desserts", "Birthday", "Hampers", "Anniversary", "Occasions", "Occasions"].map(
            (item, i) => (
              <a
                key={i}
                href="#"
                className="text-sm text-gray-700 hover:text-[#c0392b] transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            )
          )}
          <a
            href="#"
            className="ml-auto bg-[#c0392b] text-white text-sm font-semibold px-5 py-1.5 rounded-full hover:bg-[#a93226] transition-colors whitespace-nowrap"
          >
            ORDER NOW
          </a>
        </div>
      </nav>
    </header>
  );
}