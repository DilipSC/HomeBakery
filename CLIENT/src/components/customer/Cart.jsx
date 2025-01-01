import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Chocolate Cake', price: 25, quantity: 1, image: 'chocolate-cake.jpg' },
    { id: 2, name: 'Croissant', price: 3, quantity: 2, image: 'croissant.jpg' },
    { id: 3, name: 'Strawberry Tart', price: 4, quantity: 1, image: 'strawberry-tart.jpg' },
    { id: 4, name: 'Sourdough Bread', price: 5, quantity: 1, image: 'sourdough-bread.jpg' },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-amber-800">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-xl text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                  <div>
                    <h2 className="text-xl font-semibold text-amber-900">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l"
                  >
                    -
                  </button>
                  <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded-r"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-6 text-xl font-semibold text-right">
              Total: ${total.toFixed(2)}
            </div>
            <Link
              to="/payment"
              className="mt-6 block w-full bg-amber-500 text-white text-center px-6 py-3 rounded hover:bg-amber-600 transition duration-300"
            >
              Proceed to Payment
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;

