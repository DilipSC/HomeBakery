import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../customer/Navbar';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the signin logic
    console.log('Sign in submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-center text-amber-800 mb-6">Sign In to Your Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-300"
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 text-center">
              <Link to="/forgot-password" className="text-amber-600 hover:text-amber-800">Forgot Password?</Link>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-100">
            <p className="text-center text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-amber-600 hover:text-amber-800">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

