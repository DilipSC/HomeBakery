import React, { useState } from 'react';
import Navbar from './Navbar';

function CustomerLanding() {
  const [items, setItems] = useState([
    { id: 1, name: 'Chocolate Cake', price: 25, image: 'chocolate-cake.jpg' },
    { id: 2, name: 'Croissant', price: 3, image: 'croissant.jpg' },
    { id: 3, name: 'Baguette', price: 2, image: 'baguette.jpg' },
    { id: 4, name: 'Strawberry Tart', price: 4, image: 'strawberry-tart.jpg' },
    { id: 5, name: 'Cinnamon Roll', price: 3.5, image: 'cinnamon-roll.jpg' },
    { id: 6, name: 'Sourdough Bread', price: 5, image: 'sourdough-bread.jpg' },
    { id: 7, name: 'Blueberry Muffin', price: 2.5, image: 'blueberry-muffin.jpg' },
    { id: 8, name: 'Apple Pie', price: 18, image: 'apple-pie.jpg' },
  ]);

  const addToCart = (item) => {
    // Implement add to cart functionality
    console.log(`Added ${item.name} to cart`);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-amber-800">Our Delicious Treats</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-amber-900">{item.name}</h2>
                <p className="text-gray-600 mt-2">${item.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-4 w-full bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerLanding;

