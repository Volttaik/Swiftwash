'use client';

import Image from 'next/image';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { useState } from 'react';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  const [wishlisted, setWishlisted] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlisted((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
        >
          {/* Product Image */}
          <div className="relative h-48 bg-gray-200 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 right-3">
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`p-2 rounded-full transition-all ${
                  wishlisted.includes(product.id)
                    ? 'bg-red-500 text-white'
                    : 'bg-white text-gray-600 hover:text-red-500'
                }`}
              >
                <Heart className="w-5 h-5" fill="currentColor" />
              </button>
            </div>
            {product.inStock && (
              <div className="absolute bottom-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                In Stock
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-4">
            <div className="mb-2">
              <span className="text-xs font-semibold text-green-600 uppercase">
                {product.category}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 min-h-10">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(product.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-600">
                ({product.reviews})
              </span>
            </div>

            {/* Price */}
            <div className="mb-4">
              <p className="text-xl font-bold text-green-600">
                ₦{product.price.toLocaleString()}
              </p>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => onAddToCart(product)}
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
