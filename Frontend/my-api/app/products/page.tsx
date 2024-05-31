


import React from 'react';

export default function Products() {
  const products = [
    { id: 1, image: "/image/tableau1.jpeg", name: "Basic Tee", price: "£24.00 GBP" },
    { id: 2, image: "/image/tableau2.jpeg", name: "Basic Tee", price: "£24.00 GBP" },
    { id: 3, image: "/image/tableau3.jpeg", name: "Basic Tee", price: "£24.00 GBP" },
    { id: 4, image: "/image/tableau4.jpeg", name: "Basic Tee", price: "£24.00 GBP" },
    { id: 5, image: "/image/tableau5.jpeg", name: "Basic Tee", price: "£24.00 GBP" },
    { id: 6, image: "/image/tableau6.jpeg", name: "Basic Tee", price: "£24.00 GBP" },
    { id: 7, image: "/image/tableau7.jpeg", name: "Basic Tee", price: "£24.00 GBP" },
    { id: 8, image: "/image/tableau12.jpeg", name: "Basic Tee", price: "£24.00 GBP" },
    { id: 9, image: "/image/tableau10.jpeg", name: "Basic Tee", price: "£24.00 GBP" },
    { id: 10, image: "/image/tableau13.jpeg", name: "Basic Tee", price: "£24.00 GBP" },
    { id: 11, image: "/image/tableau14.jpeg", name: "Basic Tee", price: "£24.00 GBP" },
    { id: 12, image: "/image/tableau16.jpeg", name: "Basic Tee", price: "£24.00 GBP" },
  ];

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>
          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit natus?
          </p>
        </header>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(product => (
            <li key={product.id}>
              <a href="#" className="group block overflow-hidden">
                <img
                  src={product.image}
                  alt=""
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {product.name}
                  </h3>
                  <p className="mt-2">
                    <span className="sr-only">Regular Price</span>
                    <span className="tracking-wider text-gray-900">{product.price}</span>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}