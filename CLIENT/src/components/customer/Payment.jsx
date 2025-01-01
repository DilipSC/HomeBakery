import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


function Payment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    deliveryTime: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment and order here
    console.log('Order placed:', formData);
    navigate('/confirmation');
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">Payment and Delivery Details</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="deliveryTime" className="block text-gray-700 font-bold mb-2">Delivery Time</label>
            <input
              type="datetime-local"
              id="deliveryTime"
              name="deliveryTime"
              value={formData.deliveryTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-amber-500 text-white px-6 py-3 rounded hover:bg-amber-600"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payment;

