import React, { useState } from 'react';
import Navbar from './Navbar';

function Feedback() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit feedback
    console.log('Feedback submitted:', feedback);
    setFeedback('');
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6">Leave Your Feedback</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-gray-700 font-bold mb-2">Your Feedback</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-amber-500 text-white px-6 py-3 rounded hover:bg-amber-600"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;

