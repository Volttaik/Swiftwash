'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, Heart, Star, Truck, Shield, Clock } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { Product } from './types';

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<(Product & { quantity: number })[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample products - cleaning/washing supplies
  const products: Product[] = [
    {
      id: 1,
      name: 'Premium Laundry Detergent',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'Laundry',
      rating: 4.8,
      reviews: 342,
      inStock: true,
    },
    {
      id: 2,
      name: 'Dish Washing Liquid',
      price: 899,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'Kitchen',
      rating: 4.6,
      reviews: 218,
      inStock: true,
    },
    {
      id: 3,
      name: 'All-Purpose Cleaner',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'Cleaning',
      rating: 4.7,
      reviews: 156,
      inStock: true,
    },
    {
      id: 4,
      name: 'Fabric Softener',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'Laundry',
      rating: 4.5,
      reviews: 89,
      inStock: true,
    },
    {
      id: 5,
      name: 'Toilet Bowl Cleaner',
      price: 799,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'Bathroom',
      rating: 4.4,
      reviews: 127,
      inStock: true,
    },
    {
      id: 6,
      name: 'Glass & Window Cleaner',
      price: 1099,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'Cleaning',
      rating: 4.6,
      reviews: 94,
      inStock: true,
    },
    {
      id: 7,
      name: 'Bleach 5L Bottle',
      price: 2199,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'Laundry',
      rating: 4.7,
      reviews: 203,
      inStock: true,
    },
    {
      id: 8,
      name: 'Floor Polish',
      price: 1899,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'Cleaning',
      rating: 4.5,
      reviews: 76,
      inStock: true,
    },
  ];

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
      );
    }
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartCount={cartItems.length}
        onCartClick={() => setCartOpen(!cartOpen)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Main Content */}
      <main className="relative">
        <Hero />

        {/* Features Section */}
        <section className="bg-white py-8 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <Truck className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Same-day delivery available</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Shield className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Secure Payment</h3>
                <p className="text-sm text-gray-600">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                <p className="text-sm text-gray-600">Customer support always ready</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-gray-600">
              {filteredProducts.length} products found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your search.</p>
            </div>
          )}
        </section>
      </main>

      {/* Cart Panel */}
      {cartOpen && (
        <Cart
          items={cartItems}
          total={cartTotal}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onClose={() => setCartOpen(false)}
        />
      )}

      <Footer />
    </div>
  );
}
