import React from 'react';
import { Link } from 'react-router-dom';

function BakerNavbar() {
  return (
    <nav className="bg-amber-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/baker" className="text-2xl font-bold text-white">Baker Dashboard</Link>
        <Link to="/" className="text-white">Logout</Link>
      </div>
    </nav>
  );
}

export default BakerNavbar;

