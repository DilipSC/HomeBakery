import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Confirmation() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-3xl font-bold mb-6">Order Confirmed!</h1>
        <p className="text-xl mb-6">Thank you for your order. It will be delivered at the specified time.</p>
        <Link
          to="/feedback"
          className="bg-amber-500 text-white px-6 py-3 rounded hover:bg-amber-600"
        >
          Leave Feedback
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;

