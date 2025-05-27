

"use client";

import { useState } from 'react';
import { useAddProduct } from '@/hooks/useProducts'; // Assuming this is the correct path

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const { 
    mutate: addProduct, 
    isLoading, 
    isError, 
    error, 
    isSuccess 
  } = useAddProduct();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert('Please enter both name and price.'); // Simple validation
      return;
    }
    try {
      await addProduct({ name, price: parseFloat(price) });
      // If addProduct throws an error, it will be caught by useMutation's error handling
      // and isError will be true. If successful, isSuccess will be true.
      if (!isLoading && !isError) { // Check these to ensure mutation completed
        setName('');
        setPrice('');
      }
    } catch (submissionError) {
      // This catch block might be redundant if useMutation handles all errors
      console.error("Submission error:", submissionError);
      // isError should be set by useMutation in this case
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Add New Product</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-xl rounded-lg">
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Wireless Headphones"
            required
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-8">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="e.g., 99.99"
            required
            step="0.01" // Allows decimal prices
            min="0.01"  // Price must be positive
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {isLoading ? 'Adding Product...' : 'Add Product'}
        </button>

        {isSuccess && (
          <p className="mt-4 text-center text-green-600 bg-green-50 p-3 rounded-md">
            Product added successfully!
          </p>
        )}
        {isError && (
          <p className="mt-4 text-center text-red-600 bg-red-50 p-3 rounded-md">
            Error: {error?.message || 'Failed to add product. Please try again.'}
          </p>
        )}
      </form>
    </div>
  );
}