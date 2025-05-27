"use client";

import { useProducts } from '@/hooks/useProducts'; // Ensure this path is correct

export default function ProductsPage() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold text-gray-700">Loading products...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold text-red-600">Error loading products</h1>
        <p className="text-red-500">{error.message}</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-semibold text-gray-700">Our Products</h1>
        <p className="text-gray-500 mt-4">No products found at the moment. Please check back later!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="bg-white p-6 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4 text-sm">
                {/* Placeholder for a short description if available in the future */}
              </p>
            </div>
            <p className="text-2xl font-bold text-indigo-600 mt-auto">
              ${product.price ? product.price.toFixed(2) : 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
