import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-amber-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">Sweet Delights</Link>
        <div>
          <Link to="/cart" className="text-white mr-4">Cart</Link>
          <button className="bg-white text-amber-600 px-4 py-2 rounded">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

