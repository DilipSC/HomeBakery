import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="relative h-[70vh]">
      {/* Background Image */}
      <img src="https://www.mashed.com/img/gallery/the-best-bakery-in-every-state/l-intro-1601499029.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Freshly Baked Delights</h1>
        <p className="text-xl md:text-2xl mb-8 text-center">Delivered to Your Door</p>
        <Link to="/menu" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
