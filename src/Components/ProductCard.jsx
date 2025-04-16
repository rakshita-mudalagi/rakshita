'use client';

import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ id, title, image, price, rating }) {
  return (
    <div className="relative bg-gradient-to-br from-pink-100 via-white to-pink-50 rounded-3xl p-4 shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl group">
      
      {/* Decorative Background Blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-300 opacity-30 rounded-full blur-2xl z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Product Image */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Info */}
        <h2 className="mt-4 text-lg font-semibold text-gray-800 line-clamp-2">{title}</h2>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-pink-600 font-bold text-xl">₹{price}</span>
          <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">⭐ {rating}</span>
        </div>

        {/* Add to Cart */}
        <button className="mt-4 flex items-center justify-center gap-2 bg-pink-600 text-white py-2 rounded-full hover:bg-pink-700 transition font-medium">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
