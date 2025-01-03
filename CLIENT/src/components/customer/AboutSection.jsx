import React from 'react';

function AboutSection() {
  return (
    <section className="py-12 bg-amber-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-amber-800">About Sweet Delights</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <p className="text-lg text-gray-700 mb-4">
              At Sweet Delights, we're passionate about creating the most delicious and beautiful baked goods. Our team of expert bakers uses only the finest ingredients to craft each item with love and care.
            </p>
            <p className="text-lg text-gray-700">
              From traditional favorites to innovative creations, we strive to bring joy to our customers with every bite. Visit us today and experience the magic of Sweet Delights!
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img src="/baker1.jpg" alt="Baker 1" className="rounded-lg shadow-md" />
            <img src="/baker2.jpg" alt="Baker 2" className="rounded-lg shadow-md" />
            <img src="/baker3.jpg" alt="Baker 3" className="rounded-lg shadow-md" />
            <img src="/baker4.jpg" alt="Baker 4" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

