"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* FSSAI Banner */}
      <div className="bg-[#c0392b] py-4 text-center">
        <p className="text-white font-bold text-sm tracking-wide">
          Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
        </p>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-[#c0392b] font-extrabold text-xl mb-3">Dakingo</h3>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {["Our Story", "Contact Us", "Looking Metas", "Mozilla", "Carenep"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#c0392b] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Know Us */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-800 mb-3">
              KNOW US
            </h4>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {["Contact Us", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#c0392b] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Need Help */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-800 mb-3">
              NEED HELP
            </h4>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {["Cancellation And Refund", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#c0392b] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Info 1 */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-800 mb-3">
              MORE INFO
            </h4>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {["Terms And Gificy", "Custorm Gwirname"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#c0392b] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Info 2 */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-800 mb-3">
              MORE INFO
            </h4>
            <ul className="space-y-1.5 text-sm text-gray-600">
              {["Coupons & Offers", "Download App"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#c0392b] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter + Chat */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6 gap-4">
          {/* Email row (center) */}
          <div className="flex-1 flex items-center gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:border-[#c0392b] transition-colors"
            />
            <button className="bg-[#c0392b] text-white text-sm font-bold px-6 py-2 rounded-full hover:bg-[#a93226] transition-colors whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>

          {/* Chat button + label */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button className="w-10 h-10 rounded-full border-2 border-[#c0392b] text-[#c0392b] flex items-center justify-center hover:bg-[#c0392b] hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
              </svg>
            </button>
            <span className="text-xs text-gray-500">Hey, need any help?</span>
          </div>
        </div>
      </div>
    </footer>
  );
}