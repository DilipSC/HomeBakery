import React, { useState } from 'react';

function OrderList() {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'John Doe', items: ['Chocolate Cake', 'Croissant'], status: 'Pending', total: 28 },
    { id: 2, customer: 'Jane Smith', items: ['Baguette', 'Cupcakes'], status: 'Completed', total: 15 },
    { id: 3, customer: 'Alice Johnson', items: ['Strawberry Tart', 'Sourdough Bread'], status: 'Pending', total: 9 },
    { id: 4, customer: 'Bob Williams', items: ['Apple Pie', 'Blueberry Muffin'], status: 'Completed', total: 20.5 },
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  const statusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-200 text-yellow-800';
      case 'Completed': return 'bg-green-200 text-green-800';
      case 'Cancelled': return 'bg-red-200 text-red-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-amber-800">Orders</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-4 border border-amber-200">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-amber-900">Order #{order.id}</h3>
              <span className={`px-2 py-1 rounded-full text-sm font-semibold ${statusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
            <p className="text-gray-600">Customer: {order.customer}</p>
            <p className="text-gray-600">Items: {order.items.join(', ')}</p>
            <p className="text-gray-600">Total: ${order.total.toFixed(2)}</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => updateStatus(order.id, 'Completed')}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-300"
              >
                Mark Completed
              </button>
              <button
                onClick={() => updateStatus(order.id, 'Cancelled')}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
              >
                Cancel Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderList;

