'use client';

import { ShoppingCart, User, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-600">
          Meesho
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Search bar */}
       
          

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full px-1">
              2
            </span>
          </Link>
          <Link href="/account">
            <User className="w-6 h-6 text-gray-700" />
          </Link>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 shadow-md space-y-3">
          <Link href="/" className="block text-gray-700">Home</Link>
          <Link href="/categories" className="block text-gray-700">Categories</Link>
          <Link href="/deals" className="block text-gray-700">Deals</Link>
          <Link href="/contact" className="block text-gray-700">Contact</Link>
          
        </div>
      )}
    </header>
  );
}
