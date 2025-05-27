"use client";

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

/**
 * Fetches all products from the API.
 */
const fetchProducts = async () => {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  return response.json();
};

/**
 * Custom hook to fetch products.
 * Uses useQuery for data fetching and caching.
 */
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};

/**
 * Sends a new product to the API.
 * @param {object} newProduct - The product to add (e.g., { name, price }).
 */
const addProductMutation = async (newProduct) => {
  const response = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
  });

  if (!response.ok) {
    // Attempt to parse error response body for more details
    const errorData = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(`Failed to add product: ${errorData.message || response.statusText}`);
  }
  return response.json(); // Returns the newly added product
};

/**
 * Custom hook to add a new product.
 * Uses useMutation for creating data and invalidates the 'products' query on success.
 */
export const useAddProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addProductMutation,
    onSuccess: (data) => {
      // When a new product is successfully added, invalidate the 'products' query
      // to trigger a refetch and update the UI.
      queryClient.invalidateQueries({ queryKey: ['products'] });
      // Optionally, you could also update the cache directly using queryClient.setQueryData
      // For example, if the `data` returned is the new product:
      // queryClient.setQueryData(['products'], (oldData) => [...(oldData || []), data]);
    },
    // onError: (error) => {
    //   // Optional: Handle mutation errors, e.g., show a notification
    //   console.error("Error adding product:", error.message);
    // }
  });
};
