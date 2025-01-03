import React from 'react';

const products = [
  { id: 1, name: 'Chocolate Cake', price: 25, image: 'https://www.theflavorbender.com/wp-content/uploads/2020/05/French-Croissants-SM-2363.jpg', rating: 4.5 },
  { id: 2, name: 'Croissant', price: 3, image: 'https://www.oogio.net/wp-content/uploads/2018/11/American_chocolate_cake6-s.jpg', rating: 4.8 },
  { id: 3, name: 'Strawberry Tart', price: 4, image: 'https://tse2.mm.bing.net/th?id=OIP.2iCvBPT5x9s7gu6PP19mLgHaFj&pid=Api&P=0&h=180', rating: 4.2 },
  { id: 4, name: 'Sourdough Bread', price: 5, image: 'https://tse4.mm.bing.net/th?id=OIP.umX1Ft0Z6jOEaG_PNqxDmwHaH5&pid=Api&P=0&h=180', rating: 4.7 },
];

function FeaturedProducts() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-amber-800">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-amber-900">{product.name}</h3>
                <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-600">{product.rating.toFixed(1)}</span>
                </div>
                <button className="mt-4 w-full bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;

