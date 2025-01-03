import React from 'react';
import { Link } from 'react-router-dom';

function SpecialOffers() {
  return (
    <section className="py-12 bg-gradient-to-r from-amber-400 to-amber-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://ythera.co.ke/wp-content/uploads/2019/02/CDC075DE-D792-43C1-8E12-E50232B63BD9.jpeg" alt="Seasonal Offer" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Seasonal Delights</h3>
              <p className="text-gray-600 mb-4">Enjoy our limited-time seasonal treats! Perfect for the holidays.</p>
              <Link to="/seasonal-offers" className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition duration-300">
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://img.freepik.com/premium-photo/autumn-elegance-fall-dishware-banner-seasonal-delights_802234-13373.jpg" alt="Bundle Offer" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Sweet Bundle</h3>
              <p className="text-gray-600 mb-4">Get a variety of our best-selling items at a special price!</p>
              <Link to="/bundle-offers" className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition duration-300">
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;

