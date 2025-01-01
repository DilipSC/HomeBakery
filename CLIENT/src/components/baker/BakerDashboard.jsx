import React, { useState } from 'react';
import BakerNavbar from './BakerNavbar';
import OrderList from './OrderList';
import InventoryManagement from './InventoryManagement';
import QueryList from './QueryList';

function BakerDashboard() {
  const [activeTab, setActiveTab] = useState('orders');

  const tabClass = (tab) =>
    `px-4 py-2 rounded-t-lg transition duration-300 ${
      activeTab === tab
        ? 'bg-amber-500 text-white'
        : 'bg-gray-200 text-gray-700 hover:bg-amber-200'
    }`;

  return (
    <div className="min-h-screen bg-amber-50">
      <BakerNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-amber-800">Baker Dashboard</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('orders')}
              className={tabClass('orders')}
            >
              Orders
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={tabClass('inventory')}
            >
              Inventory
            </button>
            <button
              onClick={() => setActiveTab('queries')}
              className={tabClass('queries')}
            >
              Queries
            </button>
          </div>
          <div className="p-6">
            {activeTab === 'orders' && <OrderList />}
            {activeTab === 'inventory' && <InventoryManagement />}
            {activeTab === 'queries' && <QueryList />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BakerDashboard;

