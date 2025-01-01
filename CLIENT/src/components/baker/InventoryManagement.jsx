import React, { useState } from 'react';

function InventoryManagement() {
  const [items, setItems] = useState([
    { id: 1, name: 'Chocolate Cake', price: 25, stock: 10 },
    { id: 2, name: 'Croissant', price: 3, stock: 20 },
    { id: 3, name: 'Baguette', price: 2, stock: 15 },
  ]);

  const [newItem, setNewItem] = useState({ name: '', price: '', stock: '' });

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, { ...newItem, id: items.length + 1 }]);
    setNewItem({ name: '', price: '', stock: '' });
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Inventory Management</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Add New Item</h3>
        <form onSubmit={addItem} className="mb-6">
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="flex-1 px-3 py-2 border rounded-l-lg"
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              className="w-24 px-3 py-2 border-t border-b"
              required
            />
            <input
              type="number"
              placeholder="Stock"
              value={newItem.stock}
              onChange={(e) => setNewItem({ ...newItem, stock: e.target.value })}
              className="w-24 px-3 py-2 border rounded-r-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600"
          >
            Add Item
          </button>
        </form>
        <h3 className="text-xl font-semibold mb-4">Current Inventory</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Price</th>
              <th className="text-left">Stock</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.stock}</td>
                <td>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryManagement;

