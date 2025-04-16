'use client';

import Image from 'next/image';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl max-w-md w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-pink-500"
        >
          ✕
        </button>
        <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
          <Image src={product.image} alt={product.title} fill className="object-cover" />
        </div>
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="mt-2 text-pink-600 font-bold text-lg">₹{product.price}</p>
        <p className="mt-1 text-sm text-gray-500">⭐ {product.rating} / 5</p>
        <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-full hover:bg-pink-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
