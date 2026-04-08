"use client";
import { Heart, Plus, Star } from "lucide-react";

const products = [
  {
    name: "Rich Chocolate Truffle Cake",
    price: "₹500",
    reviews: "5k+ reviews",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop",
  },
  {
    name: "Choco Chip Truffle Cake",
    price: "₹509",
    reviews: "1k+ reviews",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=300&h=300&fit=crop",
  },
  {
    name: "Tropical Fruit N Almond Cake",
    price: "₹509",
    reviews: "3k+ reviews",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=300&fit=crop",
  },
  {
    name: "Rich Butterscotch Crunch Caraie Cake",
    price: "₹399",
    reviews: "1k+ reviews",
    rating: 4,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3 h-3 ${
            s <= Math.floor(rating)
              ? "text-[#c0392b] fill-[#c0392b]"
              : s - 0.5 <= rating
              ? "text-[#c0392b] fill-[#c0392b] opacity-60"
              : "text-gray-300 fill-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function Bestsellers() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-6 border-t border-gray-100">
      <h2 className="text-xl font-extrabold text-gray-900 mb-6">
        Bestsellers from Across the Country
      </h2>

      <div className="grid grid-cols-4 gap-5">
        {products.map((product, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 left-3 text-[#c0392b] bg-white/80 rounded-full p-1 shadow-sm">
                <Heart className="w-4 h-4 fill-[#c0392b]" />
              </button>
            </div>

            {/* Info */}
            <div className="p-3">
              <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-2 min-h-[36px]">
                {product.name}
              </h3>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-900">{product.price}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <StarRating rating={product.rating} />
                    <span className="text-[10px] text-gray-400">{product.reviews}</span>
                  </div>
                </div>
                <button className="w-7 h-7 rounded-full bg-[#c0392b] text-white flex items-center justify-center hover:bg-[#a93226] transition-colors shadow-sm">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-[#c0392b] text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-[#a93226] transition-colors shadow-sm">
          VIEW ALL
        </button>
      </div>
    </section>
  );
}