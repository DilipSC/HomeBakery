import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Cakes', image: 'https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg' },
  { name: 'Cookies', image: 'https://tse1.mm.bing.net/th?id=OIP.DvtMOyIlvS9WIwvBA_EI2AHaHa&pid=Api&P=0&h=180' },
  { name: 'Pastries', image: 'https://tse3.mm.bing.net/th?id=OIP.ploDcPHuMifYSMeASKYWfgHaHV&pid=Api&P=0&h=180' },
  { name: 'Breads', image: 'https://tse4.mm.bing.net/th?id=OIP.BLHGSayvOELuLmQM_d_XxgHaJQ&pid=Api&P=0&h=180' },
];

function ProductCategories() {
  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-amber-800">Our Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} to={`/category/${category.name.toLowerCase()}`} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                <img src={category.image} alt={category.name} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition duration-300 group-hover:bg-opacity-60">
                  <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCategories;

