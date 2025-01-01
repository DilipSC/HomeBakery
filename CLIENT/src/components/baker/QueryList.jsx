import React, { useState } from 'react';

function QueryList() {
  const [queries, setQueries] = useState([
    { id: 1, customer: 'Alice Johnson', message: 'Do you offer gluten-free options?', status: 'Pending' },
    { id: 2, customer: 'Bob Williams', message: 'Can I place a custom cake order?', status: 'Answered' },
  ]);

  const [response, setResponse] = useState('');

  const answerQuery = (id) => {
    setQueries(queries.map(query => 
      query.id === id ? { ...query, status: 'Answered' } : query
    ));
    setResponse('');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Customer Queries</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        {queries.map((query) => (
          <div key={query.id} className="mb-4 p-4 border rounded">
            <h3 className="text-xl font-semibold">Query from {query.customer}</h3>
            <p className="mb-2">{query.message}</p>
            <p className="mb-2">Status: {query.status}</p>
            {query.status === 'Pending' && (
              <div>
                <textarea
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg mb-2"
                  placeholder="Type your response here..."
                  rows="3"
                ></textarea>
                <button
                  onClick={() => answerQuery(query.id)}
                  className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600"
                >
                  Send Response
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QueryList;

