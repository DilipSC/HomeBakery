import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example cart count

  return (
    <nav className="bg-amber-600 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
          <p>warmthnwhisk</p>
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-amber-200">Home</Link>
          <Link to="/about"  className="text-white hover:text-amber-200">About</Link>
          <Link to="/menu" className="text-white hover:text-amber-200">Menu</Link>
          <Link to="/contact" className="text-white hover:text-amber-200">Contact</Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-1 px-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          <Link to="/cart" className="text-white hover:text-amber-200 relative">
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2 py-1">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/signin" className="text-white hover:text-amber-200">Sign In</Link>
          <Link to="/signup" className="bg-white text-amber-600 px-4 py-2 rounded hover:bg-amber-100 transition duration-300">Sign Up</Link>
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2">
          <Link to="/" className="block text-white py-2 px-4 hover:bg-amber-700">Home</Link>
          <Link to="/about" className="block text-white py-2 px-4 hover:bg-amber-700">About</Link>
          <Link to="/menu" className="block text-white py-2 px-4 hover:bg-amber-700">Menu</Link>
          <Link to="/contact" className="block text-white py-2 px-4 hover:bg-amber-700">Contact</Link>
          <Link to="/signin" className="block text-white py-2 px-4 hover:bg-amber-700">Sign In</Link>
          <Link to="/signup" className="block text-white py-2 px-4 hover:bg-amber-700">Sign Up</Link>
          <div className="py-2 px-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-1 px-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

