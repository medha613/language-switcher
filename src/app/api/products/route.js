import { NextResponse } from 'next/server';

// In-memory array to store products
let products = [
  { id: 1, name: 'Wireless Mouse', price: 25.99 },
  { id: 2, name: 'Mechanical Keyboard', price: 79.50 },
  { id: 3, name: 'USB-C Hub', price: 34.00 },
  { id: 4, name: 'Laptop Stand', price: 19.99 },
];

// Counter for generating new product IDs
let nextProductId = products.length + 1;

/**
 * GET handler to retrieve all products.
 */
export async function GET(request) {
  return NextResponse.json(products, { status: 200 });
}

/**
 * POST handler to add a new product.
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, price } = body;

    // Basic validation
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json({ message: 'Product name is required and must be a non-empty string.' }, { status: 400 });
    }
    if (price === undefined || typeof price !== 'number' || price <= 0) {
      return NextResponse.json({ message: 'Product price is required and must be a positive number.' }, { status: 400 });
    }

    const newProduct = {
      id: nextProductId++,
      name: name.trim(),
      price: parseFloat(price.toFixed(2)), // Ensure price is a number with 2 decimal places
    };

    products.push(newProduct);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Failed to create product:', error);
    // Handle cases where request body is not valid JSON
    if (error instanceof SyntaxError) {
      return NextResponse.json({ message: 'Invalid JSON in request body.' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Failed to create product', error: error.message }, { status: 500 });
  }
}
