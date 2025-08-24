"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-400">MyShop</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/products" className="text-gray-700 hover:text-orange-400">
            Products
          </a>
          <a href="/login" className="text-gray-700 hover:text-orange-400">
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a
            href="/products"
            className="block text-gray-700 hover:text-orange-400"
          >
            Products
          </a>
          <a href="/login" className="block text-gray-700 hover:text-orange-400">
            Login
          </a>
        </div>
      )}
    </nav>
  );
}
