"use client";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function ProductsPage() {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);



  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl text-orange-400 font-bold mb-8 text-center">Our Products</h1>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <p className="text-xl font-bold mt-2">${product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-lg hover:text-orange-400"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
